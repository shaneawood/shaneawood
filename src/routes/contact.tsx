import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { ArrowUpRight, Check, Loader2, Mail, Send } from 'lucide-react'
import { pedagogue, profile } from '@/data/site'
import { PageIntro } from '@/components/PageIntro'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/contact')({
  head: () => ({ meta: [{ title: 'Contact — Shane A. Wood' }] }),
  component: Contact,
})

type Status = 'idle' | 'sending' | 'sent' | 'error'

const field =
  'peer mt-2 w-full rounded-sm border border-ink/20 bg-white px-3.5 py-2.5 text-lg outline-none transition-colors placeholder:text-ink-faint/70 focus:border-gold focus:ring-1 focus:ring-gold focus-visible:outline-none'

const labelText = 'font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft'

function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    try {
      // Post to the static skeleton so Netlify's form handler (not the SSR function) receives it.
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString(),
      })
      if (!res.ok) throw new Error(String(res.status))
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title={
          <>
            Questions and <span className="hl">collaborations</span>.
          </>
        }
      >
        <p>
          Whether you’re a student, a colleague, or someone interested in working together, send a message below or
          email me directly.
        </p>
      </PageIntro>

      <section className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 md:grid-cols-[1.5fr_1fr]">
        <div className="rounded-sm border border-rule bg-white p-6 shadow-sm sm:p-10">
          {status === 'sent' ? (
            <div className="flex min-h-[24rem] flex-col items-start justify-center" role="status">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold text-gold">
                <Check size={28} />
              </span>
              <h2 className="mt-6 text-4xl font-light">Thanks, message received.</h2>
              <p className="mt-3 text-ink-soft">I’ll get back to you as soon as I can.</p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-8 rounded-full border border-ink px-5 py-2 text-sm transition-colors hover:bg-ink hover:text-paper"
              >
                Send another
              </button>
            </div>
          ) : (
            <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={onSubmit} className="space-y-6">
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don’t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </p>

              <fieldset>
                <legend className="sr-only">Name</legend>
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="block">
                    <span className={labelText}>
                      First name <span className="text-gold">*</span>
                    </span>
                    <input name="first-name" required autoComplete="given-name" className={field} />
                  </label>
                  <label className="block">
                    <span className={labelText}>
                      Last name <span className="text-gold">*</span>
                    </span>
                    <input name="last-name" required autoComplete="family-name" className={field} />
                  </label>
                </div>
              </fieldset>

              <label className="block">
                <span className={labelText}>
                  Email <span className="text-gold">*</span>
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="you@university.edu"
                  className={cn(field, 'user-invalid:border-gold')}
                />
                <span className="mt-1 hidden text-sm text-gold peer-user-invalid:block">Please enter a valid email address.</span>
              </label>

              <label className="block">
                <span className={labelText}>
                  Message <span className="text-gold">*</span>
                </span>
                <textarea
                  name="comment"
                  required
                  rows={6}
                  placeholder="How can I help?"
                  className={cn(field, 'resize-y leading-relaxed')}
                />
              </label>

              {status === 'error' && (
                <p role="alert" className="rounded-sm border border-gold/40 bg-gold/5 px-4 py-3 text-[15px] text-gold-deep">
                  Something went wrong sending your message. Please try again, or email{' '}
                  <a className="underline" href={`mailto:${profile.email}`}>{profile.email}</a>.
                </p>
              )}

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="font-mono text-[11px] text-ink-faint"><span className="text-gold">*</span> required</p>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3 text-paper transition-transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60"
                >
                  {status === 'sending' ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                </button>
              </div>
            </form>
          )}
        </div>

        <aside className="space-y-10">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">Email</p>
            <a href={`mailto:${profile.email}`} className="mt-2 inline-flex items-center gap-2 font-display text-2xl hover:text-gold">
              <Mail size={20} /> <span className="link-u">{profile.email}</span>
            </a>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">Office</p>
            <p className="mt-2 text-lg">{profile.department}</p>
            <p className="text-ink-soft">{profile.institution}</p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">Elsewhere</p>
            <ul className="mt-2 space-y-2">
              {profile.socials.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="group inline-flex items-baseline gap-2 text-lg">
                    <span className="link-u">{s.label}</span>
                    <span className="font-mono text-sm text-ink-faint">{s.handle}</span>
                    <ArrowUpRight size={14} className="opacity-50 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
              <li>
                <a href={pedagogue.url} target="_blank" rel="noreferrer" className="group inline-flex items-baseline gap-2 text-lg">
                  <span className="link-u">Pedagogue podcast</span>
                  <ArrowUpRight size={14} className="opacity-50 group-hover:opacity-100" />
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </>
  )
}
