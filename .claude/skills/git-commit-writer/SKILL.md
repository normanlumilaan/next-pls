---
name: git-commit-writer
description: >-
  Generate conventional commit messages by analyzing git diffs. Use when the
  user asks to write a commit message, help with a commit, summarize changes,
  or draft a commit.
---

# Git Commit Message Writer

Generate commit messages in **conventional commits** format.

## Format

```
type(scope): short description

[optional body]

[optional footer]
```

**Types:** feat | fix | docs | style | refactor | test | chore | perf | ci | build

## Workflow

### 1. Get the diff

Run `git diff --staged` to get staged changes.

If nothing is staged, run `git diff HEAD` instead and inform the user that no changes are staged yet.

### 2. Analyze the changes

Determine:

- **Type** — Is this new functionality (`feat`), a bug fix (`fix`), or something else (`docs`, `refactor`, `test`, etc.)?
- **Scope** — Which module, component, or area is affected? Use the most specific meaningful name (e.g., `auth`, `nav`, `api`, not `src` or `app`).
- **Summary** — What is the intent of the change in one imperative sentence?

If changes span multiple unrelated scopes, suggest splitting into separate commits.

### 3. Write the message

Rules:

- Subject line: max 72 characters, imperative mood ("add" not "added"), no trailing period
- Body: add only when the subject alone is insufficient to explain the *why*
- Footer: include `BREAKING CHANGE:` for breaking changes, or issue references like `Closes #123`

### 4. Validate before presenting

Confirm all of these before returning the message:

- Type is one of the allowed types listed above
- Subject line is ≤ 72 characters
- Imperative mood is used
- Scope is specific and meaningful

## Examples

Single-line (simple change):

```
fix(api): handle null response from payment provider
```

```
docs(readme): update local setup instructions for Node 22
```

Multi-line (change needs context):

```
feat(auth): add OAuth2 login with Google

Implement Google OAuth2 flow using the existing session management
system. Users can now sign in with their Google account.

Closes #142
```

Breaking change:

```
refactor(api): replace REST endpoints with GraphQL

BREAKING CHANGE: all /api/v1/* REST endpoints are removed.
Use the /graphql endpoint instead.
```
