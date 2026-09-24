# esme-portfolio

Personal website for Esme Jimenez, SaaS Product Designer.

## Structure

```
esme-portfolio/
├── index.html      # Single-page site
└── css/
    └── style.css   # All styles and design tokens
```

## Running locally

Open `index.html` directly in a browser — no build step, no server needed.

## Fonts

Loaded from Google Fonts at runtime:

- **Doto** — hero display name
- **Space Grotesk** (300, 500) — body and headings
- **Space Mono** — labels and metadata

An internet connection is required to load fonts. The site still works offline but falls back to system monospace/sans-serif.

## Updating content

All content lives in `index.html`. Things you'll want to swap before going live:

- `mailto:hello@esmejimenez.com` → your real email (appears in nav and footer)
- `href="https://linkedin.com/in/"` → your LinkedIn URL
- Project descriptions, stats, and bar widths in the `<main>` section
- "Based in" and "Currently" fields in the hero

## Design system

Built on the Nothing design system — monochromatic, typographically driven, dark mode (OLED black). Design tokens are CSS custom properties at the top of `style.css` under the `TOKENS` comment block.
