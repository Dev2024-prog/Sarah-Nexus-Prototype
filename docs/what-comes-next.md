# What Comes Next
## The Sarah Nexus Development Roadmap

**Public planning draft · 31 October 2026**

Sarah Nexus is being developed as a portable, AI-assisted computer diagnostics and controlled-repair environment. This roadmap describes our direction and the conditions we want to prove—not a promise that every feature is already available.

### Before Nexus: the story of Sarah Lite

Sarah Nexus is the next stage of a project with a history. Its predecessor, **Sarah Lite**, was created to make computer problems easier to investigate when ordinary troubleshooting was confusing, time-consuming, or unavailable from the installed operating system. The guiding idea was simple: give people a dedicated environment in which they could learn more about their machine and gather useful diagnostic information.

Sarah Lite developed into a portable, USB-started diagnostics environment. Rather than depending entirely on a potentially damaged Windows installation, its separate environment could help users inspect a computer's hardware and operating-system condition. The project explored information about the processor, memory, storage devices, networking and connected peripherals, as well as basic diagnostic checks and reports. Its approach was based on recognizable tools and guided screens: users would choose a category or check, inspect the results, and decide what to do next.

That foundation mattered. A portable diagnostic environment made it possible to approach problems from outside the system being investigated. It also established the importance of keeping observations and reports available for later review. However, Sarah Lite was not a universal repair solution. The usefulness of a test depended on the machine, the available hardware interfaces, and what the environment could safely observe. A report could support a diagnosis without proving that every component was healthy or that an identified symptom had a single cause.

Over time, the project encountered a larger challenge: **collecting information and understanding what to do with it are different tasks**. Traditional diagnostic screens may expose useful facts, but users still have to connect symptoms, judge their relevance and choose the next step. Adding more tests or pages alone does not solve that problem. The next generation therefore needed a different way of guiding investigations, not simply a larger menu.

### What changed with Sarah Nexus

Nexus carries forward the purpose of Sarah Lite while changing the interaction model. Its direction is to combine targeted local diagnostic evidence with an **online AI agent** that can help organize a multi-step investigation, ask for the right information and explain the findings. A limited set of rule-based local checks is also part of the intended offline experience. This does not turn offline checks into an offline language model.

The redesign also puts more emphasis on how conclusions are reached and how actions are controlled. Nexus plans to distinguish observed facts from suggestions, preserve relevant history, verify outcomes and require clear approval before sensitive changes. The unified **Nexus Guard** direction brings startup trust and runtime protection under a consistent security concept. The graphical experience is also being rethought for modern hardware, rather than simply carrying the earlier interface forward.

**Sarah Nexus is an evolution, not a renamed copy of Sarah Lite.** Useful knowledge and selected capabilities from the earlier system inform the new one, but the architecture, agent interaction, security design and release validation must stand on their own.

### Sarah Lite's place in the project today

Sarah Lite is the earlier generation of the Sarah project. Its legacy release line is distinct from the new Nexus development and its public prototype channel. Existing Lite users and historical downloads are handled separately from any future Nexus prototype release; older software should never be relabeled as a new Nexus build.

This history describes product goals and publicly understandable capabilities. It is intentionally **not a source-code guide, build recipe, boot-media specification or a complete description of Sarah Lite's internal components**. It also does not imply that every planned Nexus feature has already been completed or validated.

### Verified functionality snapshot — 31 October 2026

This dated snapshot includes **only functionality supported by documented implementation or executed tests**. Results are deliberately tied to their test environments; they are not claims that a complete Nexus release is available.

| Demonstrated capability | Verified scope |
| --- | --- |
| Basic graphical startup | Demonstrated in an emulator using software rendering |
| A local CPU diagnostic check | Exercised in an emulated Basic environment |
| Saving a diagnostic result | Exercised against the environment's own diagnostic storage in an emulator |
| Universe package import and integrity checks | Tested using ordinary files |
| USB writer readback/verification logic | Tested using ordinary files, **not** a physical USB drive |

These test outcomes are recorded in the private product repository's Universe documentation. **They do not establish that a bootable public prototype has been released.** As this repository's own README states, it currently has no independently runnable prototype implementation. The snapshot records what was demonstrated in the wider Sarah Nexus project, not what can be installed from this public repository.

### Our direction

1. **Hybrid intelligence:** an online AI agent helps investigate problems and coordinate permitted diagnostic tools. A limited set of rule-based local checks, device history and on-device evidence recording are planned to work without an internet connection. This does not mean the cloud AI model itself runs offline.
2. **Nexus Guard:** one security architecture spanning early boot checks and runtime protection. The early boot components keep their own responsibilities; no claim is made that Sarah runs before firmware has handed over control.
3. **Smooth Experience:** a polished interface prioritizing modern hardware, fluid animations and high-refresh displays. Older machines may receive a more limited visual experience while essential diagnostics and safety messages remain accessible.
4. **Evidence-driven repair:** repair proposals are distinct from observation and require the appropriate authorization and post-action verification.

### Five development areas

