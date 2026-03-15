# Design log gate

Create a design log **before writing any implementation code** if any of the
following is true:

- New feature (user-visible capability, including “simple demo” features)
- New file (component/hook/util/module)
- Data fetching or any network I/O
- React state/effects or async flows
- Touches \(≥ 2\) source files to complete the task
- Adds/updates dependencies or config

If uncertain, treat it as “design log required”.

## Bootstrap

If missing, create:

- `design-log/index.md`
- `design-log/_template.md`

## Procedure

Follow: `.claude/skills/design-log-writer/SKILL.md`

