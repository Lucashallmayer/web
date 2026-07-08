import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { WHATSAPP_URL } from '@/lib/site'

export function SectionLabel({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-block text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground',
        className,
      )}
    >
      {children}
    </span>
  )
}

export function WhatsAppButton({
  children,
  variant = 'primary',
  className,
}: {
  children: ReactNode
  variant?: 'primary' | 'outline'
  className?: string
}) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 will-change-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        variant === 'primary'
          ? 'bg-primary text-primary-foreground hover:bg-white'
          : 'border border-border bg-transparent text-foreground hover:bg-secondary',
        className,
      )}
    >
      {children}
    </a>
  )
}
