import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Sidebar from './components/Sidebar'
import { NextAuthProvider} from "./providers.js"
const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Казик :)0)',
  description: 'casino',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  )
}
