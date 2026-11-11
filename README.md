# Shane A. Wood 

Associate Professor and Director of First-Year Composition in the Department of Writing and Rhetoric at the University of Central Florida

## Pages

- **Home** (`/`): introduction, current roles, the books, the Pedagogue podcast, recent writing, education
- **Teaching** (`/teaching`): teaching philosophy, courses by institution (tabbed), ACUE credential
- **Research** (`/research`): research interests, publications filterable by type and grouped by year, dissertation and thesis
- **Service** (`/service`): administrative and editorial roles (expandable timeline), university and professional service
- **Contact** (`/contact`): Netlify Forms contact form, email, and social links

Old Weebly paths such as `/teaching.html` redirect to the new pages.

## Tech

- [TanStack Start](https://tanstack.com/start) (React 19, file-based routing) on Vite
- Tailwind CSS 4
- Netlify Forms for the contact form, and the Netlify Image CDN for responsive WebP images
- Fonts: Fraunces, Atkinson Hyperlegible, IBM Plex Mono, Caveat (Google Fonts)

## Editing content

All copy lives in **`src/data/site.ts`**: profile, roles, the books, podcast stats, publications, courses, and service. Add a publication by appending an object to `publications`. The pages pick it up automatically.

Images live in `public/img/`. Reference them through the `cdn()` helper in `src/lib/image.ts`.

## Running locally

```bash
pnpm install
netlify dev        # or: pnpm dev
```

Form submissions only work on a deployed Netlify site. They appear under **Forms** in the Netlify dashboard, where you can also turn on email notifications.
