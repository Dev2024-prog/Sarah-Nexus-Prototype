# Sarah Nexus — Nebius Prototype

This repository contains a runnable, read-only CPU and memory diagnostic prototype. It runs as a local command-line program on Node.js 24 and uses Nebius Token Factory for optional AI summaries.

## Run locally

```sh
node src/cli.mjs --local
node --test
```

Local mode reads CPU model, available parallelism, and total and free memory. It makes no network requests. These counters describe inventory and current availability. Hardware health and stability require separate tests.

## Run with Nebius

Set `NEBIUS_API_KEY` to your own Token Factory key in your local environment. Set `NEBIUS_MODEL` to a model ID that supports function calling in your project. Keep credentials outside the repository. Then run:

```sh
node src/cli.mjs --live
```

Live mode sends the fixed diagnostic request and, if the model selects the permitted tool, sends the four inventory fields to Nebius in a second request. It makes at most two billable model requests, caps each at 256 output tokens and has no automatic retry. The response includes the local observations, model summary and reported usage per request. See the [Nebius API reference](https://api.tokenfactory.nebius.com/docs) for current API details.

The prototype runs as a local process and uses the caller's own project. Its only diagnostic tool reads the listed inventory fields and takes no arguments. Local execution and the Nebius round trip with simulated responses are covered by tests. A live Nebius run for this revision and a bootable USB release are pending.

## Release requirements

See [`docs/release-policy.md`](docs/release-policy.md) for source identity, verification, build and publication requirements. The policy covers verified release packages. This repository currently distributes prototype source.

## Deployment notice

Removing source and deployment configuration from GitHub **does not automatically undeploy** any previously published Cloudflare Worker. The old Worker must be disabled or deleted separately in Cloudflare to prevent public access.
