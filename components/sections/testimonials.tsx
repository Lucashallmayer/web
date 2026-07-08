'use client'

import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const TESTI = [1, 2, 3]

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <Reveal className="max-w-3xl">
        <h2 className="text-balance font-black leading-[1.02] tracking-tight text-foreground text-3xl sm:text-4xl md:text-5xl">
          Lo que dicen los que ya empezaron.
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TESTI.map((n, i) => (
          <Reveal key={n} delay={i * 0.1}>
            <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-border bg-card">
              <Image
                src={`/testi-${n}.png`}
                alt={`Testimonio de cliente ${n} por WhatsApp`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
