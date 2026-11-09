# AGENTS.md

This is the personal academic website of Shane A. Wood (UCF Writing & Rhetoric). It is built with TanStack Start, React 19, Tailwind CSS 4, and Vite, and deploys to Netlify.

## Architecture

- `src/data/site.ts` is the **single source of all copy**: profile, roles, books, podcast, publications, courses, and service. Pages are purely presentational. Edit content here, not in route files.
- `src/routes/`: file-based routes (`index`, `teaching`, `research`, `service`, `contact`). `__root.tsx` holds the document shell, global meta, the Google Fonts links, the header and footer, and the 404 page.
- `src/components/`: `SiteHeader` (sticky nav plus a mobile overlay), `SiteFooter`, `PageIntro` (the shared page hero and the `SectionLabel` "§ 01" headings), and `Waveform` (animated podcast bars with deterministic heights, so SSR and the client match).
- `src/lib/image.ts`: `cdn()` and `cdnSrcSet()` build Netlify Image CDN URLs. Always use them for images in `public/img/`. Never link the originals directly.
- `src/styles.css`: theme tokens (`paper`, `ink`, `gold`, `gold-deep`, `gold-bright`, `highlight`, `rule`) and the motif utilities `.hl` (highlighter sweep), `.pen-note` (gold handwritten note), `.draw` (SVG stroke reveal), `.rise` (staggered entrance, delay via the `--d` CSS variable), `.ruled`, and `.link-u`.

## Design language

The palette is black, white, and gold. Yellow highlighter marks (`.hl`) emphasize key words, a nod to Shane's research on teacher response. Use `gold` for text on white (it passes 4.5:1 contrast) and `gold-bright` only on black backgrounds. Display type is Fraunces, body type is Atkinson Hyperlegible (chosen for accessibility), and labels use IBM Plex Mono. Keep new UI inside this palette and vocabulary. Respect `prefers-reduced-motion`, which is already handled globally.

## Contact form (Netlify Forms)

- The React form in `src/routes/contact.tsx` posts URL-encoded data to `/__forms.html`. Don't post to `/`, because the SSR function would intercept that request.
- `public/__forms.html` is the hidden skeleton that registers the `contact` form at build time. If you add or rename fields, update both files.
- Fields: `first-name`, `last-name`, `email`, `comment`, plus the honeypot `bot-field`.

## Other notes

- `netlify.toml` redirects the legacy Weebly URLs (`/teaching.html` and the others) to the new routes.
- `content-collections` packages remain in `package.json` but are no longer used. They can be removed together with a lockfile update.
- Don't run build or dev commands in agent sessions. The Netlify build validates changes.