| Area | What it covers |
| --- | --- |
| **Nexus Core** | Trusted startup, boot evidence, device diagnostics and machine profile |
| **Nexus Intelligence** | Online AI agent, fault knowledge and carefully controlled repair recommendations |
| **Nexus Guard** | Early trust checks, runtime security policies, permissions and protective responses |
| **Nexus Experience** | Sarah Basic/Pro experience, fluid graphics, Windows and mobile integration |
| **Nexus Platform** | Sarah Universe, update delivery, optional cloud services and global readiness |

### The 17 workstreams

These are planned directions, not completed or independently released features.

| # | Workstream | Direction |
|---:|---|---|
| 1 | Preflight & Early Core | Verified startup and evidence handoff |
| 2 | Boot Recovery | Safe handling of boot failures and later approved recovery |
| 3 | Hardware Diagnostics | Targeted hardware tests and evidence |
| 4 | Machine Profile | Device profile and supported capability tracking |
| 5 | Black Box | Secure local event history and audit trail |
| 6 | Nexus AI Agent | Online AI-guided diagnosis using authorized tools |
| 7 | Fault Knowledge | Reviewed, source-backed troubleshooting knowledge |
| 8 | Adaptive Repair | Risk-aware, owner-approved repair and verification |
| 9 | Guard Early Trust | Early-stage startup trust checks |
| 10 | Guard Runtime & Lockdown | Runtime monitoring and proportionate protection |
| 11 | Action Cards & Identity | Scoped permissions and identity controls |
| 12 | Sarah Interface / Smooth Experience | High-refresh modern Basic and Pro visual experience |
| 13 | Mobile Companion | Optional securely paired mobile experience |
| 14 | Windows Integration | Optional Windows companion integration |
| 15 | Sarah Universe | Trustworthy installer, updates and USB delivery |
| 16 | Cloud & Telemetry | Reliable online agent and privacy-conscious diagnostics |
| 17 | Global Ecosystem | Localization, product support and global readiness |

### Development milestones

| Milestone | Outcome we want to demonstrate |
|---|---|
| **M0 — Verified inventory** | The exact source and the difference between existing, proposed and tested features are clear. |
| **M1 — Trusted foundation** | Boot and early evidence are handled consistently; blocked startup fails safely. |
| **M2 — Diagnostic intelligence** | A real agent-assisted diagnosis with verifiable local results; bounded offline checks. |
| **M3 — Controlled repair** | Specific authorization, clear risk disclosure, post-action verification. |
| **M4 — Smooth Connected Basic** | Responsive interface, credible update/USB delivery and real connectivity tests. |
| **M5 — Pro & companions** | Expanded capabilities and optional Windows/mobile experience. |
| **M6 — Global readiness** | International accessibility, support and publication backed by validation. |

### Quality and safety promises

- **Don't mistake a plan for a shipped feature.** Open development branches or passing isolated tests do not by themselves prove a working USB product.
- **Protect the machine.** Sensitive changes must have narrowly defined permissions; a boot failure must not silently initiate a repair.
- **Keep evidence honest.** Missing measurements cannot be invented and offline results cannot be presented as cloud AI conclusions.
- **Measure the UI.** Fluid animations, pointer responsiveness, display scaling and stability must be checked on actual devices before making performance guarantees.
- **Respect privacy.** Diagnostic data and optional cloud services require explicit scope and appropriate protections.

### Where Sarah Nexus stands today

Sarah Nexus has an established private development codebase, documented startup and security architecture, local diagnostic foundations, and ongoing work on its AI agent and graphical interface. Some changes are still in development branches; successful individual tests do not mean the complete USB system has passed physical end-to-end validation.

The public **Sarah-Nexus-Prototype** repository currently contains project documentation and release requirements, **not an independently runnable prototype package**. Its README explicitly records that limitation. This roadmap must not be mistaken for a download or installation release.

### How Sarah Universe fits in

**Sarah Universe** is the Windows companion application used to prepare a bootable Nexus USB and manage supported Windows application updates. **Sarah Nexus** is the separate diagnostic environment intended to start from that USB.

The previously documented Universe Basic package describes the following preparation flow:

1. Obtain the complete, verified Windows package from an authorized release source and extract it on a compatible Windows PC.
2. Start Sarah Universe and choose its USB creation workflow.
3. Let the application verify and prepare the packaged system image.
4. Carefully identify the target USB drive and confirm the erase warning. Creating the drive removes its previous contents.
5. Write and verify the USB image, then boot a target PC from USB and test Nexus separately.

These are **documented steps for a historical Basic packaging workflow**, not proof that a current downloadable public prototype or a fully validated image is available here. An application update is also different from updating an existing bootable USB.

### What still needs verification

Reliable end-to-end boot, compatible hardware, display and input responsiveness, USB networking, real online agent responses and controlled repair procedures require release-specific checks. The full validated installation guide will accompany a release that passes those checks, rather than being inferred from this roadmap.

### Understanding progress

**Planned** describes a goal. **In development** means work exists but may not yet be integrated. **Validated** requires evidence from the relevant tests and devices. Milestones describe the intended development sequence, not guaranteed release dates.

For the criteria that a future independently runnable prototype must satisfy, see [the prototype release policy](release-policy.md). More detailed implementation planning is maintained separately from this public roadmap.
