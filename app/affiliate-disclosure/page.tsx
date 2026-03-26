import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Affiliate Disclosure',
  description: 'How AI Image Review earns revenue and how it affects our editorial process.',
  alternates: { canonical: 'https://best-ai-image-generators.com/affiliate-disclosure' },
}

export default function AffiliateDisclosurePage() {
  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Breadcrumb */}
        <nav className="text-xs text-stone-400 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-navy-900 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-stone-600">Affiliate Disclosure</span>
        </nav>

        {/* Header */}
        <div className="mb-10 pb-8 border-b border-stone-200">
          <h1 className="font-serif text-3xl font-bold text-navy-900 mb-3">Affiliate Disclosure</h1>
          <p className="text-xs text-stone-400">Last updated: March 2026</p>
        </div>

        {/* Content */}
        <div className="bg-white border border-stone-200 p-8 space-y-8">

          <section>
            <h2 className="font-serif text-xl font-bold text-navy-900 mb-3">FTC Compliance Statement</h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              In accordance with the Federal Trade Commission (FTC) guidelines on endorsements and testimonials,
              AI Image Review participates in affiliate marketing programmes. When you click certain links on this
              site and subsequently purchase or subscribe to a service, we may receive a commission. This commission
              comes at no additional cost to you.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-navy-900 mb-3">How We Earn Revenue</h2>
            <p className="text-sm text-stone-600 leading-relaxed mb-3">This site generates revenue through:</p>
            <ul className="text-sm text-stone-600 space-y-2 pl-4 border-l-2 border-stone-200">
              <li>Affiliate commissions from software subscriptions (e.g. Midjourney, Leonardo AI, Adobe)</li>
              <li>Display advertising via Google AdSense</li>
              <li>Occasional sponsored content, which is always labelled explicitly as such</li>
            </ul>
            <p className="text-sm text-stone-600 leading-relaxed mt-3">
              Affiliate links are identified visually where possible. When you see a &ldquo;Try&rdquo;, &ldquo;Visit&rdquo;,
              or &ldquo;Get Started&rdquo; button on a comparison table, that link is typically an affiliate link.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-navy-900 mb-3">Editorial Independence</h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              Affiliate relationships do not influence our scores or rankings. All scores are determined before any
              commercial agreement is signed. Tools are ranked by their actual performance in our testing
              methodology — not by commission rate or commercial relationship.
            </p>
            <p className="text-sm text-stone-600 leading-relaxed mt-3">
              We do not accept payment for ranking positions, publish sponsored rankings without disclosure,
              or alter scores based on commercial feedback from vendors.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-navy-900 mb-3">Testing Methodology</h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              Each tool is evaluated against 500 standardised prompts across 8 categories: photorealism,
              illustration, typography, abstract art, architecture, portrait, product photography, and
              conceptual art. Scores are averaged across three independent reviewers. We do not use
              cherry-picked outputs in comparisons — all sample images are generated from the same
              standardised prompt set.
            </p>
            <p className="text-sm text-stone-600 leading-relaxed mt-3">
              Reviews are updated quarterly or whenever a tool releases a major version update.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-navy-900 mb-3">Questions</h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              If you have questions about our affiliate relationships or methodology, please refer to our{' '}
              <Link href="/privacy-policy" className="text-navy-800 underline underline-offset-2 hover:text-navy-600">
                Privacy Policy
              </Link>.
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
