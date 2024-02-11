import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './navbar/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yskaktube',
  description: 'Fake Youtube',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
return (
    <div lang="en" className={inter.className}>
      <Navbar />
      <main>{children}</main>
      <footer>
        {/* Footer content goes here */}
      </footer>
    </div>
  );
}
