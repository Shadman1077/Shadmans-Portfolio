import type { Metadata } from 'next'
import { Syne, DM_Mono } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Shadman Sakeeb Khan — Web Developer & ML Enthusiast',
  description:
    'Portfolio of Shadman Sakeeb Khan — Web Developer at Thirteen Limited, Webflow expert, GSAP animator, and Machine Learning enthusiast based in Dhaka, Bangladesh.',
  keywords: [
    'Shadman Sakeeb Khan',
    'Web Developer',
    'Webflow Developer',
    'GSAP',
    'Machine Learning',
    'Bangladesh',
    'Dhaka',
    'Portfolio',
  ],
  authors: [{ name: 'Shadman Sakeeb Khan' }],
  openGraph: {
    title: 'Shadman Sakeeb Khan — Web Developer & ML Enthusiast',
    description:
      'Web developer at Thirteen Limited with 30+ production sites. BSc CSE from North South University, majoring in Machine Learning.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shadman Sakeeb Khan — Web Developer & ML Enthusiast',
    description: 'Web developer at Thirteen Limited with 30+ production sites.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmMono.variable}`}>
      <body className="bg-bg text-text font-syne overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  )
}
