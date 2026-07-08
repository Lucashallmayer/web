'use client'

import Image from 'next/image'
import { Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const CASES = [1, 2, 3, 4, 5, 6, 7, 8]
const CHECKS = [
  'Perder grasa sin perder músculo',
  'Ganar músculo real',
  'Salir del estancamiento',
  'Entrenar con ciencia, no con modas',
]

export function SocialProof() {
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

      {/* horizontal scrolling before/after grid */}
      <Reveal className="mt-12 md:mt-16">
        <div className="scrollbar-thin flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:px-8">
          {CASES.map((n) => (
            <div
              key={n}
              className="relative aspect-square w-64 shrink-0 snap-start overflow-hidden rounded-xl border border-border bg-card md:w-72"
            >
              <Image
                src={`/caso-${n}.png`}
                alt={`Transformación real de cliente ${n}: antes y después`}
                fill
                sizes="288px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
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
