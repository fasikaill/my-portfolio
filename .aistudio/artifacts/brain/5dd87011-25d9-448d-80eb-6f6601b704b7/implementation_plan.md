# Fasika Solomon — Personal Developer Portfolio

A restrained, editorial, and technically rigorous portfolio for **Fasika Solomon**, 5th-year Electrical and Computer Engineering student (Computer Stream) at Addis Ababa University. The portfolio emphasizes practical full-stack and backend systems engineering across 3 verified GitHub repositories without AI clichés, inflated metrics, or generic templates.

## User Review & Critical Decisions

> [!IMPORTANT]
> The following user preferences were confirmed via interactive consultation and govern the design system and interactions:

- **Confirmed Palette**: Deep Forest Green (`#1B4332` / `#2D6A4F`) with warm stone neutral canvas (`#F9F9F6` / `#F4F4EE`), charcoal primary prose (`#1C1917`), and quiet hairline borders (`#E5E5DF`).
- **Confirmed Case Study Presentation**: Rich editorial project cards paired with an interactive expandable modal that renders full system architecture diagrams, data flow breakdowns, and personal contribution highlights.
- **Confirmed Contact Workflow**: Direct mailto integration paired with a one-click clipboard copy utility for the clearly defined, centralized `CONTACT_EMAIL` configuration variable.

---

## 1. Overview & Core Concept

- **What It Does**: Presents Fasika Solomon's genuine engineering profile, showcasing full-stack and systems projects built with Next.js, React, Node.js, Express, FastAPI, PostgreSQL, Prisma, Redis, Docker, and WebSockets.
- **Target Audience**: Technical recruiters, engineering hiring managers, professors, and peer developers evaluating technical depth for software engineering internships and junior roles.
- **Key Value**: Deliberate, human-crafted editorial design that speaks directly to technical competence—clear domain models, verified code contributions, and architecture awareness rather than SaaS marketing hype.

---

## 2. User Experience & Visual Design

### Key User Flows
1. **Header & Hero Landing**: Sticky 3-zone top bar with wordmark, anchor links, and quick GitHub link. Left-aligned editorial hero with academic positioning and right-hand technical indicator panel (5th Year Computer Engineering AAU status, focus areas, and verified tools).
2. **Featured Projects & Deep Dives**:
   - **Project 01 (Dinkenesh Event Management System)**: Large featured case study highlighting the Super Admin and Organization Banning/Moderation flow with unit and integration tests.
   - **Project 02 (Event Management System)**: Modular domain architecture in Next.js, Redis, WebSockets, Better Auth, and Chapa payments.
   - **Project 03 (Centralized Crime Management System - CCMS)**: Next.js + FastAPI + PostgreSQL + Redis architecture handling case files, evidence, officers, and legal workflows.
   - *Interaction*: Clicking any project card opens an in-depth architecture modal detailing data flow, system boundaries, and Fasika's exact contribution.
3. **About & Academic Profile**: Grounded first-person statement on engineering principles alongside relevant coursework at Addis Ababa University College of Technology and Built Environment.
4. **Technical Toolkit**: Strict categorized typography-based presentation (Languages, Frontend, Backend, Databases & Data, Tools & Engineering, Integrations) with no circular percentage bars or fake proficiency rankings.
5. **Engineering Approach**: 3-step philosophy (*Understand the problem*, *Build the system*, *Verify the important flows*).
6. **Currently & Contact**: Current focus in 5th year, followed by an actionable contact section with a verified GitHub button and one-click copyable email.

### Visual Identity & Theme
- **Canvas & Tone**: Warm stone neutral (`#F9F9F6`), structural card surfaces in crisp light ivory (`#FFFFFF` with `#E7E6E0` hairline borders), text in deep charcoal (`#1C1917`), and muted metadata (`#71717A`).
- **Accent**: Deep Forest Green (`#1E3A2F` / `#2D5A46`) applied strictly at interactive anchors and state changes.
- **Zero-Pill Discipline**: Metadata displayed as unboxed text separated by typographic interpuncts (`·`); interactive filter tabs styled as clean segmented controls without candy badges.
- **Typography**: Clean contemporary typography using high-legibility sans-serif paired with tabular monospace numerals for technical identifiers.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: React 19 + Vite Architecture with Modular Data Extraction**
  - *Chosen Approach*: Build a clean, type-safe single-page application with data models isolated in `src/data/projects.ts` and `src/data/skills.ts`, and contact settings in `src/config.ts`.
  - *Why*: Allows instant preview, zero runtime latency, seamless smooth scrolling, and simple future edits for Fasika without diving into markup.
  - *Alternatives Considered*: Next.js App Router (workspace is already pre-configured as a high-performance React 19 + Vite applet with Motion and Tailwind v4).
