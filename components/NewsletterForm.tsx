'use client'
import { useState } from 'react'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')

    // GA4: Track email signup conversion
    if (typeof window !== 'undefined' && (window as any).trackEvent) {
      (window as any).trackEvent('email_signup', {
        event_category: 'conversion',
        event_label: 'newsletter',
        // value: 5, // optional lead value for ROAS tracking
      })
    }

    // TODO: Replace with your actual email service (Mailchimp, ConvertKit, etc.)
    // Example for Mailchimp:
    // await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email }) })
    
    // Simulated success for now
    await new Promise(res => setTimeout(res, 800))
    setStatus('success')
    setEmail('')
  }

  if (status === 'success') {
    return (
      <div className="bg-green-500 bg-opacity-20 border border-green-400 rounded-xl p-6 text-center">
        <div className="text-3xl mb-2">✅</div>
        <p className="text-green-200 font-semibold text-lg">You&apos;re in!</p>
        <p className="text-green-300 text-sm mt-1">Check your inbox to confirm your subscription.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" noValidate>
      <label htmlFor="newsletter-email" className="sr-only">Email address</label>
      <input
        id="newsletter-email"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Enter your email address"
        required
        autoComplete="email"
        className="flex-1 px-4 py-3 rounded-lg text-gray-900 bg-white border border-blue-600 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-400"
        aria-label="Email address for newsletter"
        disabled={status === 'loading'}
      />
      <button
        type="submit"
        disabled={status === 'loading' || !email}
        className="btn-primary whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
        aria-label="Subscribe to newsletter"
      >
        {status === 'loading' ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Subscribing...
          </span>
        ) : (
          '📧 Subscribe Free'
        )}
      </button>
    </form>
  )
}
