# What Comes Next
## The Sarah Nexus Development Roadmap

**Public planning draft · 31 October 2026**

Sarah Nexus is being developed as a portable, AI-assisted computer diagnostics and controlled-repair environment. This roadmap describes our direction and the conditions we want to prove—not a promise that every feature is already available.

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

### How to read status

**Planned** = a design goal. **In development** = work exists but may not be integrated. **Validated** = demonstrated against defined tests and hardware. These terms should accompany future updates. A date or milestone name alone is not a release commitment.

This public roadmap complements a **private technical implementation plan** maintained with the main Sarah Nexus source. Detailed implementation boundaries, sensitive security material and internal operational information are not published here. See the repository's existing release policy for what a real prototype release must demonstrate.

**Planning reference:** What Comes Next / CRE-111. This file is documentation, not a product release, binary, installation guide or certification.
