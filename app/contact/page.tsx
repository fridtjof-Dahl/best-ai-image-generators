import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with the AI Image Review editorial team.',
  alternates: { canonical: 'https://best-ai-image-generators.com/contact' },
}

const topics = [
  {
    label: 'Editorial corrections',
    email: 'editorial@best-ai-image-generators.com',
    description: 'Incorrect scores, outdated information, factual errors.',
  },
  {
    label: 'Press & partnerships',
    email: 'press@best-ai-image-generators.com',
    description: 'Media enquiries, data usage, partnership proposals.',
  },
  {
    label: 'General questions',
    email: 'hello@best-ai-image-generators.com',
    description: 'Anything else.',
  },
]

export default function ContactPage() {
  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Breadcrumb */}
        <nav className="text-xs text-stone-400 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-navy-900 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-stone-600">Contact</span>
        </nav>

        {/* Header */}
        <div className="mb-10 pb-8 border-b border-stone-200">
          <h1 className="font-serif text-3xl font-bold text-navy-900 mb-3">Contact</h1>
          <p className="text-sm text-stone-500 leading-relaxed" style={{ maxWidth: '50ch' }}>
            Use the email address relevant to your enquiry. We aim to respond within two business days.
          </p>
        </div>

        {/* Contact topics */}
        <div className="space-y-3">
          {topics.map((topic) => (
            <div key={topic.label} className="bg-white border border-stone-200 p-6">
              <h2 className="font-serif font-bold text-navy-900 mb-1">{topic.label}</h2>
              <p className="text-xs text-stone-500 mb-3">{topic.description}</p>
              <a
                href={`mailto:${topic.email}`}
                className="text-sm text-navy-800 underline underline-offset-2 hover:text-navy-600 transition-colors"
              >
                {topic.email}
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-8 p-5 border border-stone-200 bg-stone-100">
          <p className="text-xs text-stone-500 leading-relaxed">
            We do not accept unsolicited guest posts, paid link insertions, or requests to alter existing review scores. Such emails will not receive a response.
          </p>
        </div>

        {/* Back link */}
        <div className="mt-8">
          <Link href="/" className="text-sm text-stone-500 hover:text-navy-900 transition-colors">
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  )
}
