import './globals.css'
import Link from 'next/link'
import { Archivo, Newsreader, JetBrains_Mono } from 'next/font/google'
import { Providers } from './providers'
import SiteNav from '@/components/SiteNav'
import { profile } from '@/content/profile'

const displayFont = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  variable: '--font-display',
})

const bodyFont = Newsreader({
  subsets: ['latin'],
  variable: '--font-body',
})

const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata = {
  title: `${profile.name} — ${profile.title}`,
  description: `Portfolio of ${profile.name}, ${profile.title}.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}>
      <body className="max-w-4xl mx-auto px-6 py-10 font-serif transition-colors duration-300 bg-paper text-ink dark:bg-ink dark:text-paper">

        <Providers>
          <SiteNav />

          <main>
            {children}
          </main>

          <footer className="mt-32 pt-8 border-t border-ink/10 dark:border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 font-mono text-xs text-ink/50 dark:text-white/50">
            <div className="flex gap-5">
              <Link href="/blog" className="hover:text-ink dark:hover:text-paper">Blog</Link>
              <Link href="/favorites" className="hover:text-ink dark:hover:text-paper">Favorites</Link>
            </div>
            <div className="flex gap-5">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink dark:hover:text-paper">GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink dark:hover:text-paper">LinkedIn</a>
              <a href={`mailto:${profile.email}`} className="hover:text-ink dark:hover:text-paper">{profile.email}</a>
            </div>
          </footer>

        </Providers>

      </body>
    </html>
  )
}
