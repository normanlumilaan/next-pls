---
paths:
  - "**/*.{ts,tsx}"
---

# JSDoc requirements

## Scope

Applies to **exported**:

- functions (including hooks)
- components
- types that are part of the public module API

## Requirement: document parameters

For exported functions/components, JSDoc must include:

- **One-line purpose** (why it exists)
- **`@param` for each parameter** (including props for components)
- **`@returns`** (or state “returns void”)
- Any **non-obvious constraints** (e.g. `"use client"` requirement)

TypeScript types are helpful, but **do not replace** describing meaning/intent.

## Allowed shortcuts

- For React components: you may document props via a `Props` type, **but** each
  field must have a short doc comment *or* the component JSDoc must include
  `@param` entries that explain each prop.