- **Decision 2: Interactive Architectural Modal vs External Links Only**
  - *Chosen Approach*: Render an accessible dialog (`dialog` or keyboard-trapped modal with ESC close and backdrop blur) showing detailed ASCII system diagrams and module responsibilities.
  - *Why*: Enables recruiters to evaluate system design depth directly on the site while keeping external GitHub repository links as primary source-of-truth proofs.
- **Decision 3: Configurable Email Architecture**
  - *Chosen Approach*: Isolate `CONTACT_EMAIL` in `src/config.ts` with direct `mailto:` handler and toast-notified clipboard copy button.
  - *Why*: Prevents hallucinating an unverified email address while giving the user an effortless single-line config to plug in their address.

---

## 4. Technical Architecture & Data Strategy

### Architecture & Component Diagram

```
┌───────────────────────────────────────────────────────────────┐
│                          App.tsx                              │
│ ┌───────────────────────────────────────────────────────────┐ │
│ │ Navbar (3-zone: Brand | Section Nav Links | GitHub CTA)   │ │
│ └───────────────────────────────────────────────────────────┘ │
│ ┌───────────────────────────────────────────────────────────┐ │
│ │ HeroSection (Editorial text + Right Technical AAU Panel)  │ │
│ └───────────────────────────────────────────────────────────┘ │
│ ┌───────────────────────────────────────────────────────────┐ │
│ │ ProjectsSection (ProjectCardFeatured + ProjectCardGrid)   │ │
│ └───────────────────────────────────────────────────────────┘ │
│ ┌───────────────────────────────────────────────────────────┐ │
│ │ AboutSection (Academic background + AAU Coursework)       │ │
│ └───────────────────────────────────────────────────────────┘ │
│ ┌───────────────────────────────────────────────────────────┐ │
│ │ SkillsSection (6 Categorized skill groups, zero pills)    │ │
│ └───────────────────────────────────────────────────────────┘ │
│ ┌───────────────────────────────────────────────────────────┐ │
│ │ EngineeringApproachSection (Understand · Build · Verify)  │ │
│ └───────────────────────────────────────────────────────────┘ │
│ ┌───────────────────────────────────────────────────────────┐ │
│ │ CurrentlySection (5th Year focus at AAU)                  │ │
│ └───────────────────────────────────────────────────────────┘ │
│ ┌───────────────────────────────────────────────────────────┐ │
│ │ ContactSection (GitHub link + Copyable CONTACT_EMAIL)     │ │
│ └───────────────────────────────────────────────────────────┘ │
│ ┌───────────────────────────────────────────────────────────┐ │
│ │ Footer (2026 · Fasika Solomon · AAU ECE Computer Stream)  │ │
│ └───────────────────────────────────────────────────────────┘ │
│ ┌───────────────────────────────────────────────────────────┐ │
│ │ ProjectModal (Architecture breakdown, data flow, & tests) │ │
│ └───────────────────────────────────────────────────────────┘ │
└───────────────────────────────────────────────────────────────┘
```

### Data Model & State
- **`src/config.ts`**: Single source of truth for name, institution, graduation year, GitHub URL, and `CONTACT_EMAIL = "replace-with-your-email@example.com"`.
- **`src/data/projects.ts`**: Complete models for Dinkenesh Event Management System, Event Management System, and Centralized Crime Management System (CCMS), including technical domains, personal contributions, test coverage details, and ASCII architecture schemas.
- **`src/data/skills.ts`**: Categorized lists for Languages, Frontend, Backend, Databases & Data, Tools & Engineering, and Integrations.
- **Client State**:
  - `activeSection`: Smooth-scroll observer tracking the active viewport section.
  - `selectedProject`: Nullable project identifier driving the architecture deep-dive modal.
  - `copiedEmail`: Boolean state with auto-resetting feedback indicator for email clipboard copy.
