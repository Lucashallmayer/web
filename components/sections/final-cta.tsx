'use client'

import { Reveal } from '@/components/reveal'
import { WhatsAppButton } from '@/components/primitives'

export function FinalCta() {
  return (
    <section className="border-t border-border bg-[#0c0c0c] py-28 md:py-40">
      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-balance font-black leading-[1] tracking-tight text-foreground text-4xl sm:text-5xl md:text-6xl">
            La próxima versión de vos empieza hoy.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Escribime por WhatsApp. En 24 horas evaluamos tu caso y arrancamos.
          </p>
          <div className="mt-10 flex justify-center">
            <WhatsAppButton className="px-9 py-4 text-base">
              Escribir por WhatsApp →
            </WhatsAppButton>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            O si preferís, arrancá con la semana de prueba a $40.000.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
