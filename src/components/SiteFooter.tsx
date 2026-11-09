import { Link } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'
import { pedagogue, profile } from '@/data/site'

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-4xl leading-tight font-light">
            Let’s talk <em className="text-gold-bright">writing</em>.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="link-u mt-5 inline-block font-mono text-sm text-paper/80 hover:text-paper"
          >
            {profile.email}
          </a>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/50">Pages</p>
          <ul className="mt-4 space-y-2 text-paper/85">
            <li><Link to="/teaching" className="link-u">Teaching</Link></li>
            <li><Link to="/research" className="link-u">Research</Link></li>
            <li><Link to="/service" className="link-u">Service</Link></li>
            <li><Link to="/contact" className="link-u">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/50">Elsewhere</p>
          <ul className="mt-4 space-y-2 text-paper/85">
            <li>
              <a href={pedagogue.url} target="_blank" rel="noreferrer" className="link-u inline-flex items-center gap-1">
                Pedagogue podcast <ArrowUpRight size={14} />
              </a>
            </li>
            {profile.socials.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noreferrer" className="link-u inline-flex items-center gap-1">
                  {s.label} <ArrowUpRight size={14} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 px-5 py-6 font-mono text-[11px] uppercase tracking-[0.18em] text-paper/45 sm:flex-row sm:px-8">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>{profile.department} · {profile.institution}</span>
        </div>
      </div>
    </footer>
  )
}
