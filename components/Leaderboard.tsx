'use client'

import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { trending, hypeScore, isSample } from '@/content/trending'

const DURATION_MS = 900

function subscribeToMotionPreference(callback: () => void) {
  const query = window.matchMedia('(prefers-reduced-motion: reduce)')
  query.addEventListener('change', callback)
  return () => query.removeEventListener('change', callback)
}

function useReducedMotion() {
  return useSyncExternalStore(
    subscribeToMotionPreference,
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    () => true,
  )
}

function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

export default function Leaderboard() {
  const reducedMotion = useReducedMotion()
  const [progress, setProgress] = useState(0)
  const frame = useRef<number | undefined>(undefined)

  useEffect(() => {
    if (reducedMotion) return

    const start = performance.now()

    const tick = (now: number) => {
      const elapsed = Math.min((now - start) / DURATION_MS, 1)
      setProgress(easeOut(elapsed))
      if (elapsed < 1) {
        frame.current = requestAnimationFrame(tick)
      }
    }

    frame.current = requestAnimationFrame(tick)
    return () => {
      if (frame.current !== undefined) cancelAnimationFrame(frame.current)
    }
  }, [reducedMotion])

  const shown = reducedMotion ? 1 : progress

  return (
    <div className="border border-ink/10 dark:border-white/10">
      <div className="flex items-baseline justify-between gap-4 px-4 py-3 border-b border-ink/10 dark:border-white/10 font-mono text-xs text-ink/50 dark:text-white/50">
        <span>hype score = stars today &times; 1.25</span>
        {isSample && (
          <span className="border border-ink/20 dark:border-white/20 px-1.5 py-0.5">sample</span>
        )}
      </div>

      <table className="w-full font-mono text-sm">
        <tbody>
          {trending.map((repo) => {
            const score = hypeScore(repo)
            return (
              <tr
                key={repo.name}
                className="border-b border-ink/5 dark:border-white/5 last:border-b-0"
              >
                <td className="px-4 py-2.5 truncate max-w-0 w-full">{repo.name}</td>
                <td className="px-4 py-2.5 text-ink/40 dark:text-white/40 hidden sm:table-cell whitespace-nowrap">
                  {repo.language}
                </td>
                <td className="px-4 py-2.5 text-ink/40 dark:text-white/40 text-right whitespace-nowrap">
                  +{repo.starsToday.toLocaleString()}
                </td>
                <td className="px-4 py-2.5 text-right tabular-nums font-medium text-accent dark:text-accent-bright whitespace-nowrap">
                  {Math.round(score * shown).toLocaleString()}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
