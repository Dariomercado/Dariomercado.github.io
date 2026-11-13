# Portfolio Project and Contact Refresh

## Objective

Add the Dermoe Shopify project to the portfolio, show GitHub in the contact section, and replace the floating rocket with a gold up-chevron while preserving the existing scroll-to-home behavior.

## Problem and rationale

The portfolio currently shows four project cards and contact details without a GitHub link. Its floating rocket already returns visitors to the top, but its icon does not match the portfolio's visual style.

## Scope and constraints

- Add a fifth card using the existing Dermoe screenshot at `img/proyectos/dermoe-shopify.png`.
- Describe the work as a Shopify project that customizes the Dawn theme.
- Keep the existing responsive project grid and card pattern.
- Add the supplied GitHub repositories URL with a Font Awesome icon consistent with contact rows.
- Replace the rocket image with a gold up-chevron and keep the `#home` destination.
- Do not publish or push changes.
- Preserve pre-existing untracked `.atl/`.
- Include the existing `img/proyectos/dermoe-shopify.png` unchanged so the card image is available after deployment.

## Authorized scope

- `index.html`
- `CSS/estilos.css`
- `img/proyectos/dermoe-shopify.png`
- `odd/tasks/portfolio-dermo-github-scroll.md`

## Tasks

- [x] P1 Add the Dermoe Shopify card and screenshot to the project grid.
- [x] P2 Add the GitHub repositories link to contact details.
- [x] P3 Replace the floating rocket with a gold up-chevron while retaining its destination.

## Acceptance criteria

- The portfolio presents five project cards in its existing responsive grid.
- Dermoe's screenshot has descriptive alternative text and its copy mentions the customized Dawn theme.
- Contact details include a clickable link to `https://github.com/Dariomercado?tab=repositories` with a GitHub icon.
- The floating control visibly uses a gold up-chevron and still links to `#home`.
- No unrelated files or existing untracked assets are changed.

## Checks

- Structural readback of the edited HTML and `git diff --check`.
- No test suite is defined or requested for this static markup update.
- Native receipt-driven review is enabled by default; assess the completed work unit and follow its returned lifecycle.

## Progress

- Route: delegated direct; the three changes span the project/contact markup and the floating control's dedicated styling.
- Forecast: under 400 authored changed lines; delivery strategy `ask-on-risk`.
- Status: all requested portfolio changes and the screenshot are committed locally.
- Verification: structural readback confirmed five cards, the requested GitHub link, and the `#home` chevron; parent review confirmed mobile centering. Worker and parent `git diff --check` runs exited 0 with no output. No test suite applies to this static HTML/CSS update.
- Commits: `31b3860` (`feat(portfolio): add Dermoe project and contact links`); `c8d677b` (`chore(portfolio): include Dermoe project screenshot`). This completion record is in `docs(portfolio): record refresh verification`.
- Native assessment: medium risk; `review_due=false`, reason `under_budget`. Existing `.atl/` untracked files were excluded using the reported inventory; no review lifecycle was due.
- Next step: changes are ready for the user's ordinary delivery decision; no remote operation was performed.
