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
  author?: {
    name: string
    credentials?: string
  }
  breadcrumbs?: BreadcrumbItem[]
  relatedArticles?: RelatedArticle[]
  primaryCtaHref?: string
  primaryCtaText?: string
  primaryCtaTool?: string
  primaryCtaTrackingId?: string
}

const defaultRelated: RelatedArticle[] = [
  { title: 'Best Free AI Image Generators 2026', slug: 'best-ai-image-generator-free', description: 'Top free tools, tested and ranked.' },
  { title: 'DALL-E 3 vs Midjourney', slug: 'dalle3-vs-midjourney', description: 'Full head-to-head comparison.' },
  { title: 'Free vs Paid AI Image Generators', slug: 'free-vs-paid-ai-image-generator-2026', description: 'Is a paid plan worth it?' },
  { title: 'AI Images for YouTube Thumbnails', slug: 'ai-image-generator-for-youtube-thumbnails', description: 'CTR-optimised thumbnail tools.' },
]

export default function ArticleLayout({
  children,
  title,
  description,
  publishDate,
  updateDate,
  readTime,
  author = { name: 'AI Image Review Team', credentials: 'Independent testing across 500+ prompts' },
  breadcrumbs = [],
  relatedArticles = defaultRelated,
  primaryCtaHref = 'https://leonardo.ai',
  primaryCtaText = 'Try Leonardo AI',
  primaryCtaTool = 'Leonardo AI',
  primaryCtaTrackingId = 'article_top_cta',
}: ArticleLayoutProps) {

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://best-ai-image-generators.com' },
      { '@type': 'ListItem', position: 2, name: 'Reviews', item: 'https://best-ai-image-generators.com/blog' },
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

      {/* Article header */}
      <header className="bg-white border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

          {/* Breadcrumb */}
          <nav className="flex flex-wrap items-center gap-1.5 text-xs text-stone-400 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-navy-900 transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog" className="hover:text-navy-900 transition-colors">Reviews</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <span aria-hidden="true">/</span>
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-navy-900 transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-stone-600">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>

          {/* Heading */}
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 leading-tight mb-4 text-balance" style={{ maxWidth: '28ch' }}>
            {title}
          </h1>
          <p className="text-lg text-stone-500 leading-relaxed mb-8" style={{ maxWidth: '60ch' }}>
            {description}
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-stone-400 mb-8 pb-8 border-b border-stone-100">
            <span>Published {publishDate}</span>
            {updateDate && <span>Updated {updateDate}</span>}
            <span>{readTime} read</span>
            <span className="flex flex-col gap-0.5">
              <span className="text-stone-700 font-medium">{author.name}</span>
              {author.credentials && <span className="text-stone-400">{author.credentials}</span>}
            </span>
          </div>

          {/* Top recommendation — single CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 border border-stone-200 bg-stone-50">
            <div>
              <p className="text-sm font-semibold text-navy-900">Top recommendation</p>
              <p className="text-xs text-stone-500 mt-0.5">Based on 500+ test prompts, reviewed March 2026</p>
            </div>
            <AffiliateButton
              href={primaryCtaHref}
              trackingId={primaryCtaTrackingId}
              toolName={primaryCtaTool}
              className="btn-primary text-sm whitespace-nowrap"
            >
              {primaryCtaText}
            </AffiliateButton>
          </div>

          <p className="mt-2 affiliate-note">
            Contains affiliate links.{' '}
            <Link href="/affiliate-disclosure" className="underline underline-offset-2 hover:text-stone-600">Full disclosure</Link>.
          </p>
        </div>
      </header>

      {/* Body */}
      <div className="bg-stone-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* Main content */}
            <main className="lg:col-span-8">
              <article className="bg-white border border-stone-200 p-6 md:p-10">
                <div className="article-prose">
                  {children}
                </div>
              </article>

              {/* Author bio */}
              <div className="mt-6 border border-stone-200 bg-white p-6 flex gap-4">
                <div className="w-10 h-10 bg-navy-900 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold font-serif">
                  {author.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy-900">{author.name}</p>
                  <p className="text-xs text-stone-500 mt-0.5 leading-relaxed">
                    {author.credentials || 'Independent AI tool reviewer. Methodology: each tool is tested against 500+ prompts across 8 categories. Scores averaged across three reviewers.'}
                  </p>
                </div>
              </div>

              {/* Related articles */}
              <div className="mt-10">
                <h2 className="font-serif text-lg font-bold text-navy-900 mb-5">Related Reviews</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {relatedArticles.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/blog/${article.slug}`}
                      className="card p-4 group"
                    >
                      <h3 className="text-sm font-semibold text-navy-900 group-hover:text-navy-600 transition-colors mb-1 leading-snug">
                        {article.title}
                      </h3>
                      <p className="text-xs text-stone-500 leading-relaxed">{article.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </main>

            {/* Sidebar — minimal */}
            <aside className="hidden lg:block lg:col-span-4" aria-label="Sidebar">
              <div className="sticky top-24 space-y-4">

                {/* Primary recommendation */}
                <div className="border border-stone-200 bg-white p-5">
                  <p className="text-xs text-stone-400 uppercase tracking-widest mb-3" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                    Top Pick
                  </p>
                  <p className="font-serif font-bold text-navy-900 mb-1">Midjourney v6</p>
                  <p className="text-xs text-stone-500 leading-relaxed mb-4">
                    Highest quality score in our testing. Best for artistic and editorial work.
                  </p>
                  <AffiliateButton
                    href="https://midjourney.com"
                    trackingId="sidebar_midjourney"
                    toolName="Midjourney"
                    className="btn-primary w-full text-sm py-2"
                  >
                    Visit Midjourney
                  </AffiliateButton>
                </div>

                {/* Free option */}
                <div className="border border-stone-200 bg-white p-5">
                  <p className="text-xs text-stone-400 uppercase tracking-widest mb-3" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                    Best Free Option
                  </p>
                  <p className="font-serif font-bold text-navy-900 mb-1">Leonardo AI</p>
                  <p className="text-xs text-stone-500 leading-relaxed mb-4">
                    Generous free tier. No credit card required to start.
                  </p>
                  <AffiliateButton
                    href="https://leonardo.ai"
                    trackingId="sidebar_leonardo"
                    toolName="Leonardo AI"
                    className="btn-secondary w-full text-sm py-2"
                  >
                    Try for Free
                  </AffiliateButton>
                </div>

                {/* Full comparison link */}
                <Link href="/#comparison" className="block border border-stone-200 bg-white p-5 hover:bg-stone-50 transition-colors group">
                  <p className="text-xs text-stone-400 uppercase tracking-widest mb-1" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                    Reference
                  </p>
                  <p className="text-sm font-semibold text-navy-900 group-hover:text-navy-600 transition-colors">
                    Full comparison table
                  </p>
                  <p className="text-xs text-stone-500 mt-1">5 tools ranked side by side</p>
                </Link>
              </div>
            </aside>

          </div>
        </div>
      </div>
    </>
  )
}
