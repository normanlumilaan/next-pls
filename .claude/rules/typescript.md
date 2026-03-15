# TypeScript rules

## General principles

- **Prefer existing patterns**: scan the codebase first and match conventions.
- **Keep it simple**: apply DRY/KISS; use SOLID only when it clearly helps.
- **Single source of truth**: avoid duplicating derived logic in multiple places.
- **Prefer pure functions** for business logic and transformations when feasible.

## Business vs presentation (hard requirement)

If a change introduces **data fetching**, **state/effects**, or **non-trivial transformations**, split it:

- **Business logic** goes in a hook or util:
  - Hooks: `hooks/useXyz.ts` (React state/effects, async orchestration)
  - Utils: `lib/xyz.ts` or `utils/xyz.ts` (pure functions, parsing, validation)
- **Presentation** goes in a component:
  - `components/**/Xyz.tsx` should ideally be “render-only”: props in, JSX out

### Definition: “business logic” vs “presentation”

- **Business logic**: fetching, caching, retries, parsing/validation, mapping API → ViewModel, state machines
- **Presentation**: layout, semantic HTML, styling, a11y attributes, rendering ViewModel

### Allowed exception (explicit)

You may keep logic + UI together **only** for trivial UI state (e.g. toggling an
accordion) when there is **no** fetching and **no** meaningful data shaping.

## Documentation (JSDoc)

- **Exported functions/tokens** should have JSDoc when the intent/contract isn’t
  obvious from types alone.
- Don’t add narrative comments; use JSDoc to document **why/contract**, not
  implementation steps.

## Exports and naming

- **Export grouping**: keep exports organized by feature/module (avoid “grab bag”
  files). Prefer `index.ts` re-exports per folder when it improves discoverability.
- **Utility function naming**: use the template `verb-namespace-detail`
  (e.g. `fetch-users-list`, `parse-user-response`, `map-user-to-view-model`).

## Minimal acceptable split (example)

- `useTypicodeUsers()` returns `{ data, isLoading, error, reload }`
- `TypicodeUsersCard({ data, ... })` renders UI only
