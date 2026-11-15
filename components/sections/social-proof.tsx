'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { Check, ChevronLeft, ChevronRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

// Medidas reales de cada imagen: la tira respeta la proporción original,
// así ninguna foto ni texto queda recortado.
const CASES = [
  { n: 1, w: 824, h: 932, alt: 'Cambio físico de un cliente' },
  { n: 2, w: 824, h: 932, alt: 'Progreso físico de un cliente' },
  { n: 3, w: 824, h: 762, alt: 'Cliente al inicio de su proceso, enero de 2024' },
  { n: 4, w: 824, h: 1120, alt: 'Cliente en julio de 2024, de frente y de espalda' },
  { n: 5, w: 824, h: 806, alt: 'Antes y después de un cliente, de marzo a junio' },
  { n: 6, w: 898, h: 1598, alt: 'Progreso de una clienta entre septiembre de 2025 y abril de 2026' },
  { n: 7, w: 824, h: 1208, alt: 'Cliente a mitad de su etapa de definición, tras diez meses de trabajo' },
  { n: 8, w: 901, h: 1600, alt: 'Resultado físico de un cliente' },
]

const CHECKS = [
  'Perder grasa sin perder músculo',
  'Ganar músculo real',
  'Salir del estancamiento',
  'Entrenar con ciencia, no con modas',
]

export function SocialProof() {
  const strip = useRef<HTMLDivElement>(null)

  const scrollStrip = (dir: 1 | -1) => {
    const el = strip.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.7, behavior: 'smooth' })
  }

  return (
    <section className="border-y border-border bg-[#0c0c0c] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="text-center">
          <p className="font-black leading-none tracking-tight text-foreground text-7xl md:text-8xl">
            +75
          </p>
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
            Transformaciones reales
          </p>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            Cada persona parte de un punto distinto. Todos pueden llegar más
            lejos de lo que creen.
          </p>
        </Reveal>
      </div>

      {/* tira horizontal de antes y después */}
      <Reveal className="relative mt-12 md:mt-16">
        <div
          ref={strip}
          className="scrollbar-thin flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-4 md:scroll-px-8 md:px-8"
        >
          {CASES.map((c) => (
            <div
              key={c.n}
              className="relative h-80 shrink-0 snap-start overflow-hidden rounded-xl border border-border bg-card md:h-[26rem]"
              style={{ aspectRatio: `${c.w} / ${c.h}` }}
            >
              <Image
                src={`/caso-${c.n}.png`}
                alt={c.alt}
                fill
                sizes="(max-width: 768px) 350px, 460px"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* flechas para recorrer la tira con el mouse */}
        <button
          type="button"
          onClick={() => scrollStrip(-1)}
          aria-label="Ver transformaciones anteriores"
          className="absolute left-4 top-1/2 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur transition-colors hover:bg-secondary md:flex"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          onClick={() => scrollStrip(1)}
          aria-label="Ver más transformaciones"
          className="absolute right-4 top-1/2 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur transition-colors hover:bg-secondary md:flex"
        >
          <ChevronRight className="size-5" />
        </button>
      </Reveal>

      <div className="mx-auto mt-12 max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CHECKS.map((c) => (
              <div key={c} className="flex items-center gap-3">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Check className="size-3.5" />
                </span>
                <span className="text-sm text-muted-foreground">{c}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
