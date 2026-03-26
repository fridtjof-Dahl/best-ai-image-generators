import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Affiliate Disclosure | Best AI Image Generators',
  description: 'Our affiliate disclosure and advertising policy. Learn how we make money and how it affects our reviews.',
  alternates: { canonical: 'https://best-ai-image-generators.com/affiliate-disclosure' },
}

export default function AffiliateDisclosurePage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-700">Home</Link> › Affiliate Disclosure
        </nav>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Affiliate Disclosure</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: March 2026</p>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <h2 className="text-xl font-bold text-gray-900">FTC Compliance Statement</h2>
          <p>
            In accordance with the Federal Trade Commission (FTC) guidelines on endorsements and testimonials, we are required to disclose that <strong>Best AI Image Generators</strong> participates in affiliate marketing programs.
          </p>
          <p>
            This means that when you click on certain links on this website and make a purchase or sign up for a service, we may receive a commission or other compensation at <strong>no additional cost to you</strong>.
          </p>

          <h2 className="text-xl font-bold text-gray-900">How We Make Money</h2>
          <p>This website earns revenue through:</p>
          <ul>
            <li><strong>Affiliate commissions</strong> — We participate in affiliate programs with AI tool providers including (but not limited to): Midjourney, Adobe, OpenAI, Leonardo AI, and others. When you purchase through our links, we may earn a commission.</li>
            <li><strong>Display advertising</strong> — We may display Google AdSense or other advertising networks.</li>
            <li><strong>Sponsored content</strong> — Occasionally, we may publish sponsored reviews. These are always clearly labeled.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900">Our Editorial Independence</h2>
          <p>
            Affiliate relationships <strong>do not influence our reviews or rankings</strong>. Our editorial team independently evaluates all tools based on objective criteria including image quality, ease of use, speed, pricing, and commercial rights.
          </p>
          <p>
            We have recommended free tools over paid tools, and lower-commission tools over higher-commission alternatives, when the data supports it. Our #1 priority is helping you make the right decision for your needs.
          </p>

          <h2 className="text-xl font-bold text-gray-900">GDPR Compliance (EU Users)</h2>
          <p>
            For users in the European Union, we operate in compliance with the General Data Protection Regulation (GDPR). Specifically:
          </p>
          <ul>
            <li>Affiliate links are clearly disclosed on pages where they appear</li>
            <li>We do not sell personal data to third parties</li>
            <li>Cookie consent is managed via our cookie notice</li>
            <li>You have the right to access, correct, or delete your personal data (see our <Link href="/privacy-policy" className="text-blue-700 hover:underline">Privacy Policy</Link>)</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900">Identifying Affiliate Links</h2>
          <p>Affiliate links on this site are identified by:</p>
          <ul>
            <li>The disclosure banner at the top of every page</li>
            <li>In-article disclosures near affiliate link clusters</li>
            <li>The <code>rel=&quot;nofollow&quot;</code> and <code>rel=&quot;sponsored&quot;</code> attributes on outbound links</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900">Questions?</h2>
          <p>
            If you have questions about our affiliate relationships or editorial policies, contact us through our website.
          </p>
        </div>
      </div>
    </div>
  )
}
