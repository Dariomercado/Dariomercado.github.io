# Portfolio Project and Contact Refresh

## Objective

Add the Dermoe Shopify project to the portfolio, show GitHub in the contact section, and replace the floating rocket with a gold up-chevron while preserving the existing scroll-to-home behavior.

## Problem and rationale

The portfolio currently shows four project cards and contact details without a GitHub link. Its floating rocket already returns visitors to the top, but its icon does not match the portfolio's visual style.

## Scope and constraints

- Add a fifth card using the existing Dermoe screenshot at `img/proyectos/dermoe-shopify.png`.
- Describe the work as a Shopify project that customizes the Dawn theme.
- Lay out project cards in a centered two-column CSS Grid; place an odd final card in the first column and collapse to one column on narrow screens.
- Give Dermoe a `Visitar sitio` link to `https://dermoe.myshopify.com/` using the existing card button style.
- Add the supplied GitHub repositories URL with a Font Awesome icon consistent with contact rows.
- Replace the rocket image with a gold up-chevron and keep the `#home` destination.
- The user previously authorized pushing this ongoing portfolio update to `main`.
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
- [x] P4 Replace the centering flex layout and odd-child margin override with a responsive two-column grid.
- [x] P5 Add the Dermoe `Visitar sitio` link to its Shopify URL.

## Acceptance criteria

- The portfolio presents five project cards in its existing responsive grid.
- The Dermoe card begins in the same first column as the other first-column cards, without a separate alignment override.
- The Dermoe card includes a `Visitar sitio` link to `https://dermoe.myshopify.com/`.
- Dermoe's screenshot has descriptive alternative text and its copy mentions the customized Dawn theme.
- Contact details include a clickable link to `https://github.com/Dariomercado?tab=repositories` with a GitHub icon.
- The floating control visibly uses a gold up-chevron and still links to `#home`.
- No unrelated files or existing untracked assets are changed.

## Checks

- Structural readback of the edited HTML and `git diff --check`.
- No test suite is defined or requested for this static markup update.
- Native receipt-driven review is enabled by default; assess the completed work unit and follow its returned lifecycle.

## Progress

- Route: delegated direct; this correction changes the collection layout and Dermoe card markup across two source files.
- Forecast: under 400 authored changed lines; delivery strategy `ask-on-risk`.
- Status: P4–P5 are complete; the project cards use a centered grid and Dermoe has its storefront CTA. The correction was pushed to `main` in `b9049de`.
- Verification: structural readback confirmed a centered two-column CSS Grid with a single-column rule at narrow widths, no odd-child margin override, and Dermoe's `Visitar sitio` link to `https://dermoe.myshopify.com/` opening with `noopener noreferrer`. Worker and parent `git diff --check` runs passed. No test suite applies to this static HTML/CSS update.
- Commits: `31b3860` (`feat(portfolio): add Dermoe project and contact links`); `c8d677b` (`chore(portfolio): include Dermoe project screenshot`); `f8779c2` (`docs(portfolio): record refresh verification`); `dca64c2` (`fix(portfolio): align final project card left`); `7adb804` (`fix(portfolio): use grid for project cards`).
- Native assessment: medium risk; `review_due=false`, reason `under_budget`. Existing `.atl/` untracked files were excluded and preserved.
- Next step: no implementation work remains. Netlify should deploy from `main`; deployment status has not been checked.
