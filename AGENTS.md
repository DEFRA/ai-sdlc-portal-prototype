# AGENTS

## TL;DR

- GOV.UK Prototype Kit wrapper for Defra's Core Delivery Platform; build GOV.UK-style service prototypes only.
- Node.js `v22.19.0` (see `.nvmrc`) with npm; start locally via `npm install && npm run dev`.
- No automated tests; keep changes lightweight, run `npm run format:check` before raising PRs.

## Repo Purpose

- Provide a quickly deployable prototype for the AI SDLC portal initiative using the GOV.UK Prototype Kit.
- Enable designers and researchers to validate flows via Nunjucks views under `app/views` and associated routes in `app/routes.js`.
- Act as a sandbox only: README explicitly states it is not production-ready, resilient, or secure.

## Key Directories & Files

- `app/routes.js`: Express-style route definitions via Prototype Kit router.
- `app/views/`: Nunjucks templates rendered by the kit; shared layouts provided by `govuk-prototype-kit`.
- `app/assets/`: Static assets served with the prototype.
- `app/data/`: Example data accessible from templates.
- `app/config.json`: Prototype configuration (e.g. GOV.UK rebrand flag).
- `package.json`: Scripts and dependencies; only `govuk-prototype-kit` + GOV.UK frontend packages plus Prettier.

## Environment & Tooling

- Requires Node.js `>=22` (use `nvm use` to match `.nvmrc`).
- Install dependencies with `npm install`.
- Prototype Kit uses Express under the hood; hot reload available via `npm run dev`.
- Default port is `3000`; override with `PORT` env var when needed.
- Secrets handled outside git; copy `.env.template` to `.env` for local env vars (do not commit).

## Common Workflows

- **Run locally**: `npm run dev` (auto-refresh) or `npm run serve` for static export.
- **Build/start for production-like run**: `npm run start` (uses Prototype Kit build + node server).
- **Formatting**: `npm run format` to apply Prettier; `npm run format:check` in CI-style checks.
- **Docker (optional)**: Build dev image `docker build --target development --tag ai-sdlc-portal-prototype:development .`; run `docker run -e PORT=3000 -p 3000:3000 ai-sdlc-portal-prototype:development`.

## Implementation Notes for Agents

- Add new pages by creating templates in `app/views` and linking routes in `app/routes.js`; follow Prototype Kit docs at https://prototype-kit.service.gov.uk/docs/.
- Filters or helpers can go in `app/filters.js` (currently empty) and registered per Prototype Kit guidance.
- Keep GOV.UK Frontend component usage consistent with design system; assets already bundled.
- Prototype warns against storing secrets in repo; rely on CDP secrets pages when preparing deployments.

## Testing & Quality Gates

- There are no automated tests or linting beyond Prettier; manual UX verification is expected.
- Run `npm run format:check` before committing to ensure consistent formatting.
- If adding runtime JavaScript, consider lightweight smoke tests or document manual test steps in PR.

## Deployment Guidance

- Intended deployment path is via Defra CDP Portal; redeploy after updating secrets (see README "Creating a secret").
- For manual inspection, Docker instructions in README let you mirror CDP runtime locally.
- Remember to set `PASSWORD` secret for Basic Auth when hosting.

## External Integrations & Dependencies

- Depends on `govuk-prototype-kit` (v13.18.0) and `govuk-frontend` (v5.11.1); avoid manually upgrading without reviewing release notes.
- No external APIs configured by default; any integrations should keep credentials out of source control.

## Additional References

- README (`README.md`) for detailed operational steps, passwords, environment variables, Docker usage, and licensing.
- GOV.UK Prototype Kit docs: https://prototype-kit.service.gov.uk/docs/ for routing, templating, and data guidance.
- GOV.UK Design System: https://design-system.service.gov.uk/ for component patterns.
