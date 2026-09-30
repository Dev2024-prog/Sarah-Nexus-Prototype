# Sarah Nexus Prototype

**Sarah Nexus** is the new product under development, separate from the discontinued **Sarah Lite** release line.

This repository is the designated source of future **Sarah Nexus Prototype** releases. No Lite ISO/IMG, binary, manifest or GitHub tag is to be copied here and republished under the Nexus name.

## Release status
**Prototype / development — no Nexus release has been published by this repository transition.** Source code, new functions and production-grade build verification must be implemented and validated before publishing an APK, ISO/IMG, Windows installer or other artifact.

## Intended release route
1. Develop and review new Sarah Nexus features here; keep source commits traceable.
2. Run project-specific CI, security and diagnostic checks, then build the actual Nexus artifacts from the validated commit.
3. Verify checksums, manifest and provenance, including required platform boot validation before distribution.
4. Publish GitHub Releases **in this repository**, using the `sarah-nexus-v<MAJOR>.<MINOR>.<PATCH>-prototype.<N>` prerelease tag format while the product is a prototype.
5. Announce availability only after linked artifacts and download paths have been checked.

Legacy Sarah Lite is frozen; its existing customers must retain access to already-signed Lite release/installation data in the protected R2 paths. Historical releases in `Dev2024-prog/SarahLite-Releases` are preserved as an archive, not forwarded here. Early supporter migration/entitlements need their own explicit, tested backend rules; a repo rename does not silently convert licenses.

See [Nexus release contract](docs/release-policy.md).
