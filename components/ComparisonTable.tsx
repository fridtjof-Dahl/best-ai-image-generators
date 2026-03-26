'use client'
import AffiliateButton from './AffiliateButton'

const tools = [
  {
    rank: 1,
    name: 'Midjourney v6',
    emoji: '🏆',
    quality: 9.8,
    ease: 7.5,
    speed: 8.0,
    price: '$10/mo',
    freeOption: false,
    bestFor: 'Artistic & professional',
    badge: 'Best Overall',
    badgeColor: 'bg-yellow-100 text-yellow-800 border border-yellow-200',
    affiliate: 'https://midjourney.com',
    trackingId: 'table_midjourney',
  },
  {
    rank: 2,
    name: 'DALL-E 3',
    emoji: '🤖',
    quality: 9.2,
    ease: 9.8,
    speed: 8.5,
    price: '$20/mo (ChatGPT+)',
    freeOption: false,
    bestFor: 'Ease of use & beginners',
    badge: 'Easiest to Use',
    badgeColor: 'bg-blue-100 text-blue-800 border border-blue-200',
    affiliate: 'https://openai.com/dall-e-3',
    trackingId: 'table_dalle3',
  },
  {
    rank: 3,
    name: 'Leonardo AI',
    emoji: '🎨',
    quality: 8.8,
    ease: 8.5,
    speed: 9.0,
    price: 'Free / $12/mo',
    freeOption: true,
    bestFor: 'Free users & game art',
    badge: 'Best Free Option',
    badgeColor: 'bg-green-100 text-green-800 border border-green-200',
    affiliate: 'https://leonardo.ai',
    trackingId: 'table_leonardo',
  },
  {
    rank: 4,
    name: 'Adobe Firefly',
    emoji: '🔥',
    quality: 8.5,
    ease: 9.2,
    speed: 8.8,
    price: 'Free / Adobe CC',
    freeOption: true,
    bestFor: 'Commercial safe images',
    badge: 'Best for Business',
    badgeColor: 'bg-purple-100 text-purple-800 border border-purple-200',
    affiliate: 'https://firefly.adobe.com',
    trackingId: 'table_firefly',
  },
  {
    rank: 5,
    name: 'Stable Diffusion',
    emoji: '💻',
    quality: 9.0,
    ease: 4.5,
    speed: 9.5,
    price: 'Free (self-hosted)',
    freeOption: true,
    bestFor: 'Advanced users & unlimited',
    badge: 'Best for Power Users',
    badgeColor: 'bg-gray-100 text-gray-800 border border-gray-200',
    affiliate: 'https://stability.ai',
    trackingId: 'table_sd',
  },
]

function ScoreBar({ score }: { score: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 bg-gray-100 rounded-full h-2 min-w-[60px]">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all"
          style={{ width: `${score * 10}%` }}
          aria-hidden="true"
        />
      </div>
      <span className="text-sm font-semibold text-gray-700 w-8 text-right">{score}</span>
    </div>
  )
}

export default function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200">
      <table className="min-w-full bg-white" role="table" aria-label="AI Image Generator Comparison">
        <thead>
          <tr className="bg-blue-900 text-white">
            <th scope="col" className="px-4 py-4 text-left text-sm font-bold">#</th>
            <th scope="col" className="px-4 py-4 text-left text-sm font-bold">Tool</th>
            <th scope="col" className="px-4 py-4 text-left text-sm font-bold hidden sm:table-cell">Quality</th>
            <th scope="col" className="px-4 py-4 text-left text-sm font-bold hidden md:table-cell">Ease</th>
            <th scope="col" className="px-4 py-4 text-left text-sm font-bold hidden lg:table-cell">Speed</th>
            <th scope="col" className="px-4 py-4 text-left text-sm font-bold">Price</th>
            <th scope="col" className="px-4 py-4 text-left text-sm font-bold hidden md:table-cell">Best For</th>
            <th scope="col" className="px-4 py-4 text-center text-sm font-bold">Try It</th>
          </tr>
        </thead>
        <tbody>
          {tools.map((tool, index) => (
            <tr
              key={tool.name}
              className={`border-b border-gray-100 hover:bg-blue-50 transition-colors ${tool.rank === 1 ? 'bg-yellow-50' : ''}`}
            >
              <td className="px-4 py-4 text-center">
                <span className="text-xl" aria-label={`Rank ${tool.rank}`}>{tool.emoji}</span>
              </td>
              <td className="px-4 py-4">
                <div className="font-bold text-gray-900 text-sm">{tool.name}</div>
                <span className={`badge text-xs mt-1 ${tool.badgeColor}`}>{tool.badge}</span>
                {tool.freeOption && (
                  <span className="block mt-1 text-xs text-green-600 font-medium">✓ Free tier</span>
                )}
              </td>
              <td className="px-4 py-4 hidden sm:table-cell">
                <ScoreBar score={tool.quality} />
              </td>
              <td className="px-4 py-4 hidden md:table-cell">
                <ScoreBar score={tool.ease} />
              </td>
              <td className="px-4 py-4 hidden lg:table-cell">
                <ScoreBar score={tool.speed} />
              </td>
              <td className="px-4 py-4 text-sm text-gray-700 font-medium">{tool.price}</td>
              <td className="px-4 py-4 hidden md:table-cell text-sm text-gray-600">{tool.bestFor}</td>
              <td className="px-4 py-4 text-center">
                <AffiliateButton
                  href={tool.affiliate}
                  trackingId={tool.trackingId}
                  toolName={tool.name}
                  className="inline-flex items-center justify-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold rounded-lg transition-all duration-200 whitespace-nowrap shadow hover:shadow-md"
                >
                  Try Free →
                </AffiliateButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
