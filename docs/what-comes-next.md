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

| # | Workstream | Direction |
|---:|---|---|
| 1 | Preflight & Early Core | UEFI/UKI azonosság, verziózott átadás, boot ID korreláció |
| 2 | Boot Recovery | Hibatörténet utólagos értelmezése; külön jóváhagyott helyreállítási folyamat |
| 3 | Hardware Diagnostics | Célzott olvasó és aktív vizsgáló adapterek, egységes ToolRequest/Result/Evidence |
| 4 | Machine Profile | Hardverazonosság, platformképesség, dokumentált vs tesztelt támogatás |
| 5 | Black Box | Korai+runtime események, append-only sorrend, boot ID, rotáció, titkosítás, Blueprint |
| 6 | Nexus AI Agent | Online modell + kéréshez kötött helyi eszköz; folytatható, ellenőrizhető esetsorozat |
| 7 | Fault Knowledge | Forrásolt hibakártyák és ellenőrzött platformképességek |
| 8 | Adaptive Repair | Javaslat, kockázat/mentés/rollback, pontos jóváhagyás, végrehajtás, visszamérés |
| 9 | Guard Early Trust | Korai védelmi szabályok Preflight/Early Core végrehajtóiban |
| 10 | Guard Runtime & Lockdown | Security Gates, eseménykorreláció, arányos Lockdown, elkülönített jogosultság |
| 11 | Action Cards & Identity | Zöld/sárga/piros célzott műveleti engedély, független kiállítás, licenc és fiókhatárok |
| 12 | Sarah Interface / Smooth Experience | Modern hardverre optimalizált Basic/Pro, gazdag animációk, magas frissítés, natív DPI |
| 13 | Mobile Companion | Opcionális, párosított állapotlekérdezés, csak mérhető korai és runtime események |
| 14 | Windows Integration | Windows megfigyelés, célzott adatgyűjtés, biztonságos helyi műveleti híd |
| 15 | Sarah Universe | Telepítő, frissítő, image- és commitazonosság, USB ellenőrzés és rollback |
| 16 | Cloud & Telemetry | AI szolgáltató, válaszlejátszás-védelem, opcionális R2 napló, költségkeret és consent |
| 17 | Global Ecosystem | Többnyelvűség, támogatás, publikálható kiadási bizonyíték, márka- és megfelelőség |

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
