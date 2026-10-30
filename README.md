# Sarah Nexus — Interactive AI Prototype

**Live demo:** https://sarah-nexus-prototype.kurudavid34.workers.dev

A browser-based demonstration of Sarah Nexus, the conversational PC diagnostics and recovery planning assistant by **Koncepció Labor**.

## Try the prototype

Open the live demo (no account required). Select a scenario (black screen / no POST, Windows repair loop, USB device failures, or BIOS clock reset) or describe your own issue. Sarah will ask diagnostic questions, generate hypotheses, propose safe checks, and verify the results you report.

**Important:** This is a browser-based AI diagnostic *planning* experience. It does not read your computer hardware, execute repair commands, flash firmware, or perform a real hardware scan. Hardware test results are provided by the user, not fabricated by the AI.

## Architecture

- Frontend: responsive static HTML/CSS/JavaScript served by the Worker.
- AI backend: Cloudflare Workers AI using `@cf/meta/llama-3.1-8b-instruct`.
- Server-side AI binding: no API key exposed to the browser.
- Agent workflow: collect symptoms → assess hypotheses → gather evidence → propose actions → verify.
- Safeguards: restricted message sizes and history, read-only advisory behavior, no automatic repairs.
- Degraded behavior: if Workers AI is unavailable or free inference allocation is exhausted, the UI shows an error; it does **not** fake an AI answer.

## Deployment

This repo contains the source deployed as the Cloudflare Worker named `sarah-nexus-prototype`.

1. Create a Cloudflare account (Workers Free is supported; Workers AI free daily inference allocation applies).
2. Deploy with `npx wrangler deploy` after authorizing Wrangler; the `wrangler.json` file defines the Workers AI binding `AI`.
3. Enable your Worker on its `workers.dev` subdomain.
4. Check `/api/health` for `{"ai":true}`, then test `POST /api/chat` with `{"messages":[{"role":"user","content":"My PC doesn't POST"}]}`.

The deployment was initiated from the Cloudflare API on 2026-10-30. The external URL and model response should be smoke-tested from a browser before submission.

## Notes for judges

- No login, payment, or API key required.
- Internet connection required for the AI.
- Free quota and platform rate limits may restrict usage.
- No actual computer modifications are performed.

Project: https://koncepciolabor.com

Developed by K-Lab / Koncepció Labor.
