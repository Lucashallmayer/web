'use client'

import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/primitives'

// Medidas reales de cada captura: se muestran completas, sin franjas vacías.
const TESTI = [
  {
    n: 1,
    w: 824,
    h: 690,
    alt: 'Mensaje de WhatsApp de un cliente: "me pude sacar el miedo e hice con barra olímpica"',
    caption: '«Me pude sacar el miedo e hice con barra olímpica.»',
  },
  {
    n: 2,
    w: 824,
    h: 1094,
    alt: 'Mensaje de WhatsApp de una clienta que compara sus fotos de febrero de 2024 y febrero de 2026: "me quedé sin palabras, estoy sorprendida"',
    caption: 'Febrero de 2024 y febrero de 2026: «me quedé sin palabras».',
  },
  {
    n: 3,
    w: 824,
    h: 1232,
    alt: 'Mensajes de WhatsApp de clientes: una primera dominada, 100 kg en peso muerto y "lograste que disfrute el día de piernas"',
    caption:
      'Su primera dominada, los 100 kg en peso muerto y hasta disfrutar el día de piernas.',
  },
]

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <Reveal className="max-w-3xl">
        <h2 className="text-balance font-black leading-[1.02] tracking-tight text-foreground text-3xl sm:text-4xl md:text-5xl">
          Lo que dicen los que ya empezaron.
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TESTI.map((t, i) => (
          <Reveal key={t.n} delay={i * 0.1}>
            <figure>
              <div className="overflow-hidden rounded-2xl border border-border bg-card">
                <Image
                  src={`/testi-${t.n}.png`}
                  alt={t.alt}
                  width={t.w}
                  height={t.h}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                {t.caption}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16 md:mt-20">
        <CtaBand note="Empezás con una semana de prueba, no un compromiso a ciegas.">
          Empezar ahora →
        </CtaBand>
      </Reveal>
    </section>
  )
}
