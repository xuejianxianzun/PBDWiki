# Copilot instructions for PBDWiki

## Project overview

This repository is a Docsify wiki for Pixiv Batch Downloader. The site is served from `docs/`, with localized content split between `docs/en/` and `docs/zh-cn/`.

## Local preview

- Install Docsify CLI once: `npm i docsify-cli -g`
- Preview the wiki locally: `docsify serve docs`

No repository-managed build, test, lint, or per-test commands are defined.

## Architecture

- `docs/index.html` bootstraps Docsify and loads the custom client scripts.
- `docs/js/form.js` and `docs/js/footer.js` are the main runtime extensions. They attach Docsify hooks and depend on stable DOM structure, IDs, and `data-*` attributes in the markdown pages.
- `docs/_sidebar.md`, `docs/en/_sidebar.md`, and `docs/zh-cn/_sidebar.md` define navigation.
- `docs/page_options.json` and `docs/page_buttons.json` map numeric option IDs and button IDs to pages. Keep these files in sync with any page or anchor changes.
- The `*-menu.md` files are section index pages; the linked leaf pages hold the actual content.

## Conventions

- Keep the English and Chinese trees aligned. The bilingual filename mapping is documented in `docs/zh-cn/prompt.md`.
- Preserve the existing terminology in translated pages: work, illustration, manga, novel, Ugoira, bookmark, crawl, naming rule, download record, and posting time.
- Many pages use Docsify admonitions like `?>` and `!>` plus local screenshots under `docs/en/images/` or `docs/zh-cn/images/`.
- Pages often link with hash/query fragments such as `?id=` and `?flag=`; do not rename anchors or IDs without updating the lookup JSON and the JS that reads them.
- The `docs/en/old/` and `docs/zh-cn/old/` folders contain legacy pages. Leave them alone unless you are intentionally updating old documentation.

