import type { Metadata } from 'next'
import './globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Script from 'next/script'

export const metadata: Metadata = {
  title: {
    default: 'Best AI Image Generators 2026 — Independent Reviews & Comparisons',
    template: '%s | AI Image Review',
  },
  description: 'Independent reviews and comparisons of AI image generators. Tested against 500+ prompts by three reviewers. Updated quarterly.',
  keywords: ['AI image generator', 'best AI image generator', 'DALL-E 3', 'Midjourney', 'Stable Diffusion', 'AI art generator', 'free AI image generator'],
  authors: [{ name: 'AI Image Review' }],
  creator: 'AI Image Review',
  publisher: 'AI Image Review',
  metadataBase: new URL('https://best-ai-image-generators.com'),
  alternates: { canonical: '/' },
  openGraph: {
    type:      'website',
    locale:    'en_US',
    url:       'https://best-ai-image-generators.com',
    siteName:  'AI Image Review',
    title:     'Best AI Image Generators 2026 — Independent Reviews & Comparisons',
    description: 'Independent reviews and comparisons of AI image generators. Tested against 500+ prompts. Updated quarterly.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'AI Image Review — Best AI Image Generators 2026' }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Best AI Image Generators 2026 — AI Image Review',
    description: 'Independent reviews and comparisons. 30+ tools tested.',
    images:      ['/og-image.jpg'],
  },
  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:               true,
      follow:              true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet':       -1,
    },
  },
}

const GA_ID = 'G-XXXXXXXXXX'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics 4 */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { page_path: window.location.pathname });
            window.trackEvent = function(name, params) {
              if (typeof gtag === 'function') gtag('event', name, params);
            };
          `}
        </Script>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">

        {/* Affiliate disclosure — minimal, non-intrusive */}
        <div className="bg-stone-100 border-b border-stone-200 text-xs text-center py-2 px-4 text-stone-500">
          This site contains affiliate links.{' '}
          <a href="/affiliate-disclosure" className="underline underline-offset-2 hover:text-stone-700 transition-colors">
            Disclosure
          </a>
        </div>

        <Navigation />
        <main className="flex-1" id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
