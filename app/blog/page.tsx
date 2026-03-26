import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Image Generator Reviews & Guides 2026',
  description: 'All our expert reviews, comparisons, and tutorials on AI image generators. Find the right tool for your use case.',
  alternates: { canonical: 'https://best-ai-image-generators.com/blog' },
}

const articles = [
  {
    title: 'Best Free AI Image Generators 2026 (No Credit Card Required)',
    slug: 'best-ai-image-generator-free',
    description: 'We tested 20+ free tools. Only 6 are actually worth using. Our honest ranking of the best free AI art generators.',
    category: 'Top Picks',
    categoryColor: 'bg-green-100 text-green-800',
    readTime: '10 min',
    date: 'March 20, 2026',
    emoji: '🆓',
    featured: true,
  },
  {
    title: 'DALL-E 3 vs Midjourney: Which Should You Use in 2026?',
    slug: 'dalle3-vs-midjourney',
    description: 'Head-to-head comparison of the two market leaders. We ran 500+ identical prompts to find the true winner.',
    category: 'Comparison',
    categoryColor: 'bg-blue-100 text-blue-800',
    readTime: '12 min',
    date: 'March 15, 2026',
    emoji: '⚔️',
    featured: true,
  },
  {
    title: 'Best AI Image Generator for YouTube Thumbnails 2026',
    slug: 'ai-image-generator-for-youtube-thumbnails',
    description: 'Thumbnails that boost CTR. We tested 10 tools specifically for YouTube creators and ranked by click performance.',
    category: 'Use Case',
    categoryColor: 'bg-red-100 text-red-800',
    readTime: '9 min',
    date: 'March 1, 2026',
    emoji: '▶️',
    featured: true,
  },
  {
    title: 'Free vs Paid AI Image Generators 2026: Is Premium Worth It?',
    slug: 'free-vs-paid-ai-image-generator-2026',
    description: '8-criteria comparison across free and paid tiers. When should you upgrade, and when is free good enough?',
    category: 'Comparison',
    categoryColor: 'bg-blue-100 text-blue-800',
    readTime: '11 min',
    date: 'March 5, 2026',
    emoji: '💰',
    featured: false,
  },
  {
    title: 'How to Use Stable Diffusion Locally – Complete 2026 Guide',
    slug: 'how-to-use-stable-diffusion-locally',
    description: 'Step-by-step setup guide for AUTOMATIC1111 on Windows, Mac, and Linux. Unlimited free AI images on your own hardware.',
    category: 'Tutorial',
    categoryColor: 'bg-yellow-100 text-yellow-800',
    readTime: '14 min',
    date: 'March 10, 2026',
    emoji: '🖥️',
    featured: false,
  },
  {
    title: 'Best AI Image Generator for Social Media Marketing 2026',
    slug: 'ai-image-generator-for-social-media-marketing',
    description: 'Surveyed 50+ marketers and tested 12 tools. Here\'s what professionals actually use for Instagram, LinkedIn, and ad campaigns.',
    category: 'Use Case',
    categoryColor: 'bg-pink-100 text-pink-800',
    readTime: '12 min',
    date: 'March 15, 2026',
    emoji: '📱',
    featured: false,
  },
  {
    title: 'Beste Gratis AI Bildegenerator 2026',
    slug: 'beste-gratis-ai-bildegenerator',
    description: 'De beste gratis AI bildegeneratorene testet og rangert.',
    category: 'Norsk',
    categoryColor: 'bg-indigo-100 text-indigo-800',
    readTime: '8 min',
    date: 'Mars 2026',
    emoji: '🇳🇴',
    featured: false,
  },
  {
    title: 'Gratis AI Bildegenerator – Norsk Guide',
    slug: 'gratis-ai-bildegenerator',
    description: 'Komplett guide til gratis AI bildegenerering på norsk.',
    category: 'Norsk',
    categoryColor: 'bg-indigo-100 text-indigo-800',
    readTime: '7 min',
    date: 'Mars 2026',
    emoji: '🇳🇴',
    featured: false,
  },
]

const featured = articles.filter(a => a.featured)
const rest = articles.filter(a => !a.featured)

export default function BlogIndex() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            AI Image Generator Reviews & Guides
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert, independent reviews of every major AI image tool. Updated monthly with fresh tests.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured articles */}
        <h2 className="text-xl font-bold text-gray-900 mb-6">Featured Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featured.map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`} className="group card p-6 flex flex-col border border-transparent hover:border-blue-200">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl" aria-hidden="true">{article.emoji}</span>
                <span className={`badge ${article.categoryColor} text-xs`}>{article.category}</span>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-700 transition-colors leading-snug">{article.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">{article.description}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* All articles */}
        <h2 className="text-xl font-bold text-gray-900 mb-6">All Articles</h2>
        <div className="space-y-4">
          {rest.map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`} className="group flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all">
              <span className="text-2xl flex-shrink-0 mt-1" aria-hidden="true">{article.emoji}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`badge ${article.categoryColor} text-xs`}>{article.category}</span>
                  <span className="text-xs text-gray-400">{article.date}</span>
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-1">{article.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{article.description}</p>
              </div>
              <span className="text-gray-400 group-hover:text-blue-600 text-sm font-semibold flex-shrink-0 self-center hidden sm:block">
                {article.readTime} →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
