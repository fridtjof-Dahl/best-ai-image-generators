import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Best AI Image Generators',
  description: 'Our privacy policy explaining how we collect, use, and protect your data. GDPR compliant.',
  alternates: { canonical: 'https://best-ai-image-generators.com/privacy-policy' },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-700">Home</Link> › Privacy Policy
        </nav>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: March 2026</p>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <h2 className="text-xl font-bold text-gray-900">Information We Collect</h2>
          <p>We collect information you provide directly (newsletter signup email) and automatically (analytics data via Google Analytics 4).</p>

          <h2 className="text-xl font-bold text-gray-900">Google Analytics 4</h2>
          <p>We use Google Analytics 4 to understand how visitors use our site. GA4 collects anonymized data including pages visited, time on site, and device type. IP addresses are anonymized. You can opt out via the Google Analytics opt-out browser add-on.</p>

          <h2 className="text-xl font-bold text-gray-900">Newsletter</h2>
          <p>If you subscribe to our newsletter, we store your email address to send you updates. You can unsubscribe at any time via the link in each email.</p>

          <h2 className="text-xl font-bold text-gray-900">Cookies</h2>
          <p>We use essential cookies for site functionality and analytics cookies (Google Analytics). You can control cookie preferences via your browser settings.</p>

          <h2 className="text-xl font-bold text-gray-900">Third-Party Links</h2>
          <p>Our site contains links to third-party websites (AI tool providers). We are not responsible for their privacy practices. Review their policies before providing personal data.</p>

          <h2 className="text-xl font-bold text-gray-900">Your GDPR Rights (EU Users)</h2>
          <p>You have the right to: access your data, correct inaccurate data, request deletion, object to processing, and data portability. Contact us to exercise these rights.</p>

          <h2 className="text-xl font-bold text-gray-900">Data Retention</h2>
          <p>Newsletter email addresses are retained until you unsubscribe. Analytics data is retained per Google Analytics default settings (14 months).</p>

          <h2 className="text-xl font-bold text-gray-900">Contact</h2>
          <p>For privacy inquiries, contact us through the website contact form.</p>
        </div>
      </div>
    </div>
  )
}
