import './globals.css'
import Link from 'next/link'
import { Providers } from './providers'
import ThemeSwitch from '@/components/ThemeSwitch'

export const metadata = {
  title: 'blog page ',
  description: 'A minimalist portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="max-w-2xl mx-auto px-6 py-10 font-serif transition-colors duration-300 bg-white text-black dark:bg-black dark:text-white">
        
        <Providers>
          <header className="flex justify-between items-center mb-16">
            <div className="font-bold text-xl">
              <Link href="/">@dhruv</Link>
            </div>
            <div>
              <nav className="max-w-2xl flex items-center gap-6 text-sm text-gray-500">
                <Link href="/" className="hover:text-black dark:hover:text-white">Home</Link>
                <Link href="/favorites" className="hover:text-black dark:hover:text-white">Favorites</Link>
                <ThemeSwitch />
              </nav>
            </div>
          </header>

          <main>
            {children}
          </main>

          

          {/* THE FOOTER SIGNATURE */}
          <footer className="pt-10 pb-20 text-center space-y-4">
            <div className="flex justify-center gap-2 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            </div>

            {/* Signature Font Effect */}
            <div className="font-cursive text-3xl text-blue-500 opacity-80" style={{ fontFamily: 'cursive' }}>
              dhruv
            </div>

            <p className="text-xs text-gray-500 font-sans">
              This site template is not open sourced and  not available on <a href="#" className="underline">GitHub</a>.
            </p>
            <p className="text-xs text-gray-500 font-sans underline italic">singh.dhruv9097@gmail.com</p>
          </footer>


        </Providers>
        
      </body>
    </html>
  )
}