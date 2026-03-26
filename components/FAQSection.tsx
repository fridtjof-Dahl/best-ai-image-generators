'use client'
import { useState } from 'react'

const faqs = [
  {
    question: 'What is the best AI image generator in 2026?',
    answer: 'Midjourney v6 consistently produces the highest quality images for artistic work. For photorealism, DALL-E 3 and Adobe Firefly are top choices. For free options, Leonardo AI and Ideogram offer excellent quality without cost. The "best" depends on your use case — our comparison table breaks this down by category.',
  },
  {
    question: 'Are there completely free AI image generators?',
    answer: 'Yes! Leonardo AI, Ideogram, Microsoft Copilot Designer, Adobe Firefly (limited free tier), Canva AI, and Stable Diffusion (self-hosted) are all free or have generous free tiers. We have a dedicated guide to the best free options.',
  },
  {
    question: 'Which AI image generator is best for beginners?',
    answer: 'DALL-E 3 via ChatGPT is the easiest for beginners — just describe what you want in plain English. Adobe Firefly and Canva AI are also very beginner-friendly with intuitive drag-and-drop interfaces.',
  },
  {
    question: 'Can I use AI generated images commercially?',
    answer: 'It depends on the tool. Adobe Firefly is designed specifically for commercial use and includes copyright indemnification. Midjourney and DALL-E 3 allow commercial use on paid plans. Stable Diffusion open-source weights are typically royalty-free. Always check the specific tool\'s terms of service.',
  },
  {
    question: 'Is Midjourney worth paying for?',
    answer: 'For professional creative work, yes — Midjourney v6 produces unmatched artistic quality. At $10-$30/month, it\'s comparable to a stock photo subscription. If you\'re a hobbyist or on a budget, Leonardo AI\'s free tier or Stable Diffusion locally are excellent alternatives.',
  },
  {
    question: 'How does Stable Diffusion differ from cloud-based tools?',
    answer: 'Stable Diffusion runs locally on your computer, meaning unlimited generations with no monthly fee and complete privacy. The trade-off is a more technical setup process and requiring decent GPU hardware. Our guide covers step-by-step local installation.',
  },
  {
    question: 'What is the best AI image generator for social media?',
    answer: 'For Instagram and Pinterest, Midjourney or Adobe Firefly produce scroll-stopping visuals. For quick content at scale, Canva AI or Leonardo AI offer great templates. For YouTube thumbnails specifically, DALL-E 3 or Midjourney with face prompting tend to work best.',
  },
  {
    question: 'How often do you update these reviews?',
    answer: 'We update our comparison tables and top picks monthly. AI tools release major updates frequently, so we run fresh prompt tests whenever a tool releases a significant version update. All dates are shown on each review page.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index
        return (
          <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <button
              className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="font-semibold text-gray-900 pr-4 text-sm md:text-base">{faq.question}</span>
              <svg
                className={`w-5 h-5 text-blue-700 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isOpen && (
              <div id={`faq-answer-${index}`} className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                {faq.answer}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
