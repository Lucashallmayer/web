'use client'

import { Reveal } from '@/components/reveal'

const CARDS = [
  {
    n: '01',
    title: 'Rutinas con IA o del entrenador del gym',
    body: 'Descargaste una app o te dieron un plan que le sirve al que entrena al lado tuyo. Pero vos tenés otras palancas, otras lesiones, otros horarios. Sin adaptación real, no hay progreso real.',
  },
  {
    n: '02',
    title: 'Probaste mil dietas y ninguna funcionó',
    body: 'Keto, ayuno, "sin harinas", low-carb. Bajaste, subiste, bajaste de nuevo. Perdiste músculo, no grasa. Y volviste a empezar con menos energía que antes.',
  },
  {
    n: '03',
    title: 'Suplementos mágicos que prometían el milagro',
    body: 'Termogénicos, quemadores, "el pre-entreno que cambia todo". Gastaste plata en cosas que no mueven la aguja cuando lo esencial, entrenamiento y nutrición, no está bien armado.',
  },
]

export function Problem() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance font-black leading-[1.02] tracking-tight text-foreground text-3xl sm:text-4xl md:text-5xl">
          Probaste esto y no funcionó.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          La mayoría de la gente que llega a mí probó tres cosas antes. Y las
          tres fallaron por el mismo motivo: nadie las miró como personas
          únicas.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
        {CARDS.map((card, i) => (
          <Reveal key={card.n} delay={i * 0.1}>
            <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-colors duration-300 hover:border-white/15">
              <span
                className="font-black text-4xl leading-none text-transparent md:text-5xl"
                style={{ WebkitTextStroke: '1.5px #3b82f6' }}
                aria-hidden="true"
              >
                {card.n}
              </span>
              <h3 className="mt-6 text-lg font-bold text-foreground">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {card.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14 text-center">
        <p className="text-balance text-xl font-medium text-foreground md:text-2xl">
          El problema no fuiste vos. Fue el enfoque.
        </p>
      </Reveal>
    </section>
  )
}
