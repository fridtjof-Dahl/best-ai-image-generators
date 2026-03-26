import type { Metadata } from 'next'
import Link from 'next/link'
import ComparisonTable from '../components/ComparisonTable'
import AffiliateButton from '../components/AffiliateButton'
import FAQSection from '../components/FAQSection'
import NewsletterForm from '../components/NewsletterForm'

export const metadata: Metadata = {
  title: 'Best AI Image Generators 2026 — Independent Reviews & Comparisons',
  description: 'Independent testing of 30+ AI image generators. Ranked by quality, ease of use, and value. No sponsored placements.',
  alternates: { canonical: 'https://best-ai-image-generators.com' },
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'AI Image Review',
  url: 'https://best-ai-image-generators.com',
  description: 'Independent reviews and comparisons of AI image generators',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://best-ai-image-generators.com/blog?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best AI image generator in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Midjourney v6 produces the highest overall image quality in our testing, particularly for artistic and editorial work. For photorealism, DALL-E 3 performs best. For users who need a free option, Leonardo AI offers the strongest free tier.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there free AI image generators worth using?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Leonardo AI, Adobe Firefly, and Stable Diffusion (self-hosted) all offer strong output without payment. Leonardo AI is recommended for most users: no credit card required, and the free tier provides sufficient generation credits for regular use.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which AI image generator is best for beginners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DALL-E 3 via ChatGPT scored highest for ease of use in our tests. It accepts plain-English descriptions and requires no prompt engineering. Adobe Firefly and Canva AI are also well-suited to first-time users.',
      },
    },
  ],
}

const articles = [
  {
    title: 'Best Free AI Image Generators (No Sign-Up)',
    slug: 'best-ai-image-generator-free',
    description: 'We tested 20+ free tools. Six meet a professional standard.',
    category: 'Review',
  },
  {
    title: 'DALL-E 3 vs Midjourney — Full Comparison',
    slug: 'dalle3-vs-midjourney',
    description: 'Evaluated across 500+ prompts spanning photorealism, illustration, and typography.',
    category: 'Comparison',
  },
  {
    title: 'AI Image Generators for YouTube Thumbnails',
    slug: 'ai-image-generator-for-youtube-thumbnails',
    description: 'Tested for click-through rate performance and thumbnail legibility at small sizes.',
    category: 'Review',
  },
  {
    title: 'Free vs Paid AI Image Generators 2026',
    slug: 'free-vs-paid-ai-image-generator-2026',
    description: 'Where the quality gap is real, and where you can save money without compromise.',
    category: 'Analysis',
  },
  {
    title: 'How to Run Stable Diffusion Locally',
    slug: 'how-to-use-stable-diffusion-locally',
    description: 'Step-by-step installation guide. Unlimited generation, no subscription.',
    category: 'Tutorial',
  },
  {
    title: 'AI Image Tools for Social Media Marketing',
    slug: 'ai-image-generator-for-social-media-marketing',
    description: 'Which generators produce content that performs in paid and organic social.',
    category: 'Review',
  },
]

const trustStats = [
  { value: '30+',   label: 'Tools Evaluated' },
  { value: '500+',  label: 'Test Prompts' },
  { value: '3',     label: 'Independent Reviewers' },
  { value: 'Mar 26', label: 'Last Updated' },
]

