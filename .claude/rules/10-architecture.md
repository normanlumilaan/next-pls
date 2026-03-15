# Architecture: business vs presentation

## Hard requirement

**Business logic and presentation must be separated.**

Business logic includes (non-exhaustive): fetching, parsing/validation,
filtering/sorting, mapping, and domain rules that are unit-testable without
rendering.

## Required 3-layer pattern (always)

1. **`lib/<namespace>/` (raw business logic)**
   - All business utilities live here (pure when possible)
   - Must be testable in isolation
   - Examples:
     - `lib/typicode/fetchTypicodeUsers.ts`
     - `lib/typicode/filterTypicodeUsersBy.ts`
     - `lib/typicode/types.ts`

2. **`hooks/` (React orchestration)**
   - Coordinates `lib/*` with React state/effects
   - Returns a view-state contract: `{ data, isLoading, error, reload }`

3. **UI components (glue + rendering)**
   - Use hooks and render loading/error/success (skeletons, empty states, etc.)
   - Keep render-only subcomponents when it improves clarity/reuse

## Allowed exception

You may keep logic + UI together **only** for trivial UI-only state (e.g.
accordion open/close) when there is **no** business logic involved.

