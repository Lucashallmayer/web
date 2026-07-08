'use client'

import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/primitives'

const CARDS = [
  {
    icon: '🔬',
    title: 'Análisis biomecánico',
    body: 'Fotos y videos de tu físico, tus proporciones y tu gimnasio. Elijo los ejercicios que le sirven a tu cuerpo, no los que están de moda. Si tenés lesiones, las respetamos y trabajamos alrededor.',
  },
  {
    icon: '📈',
    title: 'Progresión medida semana a semana',
    body: 'Cada semana grabo un feedback de 25-30 minutos analizando tu plan al detalle: cargas, técnica, registros y percepciones. No es un audio genérico, es una sesión completa dedicada exclusivamente a vos. Preparate un mate porque hay mucho que analizar.',
  },
  {
    icon: '🫘',
    title: 'Nutrición basada en tus hábitos',
    body: 'Nada de dietas imposibles. Trabajamos con los alimentos que ya comés, ajustando macros y timing según tu progreso semanal.',
  },
  {
    icon: '⚙️',
    title: 'Ajuste continuo',
    body: 'Ninguna rutina es perfecta hasta que se pone a prueba. Al primer mes revisamos todo y afinamos. Es un proceso vivo, no un PDF que te mando y desaparezco.',
  },
]

export function Method() {
  return (
    <section id="metodo" className="scroll-mt-20 border-t border-border bg-[#0c0c0c] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-3xl">
          <SectionLabel>El método</SectionLabel>
          <h2 className="mt-5 text-balance font-black leading-[1.02] tracking-tight text-foreground text-3xl sm:text-4xl md:text-5xl">
            Así aseguramos tu transformación.
          </h2>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Cuatro pilares. Sin atajos. Sin humo. Solo lo que la ciencia dice
            que funciona, adaptado a tu vida real.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {CARDS.map((card, i) => (
            <Reveal key={card.title} delay={(i % 2) * 0.1}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-colors duration-300 hover:border-white/15 md:p-10">
                <span className="text-3xl" aria-hidden="true">
                  {card.icon}
                </span>
                <h3 className="mt-6 text-xl font-bold text-foreground">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {card.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
