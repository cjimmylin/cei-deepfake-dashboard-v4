# Changelog

All notable changes to the Deepfake Governance Dashboard are recorded here.
This project documents each release in a dedicated GitHub repository so that prior versions remain independently citable.

## [4.0.0] — 2026-04-14

New release cut in Session S12. Supersedes v3.

### Added
- `LICENSE` (CC BY 4.0 for data/text, MIT for code) — ships from v4 onward.
- `CITATION.cff` with explicit `supersedes` linkage to v3 and earlier versions.
- `404.html` so unknown paths under `/cei-deepfake-dashboard-v4/` render a friendly redirect back to the root.
- `Content-Security-Policy-Report-Only` meta tag in `index.html`. Locks `default-src` to `self`; permits jsdelivr (Bootstrap + ECharts), Google Fonts, and inline styles/scripts required by the current dashboard. Currently ships in Report-Only mode; will be flipped to enforcing after a clean Playwright run verifies no violations.

### Preserved from v3 (S11 patches)
- SRI hashes for Bootstrap 5.3.3 CSS and ECharts 5.5.1 JS match the bytes actually served by jsdelivr. These hashes are the ones computed by the browser in S11 and verified live.
- Methodology toggle uses `color: var(--text)` so the 3-paragraph methodology block is legible on the dark theme.
- Dimension Reference Guide: 25-row expandable table on the Dimension Analysis tab, grouped by the 6 dashboard category colors (A red / B blue / C green / D yellow / E purple / F pink), with a two-column "What It Measures / Why It Matters" layout.

### Data
- Corpus unchanged from v3: scan `20260413-2-corpus-scores.json`, N = 1,446 matched / 3,008 scanned, 25 dimensions.
- `data.js` generation timestamp: `2026-04-13T23:18:36`.

### Known issues (carried from v3)
- SRI hashes are brittle: if jsdelivr recompiles the minified bundles, the integrity attribute will start rejecting them. Long-term mitigations (self-host, pinned subresource proxy, CI smoke test) remain on the backlog.
- Dimension Reference Guide is read-only: rows do not link back to corresponding heatmap cells.
- `chartDimCoverage.whatYouSee` narrative remains 18 words over the 60-word cap; pre-existing.

### SemVer note
S11's changes were, strictly, patch-level (SRI digest substitution + inline-style color fix + additive reference-guide table). This release ships as 4.0.0 rather than 3.1.0 to keep the repo/URL version number aligned with the companion paper's version family and to make the "new version" signal unambiguous to readers. A patch-level release (3.1.0) was considered but dropped for consistency with the paper cut to v8. See `S12_handoff`.

## [3.0.0] — 2026-04-13
First live release of the v3 dashboard family; N = 1,446 corpus after the S9 recall-lift fixes. Separate repo at https://github.com/cjimmylin/cei-deepfake-dashboard-v3.

## [2.0.0] — 2026-04 (earlier)
Separate repo at https://github.com/cjimmylin/cei-deepfake-dashboard-v2. Retained for reproducibility.

## [1.0.0] — 2026-04 (earlier)
Separate repo at https://github.com/cjimmylin/cei-deepfake-dashboard. Retained for reproducibility.
