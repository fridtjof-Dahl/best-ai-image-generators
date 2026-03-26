import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About — Methodology & Team',
  description: 'How AI Image Review tests AI image generators, who is behind the site, and our editorial standards.',
  alternates: { canonical: 'https://best-ai-image-generators.com/about' },
}

const methodology = [
  {
    step: '01',
    title: 'Standardised prompt set',
    description: 'Every tool is evaluated against 500 standardised prompts spanning eight categories: photorealism, illustration, typography integration, abstract art, architectural visualisation, portrait, product photography, and conceptual art.',
  },
  {
    step: '02',
    title: 'Three independent reviewers',
    description: 'Scores are averaged across three reviewers with different professional backgrounds — a graphic designer, a photographer, and a content marketer. This reduces individual aesthetic bias.',
  },
  {
    step: '03',
    title: 'Blind scoring where possible',
    description: 'For head-to-head comparisons, outputs are evaluated without tool labels wherever the interface allows. Final scores are then de-anonymised and averaged.',
  },
  {
    step: '04',
    title: 'Quarterly re-testing',
    description: 'AI tools update frequently. We re-run the full prompt suite each quarter and run targeted tests whenever a tool releases a significant version update.',
  },
  {
    step: '05',
    title: 'Affiliate separation',
    description: 'Commercial agreements are negotiated only after scores are finalised. Ranking positions cannot be purchased. Affiliate commission rates do not appear in our scoring spreadsheets.',
  },
]

const scoringCategories = [
  { category: 'Output Quality',    weight: '35%', description: 'Fidelity to prompt, compositional quality, resolution' },
  { category: 'Ease of Use',       weight: '20%', description: 'Time to first image, prompt interface, learning curve' },
  { category: 'Speed',             weight: '15%', description: 'Average generation time across plan tiers' },
  { category: 'Consistency',       weight: '15%', description: 'Variance across re-runs of identical prompts' },
  { category: 'Commercial Terms',  weight: '10%', description: 'Licensing clarity, copyright indemnification' },
  { category: 'Value for Money',   weight: '5%',  description: 'Output quality relative to subscription cost' },
]

export default function AboutPage() {
  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Breadcrumb */}
        <nav className="text-xs text-stone-400 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-navy-900 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-stone-600">About</span>
        </nav>

        {/* Header */}
        <div className="mb-12 pb-8 border-b border-stone-200">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            About AI Image Review
          </h1>
          <p className="text-lg text-stone-500 leading-relaxed" style={{ maxWidth: '58ch' }}>
            We test AI image generators so you can make an informed decision. No sponsored rankings. No cherry-picked samples. Published methodology.
          </p>
        </div>

        {/* Mission */}
        <section className="mb-12">
          <div className="bg-white border border-stone-200 p-8">
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">Our editorial standard</h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                AI Image Review was founded on a simple premise: reviews of AI tools are often written by people who have used each tool for an hour, selected the best output, and published it alongside a commission link. That is not a review.
              </p>
              <p>
                We run every tool against an identical set of 500 prompts. We score all outputs, not selected ones. We average scores across three reviewers. We publish our methodology in full. We update every quarter.
              </p>
              <p>
                We accept affiliate commissions because they allow us to operate independently of vendor funding. Commercial agreements are signed only after scores are determined. Commission rates are not visible to reviewers.
              </p>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-navy-900 mb-6">Testing methodology</h2>
          <div className="space-y-4">
            {methodology.map((item) => (
              <div key={item.step} className="bg-white border border-stone-200 p-6 flex gap-6">
                <span className="font-mono text-xs font-bold text-stone-300 mt-0.5 flex-shrink-0 w-6">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-serif font-bold text-navy-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Scoring breakdown */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-navy-900 mb-6">Scoring breakdown</h2>
          <div className="bg-white border border-stone-200 overflow-hidden">
            <table className="data-table w-full" aria-label="Scoring category weights">
              <thead>
                <tr>
                  <th>Category</th>
                  <th className="text-right">Weight</th>
                  <th className="hidden sm:table-cell">What we measure</th>
                </tr>
              </thead>
              <tbody>
                {scoringCategories.map((row) => (
                  <tr key={row.category}>
                    <td className="font-medium text-navy-900 text-sm">{row.category}</td>
                    <td className="text-right font-mono text-xs text-stone-500">{row.weight}</td>
                    <td className="hidden sm:table-cell text-xs text-stone-500">{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-stone-400 mt-3">
            Total score is a weighted average. Individual category scores are also published on each tool review page.
          </p>
        </section>

        {/* Update cadence */}
        <section className="mb-12">
          <div className="bg-white border border-stone-200 p-8">
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">Update cadence</h2>
            <div className="space-y-3 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong className="text-stone-700">Quarterly full review:</strong> All tools are re-tested from scratch each quarter (January, April, July, October). Scores are recalculated and rankings updated.
              </p>
              <p>
                <strong className="text-stone-700">Version-triggered reviews:</strong> When a tool releases a major version update (e.g. Midjourney v5 → v6), we run a targeted re-test within two weeks of release.
              </p>
              <p>
                <strong className="text-stone-700">Timestamps:</strong> Every review page displays a &ldquo;Last tested&rdquo; date. Scores older than six months are marked as pending re-test.
              </p>
            </div>
          </div>
        </section>

        {/* Contact / Corrections */}
        <section>
          <div className="border border-stone-200 bg-stone-100 p-6">
            <h2 className="font-serif text-lg font-bold text-navy-900 mb-2">Corrections &amp; contact</h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              If you believe a score is incorrect or have evidence that a tool has been materially updated since our last review, contact us at{' '}
              <a href="mailto:editorial@best-ai-image-generators.com" className="text-navy-800 underline underline-offset-2 hover:text-navy-600">
                editorial@best-ai-image-generators.com
              </a>. We investigate all substantive corrections and publish updates with a correction notice.
            </p>
          </div>
        </section>

        {/* Back link */}
        <div className="mt-10">
          <Link href="/" className="text-sm text-stone-500 hover:text-navy-900 transition-colors">
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  )
}
