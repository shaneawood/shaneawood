import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, ArrowUpRight, BookOpen, Headphones } from 'lucide-react'
import { books, education, nowRoles, pedagogue, profile, publications } from '@/data/site'
import { cdn, cdnSrcSet } from '@/lib/image'
import { cn } from '@/lib/utils'
import { SectionLabel } from '@/components/PageIntro'
import { Waveform } from '@/components/Waveform'

export const Route = createFileRoute('/')({
  component: Home,
})

const d = (ms: number) => ({ '--d': `${ms}ms` }) as React.CSSProperties

function Home() {
  const recent = publications.filter((p) => p.type !== 'Invited' && p.year !== 'Forthcoming').slice(0, 4)

  return (
    <>
      {/* Hero */}
      <section className="mx-auto grid max-w-6xl gap-12 px-5 pt-12 pb-20 sm:px-8 md:grid-cols-[1.35fr_1fr] md:items-center md:pt-20 lg:gap-20">
        <div>
          <p className="rise font-mono text-xs uppercase tracking-[0.22em] text-gold">
            {profile.department} · {profile.institution}
          </p>
          <h1 className="rise mt-5 text-[clamp(3.4rem,9vw,7.5rem)] leading-[0.92] font-light" style={d(80)}>
            Shane A.
            <br />
            <span className="relative inline-block italic">
              Wood
              <svg
                className="draw absolute -bottom-3 left-0 w-full text-gold"
                viewBox="0 0 300 24"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden
                style={d(900)}
              >
                <path d="M4 16 C 70 6, 150 4, 296 12" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="rise mt-10 max-w-xl text-xl leading-relaxed text-ink-soft" style={d(200)}>
            Associate professor and Director of First-Year Composition. I teach first-year writing and graduate
            composition theory, and study{' '}
            <span className="hl text-ink" style={d(1100)}>writing assessment</span>,{' '}
            <span className="hl text-ink" style={d(1350)}>multimodality</span>, and{' '}
            <span className="hl text-ink" style={d(1600)}>writing program administration</span>.
          </p>

          <div className="rise mt-10 flex flex-wrap items-center gap-4" style={d(320)}>
            <Link
              to="/research"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-paper transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Read my research
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={pedagogue.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink px-6 py-3 transition-colors hover:bg-ink hover:text-paper"
            >
              <Headphones size={16} /> Listen to Pedagogue
            </a>
          </div>
        </div>

        <div className="rise mx-auto w-full max-w-sm md:max-w-none" style={d(240)}>
          <img
            src={cdn(profile.photo, 640, 640)}
            srcSet={cdnSrcSet(profile.photo, [360, 640, 960], 1)}
            sizes="(min-width: 768px) 40vw, 90vw"
            width={640}
            height={640}
            alt="Shane A. Wood, smiling, in a light pink t-shirt"
            className="aspect-square w-full rounded-sm object-cover"
            fetchPriority="high"
          />
        </div>
      </section>

      {/* Currently */}
      <section className="border-y border-rule bg-paper-deep/60">
        <div className="mx-auto grid max-w-6xl divide-y divide-rule px-5 sm:px-8 md:grid-cols-4 md:divide-x md:divide-y-0">
          {nowRoles.map((r) => (
            <div key={r.role} className="py-7 md:px-8 md:first:pl-0 md:last:pr-0">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">Since {r.since}</p>
              <p className="mt-2 font-display text-2xl leading-tight">{r.role}</p>
              <p className="mt-1 text-ink-soft italic">{r.org}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Books */}
      <section className="mx-auto max-w-6xl px-5 pt-24 sm:px-8">
        <SectionLabel n="01">The books</SectionLabel>
        <div className="mt-12 grid gap-20 lg:grid-cols-2 lg:gap-16">
          {books.map((book, bi) => (
            <article key={book.title} className="grid content-start gap-8 sm:grid-cols-[minmax(0,180px)_1fr]">
              <a
                href={book.openAccess}
                target="_blank"
                rel="noreferrer"
                className="group relative mx-auto block w-44 sm:w-full"
              >
                <img
                  src={cdn(book.cover, 360)}
                  srcSet={cdnSrcSet(book.cover, [240, 360, Math.min(540, book.coverWidth)])}
                  sizes="180px"
                  width={book.coverWidth}
                  height={book.coverHeight}
                  loading="lazy"
                  alt={`Cover of ${book.title}: ${book.subtitle}`}
                  className={cn(
                    'w-full shadow-[10px_12px_0_-2px_var(--ink)] transition-transform duration-500 group-hover:rotate-0 group-hover:-translate-y-1',
                    bi % 2 ? 'rotate-2' : '-rotate-2',
                  )}
                />
              </a>
              <div>
                <p className="font-mono text-xs text-ink-faint">
                  {book.year} · {book.series}
                </p>
                <h2 className="mt-3 text-3xl leading-tight font-light sm:text-4xl">
                  <em>{book.title}</em>
                  <span className="mt-1 block text-xl text-ink-soft sm:text-2xl">{book.subtitle}</span>
                </h2>
                {book.authors && <p className="pen-note mt-2 text-2xl">{book.authors}</p>}
                <p className="mt-5 text-[17px] text-ink-soft">{book.blurb}</p>

                <ol className="mt-8 divide-y divide-rule border-y border-rule">
                  {book.highlights.map((h) => (
                    <li key={h.name} className="grid grid-cols-[5rem_1fr] gap-3 py-3">
                      <p className="pt-1 font-mono text-xs text-gold">{h.label}</p>
                      <div>
                        <p className="font-display text-xl">{h.name}</p>
                        <p className="mt-0.5 text-[15px] leading-snug text-ink-soft">{h.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
                  <a href={book.openAccess} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-medium text-gold hover:text-gold-deep">
                    <BookOpen size={18} /> <span className="link-u">Read it free (open access)</span>
                  </a>
                  {book.store && (
                    <a href={book.store.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-ink-soft hover:text-ink">
                      <span className="link-u">{book.store.label}</span> <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>

                {book.reviews && (
                  <p className="mt-5 text-[15px] text-ink-soft">
                    <span className="pen-note mr-2 text-xl">reviewed in</span>
                    {book.reviews.map((r, ri) => (
                      <span key={r.venue}>
                        {ri > 0 && ', '}
                        <a href={r.href} target="_blank" rel="noreferrer" className="link-u italic hover:text-ink">
                          {r.venue}
                        </a>
                      </span>
                    ))}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Pedagogue */}
      <section className="mx-auto mt-28 max-w-6xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-sm bg-ink px-6 py-14 text-paper sm:px-12 md:py-20">
          <Waveform className="pointer-events-none absolute inset-x-0 top-1/2 h-48 -translate-y-1/2 justify-center text-paper/[0.07]" />
          <div className="relative grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-gold-bright">§ 02 · On air</p>
              <h2 className="mt-4 text-6xl font-light italic sm:text-7xl">Pedagogue</h2>
              <p className="mt-4 max-w-md text-xl text-paper/80">
                {pedagogue.tagline} {pedagogue.about}
              </p>
              <div className="mt-6 flex items-center gap-4">
                <Waveform className="h-10 text-gold-bright" bars={18} />
              </div>
              <a
                href={pedagogue.url}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 text-ink transition-transform hover:-translate-y-0.5"
              >
                <Headphones size={16} /> Browse episodes <ArrowUpRight size={16} />
              </a>
            </div>
            <div>
              <dl className="grid grid-cols-3 gap-4 border-b border-paper/15 pb-8 md:grid-cols-1 md:gap-6">
                {pedagogue.stats.map((s) => (
                  <div key={s.label}>
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="font-display text-3xl sm:text-5xl">{s.value}</dd>
                    <dd className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/60">{s.label}</dd>
                  </div>
                ))}
              </dl>
              <ul className="mt-6 space-y-3">
                {pedagogue.awards.map((a) => (
                  <li key={a.name} className="flex gap-4 text-[15px]">
                    <span className="font-mono text-gold-bright">{a.year}</span>
                    <span>
                      {a.name}, <em className="text-paper/70">{a.from}</em>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Recent writing + education */}
      <section className="mx-auto mt-28 grid max-w-6xl gap-16 px-5 sm:px-8 md:grid-cols-[1.6fr_1fr]">
        <div>
          <SectionLabel n="03">Recent writing</SectionLabel>
          <ul className="mt-6">
            {recent.map((p) => (
              <li key={p.title} className="group border-b border-rule py-5">
                <a
                  href={p.href}
                  target={p.href ? '_blank' : undefined}
                  rel="noreferrer"
                  className="grid grid-cols-[3.5rem_1fr] gap-4"
                >
                  <span className="pt-1 font-mono text-sm text-ink-faint">{p.year}</span>
                  <span>
                    <span className="font-display text-xl leading-snug transition-colors group-hover:text-gold">
                      {p.title}
                    </span>
                    <span className="mt-1 block text-[15px] text-ink-soft italic">{p.venue}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <Link to="/research" className="group mt-6 inline-flex items-center gap-2 text-gold">
            <span className="link-u">All publications</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div>
          <SectionLabel n="04">Education</SectionLabel>
          <ol className="relative mt-8 space-y-8 border-l border-ink/30 pl-6">
            {education.map((e) => (
              <li key={e.degree} className="relative">
                <span className="absolute top-2 -left-[29px] h-2.5 w-2.5 rounded-full border-2 border-paper bg-gold ring-1 ring-gold" />
                <p className="font-display text-2xl">
                  {e.degree} <span className="font-mono text-xs text-ink-faint">{e.year}</span>
                </p>
                <p className="text-ink">{e.field}</p>
                <p className="text-[15px] text-ink-soft italic">{e.school}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
