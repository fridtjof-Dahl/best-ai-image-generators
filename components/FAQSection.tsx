'use client'
import { useState } from 'react'

const faqs = [
  {
    question: 'What is the best AI image generator in 2026?',
    answer: 'Midjourney v6 produced the highest overall quality in our testing, particularly for artistic and editorial work. For photorealism, DALL-E 3 performs best. For users who need a free option, Leonardo AI offers the strongest free tier. The right choice depends on your use case — our comparison table breaks scores down by category.',
  },
  {
    question: 'Are there free AI image generators worth using?',
    answer: 'Yes. Leonardo AI, Adobe Firefly, and Stable Diffusion (self-hosted) all offer strong output without payment. Leonardo AI is recommended for most users: no credit card required, and the free tier provides sufficient generation credits for regular use.',
  },
  {
    question: 'Which AI image generator is best for beginners?',
    answer: 'DALL-E 3 via ChatGPT scored highest for ease of use. It accepts plain-English descriptions with no prompt engineering needed. Adobe Firefly and Canva AI are also well-suited to first-time users.',
  },
  {
    question: 'Can AI-generated images be used commercially?',
    answer: 'This varies by tool. Adobe Firefly is designed for commercial use and offers copyright indemnification. Midjourney and DALL-E 3 permit commercial use on paid plans. Stable Diffusion\'s open-source weights are generally royalty-free. Always verify the terms of service for the specific tool and plan you are using.',
  },
  {
    question: 'Is Midjourney worth the subscription cost?',
    answer: 'For professional creative work, yes. Midjourney v6 produces unmatched artistic quality at $10–$30 per month — comparable to a stock image subscription. For budget-conscious users or hobbyists, Leonardo AI\'s free tier or self-hosted Stable Diffusion are strong alternatives.',
  },
  {
    question: 'How does Stable Diffusion compare to cloud-based tools?',
    answer: 'Stable Diffusion runs locally on your hardware, meaning unlimited generations, no subscription cost, and full privacy. The trade-off is a more involved setup and a requirement for a capable GPU. Our setup guide covers local installation in full.',
  },
  {
    question: 'How frequently are these reviews updated?',
    answer: 'We re-test all tools quarterly. When a tool releases a significant version update, we run fresh prompt tests immediately and update scores. Each review displays its last-updated date prominently.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="divide-y divide-stone-200 border border-stone-200 bg-white">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index
        return (
          <div key={index}>
            <button
              className="w-full flex items-start justify-between px-6 py-5 text-left hover:bg-stone-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-navy-700"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="font-serif font-bold text-navy-900 pr-8 text-sm md:text-base leading-snug">
                {faq.question}
              </span>
              <svg
                className={`w-4 h-4 text-stone-400 flex-shrink-0 mt-0.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isOpen && (
              <div
                id={`faq-answer-${index}`}
                className="px-6 pb-5 text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-4"
              >
                {faq.answer}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
