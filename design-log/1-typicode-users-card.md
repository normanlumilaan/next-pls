---
title: Typicode users card
date: 2026-03-15
status: implemented
---

## Background

We want a small, visible example of fetching remote data and rendering it in the
home page UI.

## Problem

Add a simple UI component that fetches and displays dummy REST data from
JSONPlaceholder (Typicode) and render it on `pages/HomePage.tsx`.

## Questions and Answers

- **Q**: Which resource and how many items?
  - **A**: `users`, limit 5.
- **Q**: Fetch mode?
  - **A**: Client-side fetch with loading/error UI (static export friendly).

## Design

### UI contract (view state)

The UI renders one of:

- Loading skeleton
- Error message + reload
- List of user cards (name, email, company, website)

### Business vs presentation split

Intended split:

- **Hook**: `useTypicodeUsers()` (fetch + abort + view state)
- **UI**: `TypicodeUsersCard` (render-only)

## Implementation Plan

1. Create design log + index entry.
2. Implement client-side fetch with abort support.
3. Render component in `pages/HomePage.tsx`.
4. Verify `npm run biome:ci` and `npm run build`.

## Examples

✅ Good:

- `useTypicodeUsers()` returns `{ users, isLoading, error, reload }`
- UI component receives plain props and only renders

❌ Bad:

- UI component owns fetch + view state + rendering in one file without a clear
  boundary

## Trade-offs

- Client-side fetch means content isn’t in the static HTML, but it avoids build
  time dependency on the API and works with static export.

## Verification criteria

- Home page shows 5 users after load
- Loading + error states render
- Reload works
- `npm run biome:ci` passes
- `npm run build` passes

## Implementation Results

- Implemented `components/data/TypicodeUsers.tsx` and rendered in
  `pages/HomePage.tsx`.
- Deviation: business + presentation are currently combined in one component.
  This should be split into hook + render component to fully comply with the
  separation rule.

