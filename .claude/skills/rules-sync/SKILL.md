---
name: rules-sync
description: Keeps Cursor rules (.cursor/rules/*.mdc) in sync with canonical Claude rules (.claude/CLAUDE.md and .claude/rules/*.md). Use when adding/updating/removing any rule, or when the user mentions syncing rules, Cursor rules, Claude rules, .cursor/rules, or .claude/rules.
---

# Rules Sync (canonical `.claude/` → Cursor mirror)

## Goal

Maintain **one source of truth** in `/.claude/` and keep a **thin mirror** in
`/.cursor/rules/` that:

- enforces the same core gates in Cursor
- **points** to canonical files instead of duplicating long content

## Canonical sources

- `/.claude/CLAUDE.md`
- `/.claude/rules/*.md`
- `/.claude/skills/*`

## Mirror target

- `/.cursor/rules/*.mdc`

The Cursor mirror should be short and stable.

## Workflow

### 1) Decide what changed

When a rule change happens, classify it:

- **Core gate changed** (design log gate, architecture gate, docs gate)
- **Scope changed** (new rule, deleted rule, renamed rule)
- **Details changed** (wording/examples that don’t affect the gate)

### 2) Update the Cursor mirror minimally

Rules of thumb:

- Prefer **pointers** over copying:
  - Include `Canonical:` lines pointing to the relevant `/.claude/...` file(s).
- Only duplicate the **smallest enforceable summary** in Cursor:
  - one short “Non-negotiables” list
  - high-signal triggers (like the design log gate)

### 3) Keep the mirror set small

Default set (adjust only if needed):

- `.cursor/rules/00-core.mdc` (alwaysApply: true)
- `.cursor/rules/05-design-log.mdc` (alwaysApply: true)
- `.cursor/rules/10-architecture.mdc` (globs: `**/*.{ts,tsx}`)
- `.cursor/rules/20-jsdoc.mdc` (globs: `**/*.{ts,tsx}`)

Avoid creating many mirrors unless a rule truly needs file-glob gating.

### 4) Prevent drift

After updates:

- Ensure every `.cursor/rules/*.mdc` contains a pointer to the canonical file(s).
- Ensure canonical file paths referenced in the mirror actually exist.
- Ensure you did not create two conflicting sources of truth.

### 5) Verification

Run:

- `npm run biome:ci`
 
Only run `npm run build` when explicitly requested.

