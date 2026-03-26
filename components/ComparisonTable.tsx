'use client'
import AffiliateButton from './AffiliateButton'

interface Tool {
  rank: number
  name: string
  quality: number
  ease: number
  speed: number
  price: string
  freeTier: boolean
  bestFor: string
  affiliate: string
  trackingId: string
}

const tools: Tool[] = [
  {
    rank: 1,
    name: 'Midjourney v6',
    quality: 9.8,
    ease:    7.5,
    speed:   8.0,
    price:   '$10 / month',
    freeTier: false,
    bestFor:  'Artistic & editorial',
    affiliate: 'https://midjourney.com',
    trackingId: 'table_midjourney',
  },
  {
    rank: 2,
    name: 'DALL-E 3',
    quality: 9.2,
    ease:    9.8,
    speed:   8.5,
    price:   '$20 / month (ChatGPT Plus)',
    freeTier: false,
    bestFor:  'Prompt accuracy & ease',
    affiliate: 'https://openai.com/dall-e-3',
    trackingId: 'table_dalle3',
  },
  {
    rank: 3,
    name: 'Leonardo AI',
    quality: 8.8,
    ease:    8.5,
    speed:   9.0,
    price:   'Free — $12 / month',
    freeTier: true,
    bestFor:  'Free tier & game art',
    affiliate: 'https://leonardo.ai',
    trackingId: 'table_leonardo',
  },
  {
    rank: 4,
    name: 'Adobe Firefly',
    quality: 8.5,
    ease:    9.2,
    speed:   8.8,
    price:   'Free — Adobe CC bundle',
    freeTier: true,
    bestFor:  'Commercial-safe output',
    affiliate: 'https://firefly.adobe.com',
    trackingId: 'table_firefly',
  },
  {
    rank: 5,
    name: 'Stable Diffusion',
    quality: 9.0,
    ease:    4.5,
    speed:   9.5,
    price:   'Free (self-hosted)',
    freeTier: true,
    bestFor:  'Power users, unlimited',
    affiliate: 'https://stability.ai',
    trackingId: 'table_sd',
  },
]

function ScoreBar({ score }: { score: number }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="score-bar-track flex-1 min-w-[48px]">
        <div
          className="score-bar-fill"
          style={{ width: `${score * 10}%` }}
          aria-hidden="true"
        />
      </div>
      <span className="text-xs font-semibold text-stone-600 w-7 text-right tabular-nums">{score}</span>
    </div>
  )
}

export default function ComparisonTable() {
  return (
    <div className="overflow-x-auto border border-stone-200 bg-white" style={{ borderRadius: '2px' }}>
      <table
        className="data-table min-w-full"
        role="table"
        aria-label="AI Image Generator Comparison — ranked by overall quality score"
      >
        <caption className="sr-only">
          Top 5 AI image generators compared by quality, ease of use, speed, and price
        </caption>
        <thead>
          <tr>
            <th scope="col" className="w-10">#</th>
            <th scope="col">Tool</th>
            <th scope="col" className="hidden sm:table-cell min-w-[120px]">Quality</th>
            <th scope="col" className="hidden md:table-cell min-w-[120px]">Ease of Use</th>
            <th scope="col" className="hidden lg:table-cell min-w-[120px]">Speed</th>
            <th scope="col" className="hidden sm:table-cell">Price</th>
            <th scope="col" className="hidden md:table-cell">Best For</th>
            <th scope="col" className="text-center w-28">Try</th>
          </tr>
        </thead>
        <tbody>
          {tools.map((tool) => (
            <tr
              key={tool.name}
              className={tool.rank === 1 ? 'bg-stone-50' : ''}
            >
              <td className="text-stone-400 font-mono text-xs font-medium">{tool.rank}</td>
              <td>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-navy-900 text-sm">{tool.name}</span>
                  {tool.freeTier && (
                    <span className="label-green text-xs inline-flex w-fit">Free tier</span>
                  )}
                </div>
              </td>
              <td className="hidden sm:table-cell"><ScoreBar score={tool.quality} /></td>
              <td className="hidden md:table-cell"><ScoreBar score={tool.ease} /></td>
              <td className="hidden lg:table-cell"><ScoreBar score={tool.speed} /></td>
              <td className="hidden sm:table-cell text-xs text-stone-600 whitespace-nowrap">{tool.price}</td>
              <td className="hidden md:table-cell text-xs text-stone-500">{tool.bestFor}</td>
              <td className="text-center">
                <AffiliateButton
                  href={tool.affiliate}
                  trackingId={tool.trackingId}
                  toolName={tool.name}
                  className="btn-primary text-xs px-4 py-1.5 whitespace-nowrap"
                >
                  Visit
                </AffiliateButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
