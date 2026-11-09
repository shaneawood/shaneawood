import type { ReactNode } from 'react'

export function PageIntro({
  eyebrow,
  title,
  note,
  children,
}: {
  eyebrow: string
  title: ReactNode
  note?: string
  children?: ReactNode
}) {
  return (
    <header className="relative mx-auto max-w-6xl px-5 pt-14 pb-12 sm:px-8 md:pt-20">
      <p className="rise font-mono text-xs uppercase tracking-[0.22em] text-gold">{eyebrow}</p>
      <h1
        className="rise mt-4 max-w-3xl text-5xl leading-[1.02] font-light sm:text-6xl md:text-7xl"
        style={{ '--d': '80ms' } as React.CSSProperties}
      >
        {title}
      </h1>
      {children && (
        <div
          className="rise mt-6 max-w-2xl text-lg text-ink-soft"
          style={{ '--d': '160ms' } as React.CSSProperties}
        >
          {children}
        </div>
      )}
      {note && (
        <p
          className="pen-note rise absolute right-8 bottom-6 hidden max-w-[14rem] -rotate-6 text-2xl lg:block"
          style={{ '--d': '700ms' } as React.CSSProperties}
        >
          {note}
        </p>
      )}
    </header>
  )
}

export function SectionLabel({ n, children }: { n: string; children: ReactNode }) {
  return (
    <div className="flex items-baseline gap-4 border-t border-ink pt-3">
      <span className="font-mono text-xs text-gold">§ {n}</span>
      <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-ink">{children}</h2>
    </div>
  )
}
