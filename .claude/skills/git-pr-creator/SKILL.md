---
name: git-pr-creator
description: >-
  Create GitHub PRs using the repo PR template with Linear ticket integration.
  Use when the user asks to create a PR, draft PR text, open a pull request,
  or write a PR description.
---

# Git PR Creator

Create a GitHub Pull Request that follows the repo's PR template and conventions.

## Guardrails

- Never change code to "make the PR look better" unless the user asked
- Never push, create PRs, or modify remotes unless the user asked to actually create the PR (vs "draft the text")
- Never force-push
- Use short, present-tense bullets (≤ 70 chars when possible)
- Describe **what changed** and **why**, not implementation detail

## Workflow

### 1. Determine intent

- **Draft only** — produce a PR title and body for the user to review
- **Create PR** — prepare title/body, then create with `gh pr create`

### 2. Collect repo state

Run these in parallel:

- `git status`
- `git log --oneline --decorate -n 30`
- `git rev-parse --abbrev-ref HEAD`
- Determine base branch: prefer `main`, else `master`, else infer from `git remote show origin`

Then using the resolved base branch:

- `git log --oneline <base>..HEAD`
- `git diff <base>...HEAD`

If there are uncommitted changes, ask the user whether to commit them or proceed with commits only.

### 3. Draft PR title

**With Linear ticket** — If the branch name contains a Linear ticket identifier (e.g., `ENG-123`, `FE-45`):

1. Call the Linear MCP `get_issue` tool with the extracted identifier to fetch the ticket title
2. Format: `TICKET-NUMBER: Ticket Title`
3. Example: `ENG-123: Add OAuth2 login with Google`

**Without Linear ticket** — If no ticket identifier is found in the branch name:

1. Write a concise, descriptive title based on the diff
2. Use present tense ("Add…", "Fix…", "Update…")
3. Summarize the overall outcome, not a single file-level change
4. Example: `Add OAuth2 login with Google`

### 4. Draft PR body

Follow the template at `.github/pull_request_template.md` if it exists. Otherwise use this structure:

```markdown
# Reason for change

- <1–3 bullets explaining why this PR exists>

## Changes made

- <observable behavior changes, not implementation detail>

## How to test

- <step-by-step, copy/paste friendly when possible>

## Screenshots

- <before/after for UI changes, or "N/A">

## Additional notes

- <risks, follow-ups, migrations, or "N/A">
```

Section guidance:

- **Reason for change** — motivation, bug, request, or business context
- **Changes made** — what the user/system will experience differently
- **How to test** — exact pages, flows, feature flags, env vars, or test accounts
- **Screenshots / Additional notes** — never leave blank; write `N/A` if not applicable

### 5. Create the PR (only when asked)

If the branch isn't pushed or has no upstream:

```bash
git push -u origin HEAD
```

Then:

```bash
gh pr create --title "<TITLE>" --body "$(cat <<'EOF'
<BODY>
EOF
)"
```

After creation, return the PR URL and a 1–2 bullet summary of what's included.

## Validate before presenting

- Title follows the correct format (ticket-based or descriptive)
- Body matches the template headings exactly
- Bullets are concise (≤ 70 chars when reasonable)
- "How to test" is actionable, not generic
- Screenshots and Additional notes are filled in or `N/A`
