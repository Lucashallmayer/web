'use client'

import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { PRICE_CURRENCY, PRICE_TRIAL, WA_MESSAGES, waLink } from '@/lib/site'
import { cn } from '@/lib/utils'

/**
 * Barra fija al pie, solo en celulares (en desktop el botón "Empezar" del menú
 * ya está siempre a la vista). Aparece cuando el botón del hero sale de pantalla
 * y se esconde al llegar al formulario final, para no repetir el llamado.
 */
export function StickyCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const update = () => {
      const heroCta = document.getElementById('hero-cta')
      const end = document.getElementById('empezar')
      const pastHero = heroCta
        ? heroCta.getBoundingClientRect().bottom < 0
        : window.scrollY > 600
      const atEnd = end
        ? end.getBoundingClientRect().top < window.innerHeight * 0.85
        : false
      setVisible(pastHero && !atEnd)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div
      aria-hidden={!visible}
      className={cn(
        'fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/90 backdrop-blur-xl transition-[transform,visibility] duration-300 md:hidden',
        visible ? 'visible translate-y-0' : 'invisible translate-y-full',
      )}
    >
      <div className="flex items-center justify-between gap-4 px-5 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3">
        <p className="min-w-0 leading-tight">
          <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Semana de prueba
          </span>
          <span className="mt-0.5 block text-base font-bold text-foreground">
            {PRICE_TRIAL} {PRICE_CURRENCY}
          </span>
        </p>
        <a
          href={waLink(WA_MESSAGES.trial)}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={visible ? 0 : -1}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium tracking-wide text-primary-foreground"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          Empezar
        </a>
      </div>
    </div>
  )
}
