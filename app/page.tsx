import type { Metadata } from 'next'
import Link from 'next/link'
import NewsletterForm from '../components/NewsletterForm'
import FAQSection from '../components/FAQSection'
import ComparisonTable from '../components/ComparisonTable'
import AffiliateButton from '../components/AffiliateButton'

// Note: This is a Server Component. AffiliateButton and other 'use client' 
// components are imported — they're hydrated on the client side.

export const metadata: Metadata = {
  title: 'Best AI Image Generators 2026 – Expert Reviews & Comparisons',
  description: 'We tested 30+ AI image generators so you don\'t have to. Expert reviews, side-by-side comparisons, and honest recommendations for every budget.',
  alternates: { canonical: 'https://best-ai-image-generators.com' },
}

// JSON-LD structured data
const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Best AI Image Generators',
  url: 'https://best-ai-image-generators.com',
  description: 'Expert reviews and comparisons of AI image generators',
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
        text: 'Midjourney v6 consistently produces the highest quality images for artistic work. For photorealism, DALL-E 3 and Adobe Firefly are top choices. For free options, Leonardo AI and Ideogram offer excellent quality without cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there free AI image generators?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Leonardo AI, Ideogram, Microsoft Designer (Copilot), Adobe Firefly (limited free), Canva AI, and Stable Diffusion (self-hosted) are all free or have generous free tiers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which AI image generator is best for beginners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DALL-E 3 via ChatGPT is the easiest for beginners – just describe what you want in plain English. Adobe Firefly and Canva AI are also very beginner-friendly with intuitive interfaces.',
      },
    },
  ],
}

const featuredArticles = [
  {
    title: 'Best Free AI Image Generators (No Sign-Up)',
    slug: 'best-ai-image-generator-free',
    description: 'We tested 20+ free tools. Only 6 are worth your time.',
    badge: 'Most Popular',
    badgeColor: 'bg-green-100 text-green-800',
    emoji: '🆓',
  },
  {
    title: 'DALL-E 3 vs Midjourney: Full Comparison',
    slug: 'dalle3-vs-midjourney',
    description: '500+ prompts later, here\'s which one actually wins.',
    badge: 'Editor\'s Pick',
    badgeColor: 'bg-blue-100 text-blue-800',
    emoji: '⚔️',
  },
  {
    title: 'Best AI Image Generator for YouTube Thumbnails',
    slug: 'ai-image-generator-for-youtube-thumbnails',
    description: 'CTR-optimized thumbnails that actually get clicks.',
    badge: 'New 2026',
    badgeColor: 'bg-orange-100 text-orange-800',
    emoji: '▶️',
  },
  {
    title: 'Free vs Paid AI Image Generators 2026',
    slug: 'free-vs-paid-ai-image-generator-2026',
    description: 'Is it worth paying? Honest breakdown with examples.',
    badge: 'Deep Dive',
    badgeColor: 'bg-purple-100 text-purple-800',
    emoji: '💰',
  },
  {
    title: 'How to Use Stable Diffusion Locally',
    slug: 'how-to-use-stable-diffusion-locally',
    description: 'Step-by-step setup guide. Unlimited images, zero cost.',
    badge: 'Tutorial',
    badgeColor: 'bg-yellow-100 text-yellow-800',
    emoji: '🖥️',
  },
  {
    title: 'AI Image Generator for Social Media Marketing',
    slug: 'ai-image-generator-for-social-media-marketing',
    description: 'The tools marketers actually use in 2026.',
    badge: 'Marketing',
    badgeColor: 'bg-pink-100 text-pink-800',
    emoji: '📱',
  },
]

const stats = [
  { value: '30+', label: 'Tools Tested' },
  { value: '500+', label: 'Prompts Compared' },
  { value: '50k+', label: 'Readers/Month' },
  { value: '2026', label: 'Up to Date' },
]

const testimonials = [
  {
    quote: "Finally found a site that actually tests these tools properly. Saved me hours of research.",
    name: "Sarah K.",
    role: "Graphic Designer",
    avatar: "SK",
  },
  {
    quote: "The comparison table alone is worth the bookmark. Changed which tool I use daily.",
    name: "Marcus T.",
    role: "Content Creator",
    avatar: "MT",
  },
  {
    quote: "Switched from Midjourney to Leonardo AI based on this review and cut my costs by 80%.",
    name: "James L.",
    role: "Marketing Manager",
    avatar: "JL",
  },
]

