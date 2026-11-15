import type { ReactNode } from 'react'
import { MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { waLink } from '@/lib/site'

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

/** Resalta en el color de acento la frase clave de un título. */
export function Accent({ children }: { children: ReactNode }) {
  return <span className="text-accent">{children}</span>
}

export function WhatsAppButton({
  children,
  variant = 'primary',
  className,
  message,
  icon = false,
  id,
}: {
  children: ReactNode
  variant?: 'primary' | 'outline'
  className?: string
  /** Texto precargado en el chat. Si no se pasa, usa el mensaje general. */
  message?: string
  /** Muestra un ícono de chat antes del texto. */
  icon?: boolean
  id?: string
}) {
  return (
    <a
      id={id}
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 will-change-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        variant === 'primary'
          ? 'bg-primary text-primary-foreground hover:bg-white'
          : 'border border-border bg-transparent text-foreground hover:bg-secondary',
        className,
      )}
    >
      {icon && <MessageCircle className="size-4 shrink-0" aria-hidden="true" />}
      {children}
    </a>
  )
}

/** Franja de llamado a la acción para usar entre secciones. */
export function CtaBand({
  children,
  note,
  message,
  className,
}: {
  children: ReactNode
  note?: ReactNode
  message?: string
  className?: string
}) {
  return (
    <div className={cn('flex flex-col items-center text-center', className)}>
      <WhatsAppButton message={message} icon className="w-full sm:w-auto">
        {children}
      </WhatsAppButton>
      {note && (
        <p className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
          {note}
        </p>
      )}
    </div>
  )
}
