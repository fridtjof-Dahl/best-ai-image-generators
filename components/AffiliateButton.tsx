'use client'
import React from 'react'

interface AffiliateButtonProps {
  href: string
  children: React.ReactNode
  className?: string
  trackingId: string
  toolName: string
}

export default function AffiliateButton({ href, children, className = '', trackingId, toolName }: AffiliateButtonProps) {
  const handleClick = () => {
    // GA4: Track affiliate link click (conversion event)
    if (typeof window !== 'undefined' && (window as any).trackEvent) {
      (window as any).trackEvent('affiliate_click', {
        event_category: 'affiliate',
        event_label: toolName,
        cta_id: trackingId,
        outbound_url: href,
        // value: 1, // optional conversion value for GA4 goals
      })
    }
    // Heatmap-friendly: data attributes for session recording tools
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={className || 'btn-primary'}
      onClick={handleClick}
      data-tracking-id={trackingId}
      data-tool={toolName}
      aria-label={`Try ${toolName} (opens in new tab, affiliate link)`}
    >
      {children}
    </a>
  )
}
