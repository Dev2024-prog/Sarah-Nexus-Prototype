# Sarah Nexus — Release & Quality Policy

**Updated: 31 October 2026**

## Our commitment to quality

Sarah Nexus is being developed as a portable computer diagnostics and assistance system. We want every published release to have a clear identity, documented capabilities, appropriate checks, and an honest account of its limitations.

This policy describes the requirements for future releases; it does **not** announce a release or claim that the complete system is already validated.

## How we verify releases

Before making an official build available, we require evidence that:

- The package comes from an identifiable source revision and has a clear version.
- The downloaded files can be checked for integrity.
- The included features have passed relevant tests.
- Installation and startup have been assessed on the intended platforms.
- Known limitations and the scope of testing are explained.

Automated checks, emulator results, file-based tests and physical hardware tests are different kinds of evidence. We do not describe an emulator-only result as proof of a fully tested physical USB system.

A release is withheld when its required verification has not been completed. We do not publish placeholders or rebrand historical Sarah Lite binaries as new Nexus builds.

## Sarah Nexus and Sarah Universe

**Sarah Nexus** is the diagnostic environment intended to run from compatible bootable media. **Sarah Universe** is the Windows companion application that prepares USB media and manages supported application updates.

Their versions and verification records must be traceable. Updating the Windows Universe application does not automatically update an existing Nexus USB drive.

## Relationship with Sarah Lite

Sarah Lite is the earlier generation of the Sarah project. Existing Lite releases and user access are handled separately from the Nexus release process.

We aim to preserve access to legitimate historical releases while treating any migration to Nexus as a separately verified change. No previous Lite package should be presented as a newly built Nexus prototype.

## Current availability

**As of 31 October 2026, this public repository does not contain an independently runnable Sarah Nexus prototype.** It contains project documentation and the criteria a future prototype must meet. Please see the [repository README](../README.md) for the current status.

When a verified release becomes available, its version, supported functionality, installation instructions, integrity information and known limitations should be published alongside it.

## Further information

See [What Comes Next](what-comes-next.md) for the development roadmap.

For more information about Sarah Nexus and Koncepció Labor, visit [koncepciolabor.com](https://koncepciolabor.com/).
