'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`bg-white sticky top-0 z-50 transition-shadow duration-200 ${
        scrolled ? 'shadow-soft border-b border-stone-200' : 'border-b border-stone-100'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Wordmark */}
          <Link
            href="/"
            className="font-serif font-bold text-lg text-navy-900 hover:text-navy-700 tracking-tight transition-colors"
            aria-label="Best AI Image Generators — home"
          >
            AI Image Review
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            <Link href="/blog" className="btn-ghost text-sm">Reviews</Link>
            <Link href="/blog/best-ai-image-generator-free" className="btn-ghost text-sm">Free Tools</Link>
            <Link href="/blog/dalle3-vs-midjourney" className="btn-ghost text-sm">Comparisons</Link>
            <Link href="/blog/how-to-use-stable-diffusion-locally" className="btn-ghost text-sm">Tutorials</Link>
            <Link href="/#comparison" className="btn-primary ml-4 text-sm px-5 py-2">
              Compare Tools
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-stone-600 hover:text-navy-900 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-stone-100 space-y-1">
            {[
              { href: '/blog', label: 'Reviews' },
              { href: '/blog/best-ai-image-generator-free', label: 'Free Tools' },
              { href: '/blog/dalle3-vs-midjourney', label: 'Comparisons' },
              { href: '/blog/how-to-use-stable-diffusion-locally', label: 'Tutorials' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-sm text-stone-700 hover:text-navy-900 hover:bg-stone-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/#comparison"
                className="btn-primary w-full text-center text-sm py-2.5"
                onClick={() => setIsOpen(false)}
              >
                Compare Tools
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
