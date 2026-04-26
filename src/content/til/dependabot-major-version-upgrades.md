---
title: "Be careful with Dependabot major version bumps"
date: "2026-04-26"
tags: ["github", "dependencies", "devops"]
---

Dependabot is great for keeping dependencies up to date, but not all PRs are created equal.

## Safe to auto-merge

- **Patch versions** (1.0.1 → 1.0.2): Bug fixes only
- **Minor versions** (1.0.0 → 1.1.0): New features, backwards compatible
- **Security updates**: Usually worth the risk

## Review carefully

- **Major versions** (4.x → 5.x): Breaking changes likely
- **Release candidates** (5.0.0rc3): Not stable yet!
- **Alpha/beta versions**: Definitely not stable

Today I reviewed PRs for dcf-teacher and had to flag:
- `transformers 4.53.0 → 5.0.0rc3` — RC, not stable
- `protobuf 4.25.8 → 5.29.6` — Major version, API changes

Rule of thumb: if the first digit changes, read the changelog.
