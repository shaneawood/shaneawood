import { HeadContent, Scripts, createRootRoute, Link } from '@tanstack/react-router'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'

import '../styles.css'

const siteName = 'Shane A. Wood — Writing & Rhetoric, UCF'
const siteDescription =
  'Shane A. Wood is an associate professor and Director of First-Year Composition at the University of Central Florida, co-author of On Response (with Emily K. Suh), editor of Teachers Talking Writing, and host of the Pedagogue podcast.'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: siteName },
      { name: 'description', content: siteDescription },
      { name: 'theme-color', content: '#ffffff' },
      { property: 'og:title', content: siteName },
      { property: 'og:description', content: siteDescription },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: '/.netlify/images?url=/img/shane-wood.jpg&w=800&fm=jpg' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@shaneawood' },
    ],
    links: [
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400&family=Caveat:wght@500;600&family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=IBM+Plex+Mono:wght@400;500&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <Scripts />
      </body>
    </html>
  )
}

function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-32 sm:px-8">
      <p className="pen-note -rotate-3 text-4xl">see me after class</p>
      <h1 className="mt-4 text-6xl font-light">This page wasn’t turned in.</h1>
      <p className="mt-4 text-ink-soft">The link may be from the old site. Try one of these instead.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        {(['/', '/teaching', '/research', '/service', '/contact'] as const).map((to) => (
          <Link
            key={to}
            to={to}
            className="rounded-full border border-ink px-4 py-1.5 text-sm transition-colors hover:bg-ink hover:text-paper"
          >
            {to === '/' ? 'Home' : to.slice(1)[0].toUpperCase() + to.slice(2)}
          </Link>
        ))}
      </div>
    </section>
  )
}
