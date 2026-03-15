---
name: git-pr-creator
description: Creates GitHub pull requests using the repo PR template. Use when the user asks to create/open a PR, draft a PR description, or generate a PR title/body from git changes.
---

# Git PR Creator

## Goal

Create a high-quality GitHub Pull Request that matches the repository’s PR template and style preferences.

## Inputs (derive automatically)

- Current branch name and whether it tracks a remote
- Base branch (`main` preferred, else `master`, else repo default)
- Commit range since divergence from base
- Full diff since divergence from base
- Existing PR template at `.github/pull_request_template.md`

## Guardrails

- Do not change code to “make the PR look better” unless the user asked.
- Do not push, create PRs, or modify remotes unless the user asked to actually create the PR (vs “draft the text”).
- Never force-push.
- Use short, present-tense bullets; keep bullets ≤ 70 chars when possible.
- Prefer describing **what changed** and **why**, not implementation detail.

## Workflow

### 1) Determine intent: draft text vs create PR

If the user asks for PR copy only:
- Produce a PR **title** and **body** using the template format below.

If the user asks to create/open the PR:
- Prepare title/body, then create the PR with `gh pr create`.

### 2) Collect repo state (must do before writing)

Run these commands:

- `git status`
- `git log --oneline --decorate -n 30`
- `git rev-parse --abbrev-ref HEAD`
- Determine base branch:
  - Prefer `main`; else `master`; else infer from `git remote show origin`
- `git log --oneline <base>..HEAD`
- `git diff <base>...HEAD`

If there are uncommitted changes:
- Ask the user whether to include them (commit) or leave them out.
- If the user wants to proceed anyway, clearly state PR reflects commits only.

### 3) Draft PR title

Pick a title that:
- Is concise and descriptive
- Matches the repo’s conventions if present
- Uses present tense (“Add…”, “Fix…”, “Update…”)

If the branch includes multiple commits, prefer a title that summarizes the
overall outcome rather than a single file-level change.

### 4) Draft PR body (MUST match `.github/pull_request_template.md`)

Use this exact structure:

```markdown
# Reason for change

<1–3 short bullets. Explain why this PR exists.>

## Changes made

- <bullet>
- <bullet>

## How to test

- <step-by-step, copy/paste friendly when possible>

## Screenshots

- <If UI change: before/after or "N/A">

## Additional notes

- <Risks, follow-ups, rollout notes, migrations, etc., or "N/A">
```

Guidance per section:

- **Reason for change**:
  - Explain motivation, bug, request, or context.
- **Changes made**:
  - Describe observable behavior changes.
  - Avoid deep implementation details.
- **How to test**:
  - Include exact pages/flows.
  - Mention any feature flags, env vars, or test accounts if relevant.
- **Screenshots**:
  - If not applicable, write `N/A` (don’t leave blank).
- **Additional notes**:
  - Mention known limitations, follow-ups, or risky areas.

### 5) Create the PR (only when asked)

If branch isn’t pushed or upstream isn’t set:
- `git push -u origin HEAD`

Then create PR:

```bash
gh pr create --title "<TITLE>" --body "$(cat <<'EOF'
<BODY>
EOF
)"
```

After creation:
- Return the PR URL
- Summarize: 1–2 bullets of what’s included

## Quality checklist (before final output)

- Title is present tense and outcome-focused
- Body matches template headings exactly
- Bullets are concise (≤ 70 chars when reasonable)
- “How to test” is actionable (not generic)
- Screenshots and Additional notes are not blank
