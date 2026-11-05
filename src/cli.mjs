import { diagnose, inventory } from './diagnostics.mjs';

const args = process.argv.slice(2);
if (args.length === 1 && args[0] === '--local') {
  console.log(JSON.stringify(inventory(), null, 2));
} else if (args.length === 1 && args[0] === '--live') {
  try {
    const result = await diagnose({
      apiKey: process.env.NEBIUS_API_KEY,
      model: process.env.NEBIUS_MODEL,
    });
    console.log(JSON.stringify(result, null, 2));
  } catch {
    console.error('The Nebius run failed. Check local credentials, model tool support, network access, and provider usage before retrying.');
    process.exitCode = 1;
  }
} else {
  console.error('Usage: node src/cli.mjs --local | --live');
  process.exitCode = 2;
}
