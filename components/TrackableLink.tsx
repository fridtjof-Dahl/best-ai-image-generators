'use client'
interface TrackableLink {
  href: string
  children: React.ReactNode
  className?: string
  eventName: string
  eventParams: Record<string, string>
}

export default function TrackableLink({ href, children, className, eventName, eventParams }: TrackableLink) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => {
        if (typeof window !== 'undefined' && (window as any).trackEvent) {
          (window as any).trackEvent(eventName, eventParams)
        }
      }}
    >
      {children}
    </a>
  )
}
