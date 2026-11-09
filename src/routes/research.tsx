import { createFileRoute } from '@tanstack/react-router'
import { useMemo, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { honors, longform, publications, researchInterests, talks, type PubType, type Publication } from '@/data/site'
import { PageIntro, SectionLabel } from '@/components/PageIntro'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/research')({
  head: () => ({ meta: [{ title: 'Research — Shane A. Wood' }] }),
  component: Research,
})

const FILTERS: { key: PubType | 'All'; label: string }[] = [
  { key: 'All', label: 'All' },
  { key: 'Book', label: 'Books' },
  { key: 'Article', label: 'Articles & interviews' },
  { key: 'Chapter', label: 'Chapters' },
  { key: 'Special Issue', label: 'Special issues' },
  { key: 'Invited', label: 'Invited & coverage' },
]

function Research() {
  const [filter, setFilter] = useState<PubType | 'All'>('All')

  const grouped = useMemo(() => {
    const list = filter === 'All' ? publications : publications.filter((p) => p.type === filter)
    const byYear = new Map<Publication['year'], Publication[]>()
    for (const p of list) byYear.set(p.year, [...(byYear.get(p.year) ?? []), p])
    const rank = (y: Publication['year']) => (y === 'Forthcoming' ? Infinity : y)
    return [...byYear.entries()].sort((a, b) => rank(b[0]) - rank(a[0]))
  }, [filter])

  const count = (k: PubType | 'All') =>
    k === 'All' ? publications.length : publications.filter((p) => p.type === k).length

  return (
    <>
      <PageIntro
        eyebrow="Research"
        title={
          <>
            How we <em>respond</em> to writing, and what our responses <em className="text-gold">teach</em>.
          </>
        }
      >
        <ul className="flex flex-wrap gap-2">
          {researchInterests.map((r) => (
            <li key={r} className="rounded-full border border-ink/25 bg-white/40 px-3 py-1 text-[15px]">
              {r}
            </li>
          ))}
        </ul>
      </PageIntro>

      <section className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionLabel n="01">Publications</SectionLabel>

        <div role="group" aria-label="Filter publications" className="mt-8 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              aria-pressed={filter === f.key}
              onClick={() => setFilter(f.key)}
              className={cn(
                'rounded-full border px-4 py-1.5 text-sm transition-colors',
                filter === f.key ? 'border-ink bg-ink text-paper' : 'border-rule hover:border-ink',
              )}
            >
              {f.label} <span className="ml-1 font-mono text-[11px] opacity-60">{count(f.key)}</span>
            </button>
          ))}
        </div>

        <div key={filter} className="mt-10">
          {grouped.map(([year, items], gi) => (
            <div
              key={year}
              className="rise grid gap-4 border-t border-rule py-8 md:grid-cols-[8rem_1fr]"
              style={{ '--d': `${gi * 60}ms` } as React.CSSProperties}
            >
              <p className="font-display text-4xl font-light text-ink-faint md:sticky md:top-24 md:self-start">
                {year === 'Forthcoming' ? <span className="text-2xl italic">Forthcoming</span> : year}
              </p>
              <ul className="space-y-7">
                {items.map((p) => (
                  <li key={p.title} className="group">
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold">{p.type}</p>
                    <p className="mt-1 font-display text-xl leading-snug sm:text-2xl">
                      {p.href ? (
                        <a href={p.href} target="_blank" rel="noreferrer" className="transition-colors hover:text-gold">
                          {p.title}
                          <ArrowUpRight size={18} className="ml-1 inline -translate-y-0.5 opacity-40 transition-opacity group-hover:opacity-100" />
                        </a>
                      ) : (
                        p.title
                      )}
                    </p>
                    <p className="mt-1 text-[15px] text-ink-soft">
                      {p.authors} · <em>{p.venue}</em>
                      {p.details && <>, {p.details}</>}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 grid max-w-6xl gap-16 px-5 sm:px-8 md:grid-cols-[1.4fr_1fr]">
        <div>
          <SectionLabel n="02">Invited talks & keynotes</SectionLabel>
          <ul className="mt-6">
            {talks.map((t) => (
              <li key={t.year + t.host + t.title} className="grid grid-cols-[3.5rem_1fr] gap-4 border-b border-rule py-4">
                <span className="pt-0.5 font-mono text-sm text-ink-faint">{t.year}</span>
                <span>
                  <span className="text-[17px] leading-snug">
                    {t.title}
                    {t.keynote && (
                      <span className="ml-2 rounded-full bg-highlight/70 px-2 py-0.5 align-middle font-mono text-[10px] uppercase tracking-[0.14em]">
                        Keynote
                      </span>
                    )}
                  </span>
                  <span className="mt-0.5 block text-[15px] text-ink-soft italic">{t.host}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <SectionLabel n="03">Grants & honors</SectionLabel>
          <ol className="relative mt-8 space-y-7 border-l border-ink/30 pl-6">
            {honors.map((h) => (
              <li key={h.name} className="relative">
                <span className="absolute top-2 -left-[29px] h-2.5 w-2.5 rounded-full border-2 border-paper bg-gold ring-1 ring-gold" />
                <p className="font-mono text-xs text-gold">{h.year}</p>
                <p className="mt-1 font-display text-xl leading-snug">{h.name}</p>
                <p className="mt-0.5 text-[15px] text-ink-soft italic">{h.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-5 sm:px-8">
        <SectionLabel n="04">Dissertation & thesis</SectionLabel>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {longform.map((w, i) => (
            <article
              key={w.title}
              className={cn(
                'relative rounded-sm border border-rule bg-white/50 p-7 shadow-[6px_6px_0_var(--rule)] sm:p-9',
                i === 1 && 'md:mt-16',
              )}
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">{w.kind}</p>
              <h3 className="mt-3 text-2xl leading-snug sm:text-3xl">{w.title}</h3>
              <p className="mt-1 text-[15px] text-ink-faint italic">{w.school}</p>
              <ul className="mt-6 space-y-3 border-l-2 border-gold/40 pl-4">
                {w.summary.map((s) => (
                  <li key={s} className="text-[15px] leading-relaxed text-ink-soft">
                    {s}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
