import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Paddy - Professional Influencer & Content Creator',
  description: 'Professional content creator specializing in brand campaigns, lifestyle photography, and social media strategy.',
  openGraph: {
    title: 'Paddy - Professional Influencer & Content Creator',
    description: 'Professional content creator specializing in brand campaigns, lifestyle photography, and social media strategy.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paddy - Professional Influencer & Content Creator',
    description: 'Professional content creator specializing in brand campaigns, lifestyle photography, and social media strategy.',
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