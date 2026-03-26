import type { Metadata } from 'next'
import './globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Script from 'next/script'

export const metadata: Metadata = {
  title: {
    default: 'Best AI Image Generators 2026 – Expert Reviews & Comparisons',
    template: '%s | Best AI Image Generators',
  },
  description: 'Compare the top AI image generators of 2026. Expert reviews, side-by-side comparisons, and recommendations for every use case and budget.',
  keywords: ['AI image generator', 'best AI image generator', 'DALL-E 3', 'Midjourney', 'Stable Diffusion', 'free AI art', 'AI art generator'],
  authors: [{ name: 'Best AI Image Generators Editorial Team' }],
  creator: 'Best AI Image Generators',
  publisher: 'Best AI Image Generators',
  metadataBase: new URL('https://best-ai-image-generators.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://best-ai-image-generators.com',
    siteName: 'Best AI Image Generators',
    title: 'Best AI Image Generators 2026 – Expert Reviews & Comparisons',
    description: 'Compare the top AI image generators of 2026. Expert reviews, side-by-side comparisons, and recommendations for every use case and budget.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Best AI Image Generators 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best AI Image Generators 2026',
    description: 'Expert reviews and comparisons of the best AI image generators.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

// GA4 Measurement ID – replace with your actual ID
const GA_ID = 'G-XXXXXXXXXX'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
              send_page_view: true,
            });
            
            // Custom GA4 conversion events helper
            window.trackEvent = function(eventName, params) {
              if (typeof gtag === 'function') {
                gtag('event', eventName, params);
              }
            };
          `}
        </Script>
        {/* Heatmap placeholder – e.g. Hotjar or Microsoft Clarity */}
        {/* <Script id="hotjar" strategy="afterInteractive">...</Script> */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-gray-900 antialiased">
        {/* Affiliate Disclosure Banner */}
        <div className="bg-blue-900 text-blue-100 text-xs text-center py-2 px-4">
          <strong>Disclosure:</strong> We may earn commissions from links on this page at no extra cost to you.{' '}
          <a href="/affiliate-disclosure" className="underline hover:text-white">Learn more</a>
        </div>
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