export default function HomePage() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ═══════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center max-w-4xl mx-auto">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-blue-800 bg-opacity-60 border border-blue-600 rounded-full px-4 py-2 text-sm font-medium text-blue-100 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true"></span>
              Updated for 2026 · 30+ tools tested · 50,000+ readers trust us
            </div>

            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Find the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                Best AI Image Generator
              </span>
              {' '}for Your Needs
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8 max-w-3xl mx-auto">
              We&apos;ve spent 200+ hours testing AI image tools. Our expert reviews help you pick the right one — whether you need free, professional, or business-grade AI art.
            </p>

            {/* Hero CTAs – 3 variations for A/B testing */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              {/* CTA Variation A: Benefit-focused */}
              <AffiliateButton
                href="https://midjourney.com"
                trackingId="hero_cta_a"
                className="btn-primary text-lg px-8 py-4 w-full sm:w-auto"
                toolName="Midjourney"
              >
                🚀 Try Midjourney Free
              </AffiliateButton>

              {/* CTA Variation B: Direct comparison */}
              <a href="#comparison" className="btn-outline border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-4 w-full sm:w-auto inline-flex items-center justify-center">
                📊 Compare All Tools
              </a>
            </div>

            {/* Social proof mini stats */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-blue-200 text-sm">
              <span className="flex items-center gap-1.5">
                <span className="text-yellow-400">★★★★★</span> 4.9/5 from 1,200+ readers
              </span>
              <span>·</span>
              <span>No sponsored rankings</span>
              <span>·</span>
              <span>Updated monthly</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          STATS / TRUST SIGNALS
      ═══════════════════════════════════════════════ */}
      <section className="bg-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <div className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FEATURED ARTICLES CAROUSEL / GRID
      ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Expert Reviews & Guides</h2>
            <p className="section-subtitle">In-depth analysis of every major AI image tool</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
              <Link key={article.slug} href={`/blog/${article.slug}`} className="group card p-6 flex flex-col hover:border-blue-200 border border-transparent">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl" aria-hidden="true">{article.emoji}</span>
                  <span className={`badge ${article.badgeColor} text-xs`}>{article.badge}</span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-700 transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{article.description}</p>
                <span className="mt-4 text-blue-700 text-sm font-semibold group-hover:underline">Read review →</span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/blog" className="btn-secondary px-8 py-3">
              View All Reviews & Guides
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          MID-PAGE CTA (Variation C)
      ═══════════════════════════════════════════════ */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Not Sure Where to Start?</h2>
          <p className="text-orange-100 text-lg mb-6">Our comparison table ranks every major tool on quality, price, ease of use, and speed.</p>
          {/* CTA Variation C: Action-oriented */}
          <a
            href="#comparison"
            className="inline-flex items-center gap-2 bg-white text-orange-600 hover:bg-orange-50 font-bold text-lg px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            📊 See Full Comparison Table
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          COMPARISON TABLE
      ═══════════════════════════════════════════════ */}
      <section id="comparison" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Top 5 AI Image Generators Compared</h2>
            <p className="section-subtitle">Head-to-head comparison based on 500+ test prompts</p>
          </div>
          <ComparisonTable />
          <p className="text-center text-xs text-gray-500 mt-4 affiliate-disclosure">
            * Affiliate links – we earn a commission at no extra cost to you. <a href="/affiliate-disclosure" className="underline">Full disclosure</a>.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">What Readers Say</h2>
            <p className="section-subtitle">50,000+ creators and marketers trust our reviews</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="card p-6 border border-gray-100">
                <div className="flex items-center gap-1 text-yellow-400 mb-4" aria-label="5 star rating">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                <footer className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center font-bold text-sm" aria-hidden="true">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.role}</div>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FAQ SECTION
      ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Everything you need to know about AI image generators</p>
          </div>
          <FAQSection />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          NEWSLETTER SIGNUP
      ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-blue-900 text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Stay Ahead of AI Trends</h2>
          <p className="text-blue-200 text-lg mb-8">
            Get monthly reviews of new AI image tools, prompt tips, and exclusive comparisons. No spam, unsubscribe anytime.
          </p>
          <NewsletterForm />
          <p className="mt-4 text-xs text-blue-400">
            By subscribing you agree to our <a href="/privacy-policy" className="underline">Privacy Policy</a>. GDPR compliant.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          BOTTOM CTA
      ═══════════════════════════════════════════════ */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
            Ready to Create Stunning AI Images?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Start with our top-rated free tool or jump straight to the professional choice.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <AffiliateButton
              href="https://leonardo.ai"
              trackingId="bottom_cta_free"
              className="btn-primary text-lg px-8 py-4 w-full sm:w-auto"
              toolName="Leonardo AI"
            >
              🆓 Start Free with Leonardo AI
            </AffiliateButton>
            <AffiliateButton
              href="https://midjourney.com"
              trackingId="bottom_cta_pro"
              className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto"
              toolName="Midjourney"
            >
              ⭐ Try Midjourney Pro
            </AffiliateButton>
          </div>
          <p className="mt-6 text-xs text-gray-400 affiliate-disclosure">
            Affiliate links. We earn a small commission if you sign up. <a href="/affiliate-disclosure" className="underline">Disclosure</a>.
          </p>
        </div>
      </section>
    </>
  )
}
