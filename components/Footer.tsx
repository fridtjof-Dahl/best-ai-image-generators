import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300" role="contentinfo">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-white font-extrabold text-xl mb-3">
              <span>🎨</span>
              <span>BestAI<span className="text-orange-400">Image</span></span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Independent reviews and comparisons of AI image generators. We test every tool so you don&apos;t have to.
            </p>
            <p className="mt-4 text-xs text-gray-500">
              <strong className="text-gray-400">Affiliate Disclosure:</strong> This site contains affiliate links. We may earn a commission if you purchase through our links, at no additional cost to you. Our reviews are independent and unbiased.
            </p>
          </div>

          {/* Reviews */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Reviews</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog/best-ai-image-generator-free" className="hover:text-white transition-colors">Best Free Tools 2026</Link></li>
              <li><Link href="/blog/dalle3-vs-midjourney" className="hover:text-white transition-colors">DALL-E 3 vs Midjourney</Link></li>
              <li><Link href="/blog/free-vs-paid-ai-image-generator-2026" className="hover:text-white transition-colors">Free vs Paid 2026</Link></li>
              <li><Link href="/blog/ai-image-generator-for-youtube-thumbnails" className="hover:text-white transition-colors">Best for YouTube</Link></li>
              <li><Link href="/blog/ai-image-generator-for-social-media-marketing" className="hover:text-white transition-colors">Social Media Marketing</Link></li>
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog/how-to-use-stable-diffusion-locally" className="hover:text-white transition-colors">Stable Diffusion Guide</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">All Articles</Link></li>
              <li><Link href="/affiliate-disclosure" className="hover:text-white transition-colors">Affiliate Disclosure</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© {currentYear} Best AI Image Generators. All rights reserved.</p>
          <p>Not financial or professional advice. Reviews are independent opinions.</p>
        </div>
      </div>
    </footer>
  )
}
