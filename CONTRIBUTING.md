# Contributing to Quantinuum UI
- [Contributing to Quantinuum UI](#contributing-to-quantinuum-ui)
- [Releases](#releases)
  - [Normal releases](#normal-releases)
  - [Pre-releases](#pre-releases)


Thank you for your interest in contributing to the Quantinuum UI library!
We welcome contributions from the community to help improve and expand our design tokens and React components.

Quantinuum UI is based on [shadcn](https://ui.shadcn.com/), an opinionated tailwind theme and radix-ui component generator.
Shadcn components have been generated into this repo using the `components.json` definition and re-exported as a new library.

# Releases
We use conventional commits and [semantic-release](https://github.com/semantic-release/semantic-release) for automated releases.

## Normal releases
In order to create a normal release,
1. Your PR title must follow conventional commit format, e.g. `fix: typos in code`.
2. Merge your PR into `main`.
3. A new release will be automatically created by semantic-release.

Stable releases are **only** published from the `main` branch. The `main` branch is protected and requires PR approval before merging.

## Pre-releases
Pre-releases allow you to test a published version of your feature branch in consuming applications before merging to `main`.

Pre-releases are triggered **manually** by a maintainer via GitHub Actions:

1. Create a new branch from `main` for your feature, e.g. `feature-x`.
2. Commit using conventional commit format, e.g. `feat: add new feature x`.
3. Push your branch to the repository.
4. A maintainer navigates to **Actions → Pre Release library → Run workflow**.
5. In **Use workflow from**, select your feature branch.
6. Click **Run workflow**.
7. A pre-release version will be published if the branch has a valid conventional commit release type i.e. `feat`.

Install the pre-release in your consuming project:
```bash
pnpm add @quantinuum/quantinuum-ui@4.0.4-feature-x.1
```

For every additional trigger on the same branch, a new pre-release version is created (e.g. `feature-x.2`, `feature-x.3`, etc.).

**Note:**
- Pre-releases cannot be triggered automatically on push. This is a security measure.
- Only collaborators with write access can trigger pre-releases.
