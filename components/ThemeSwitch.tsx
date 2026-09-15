'use client'

import { useTheme } from 'next-themes'
import { useSyncExternalStore } from 'react'

function noop() {
  return () => {}
}

function useMounted() {
  return useSyncExternalStore(noop, () => true, () => false)
}

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme()
  const mounted = useMounted()

  if (!mounted) {
    return <div className="w-10 h-10" /> 
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle Dark Mode"
    >
      {theme === 'dark' ? 'LIT' : 'DRK'}
    </button>
  )
}