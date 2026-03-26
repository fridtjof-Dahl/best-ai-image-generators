import { MetadataRoute } from 'next'

const BASE_URL = 'https://best-ai-image-generators.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  const routes = [
    { url: '/', changeFrequency: 'weekly' as const, priority: 1.0, lastModified: now },
    { url: '/blog', changeFrequency: 'weekly' as const, priority: 0.9, lastModified: now },
    { url: '/blog/best-ai-image-generator-free', changeFrequency: 'monthly' as const, priority: 0.9, lastModified: now },
    { url: '/blog/dalle3-vs-midjourney', changeFrequency: 'monthly' as const, priority: 0.85, lastModified: now },
    { url: '/blog/ai-image-generator-for-youtube-thumbnails', changeFrequency: 'monthly' as const, priority: 0.85, lastModified: now },
    { url: '/blog/free-vs-paid-ai-image-generator-2026', changeFrequency: 'monthly' as const, priority: 0.85, lastModified: now },
    { url: '/blog/how-to-use-stable-diffusion-locally', changeFrequency: 'monthly' as const, priority: 0.85, lastModified: now },
    { url: '/blog/ai-image-generator-for-social-media-marketing', changeFrequency: 'monthly' as const, priority: 0.85, lastModified: now },
    { url: '/blog/beste-gratis-ai-bildegenerator', changeFrequency: 'monthly' as const, priority: 0.7, lastModified: now },
    { url: '/blog/gratis-ai-bildegenerator', changeFrequency: 'monthly' as const, priority: 0.7, lastModified: now },
    { url: '/affiliate-disclosure', changeFrequency: 'yearly' as const, priority: 0.3, lastModified: now },
    { url: '/privacy-policy', changeFrequency: 'yearly' as const, priority: 0.3, lastModified: now },
  ]

  return routes.map(route => ({
    url: `${BASE_URL}${route.url}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