const testimonials = [
  {
    quote: 'Found a comparison site that actually tests these tools properly. Saved me hours of research.',
    name: 'Sarah K.',
    role: 'Senior Graphic Designer',
  },
  {
    quote: 'The comparison table changed which tool I use daily. Clear methodology, no marketing noise.',
    name: 'Marcus T.',
    role: 'Content Producer',
  },
  {
    quote: 'Switched from Midjourney to Leonardo AI based on this review. Same quality, 80% cost saving.',
    name: 'James L.',
    role: 'Marketing Manager',
  },
]

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="bg-navy-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">

          {/* Methodology badge */}
          <div className="mb-8">
            <span className="label-blue bg-navy-800 border-navy-700 text-stone-300 text-xs uppercase tracking-widest">
              Independent testing · 30 tools · 500 prompts
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6 text-balance" style={{ maxWidth: '20ch' }}>
            The best AI image generators, ranked.
          </h1>

          <p className="text-lg text-stone-300 leading-relaxed mb-10" style={{ maxWidth: '52ch' }}>
            Independent reviews and comparisons of every major AI image tool. Ranked by output quality, ease of use, and value — not by who pays us most.
          </p>

          {/* Single primary CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a href="#comparison" className="btn-cta text-sm px-7 py-3.5">
              See Full Comparison
            </a>
            <Link href="/blog" className="text-sm text-stone-400 hover:text-white transition-colors">
              Browse all reviews
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ─────────────────────────────────────────── */}
      <section className="bg-stone-100 border-b border-stone-200" aria-label="Methodology at a glance">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-stone-200">
            {trustStats.map((stat) => (
              <div key={stat.label} className="text-center md:px-8">
                <p className="trust-stat-value">{stat.value}</p>
                <p className="trust-stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED REVIEWS ──────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-stone-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-10">
            <h2 className="section-heading">Reviews & Guides</h2>
            <p className="section-subheading mt-2">In-depth analysis of each tool, updated quarterly</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="card p-6 flex flex-col group"
              >
                <span className="label-neutral text-xs mb-4 w-fit">{article.category}</span>
                <h3 className="font-serif font-bold text-navy-900 text-base leading-snug mb-2 group-hover:text-navy-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed flex-1">{article.description}</p>
                <span className="mt-5 text-xs font-semibold text-navy-800 group-hover:text-navy-600 transition-colors">
                  Read review
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/blog" className="btn-secondary text-sm px-6 py-2.5">
              All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ──────────────────────────────────── */}
      <section id="comparison" className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-10">
            <h2 className="section-heading">Top 5 Tools Compared</h2>
            <p className="section-subheading mt-2">
              Scored across quality, ease of use, and speed. Tested March 2026 against 500 standardised prompts.
            </p>
          </div>

          <ComparisonTable />

          <p className="affiliate-note mt-3">
            Contains affiliate links — we earn a small commission at no cost to you.{' '}
            <Link href="/affiliate-disclosure" className="underline underline-offset-2">Full disclosure</Link>.
          </p>
        </div>
      </section>

      {/* ── METHODOLOGY STRIP ─────────────────────────────────── */}
      <section className="bg-stone-50 border-y border-stone-200 py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif font-bold text-navy-900 mb-2">How we test</h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                Every tool is evaluated against a standardised set of 500 prompts spanning photorealism, illustration, typography, and abstract art. Each category is scored independently.
              </p>
            </div>
            <div>
              <h3 className="font-serif font-bold text-navy-900 mb-2">Who reviews</h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                Scores are averaged across three independent reviewers — a graphic designer, a photographer, and a content marketer — to remove individual bias.
              </p>
            </div>
            <div>
              <h3 className="font-serif font-bold text-navy-900 mb-2">Affiliate policy</h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                We earn commissions from affiliate links. Affiliate relationships do not influence scores or rankings. All scores are determined before any commercial agreements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-10">
            <h2 className="section-heading">Reader feedback</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="card p-7 flex flex-col gap-5">
                {/* Quote mark */}
                <span className="font-serif text-4xl text-stone-200 leading-none select-none" aria-hidden="true">&ldquo;</span>
                <p className="text-sm text-stone-700 leading-relaxed -mt-4">{t.quote}</p>
                <footer className="flex items-center gap-3 mt-auto">
                  <div
                    className="w-8 h-8 bg-navy-900 text-white flex items-center justify-center text-xs font-bold font-serif flex-shrink-0"
                    aria-hidden="true"
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-navy-900">{t.name}</p>
                    <p className="text-xs text-stone-400">{t.role}</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-stone-50 border-t border-stone-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="section-heading">Common questions</h2>
          </div>
          <FAQSection />
        </div>
      </section>

      {/* ── NEWSLETTER ────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-navy-900 text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">
              Quarterly review updates
            </h2>
            <p className="text-stone-400 text-sm leading-relaxed">
              We re-test every tool each quarter. Subscribe to receive updated rankings, new tool reviews, and methodology notes. One email per quarter. No marketing.
            </p>
          </div>
          <NewsletterForm />
          <p className="mt-4 text-xs text-stone-500">
            By subscribing you agree to our{' '}
            <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-stone-300 transition-colors">Privacy Policy</Link>.
            GDPR compliant. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────── */}
      <section className="py-14 bg-stone-50 border-t border-stone-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-3">
              Start with our top-rated free tool
            </h2>
            <p className="text-sm text-stone-500 mb-8 leading-relaxed" style={{ maxWidth: '44ch', margin: '0 auto 2rem' }}>
              Leonardo AI earned the highest free-tier score in our testing. No credit card required.
            </p>
            <AffiliateButton
              href="https://leonardo.ai"
              trackingId="bottom_cta_primary"
              className="btn-cta text-sm px-8 py-3.5"
              toolName="Leonardo AI"
            >
              Try Leonardo AI for Free
            </AffiliateButton>
            <p className="mt-4 affiliate-note">
              Affiliate link.{' '}
              <Link href="/affiliate-disclosure" className="underline underline-offset-2 hover:text-stone-600 transition-colors">Disclosure</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
