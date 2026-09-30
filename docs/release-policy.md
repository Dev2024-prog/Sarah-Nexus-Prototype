# Nexus Prototype release contract
_Date: 2026-09-30. Initial routing policy; not a declaration that a build exists._

## Repository and product ownership
- Product: **Sarah Nexus**; prototype channel owner: `Dev2024-prog/Sarah-Nexus-Prototype`.
- Source/build identity and GitHub release assets must come from this repository (or a future explicitly reviewed repository migration).
- Historical `Dev2024-prog/SarahLite-Releases` must not receive new artifacts.
- Avoid `sarah-lite-*` tags, `lite/latest/*` delivery aliases and claims that old Lite binaries constitute Nexus.
- Suggested prototype prerelease tag: `sarah-nexus-v0.1.0-prototype.1` once the corresponding new implementation and validated build actually exist. This is an example, **not an issued release**.

## Release gate (fail closed)
- Require an exact source commit SHA and CI checks passing for that SHA.
- Require working source, version metadata, independently built new artifacts and validation relevant to the artifact type.
- For bootable media: run device/boot pipeline tests and verify firmware/early boot evidence handling before publication.
- For mobile/Windows artifacts: validate application identity, permissions, connectivity/authentication and installation smoke tests.
- Supply checksums and integrity verification for all downloadable assets and sign metadata when appropriate.
- Never publish a placeholder, empty release or a renamed Lite build.
- Keep separate storage/manifests; never overwrite current Lite R2 aliases or delete historical chunks.
- Preserve audit trail with provenance, version, publication date and verification results.
- Plan explicit entitlement migration, including legacy paid **Early Supporter** access, separately from build/distribution changes.

## Retention and compatibility
Existing Sarah Lite versions remain a historical supported-installation concern. Maintain previous public URLs and historical signed R2 manifests for those users until a separate validated migration demonstrates continuity. Archiving a repository and deleting one are different operations; deletion is **not** authorized by this policy.

## Future implementation
Add a real source-aware Nexus build workflow and publication credentials only once Nexus artifacts and CI gates exist. Do not grant a generic release job broad write permissions before that point.
