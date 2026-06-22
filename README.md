# Young Bully — Landing Page

A static landing page (HTML/CSS/JS — no Python backend needed) built for free
hosting on GitHub Pages.

## What's in this folder
- `index.html` — the page structure and copy
- `style.css` — the whole design system (colors, type, layout)
- `script.js` — the typing terminal effect in the hero. Edit the `lines`
  array at the top any time your real progress changes (e.g. when you move
  past 10/99 COA modules, or start Python).
- `assets/` — your logo files:
  - `young-bully-lockup.png` — the full white-on-black logo + tagline,
    used as the hero image
  - `young-bully-mark.png` — the black-on-white logo, used in the navbar,
    footer, and as the site favicon (the little icon in the browser tab)
  - `favicon-32.png`, `favicon-64.png`, `apple-touch-icon.png`,
    `favicon.ico` — auto-generated favicon sizes, already wired into
    `index.html`, no action needed

---

## Step 1 — Put it on GitHub (free hosting)

1. Create a GitHub account if you don't have one: https://github.com/join
2. Create a new repository named exactly: `youngbully.github.io`
   (replace `youngbully` with your actual GitHub username — it must match
   exactly for the free `username.github.io` URL to work)
3. Upload **the whole folder** — `index.html`, `style.css`, `script.js`,
   and the entire `assets` folder (with all the images inside it) — to
   the root of that repository. When you drag files into GitHub's
   "Add file → Upload files" screen, drag the `assets` folder in as well
   so it keeps its folder structure; the images won't show up on the
   site if they end up loose in the root instead of inside `assets/`.
4. Go to the repo's **Settings → Pages**. Under "Source," make sure it's
   set to deploy from the `main` branch, root folder. Save.
5. Wait 1–2 minutes. Your site is now live at:
   `https://youngbully.github.io`

That's it — completely free, no expiry, no card required.

---

## Step 2 — Free custom domain (optional, makes it look more "brand")

`youngbully.github.io` already looks legitimate and costs nothing. If you
want something that reads more like a real domain, use **is-a.dev** — a
free subdomain service built specifically for GitHub Pages projects (so
you'd get something like `youngbully.is-a.dev`).

1. Fork this repo: https://github.com/is-a-dev/register
2. Add a new file in the `domains/` folder named `youngbully.json`
   containing:
   ```json
   {
     "owner": {
       "username": "your-github-username",
       "email": "your-email@example.com"
     },
     "records": {
       "CNAME": "youngbully.github.io"
     }
   }
   ```
3. Open a Pull Request. A maintainer reviews and merges it (usually within
   a few days — it's a volunteer-run project, so it's not instant).
4. Once merged, add `youngbully.is-a.dev` as your custom domain in your
   GitHub Pages repo settings (Settings → Pages → Custom domain) and a
   `CNAME` file will be created automatically. Tick "Enforce HTTPS" once
   it's available — that gives you a free SSL certificate too.

Avoid any site offering "free .com/.tk/.ml domains" — that ecosystem
(Freenom) shut down in 2023 and the few imitators left are not
trustworthy. `username.github.io` or `username.is-a.dev` are the
legitimate free options right now.

---

## Editing the content later
- Swap the placeholder social links in the footer and the `#work` section
  once you have real links to point to.
- Replace `story-photo-placeholder` in `index.html` with a real `<img>` of
  you once you have a photo you like — keep the same aspect ratio
  (4:5 portrait) so the layout doesn't shift.
- Update `script.js` whenever your COA/Python/Linux progress changes —
  it's the single source of truth for the terminal panel and the
  progress bars in the "Build Log" section (those numbers are currently
  hardcoded in `index.html` too, so update both places together).
