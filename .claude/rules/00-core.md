# Core workflow gates (do not skip)

## Global principle

- **Prefer explicitness over implicitness**: mark intent clearly (e.g. add
  `"use client"` to stateful hooks/components reachable from `app/`, avoid
  “magic” conventions, keep contracts explicit).

## Before writing implementation code

- **Rules**: identify which scoped rules apply (by file type + task type) and
  follow them.
- **Design log**: if the design-log gate triggers, stop and create/approve the
  design log first.

## While implementing

- **Follow the 3-layer architecture** for any business logic:
  - `lib/<namespace>/` pure/testable domain utilities
  - `hooks/` React orchestration around `lib/*`
  - UI components render view state (loading/error/success)
- **Documentation**: exported components/hooks/functions must be fully
  documented per the JSDoc rules.

