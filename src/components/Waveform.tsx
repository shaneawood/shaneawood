import { cn } from '@/lib/utils'

// Deterministic bar heights so server and client render the same markup.
const HEIGHTS = [
  22, 38, 54, 30, 68, 44, 80, 36, 58, 26, 72, 48, 90, 40, 62, 28, 76, 52, 34, 66, 46, 84, 30,
  56, 70, 38, 60, 24, 78, 42, 64, 32, 88, 50, 36, 58, 28, 74, 44, 20,
]

export function Waveform({ className, bars = HEIGHTS.length }: { className?: string; bars?: number }) {
  return (
    <div aria-hidden className={cn('wave flex items-center gap-[5px]', className)}>
      {HEIGHTS.slice(0, bars).map((h, i) => (
        <span
          key={i}
          style={{ height: `${h}%`, animationDelay: `${(i % 9) * -0.18}s` }}
        />
      ))}
    </div>
  )
}
