import assert from 'node:assert/strict';
import test from 'node:test';
import { diagnose, inventory } from '../src/diagnostics.mjs';

const key = 'fixture-key';
const model = 'fixture/model';
const call = { id: 'tool_1', type: 'function', function: { name: 'inspect_cpu_memory', arguments: '{}' } };
const reply = message => Response.json({
  choices: [{ message }],
  usage: { prompt_tokens: 15, completion_tokens: 4 },
});

test('local inventory reads bounded CPU and memory counters', () => {
  const result = inventory();
  assert.deepEqual(Object.keys(result), ['cpu_model', 'available_parallelism', 'memory_total_bytes', 'memory_free_bytes']);
  assert.ok(result.available_parallelism > 0);
  assert.ok(result.memory_total_bytes > 0);
});

test('Nebius tool flow sends one inventory and returns usage from both requests', async () => {
  const bodies = [];
  const result = await diagnose({
    apiKey: key, model,
    transport: async (url, options) => {
      assert.equal(url, 'https://api.tokenfactory.nebius.com/v1/chat/completions');
      assert.equal(options.redirect, 'error');
      assert.equal(options.headers.authorization, 'Bearer ' + key);
      const body = JSON.parse(options.body);
      assert.equal(body.max_tokens, 256);
      bodies.push(body);
      return bodies.length === 1 ? reply({ tool_calls: [call] }) : reply({ content: 'Inventory received.' });
    },
  });
  assert.equal(bodies.length, 2);
  assert.equal(bodies[1].tools, undefined);
  assert.deepEqual(JSON.parse(bodies[1].messages.at(-1).content), result.observations);
  assert.equal(result.summary, 'Inventory received.');
  assert.deepEqual(result.usage, [{ input_tokens: 15, output_tokens: 4 }, { input_tokens: 15, output_tokens: 4 }]);
});

test('unknown, repeated, or parameterized tool calls fail before local collection', async () => {
  const badCalls = [
    [{ ...call, function: { ...call.function, name: 'run_command' } }],
    [call, call],
    [{ ...call, function: { ...call.function, arguments: '{"path":"/etc/passwd"}' } }],
  ];
  for (const tool_calls of badCalls) {
    await assert.rejects(diagnose({
      apiKey: key, model, transport: async () => reply({ tool_calls }),
      collect: () => assert.fail('Unexpected local collection'),
    }), /permitted inventory tool call/);
  }
});

test('provider rejection does not retry or surface provider response bodies', async () => {
  let requests = 0;
  await assert.rejects(diagnose({
    apiKey: key, model,
    transport: async () => { requests++; return new Response('private-response', { status: 429 }); },
  }), { message: 'Nebius returned HTTP 429.' });
  assert.equal(requests, 1);
});
