import Link from 'next/link'

const reviewLinks = [
  { href: '/blog/best-ai-image-generator-free',              label: 'Best Free AI Image Generators' },
  { href: '/blog/dalle3-vs-midjourney',                      label: 'DALL-E 3 vs Midjourney' },
  { href: '/blog/free-vs-paid-ai-image-generator-2026',      label: 'Free vs Paid 2026' },
  { href: '/blog/ai-image-generator-for-youtube-thumbnails', label: 'Best for YouTube' },
  { href: '/blog/ai-image-generator-for-social-media-marketing', label: 'Social Media Marketing' },
]

const guideLinks = [
  { href: '/blog/how-to-use-stable-diffusion-locally', label: 'Stable Diffusion Setup' },
  { href: '/blog',                                     label: 'All Articles' },
]

const legalLinks = [
  { href: '/affiliate-disclosure', label: 'Affiliate Disclosure' },
  { href: '/privacy-policy',       label: 'Privacy Policy' },
  { href: '/about',                label: 'About & Methodology' },
  { href: '/contact',              label: 'Contact' },
  { href: '/sitemap.xml',          label: 'Sitemap' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 text-stone-400" role="contentinfo">

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* Brand block */}
          <div className="md:col-span-4">
            <Link href="/" className="font-serif font-bold text-lg text-white hover:text-stone-200 transition-colors">
              AI Image Review
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-stone-400 max-w-xs">
              Independent testing and analysis of AI image generation tools. We evaluate every major platform so you can make an informed choice.
            </p>
            <p className="mt-6 text-xs text-stone-500 leading-relaxed max-w-xs">
              This site contains affiliate links. We may earn a commission at no additional cost to you. Our reviews are editorially independent.
            </p>
          </div>

          {/* Reviews */}
          <div className="md:col-span-3">
            <h3 className="text-white text-xs font-semibold uppercase tracking-widest mb-5" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              Reviews
            </h3>
            <ul className="space-y-3">
              {reviewLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-stone-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides */}
          <div className="md:col-span-2">
            <h3 className="text-white text-xs font-semibold uppercase tracking-widest mb-5" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              Guides
            </h3>
            <ul className="space-y-3">
              {guideLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-stone-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-3">
            <h3 className="text-white text-xs font-semibold uppercase tracking-widest mb-5" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              Legal
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-stone-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-8 border-t border-navy-800">
              <p className="text-xs text-stone-500">
                Methodology: Each tool is tested against 500+ prompts across 8 categories. Scores are averaged across three independent reviewers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <p>© {year} AI Image Review. All rights reserved.</p>
          <p>Reviews represent editorial opinion only. Not affiliated with any tool vendor.</p>
        </div>
      </div>
    </footer>
  )
}
