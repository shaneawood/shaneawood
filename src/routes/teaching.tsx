import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Award } from 'lucide-react'
import { coursesByInstitution, credentials, philosophy } from '@/data/site'
import { PageIntro, SectionLabel } from '@/components/PageIntro'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/teaching')({
  head: () => ({ meta: [{ title: 'Teaching — Shane A. Wood' }] }),
  component: Teaching,
})

function Teaching() {
  const [active, setActive] = useState(0)
  const current = coursesByInstitution[active]
  const total = coursesByInstitution.reduce((n, i) => n + i.courses.length, 0)

  return (
    <>
      <PageIntro
        eyebrow="Teaching"
        title={
          <>
            Teaching is <em className="text-gold">facilitative</em>, not authoritative.
          </>
        }
      >
        <p>
          More than ten years of teaching writing at five very different institutions, from Haskell Indian Nations
          University to a large public research university.
        </p>
      </PageIntro>

      {/* Philosophy */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionLabel n="01">Philosophy</SectionLabel>
        <div className="mt-10 grid gap-12 md:grid-cols-[1fr_1.2fr] lg:gap-20">
          <blockquote className="relative">
            <span aria-hidden className="absolute -top-10 -left-2 font-display text-[8rem] leading-none text-gold/20">
              “
            </span>
            <p className="relative font-display text-3xl leading-snug font-light sm:text-4xl">
              {philosophy.center}
            </p>
            <footer className="mt-6 text-ink-soft">
              The constant across every classroom: <span className="hl" style={{ '--d': '500ms' } as React.CSSProperties}>{philosophy.constant}</span>
            </footer>
          </blockquote>

          <div>
            <p className="text-lg text-ink-soft">
              <strong className="font-semibold text-ink">{philosophy.opening}</strong> My approach draws on four
              traditions of thought about writing and learning:
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-rule bg-rule">
              {philosophy.influences.map((inf) => (
                <li key={inf.name} className="bg-paper p-4">
                  <p className="font-display text-xl">{inf.name}</p>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">{inf.idea}</p>
                </li>
              ))}
            </ul>
            <ol className="mt-8 space-y-4">
              {philosophy.practices.map((p, i) => (
                <li key={p} className="grid grid-cols-[2rem_1fr] gap-2">
                  <span className="pen-note text-2xl">{i + 1}.</span>
                  <span className="text-ink-soft">{p}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="mx-auto mt-28 max-w-6xl px-5 sm:px-8">
        <SectionLabel n="02">Courses taught</SectionLabel>
        <p className="mt-4 font-mono text-xs text-ink-faint">
          {total} courses · {coursesByInstitution.length} institutions
        </p>

        <div className="mt-8 grid gap-10 md:grid-cols-[16rem_1fr]">
          <div role="tablist" aria-label="Institutions" className="flex gap-2 overflow-x-auto pb-2 md:flex-col md:overflow-visible">
            {coursesByInstitution.map((inst, i) => (
              <button
                key={inst.institution}
                role="tab"
                id={`tab-${i}`}
                aria-selected={active === i}
                aria-controls="course-panel"
                onClick={() => setActive(i)}
                className={cn(
                  'shrink-0 rounded-sm border px-4 py-3 text-left transition-all',
                  active === i
                    ? 'border-ink bg-ink text-paper'
                    : 'border-rule hover:border-ink hover:bg-paper-deep',
                )}
              >
                <span className="block font-display text-lg leading-tight">{inst.short}</span>
                <span className={cn('block font-mono text-[11px]', active === i ? 'text-paper/60' : 'text-ink-faint')}>
                  {inst.courses.length} courses
                </span>
              </button>
            ))}
          </div>

          <div id="course-panel" role="tabpanel" aria-labelledby={`tab-${active}`} className="ruled min-h-[22rem] rounded-sm border border-rule bg-white/40 p-6 sm:p-8">
            <h3 className="text-3xl font-light">{current.institution}</h3>
            <ul key={active} className="mt-6">
              {current.courses.map((c, i) => (
                <li
                  key={c.code + c.title}
                  className="rise flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-dashed border-rule py-3"
                  style={{ '--d': `${i * 45}ms` } as React.CSSProperties}
                >
                  <span className="w-24 shrink-0 font-mono text-sm text-gold">{c.code}</span>
                  <span className="flex-1 text-lg">{c.title}</span>
                  {c.level && (
                    <span className="rounded-full bg-highlight/70 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em]">
                      {c.level}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="mx-auto mt-28 max-w-6xl px-5 sm:px-8">
        <SectionLabel n="03">Professional development</SectionLabel>
        <div className="mt-10 space-y-6">
          {credentials.map((c) => (
            <div key={c.name} className="grid gap-6 rounded-sm border border-ink p-6 sm:p-10 md:grid-cols-[auto_1fr] md:gap-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-gold text-gold">
                <Award size={28} strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-mono text-xs text-ink-faint">
                  {c.year && <>{c.year} · </>}
                  {c.issuer}
                </p>
                <h3 className="mt-2 text-3xl font-light">{c.name}</h3>
                <p className="mt-4 max-w-2xl text-ink-soft">{c.summary}</p>
                {c.modules && (
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {c.modules.map((m) => (
                      <li key={m} className="rounded-full border border-rule px-3 py-1 text-sm">
                        {m}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
