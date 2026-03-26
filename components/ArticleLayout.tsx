import Link from 'next/link'
import AffiliateButton from './AffiliateButton'

interface RelatedArticle {
  title: string
  slug: string
  description: string
}

interface BreadcrumbItem {
  label: string
  href?: string
}

interface ArticleLayoutProps {
  children: React.ReactNode
  title: string
  description: string
  publishDate: string
  updateDate?: string
  readTime: string
  breadcrumbs?: BreadcrumbItem[]
  relatedArticles?: RelatedArticle[]
  primaryCtaHref?: string
  primaryCtaText?: string
  primaryCtaTool?: string
  primaryCtaTrackingId?: string
}

const defaultRelated: RelatedArticle[] = [
  { title: 'Best Free AI Image Generators 2026', slug: 'best-ai-image-generator-free', description: 'Top free tools tested and ranked.' },
  { title: 'DALL-E 3 vs Midjourney', slug: 'dalle3-vs-midjourney', description: 'Full head-to-head comparison.' },
  { title: 'Free vs Paid AI Image Generators 2026', slug: 'free-vs-paid-ai-image-generator-2026', description: 'Is premium worth it?' },
  { title: 'Best AI for YouTube Thumbnails', slug: 'ai-image-generator-for-youtube-thumbnails', description: 'CTR-boosting thumbnail tools.' },
]

export default function ArticleLayout({
  children,
  title,
  description,
  publishDate,
  updateDate,
  readTime,
  breadcrumbs = [],
  relatedArticles = defaultRelated,
  primaryCtaHref = 'https://leonardo.ai',
  primaryCtaText = '🆓 Try Leonardo AI Free',
  primaryCtaTool = 'Leonardo AI',
  primaryCtaTrackingId = 'article_top_cta',
}: ArticleLayoutProps) {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://best-ai-image-generators.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://best-ai-image-generators.com/blog' },
      ...breadcrumbs.map((b, i) => ({
        '@type': 'ListItem',
        position: i + 3,
        name: b.label,
        ...(b.href ? { item: `https://best-ai-image-generators.com${b.href}` } : {}),
      })),
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="bg-gray-50 min-h-screen">
        {/* Article header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-blue-700 transition-colors">Home</Link>
              <span aria-hidden="true">›</span>
              <Link href="/blog" className="hover:text-blue-700 transition-colors">Blog</Link>
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="flex items-center gap-2">
                  <span aria-hidden="true">›</span>
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-blue-700 transition-colors">{crumb.label}</Link>
                  ) : (
                    <span className="text-gray-700 font-medium">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>

            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">{title}</h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">{description}</p>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Published {publishDate}
              </span>
              {updateDate && (
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Updated {updateDate}
                </span>
              )}
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {readTime} read
              </span>
            </div>

            {/* Top CTA */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-gray-900 text-sm">Our top recommendation →</p>
                <p className="text-gray-600 text-xs mt-0.5">Based on extensive testing and real-world use</p>
              </div>
              <AffiliateButton
                href={primaryCtaHref}
                trackingId={primaryCtaTrackingId}
                toolName={primaryCtaTool}
                className="btn-primary text-sm whitespace-nowrap flex-shrink-0"
              >
                {primaryCtaText}
              </AffiliateButton>
            </div>

            {/* Affiliate disclosure */}
            <p className="mt-3 text-xs text-gray-400 affiliate-disclosure">
              ⓘ This article contains affiliate links. <a href="/affiliate-disclosure" className="underline">Full disclosure</a>.
            </p>
          </div>
        </div>

        {/* Article body */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-a:text-blue-700 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900">
                  {children}
                </div>
              </div>

              {/* Related articles */}
              <div className="mt-10">
                <h2 className="text-xl font-bold text-gray-900 mb-5">Related Articles</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedArticles.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/blog/${article.slug}`}
                      className="card p-4 hover:border-blue-200 border border-transparent group"
                    >
                      <h3 className="font-semibold text-gray-900 text-sm group-hover:text-blue-700 transition-colors mb-1">{article.title}</h3>
                      <p className="text-gray-500 text-xs">{article.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24 space-y-4">
                {/* Sidebar CTA */}
                <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-xl p-5">
                  <p className="font-bold text-sm mb-2">🏆 #1 Rated Tool</p>
                  <p className="text-blue-200 text-xs mb-4 leading-relaxed">Midjourney v6 — best image quality we&apos;ve ever tested.</p>
                  <AffiliateButton
                    href="https://midjourney.com"
                    trackingId="sidebar_midjourney"
                    toolName="Midjourney"
                    className="block w-full text-center py-2.5 px-4 bg-orange-500 hover:bg-orange-400 text-white text-sm font-bold rounded-lg transition-colors"
                  >
                    Try Midjourney →
                  </AffiliateButton>
                </div>

                {/* Quick comparison link */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <p className="font-semibold text-green-900 text-sm mb-1">🆓 Best Free Option</p>
                  <p className="text-green-700 text-xs mb-3">Leonardo AI — generous free tier, no credit card.</p>
                  <AffiliateButton
                    href="https://leonardo.ai"
                    trackingId="sidebar_leonardo"
                    toolName="Leonardo AI"
                    className="block w-full text-center py-2 px-4 bg-green-600 hover:bg-green-700 text-white text-xs font-bold rounded-lg transition-colors"
                  >
                    Try Free →
                  </AffiliateButton>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <p className="font-semibold text-gray-900 text-sm mb-3">📊 Full Comparison</p>
                  <Link href="/#comparison" className="block w-full text-center py-2 px-4 bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold rounded-lg transition-colors">
                    Compare All Tools →
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}
