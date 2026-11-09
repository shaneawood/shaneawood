import { Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { pedagogue, profile } from '@/data/site'

const NAV = [
  { to: '/teaching', label: 'Teaching' },
  { to: '/research', label: 'Research' },
  { to: '/service', label: 'Service' },
  { to: '/contact', label: 'Contact' },
] as const

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-rule/80 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          to="/"
          className="group flex items-baseline gap-3"
          onClick={() => setOpen(false)}
          aria-label={`${profile.name}, home`}
        >
          <span className="font-display text-2xl font-semibold tracking-tight">
            {profile.monogram}
          </span>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint transition-colors group-hover:text-gold sm:inline">
            {profile.name}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="link-u text-[15px] text-ink-soft transition-colors hover:text-ink"
              activeProps={{ className: 'text-gold! hover:text-gold!' }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={pedagogue.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-ink px-3.5 py-1 text-[14px] transition-colors hover:bg-ink hover:text-paper"
          >
            Pedagogue <ArrowUpRight size={14} />
          </a>
        </nav>

        <button
          type="button"
          className="-mr-2 p-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col gap-1 bg-paper px-5 pt-8 md:hidden"
        >
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="font-display border-b border-rule py-4 text-3xl"
            activeOptions={{ exact: true }}
            activeProps={{ className: 'text-gold' }}
          >
            Home
          </Link>
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="font-display border-b border-rule py-4 text-3xl"
              activeProps={{ className: 'text-gold' }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={pedagogue.url}
            target="_blank"
            rel="noreferrer"
            className="font-display flex items-center gap-2 py-4 text-3xl"
          >
            Pedagogue <ArrowUpRight size={22} />
          </a>
        </nav>
      )}
    </header>
  )
}
