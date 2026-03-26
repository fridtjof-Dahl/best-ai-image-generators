'use client'
import { useState } from 'react'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }

    setLoading(true)

    // Track via GA4
    if (typeof window !== 'undefined' && (window as any).trackEvent) {
      (window as any).trackEvent('newsletter_signup', { location: 'homepage_newsletter' })
    }

    await new Promise((r) => setTimeout(r, 600))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="border border-stone-600 bg-navy-800 p-5 text-center">
        <p className="text-white text-sm font-medium">Subscribed.</p>
        <p className="text-stone-400 text-xs mt-1">
          We will notify you when new quarterly results are published.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Newsletter subscription">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <label htmlFor="newsletter-email" className="sr-only">Email address</label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full px-4 py-3 bg-navy-800 border border-stone-600 text-white placeholder-stone-400 text-sm focus:outline-none focus:border-stone-400 transition-colors"
            style={{ borderRadius: '2px' }}
            autoComplete="email"
            required
            aria-required="true"
            aria-describedby={error ? 'newsletter-error' : undefined}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="btn-cta text-sm px-6 py-3 whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? 'Subscribing...' : 'Subscribe'}
        </button>
      </div>
      {error && (
        <p id="newsletter-error" role="alert" className="mt-2 text-xs text-red-400">
          {error}
        </p>
      )}
    </form>
  )
}
