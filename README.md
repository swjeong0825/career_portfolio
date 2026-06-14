https://swjeong0825.github.io/career_portfolio/  

# Sunwoo Jeong — Portfolio

A static, dependency-free personal portfolio. Plain HTML, CSS, and JavaScript — no framework, no bundler, no `npm install`.

**Live (custom domain):** _set this once you connect a domain (see below)_

## Stack

- HTML5, CSS3 (custom properties only — no preprocessor)
- A small amount of vanilla JavaScript ([assets/js/main.js](assets/js/main.js)) for the mobile nav, scrolled-header state, and footer year
- Google Fonts (`Fraunces`, `Inter`, `JetBrains Mono`) loaded with `display=swap`
- No third-party JS, no analytics, no tracking

## Project structure

```
.
├── index.html                       # Home
├── projects/
│   ├── index.html                   # All projects
│   ├── tlmb.html                    # Tennis League Management Bot case study
│   └── auto-bookclub.html           # Auto Bookclub AI case study
├── experience/index.html            # Career timeline + skills
├── contact/index.html               # Contact links + resume download
├── assets/
│   ├── css/styles.css               # Single shared stylesheet
│   ├── js/main.js                   # Mobile nav, scrolled-header, year stamp
│   ├── resume.pdf                   # Downloadable resume
│   └── img/favicon.svg
├── robots.txt
└── README.md
```

## Run it locally

No installation needed. From this directory:

```bash
# Option 1: any static file server
python3 -m http.server 4321
# then open http://127.0.0.1:4321/

# Option 2 (Node):
npx serve . -l 4321

# Option 3: just double-click index.html in a file manager
```

## Deploy to GitHub Pages

Yes, you can host this on GitHub Pages directly from this folder. There are two common setups — pick one.

### Option A: Project repository (e.g. `portfolio`)

Site URL will be `https://<username>.github.io/<repo>/`.

```bash
cd portfolio_page                 # this folder
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin git@github.com:<username>/<repo>.git
git push -u origin main
```

Then on GitHub:

1. Go to **Settings → Pages**
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**
3. Set **Branch** to `main` and folder to `/ (root)`
4. Save. The first deploy takes ~30–60 seconds.

All internal links in this site are relative (`assets/...`, `projects/...`, `../`), so the site works correctly under both `https://<username>.github.io/` and `https://<username>.github.io/<repo>/`.

### Option B: User site (`<username>.github.io`)

Site URL will be `https://<username>.github.io/`.

1. Create a repository named exactly `<username>.github.io`.
2. Push this folder as the repository root (same `git init` … `git push` flow as Option A).
3. GitHub Pages is enabled automatically for user-site repositories.

## Custom domain (optional)

The pages reference `https://swjapps.com/` in their `<link rel="canonical">` and `og:url` meta tags. If you do **not** want a custom domain, do a global find/replace on the canonical/OG URLs to your `<username>.github.io` URL before pushing.

If you **do** want a custom domain (e.g. `swjapps.com`):

1. In your DNS provider, add the four GitHub `A` records (`185.199.108.153`, `.109.153`, `.110.153`, `.111.153`) for the apex domain, and a `CNAME` of `<username>.github.io` for `www` (or any subdomain).
2. In the repo, create a `CNAME` file at the root containing just the domain, e.g.:

   ```
   swjapps.com
   ```

3. On GitHub, **Settings → Pages → Custom domain**, enter the same domain and enable **Enforce HTTPS** once the certificate is issued (a few minutes).

## Updating the resume

The downloadable PDF lives at [assets/resume.pdf](assets/resume.pdf). Replace it with a newer version using the same filename and the **Download resume** button on the contact page will pick it up — no other changes needed.

## License

Personal portfolio content (resume copy, project case studies, project descriptions) is © Sunwoo Jeong, all rights reserved. The HTML/CSS/JS scaffolding is free to learn from or reuse.
