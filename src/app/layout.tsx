import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Paddy Chougule - Professional Body Double & Stunt Artist | Mumbai',
  description: 'Paddy Chougule - Professional body double and stunt artist for Hardik Pandya & Jasprit Bumrah. 6+ years experience with 50+ projects. Based in Mumbai, India. Available for domestic and international shoots.',
  openGraph: {
    title: 'Paddy Chougule - Professional Body Double & Stunt Artist | Mumbai',
    description: 'Paddy Chougule - Professional body double and stunt artist for Hardik Pandya & Jasprit Bumrah. 6+ years experience with 50+ projects. Based in Mumbai, India. Available for domestic and international shoots.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paddy Chougule - Professional Body Double & Stunt Artist',
    description: 'Professional body double and stunt artist for Hardik Pandya & Jasprit Bumrah. 6+ years experience with 50+ projects.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-background text-white">
      <body className={inter.className}>
        <div className="min-h-screen bg-background">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}