## Project agent rules

This is the Claude Code project instructions file.

### Workflow gates (do not skip)

- **Prefer explicitness over implicitness**: make intent obvious (directives,
  contracts, naming).
- **Design log gate**: if a change is a new feature, adds a new file, introduces
  data fetching/network I/O, adds React state/effects, touches \(≥ 2\) source
  files, or adds dependencies/config → create a design log first in
  `design-log/` and update `design-log/index.md`.
- **Run checks**: ensure `npm run biome:ci` passes after substantive edits.
  Only run `npm run build` when explicitly requested.

### Where rules live

- Rules are organized under `./.claude/rules/`
- Skills live under `./.claude/skills/`

### Keeping Cursor + Claude rules aligned

- When changing rules, use `./.claude/skills/rules-sync/SKILL.md` to keep the
  `.cursor/rules/` mirror as thin pointers to canonical `/.claude/` rules.

