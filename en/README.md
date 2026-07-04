# 4869 — Official Website

The official website for **4869**, a local encrypted folder vault for macOS.

🌐 **Live site:** [https://aaronyang47.github.io/4869/](https://aaronyang47.github.io/4869/)

---

## What This Repo Contains

This repository hosts the static website deployed via **GitHub Pages**. The site includes:

| Page | Purpose |
|------|---------|
| `index.html` | Landing page — features, security architecture, how-it-works, FAQ |
| `privacy-policy.html` | Full Privacy Policy (App Store Connect compliant) |
| `terms.html` | Terms of Use & Disclaimer |
| `support.html` | Support channels, contact form, quick links |

## Design

- **Theme:** Dark glass-morphism, matching the app's macOS UI
- **Responsive:** Fully mobile-friendly
- **Zero dependencies:** Pure HTML/CSS/JS, no frameworks, no build step
- **Accessible:** Semantic HTML, keyboard navigation, ARIA labels

## File Structure

```
website/
├── index.html              # Main landing page
├── privacy-policy.html     # Privacy Policy
├── terms.html              # Terms of Use & Disclaimer
├── support.html            # Support & Contact
├── css/
│   └── style.css           # All styles (~1100 lines)
├── js/
│   └── main.js             # Interactions (nav, FAQ, reveal, counters)
├── README.md               # This file
└── .nojekyll               # Disable Jekyll for GitHub Pages
```

## Deploy to GitHub Pages

This website is designed to be deployed via **GitHub Pages**. Follow these steps:

### Option 1: User/Organization Page (Recommended)

1. Create a repository named `<username>.github.io` on GitHub (replace `<username>` with your GitHub username)
2. Push the contents of this `website/` folder to the `main` branch:
   ```bash
   git remote add origin https://github.com/<username>/<username>.github.io.git
   git push -u origin main
   ```
3. Your site will be live at `https://<username>.github.io/` within minutes.

### Option 2: Project Page

If you want to host it as a project page:

1. Create any repository on GitHub (e.g., `4869-website`)
2. Push the code:
   ```bash
   git remote add origin https://github.com/<username>/4869-website.git
   git push -u origin main
   ```
3. Go to **Settings → Pages** and set:
   - **Source:** Deploy from a branch
   - **Branch:** `main` / `/website`
4. Site deploys to `https://<username>.github.io/4869-website/`

## Local Preview

```bash
cd website
python3 -m http.server 8080
# Open http://localhost:8080
```

## Customization

Before going live, update these placeholders:

1. **Release asset:** Upload the notarized DMG to the matching GitHub Release tag.
2. **Download link:** Keep the `Download for Mac` buttons aligned with the current release tag.
3. **Domain:** Update canonical links if a custom domain is added later.

## License

© 2024–2025 4869. All rights reserved.
