'use client'

import { Check, X } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Accent, SectionLabel } from '@/components/primitives'

// Cada fila contrasta lo que pasa entrenando por tu cuenta con el pilar del método.
const ROWS = [
  {
    alone:
      'Seguís una rutina pensada para otro cuerpo: la de una app, una IA o el entrenador del gym.',
    title: 'Análisis biomecánico',
    body: 'Fotos y videos de tu físico, tus proporciones y tu gimnasio. Elijo los ejercicios que le sirven a tu cuerpo, no los que están de moda. Si tenés lesiones, las respetamos y trabajamos alrededor.',
  },
  {
    alone:
      'Entrenás fuerte, pero nadie mira tus registros ni te dice qué ajustar.',
    title: 'Progresión medida semana a semana',
    body: 'Cada semana grabo un feedback de 25-30 minutos analizando tu plan al detalle: cargas, técnica, registros y percepciones. No es un audio genérico, es una sesión completa dedicada exclusivamente a vos. Preparate un mate porque hay mucho que analizar.',
  },
  {
    alone: 'Saltás de dieta en dieta: bajás, subís y volvés a empezar.',
    title: 'Nutrición basada en tus hábitos',
    body: 'Nada de dietas imposibles. Trabajamos con los alimentos que ya comés, ajustando macros y timing según tu progreso semanal.',
  },
  {
    alone:
      'Repetís el mismo plan durante meses, aunque hayas dejado de progresar.',
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
            Así aseguramos <Accent>tu transformación.</Accent>
          </h2>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Cuatro pilares. Sin atajos. Sin humo. Solo lo que la ciencia dice
            que funciona, adaptado a tu vida real.
          </p>
        </Reveal>

        {/* encabezado de columnas, solo en pantallas grandes */}
        <div className="mt-14 hidden grid-cols-[2fr_3fr] px-px text-xs font-medium uppercase tracking-[0.22em] md:grid">
          <p className="px-8 text-muted-foreground">Por tu cuenta</p>
          <p className="px-8 text-accent">Conmigo</p>
        </div>

        <div className="mt-14 flex flex-col gap-4 md:mt-5">
          {ROWS.map((row, i) => (
            <Reveal key={row.title} delay={i * 0.05}>
              <article className="grid overflow-hidden rounded-2xl border border-border transition-colors duration-300 hover:border-white/15 md:grid-cols-[2fr_3fr]">
                <div className="flex gap-3.5 border-b border-border p-6 md:border-b-0 md:border-r md:p-8">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-muted-foreground">
                    <X className="size-3" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="mb-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground md:hidden">
                      Por tu cuenta
                    </p>
                    <p className="text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
                      {row.alone}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3.5 bg-card p-6 md:p-8">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Check className="size-3" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="mb-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-accent md:hidden">
                      Conmigo
                    </p>
                    <h3 className="text-lg font-bold text-foreground md:text-xl">
                      {row.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                      {row.body}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
