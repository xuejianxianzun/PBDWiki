# PBDWiki Agent Guide

## Repository purpose

PBDWiki is the Docsify documentation site for the browser extension
[Pixiv Batch Downloader](https://github.com/xuejianxianzun/PixivBatchDownloader).
The published site is served directly from `docs/`; this is primarily a
documentation repository, not the extension's source repository.

## Project layout

- `docs/index.html` bootstraps Docsify, loads the site stylesheet, and registers
  the custom runtime scripts.
- `docs/zh-cn/` contains Simplified Chinese documentation; `docs/en/` contains
  its English counterpart. Their `_sidebar.md` files define the user-facing
  navigation and should remain structurally aligned.
- `docs/_sidebar.md` is the language-selection landing navigation.
- `docs/zh-cn/images/` and `docs/en/images/` hold localized screenshots and
  other page assets. Keep asset paths relative to the relevant documentation
  tree.
- `docs/data/` maps extension settings and buttons to documentation pages:
  `page_options.json`, `optionsName.json`, `page_buttons.json`, and
  `buttonsName.json`. See `docs/data/readme.md` before changing these files.
- `docs/js/form.ts` is the TypeScript source for the generated runtime file
  `docs/js/form.js`. `footer.js` and `sidebar-collapse.js` are plain JavaScript
  Docsify plugins.
- `docs/style/style.less` is the Less entry point. It imports the remaining
  Less sources and compiles to `docs/style/style.css`.

## Local development

Requirements: Node.js, plus Docsify CLI installed globally for local preview.

```powershell
npm install
npm i docsify-cli -g
docsify serve docs
```

Use the URL printed by Docsify (normally `http://localhost:3000`) to review
routing, rendering, screenshots, links, responsive layout, and interactive
form examples.

The repository has no configured test suite, linter, or repository-managed
Docsify dependency. Run the relevant checks for the files changed:

```powershell
# Rebuild the generated browser files after editing their sources.
npm run ts
npm run less

# Type-check form.ts without rewriting form.js when only validating it.
npx tsc --noEmit docs/js/form.ts

# Compile Less to a disposable output when only validating it.
npx lessc docs/style/style.less $env:TEMP\pbdwiki-style-check.css
```

Do not edit `docs/js/form.js` or `docs/style/style.css` by hand when a source
file exists. Commit their regenerated output together with changes to
`form.ts` or the Less sources.

## Documentation changes

- Treat Chinese and English pages as paired content. For a new navigable page,
  add its counterpart and add equivalent entries, in the same order, to both
  localized sidebars. Update the English page when a Chinese source page is
  changed unless the request explicitly limits scope.
- The `*-menu.md` pages are section landing pages. Keep the actual explanatory
  content in the leaf pages linked from the sidebar.
- Preserve existing Markdown and Docsify conventions, including admonitions
  (`?>` and `!>`), heading levels, local image links, and relative internal
  routes.
- Keep the established English vocabulary: `work`, `illustration`, `manga`,
  `novel`, `Ugoira`, `crawl`, `bookmark`, `download record`, and `posting
  time`. The complete translation workflow and terminology are in
  `docs/zh-cn/翻译用的prompt.md`.
- Do not translate fenced code blocks, embedded HTML, non-Markdown files, or
  Chinese files that are not represented in the Chinese sidebar. When
  translating internal links, translate the link text and update the language,
  page, and heading/`id` route components as described by the translation
  guide.

## Settings, buttons, and anchors

The extension opens Wiki pages through numeric setting flags and button IDs.
These routes depend on the data mappings and the rendered page structure.

- When adding, moving, renaming, or removing a settings or buttons page,
  update the corresponding `page_*.json` entry in both languages.
- When setting/button names change, keep `optionsName.json` or
  `buttonsName.json` synchronized with the page text.
- Preserve `.option[data-no]` values for settings and `button#...` IDs for
  buttons. Do not rename headings or explicit anchors used by `?id=` links
  without updating every affected internal link and mapping.
- Keep the markup expected by `form.js`: enhanced inputs live in `.option`,
  have an immediately following presentation `span`, and optional switch
  sub-options use `.subOptionWrap[data-show]`. Preserve `.has_tip`, `data-tip`,
  `.grayButton`, and related attributes where those interactions are intended.

## JavaScript and styling constraints

- Custom scripts register Docsify `doneEach` hooks. They run after every
  Markdown navigation, so make event bindings idempotent and avoid relying on
  one-time page state.
- Do not add `async` or `defer` to the custom script tags in `docs/index.html`;
  hook registration timing is intentionally synchronous.
- For CSS work, edit the smallest applicable Less source. Preserve the existing
  CSS custom properties and the desktop/mobile behavior in the current style
  sheets.
- Review a local Docsify page after changing DOM selectors, navigation logic,
  styles, or form example markup. Check direct `?id=` and `?flag=` URLs when
  their target behavior is affected.

## Change hygiene

- Keep changes focused on the requested documentation, mappings, source files,
  and generated artifacts. Do not reformat unrelated Markdown, JSON, CSS, or
  generated JavaScript.
- Do not alter screenshots or other binary assets unless the documentation
  change requires them. Add localized assets to the matching language tree.
- Before handing off, inspect `git diff --check` and `git status --short`.
  Preserve unrelated work already present in the working tree.
