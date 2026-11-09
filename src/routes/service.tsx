import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { adminRoles, editorialRoles, professionalService, universityService, type Role } from '@/data/site'
import { PageIntro, SectionLabel } from '@/components/PageIntro'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/service')({
  head: () => ({ meta: [{ title: 'Service — Shane A. Wood' }] }),
  component: Service,
})

function Service() {
  return (
    <>
      <PageIntro
        eyebrow="Service"
        title={
          <>
            Building the <em>programs</em> where writing gets taught.
          </>
        }
      >
        <p>
          Writing program administration at three universities, editorial work with <em>Composition Forum</em>,
          the <em>Journal of Writing Assessment</em>, and the <em>Journal of Writing Analytics</em>, and leadership
          across the field, including the CWPA Executive Board.
        </p>
      </PageIntro>

      <section className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionLabel n="01">Administration</SectionLabel>
        <RoleTimeline roles={adminRoles} />
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-5 sm:px-8">
        <SectionLabel n="02">Editorial</SectionLabel>
        <RoleTimeline roles={editorialRoles} />
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-5 sm:px-8">
        <SectionLabel n="03">University service</SectionLabel>
        <RoleTimeline
          roles={universityService.map((u) => ({
            title: u.institution,
            org: `${u.items.length} committees and roles`,
            dates: u.dates,
            duties: u.items,
          }))}
        />
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-5 sm:px-8">
        <SectionLabel n="04">Professional service</SectionLabel>
        <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-rule bg-rule sm:grid-cols-2">
          {professionalService.map((g) => (
            <div key={g.group} className="bg-paper p-6 sm:p-8">
              <h3 className="font-display text-2xl italic">{g.group}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <li key={it} className="rounded-full bg-paper-deep px-3 py-1 text-sm">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

function RoleTimeline({ roles }: { roles: Role[] }) {
  const [open, setOpen] = useState<number | null>(roles.findIndex((r) => r.duties?.length))

  return (
    <ol className="mt-8">
      {roles.map((r, i) => {
        const expandable = !!r.duties?.length
        const isOpen = open === i
        return (
          <li key={r.title + r.dates} className="border-b border-rule">
            <button
              type="button"
              disabled={!expandable}
              aria-expanded={expandable ? isOpen : undefined}
              onClick={() => setOpen(isOpen ? null : i)}
              className="grid w-full grid-cols-1 gap-1 py-5 text-left sm:grid-cols-[12rem_1fr_auto] sm:items-baseline sm:gap-6 enabled:cursor-pointer enabled:hover:text-gold"
            >
              <span className="font-mono text-xs text-ink-faint">{r.dates}</span>
              <span>
                <span className="font-display text-2xl leading-tight transition-colors">{r.title}</span>
                <span className="block text-[15px] text-ink-soft italic">{r.org}</span>
              </span>
              {expandable && (
                <ChevronDown
                  size={20}
                  className={cn('hidden transition-transform sm:block', isOpen && 'rotate-180')}
                  aria-hidden
                />
              )}
            </button>
            {expandable && isOpen && (
              <ul className="rise grid gap-2 pb-6 sm:ml-[13.5rem]">
                {r.duties!.map((d) => (
                  <li key={d} className="relative pl-5 text-[15px] text-ink-soft">
                    <span className="absolute top-[0.6em] left-0 h-1.5 w-1.5 rounded-full bg-gold" />
                    {d}
                  </li>
                ))}
              </ul>
            )}
          </li>
        )
      })}
    </ol>
  )
}
