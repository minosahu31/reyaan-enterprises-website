import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ 
  variable: '--font-inter', 
  subsets: ['latin'],
  display: 'swap',
})

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Reyaan Enterprises | Procurement, Supply Chain & Government Solutions',
    template: '%s | Reyaan Enterprises',
  },
  description: 'Reyaan Enterprises - Your trusted partner for procurement, supply chain management, government contracts (GeM), and technology services across India.',
  keywords: ['procurement', 'supply chain', 'GeM', 'government tenders', 'technology services', 'enterprise solutions', 'India'],
  authors: [{ name: 'Reyaan Enterprises' }],
  creator: 'Reyaan Enterprises',
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Reyaan Enterprises',
    title: 'Reyaan Enterprises | Procurement, Supply Chain & Government Solutions',
    description: 'Your trusted partner for procurement, supply chain management, government contracts, and technology services across India.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reyaan Enterprises',
    description: 'Procurement, Supply Chain & Government Solutions',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
