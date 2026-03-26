import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Reviews & Guides — AI Image Generators',
  description: 'Independent reviews, comparisons, and tutorials on AI image generators. Tested quarterly against 500 standardised prompts.',
  alternates: { canonical: 'https://best-ai-image-generators.com/blog' },
}

const articles = [
  {
    title: 'Best Free AI Image Generators 2026',
    slug: 'best-ai-image-generator-free',
    description: 'We tested 20+ free tools. Six meet a professional standard. Ranked by output quality, free-tier limits, and commercial licensing.',
    category: 'Review',
    readTime: '10 min',
    date: 'March 20, 2026',
    featured: true,
  },
  {
    title: 'DALL-E 3 vs Midjourney — Full Comparison',
    slug: 'dalle3-vs-midjourney',
    description: 'Evaluated across 500+ prompts spanning photorealism, illustration, and typography. Scores by category and overall.',
    category: 'Comparison',
    readTime: '12 min',
    date: 'March 15, 2026',
    featured: true,
  },
  {
    title: 'AI Image Generators for YouTube Thumbnails',
    slug: 'ai-image-generator-for-youtube-thumbnails',
    description: 'Tested for click-through rate performance and legibility at small sizes across 10 tools.',
    category: 'Review',
    readTime: '9 min',
    date: 'March 1, 2026',
    featured: true,
  },
  {
    title: 'Free vs Paid AI Image Generators 2026',
    slug: 'free-vs-paid-ai-image-generator-2026',
    description: 'Where the quality gap between free and paid tiers is significant, and where you can save money without compromise.',
    category: 'Analysis',
    readTime: '11 min',
    date: 'March 5, 2026',
    featured: false,
  },
  {
    title: 'How to Run Stable Diffusion Locally',
    slug: 'how-to-use-stable-diffusion-locally',
    description: 'Step-by-step installation for AUTOMATIC1111 on Windows, macOS, and Linux. Unlimited generation at no cost.',
    category: 'Tutorial',
    readTime: '14 min',
    date: 'March 10, 2026',
    featured: false,
  },
  {
    title: 'AI Image Tools for Social Media Marketing',
    slug: 'ai-image-generator-for-social-media-marketing',
    description: 'Which generators produce content that performs in paid and organic social. Based on testing and marketer surveys.',
    category: 'Review',
    readTime: '12 min',
    date: 'March 15, 2026',
    featured: false,
  },
  {
    title: 'Beste Gratis AI Bildegenerator 2026',
    slug: 'beste-gratis-ai-bildegenerator',
    description: 'De beste gratis AI bildegeneratorene testet og rangert etter bildekvalitet og brukervennlighet.',
    category: 'Norsk',
    readTime: '8 min',
    date: 'Mars 2026',
    featured: false,
  },
  {
    title: 'Gratis AI Bildegenerator — Norsk Guide',
    slug: 'gratis-ai-bildegenerator',
    description: 'Komplett guide til gratis AI bildegenerering: verktøy, tips og anbefalinger.',
    category: 'Norsk',
    readTime: '7 min',
    date: 'Mars 2026',
    featured: false,
  },
]

const featured = articles.filter((a) => a.featured)
const rest     = articles.filter((a) => !a.featured)

export default function BlogIndex() {
  return (
    <div className="bg-stone-50 min-h-screen">

      {/* Header */}
      <div className="bg-white border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-3">
            Reviews &amp; Guides
          </h1>
          <p className="text-stone-500 text-sm leading-relaxed" style={{ maxWidth: '56ch' }}>
            Independent reviews of every major AI image tool. All scores are based on standardised testing —
            not vendor relationships. Updated quarterly.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Featured */}
        <h2 className="font-serif text-xl font-bold text-navy-900 mb-5">Featured Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {featured.map((article) => (
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
              <div className="mt-5 flex items-center justify-between text-xs text-stone-400">
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* All articles */}
        <h2 className="font-serif text-xl font-bold text-navy-900 mb-5">All Articles</h2>
        <div className="divide-y divide-stone-200 border border-stone-200 bg-white">
          {rest.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="flex items-start gap-6 p-5 hover:bg-stone-50 transition-colors group"
            >
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-1.5">
                  <span className="label-neutral text-xs">{article.category}</span>
                  <span className="text-xs text-stone-400">{article.date}</span>
                  <span className="text-xs text-stone-400">{article.readTime}</span>
                </div>
                <h3 className="font-serif font-bold text-navy-900 text-sm leading-snug group-hover:text-navy-600 transition-colors mb-1">
                  {article.title}
                </h3>
                <p className="text-xs text-stone-500 leading-relaxed">{article.description}</p>
              </div>
              <svg
                className="w-4 h-4 text-stone-300 group-hover:text-navy-600 flex-shrink-0 self-center transition-colors mt-0.5"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
