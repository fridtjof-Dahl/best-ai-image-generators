import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How AI Image Review collects, uses, and protects your personal data. GDPR compliant.',
  alternates: { canonical: 'https://best-ai-image-generators.com/privacy-policy' },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Breadcrumb */}
        <nav className="text-xs text-stone-400 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-navy-900 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-stone-600">Privacy Policy</span>
        </nav>

        {/* Header */}
        <div className="mb-10 pb-8 border-b border-stone-200">
          <h1 className="font-serif text-3xl font-bold text-navy-900 mb-3">Privacy Policy</h1>
          <p className="text-xs text-stone-400">Last updated: 1 March 2026</p>
        </div>

        {/* Content */}
        <div className="bg-white border border-stone-200 p-8 space-y-8 text-sm text-stone-600 leading-relaxed">

          <section>
            <h2 className="font-serif text-xl font-bold text-navy-900 mb-3">1. Who We Are</h2>
            <p>
              This privacy policy applies to AI Image Review, operating the website{' '}
              <strong className="text-stone-700">best-ai-image-generators.com</strong> (&ldquo;the Site&rdquo;).
              We are the data controller for the personal data described in this policy.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-navy-900 mb-3">2. Data We Collect</h2>
            <p className="mb-3"><strong className="text-stone-700">Data you provide directly:</strong></p>
            <ul className="space-y-1.5 pl-4 border-l-2 border-stone-200 mb-4">
              <li>Email address — when you subscribe to our newsletter</li>
            </ul>
            <p className="mb-3"><strong className="text-stone-700">Data collected automatically:</strong></p>
            <ul className="space-y-1.5 pl-4 border-l-2 border-stone-200">
              <li>Pages visited, time on page, referring site (via Google Analytics 4)</li>
              <li>Device type, operating system, browser version (anonymised)</li>
              <li>Approximate geographic location (country/region level only)</li>
              <li>Clicks on affiliate links (for attribution purposes)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-navy-900 mb-3">3. How We Use Your Data</h2>
            <ul className="space-y-1.5 pl-4 border-l-2 border-stone-200">
              <li>To send the newsletter you subscribed to</li>
              <li>To understand aggregate traffic and improve content</li>
              <li>To attribute affiliate revenue for accounting purposes</li>
              <li>To comply with legal obligations</li>
            </ul>
            <p className="mt-3">We do not sell personal data to third parties.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-navy-900 mb-3">4. Legal Basis (GDPR)</h2>
            <ul className="space-y-1.5 pl-4 border-l-2 border-stone-200">
              <li><strong className="text-stone-700">Newsletter:</strong> Consent (Art. 6(1)(a) GDPR)</li>
              <li><strong className="text-stone-700">Analytics:</strong> Legitimate interests (Art. 6(1)(f) GDPR) — understanding site usage to improve content</li>
              <li><strong className="text-stone-700">Affiliate tracking:</strong> Legitimate interests — revenue attribution</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-navy-900 mb-3">5. Cookies</h2>
            <p className="mb-3">We use the following cookies:</p>
            <div className="overflow-x-auto">
              <table className="data-table text-xs w-full">
                <thead>
                  <tr>
                    <th>Cookie</th>
                    <th>Provider</th>
                    <th>Purpose</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-mono">_ga, _ga_*</td>
                    <td>Google Analytics</td>
                    <td>Usage analytics</td>
                    <td>2 years</td>
                  </tr>
                  <tr>
                    <td className="font-mono">_gcl_au</td>
                    <td>Google AdSense</td>
                    <td>Ad conversion</td>
                    <td>90 days</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3">You can opt out of Google Analytics via the{' '}
              <a href="https://tools.google.com/dlpage/gaoptout" className="text-navy-800 underline underline-offset-2" target="_blank" rel="noopener noreferrer">
                GA opt-out browser add-on
              </a>.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-navy-900 mb-3">6. Third-Party Services</h2>
            <ul className="space-y-1.5 pl-4 border-l-2 border-stone-200">
              <li><strong className="text-stone-700">Google Analytics 4:</strong> anonymised traffic data. IP addresses are anonymised before storage. <a href="https://policies.google.com/privacy" className="text-navy-800 underline underline-offset-2" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
              <li><strong className="text-stone-700">Google AdSense:</strong> advertising. Governed by Google&apos;s advertising policies.</li>
              <li><strong className="text-stone-700">Affiliate networks</strong> (e.g. ShareASale, Impact, direct programmes): receive click attribution data when you follow an affiliate link.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-navy-900 mb-3">7. Data Retention</h2>
            <ul className="space-y-1.5 pl-4 border-l-2 border-stone-200">
              <li>Newsletter email addresses: retained until you unsubscribe</li>
              <li>Analytics data: retained per Google Analytics default settings (up to 14 months)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-navy-900 mb-3">8. Your Rights (GDPR / UK GDPR)</h2>
            <p className="mb-3">Under GDPR you have the right to:</p>
            <ul className="space-y-1.5 pl-4 border-l-2 border-stone-200">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent at any time (newsletter unsubscribe link in every email)</li>
              <li>Lodge a complaint with your national supervisory authority</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-navy-900 mb-3">9. Changes to This Policy</h2>
            <p>
              We will update this policy when our data practices change. The &ldquo;Last updated&rdquo; date at the top of this page reflects the most recent revision.
            </p>
          </section>
        </div>

        {/* Back link */}
        <div className="mt-8">
          <Link href="/" className="text-sm text-stone-500 hover:text-navy-900 transition-colors">
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  )
}
