'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-extrabold text-xl text-blue-900 hover:text-blue-700 transition-colors">
            <span className="text-2xl" aria-hidden="true">🎨</span>
            <span>BestAI<span className="text-orange-500">Image</span></span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/blog" className="text-gray-600 hover:text-blue-700 font-medium transition-colors">Reviews</Link>
            <Link href="/blog/best-ai-image-generator-free" className="text-gray-600 hover:text-blue-700 font-medium transition-colors">Free Tools</Link>
            <Link href="/blog/dalle3-vs-midjourney" className="text-gray-600 hover:text-blue-700 font-medium transition-colors">Comparisons</Link>
            <Link href="/blog/how-to-use-stable-diffusion-locally" className="text-gray-600 hover:text-blue-700 font-medium transition-colors">Tutorials</Link>
            <Link
              href="#comparison"
              className="btn-primary text-sm py-2 px-4"
              onClick={() => {
                /* GA4: CTA click tracking */
                if (typeof window !== 'undefined' && (window as any).trackEvent) {
                  (window as any).trackEvent('cta_click', { location: 'nav', cta_text: 'Compare Tools' })
                }
              }}
            >
              Compare Tools
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-blue-700 hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-3">
              <Link href="/blog" className="text-gray-700 hover:text-blue-700 font-medium py-2 transition-colors" onClick={() => setIsOpen(false)}>Reviews</Link>
              <Link href="/blog/best-ai-image-generator-free" className="text-gray-700 hover:text-blue-700 font-medium py-2 transition-colors" onClick={() => setIsOpen(false)}>Free Tools</Link>
              <Link href="/blog/dalle3-vs-midjourney" className="text-gray-700 hover:text-blue-700 font-medium py-2 transition-colors" onClick={() => setIsOpen(false)}>Comparisons</Link>
              <Link href="/blog/how-to-use-stable-diffusion-locally" className="text-gray-700 hover:text-blue-700 font-medium py-2 transition-colors" onClick={() => setIsOpen(false)}>Tutorials</Link>
              <Link href="#comparison" className="btn-primary text-sm w-full text-center" onClick={() => setIsOpen(false)}>Compare Tools</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
