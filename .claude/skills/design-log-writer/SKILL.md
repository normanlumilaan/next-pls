---
name: design-log-writer
description: Writes and updates design logs under ./design-log/ and maintains design-log/index.md. Use when a change is a new feature, adds a new file, introduces data fetching, adds React state/effects, touches 2+ files, or otherwise requires a design log.
---

# Design Log Writer

## Goal

Create a concise, verifiable design log **before implementation**, and keep it
updated during/after implementation.

## Hard gates (when to use)

Use this workflow **before writing implementation code** if _any_ is true:

- New user-visible feature (including “simple demo” features)
- Adds a new file (component/hook/util/module)
- Adds data fetching / network I/O (`fetch`, clients, server actions, GraphQL)
- Adds React state/effects (`useState`, `useEffect`, `useReducer`) or async flows
- Touches \(≥ 2\) source files to complete the task
- Adds/updates dependencies or config

If uncertain, assume a design log is required.

## Bootstrap (if missing)

If missing, create these first:

- `design-log/index.md`
- `design-log/_template.md`

## Workflow

### 1) Check existing logs

- Open `design-log/index.md` and look for related entries.
- If this work continues/refines an in-progress log, **append** to that log
  instead of creating a new one.

### 2) Create a new log (when needed)

- Choose the next available number `NN`.
- Create `design-log/NN-short-kebab-title.md`.
- Add a brief index entry to `design-log/index.md` under the best category.

### 3) Write the log (keep it brief)

Use this structure (copy from `design-log/_template.md`):

- Background
- Problem
- Questions and Answers (keep Qs, add As)
- Design
- Implementation Plan (phases/steps)
- Examples (✅/❌)
- Trade-offs
- Verification criteria

Include **specifics** when relevant:

- File paths you expect to touch/create
- Type signatures (inputs/outputs)
- View state(s): loading / error / success

### 4) Approval gate

After writing the design log, **pause and ask for approval** before
implementation.

### 5) Implementation results (append-only)

Once implementation starts:

- Do not rewrite the initial sections.
- Append an **Implementation Results** section:
  - What shipped
  - Test/lint/build results
  - Deviations (and why)

## Minimal example (business logic + UI)

- Business logic lives in `lib/<namespace>/*` (pure/testable when possible)
- Hook orchestrates business logic for React reusability:
  - `useXyz()` → `{ data, isLoading, error, reload }`
- UI is render-only: `XyzCard({ data, ... })`

See `/.claude/rules/10-architecture.md` for the 3-layer rule.
