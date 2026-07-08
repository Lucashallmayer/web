'use client'

import { Reveal } from '@/components/reveal'

const CASES = [
  {
    name: 'JUAN',
    subtitle: '42, EMPRESARIO.',
    body: 'Empezó con 95kg y dolor lumbar crónico. En 16 meses: 78kg, peso muerto arriba de 100kg, cero dolor. Entrena 4 veces por semana, 60 minutos.',
  },
  {
    name: 'YSABELLA',
    subtitle: 'MAMÁ RECIENTE.',
    body: 'Llegó con dolores post-parto y trabajando sentada. Tres meses después: recomposición corporal real (menos grasa, más músculo), sin dolores, todas sus marcas mejoradas. Entrena 3 veces por semana, 50 minutos.',
  },
  {
    name: 'ESTEBAN',
    subtitle: '27, GASTRONOMÍA.',
    body: 'Entrenaba mucho pero sin ver cambios. En 8 meses rompió la barrera de los 80kg (buscando masa muscular) y bajó colesterol y triglicéridos en sus análisis.',
  },
]

export function Cases() {
  return (
    <section id="casos" className="scroll-mt-20 border-t border-border bg-[#0c0c0c] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-3xl">
          <h2 className="text-balance font-black leading-[1.02] tracking-tight text-foreground text-3xl sm:text-4xl md:text-5xl">
            No son promesas. Son resultados.
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col gap-5">
          {CASES.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.08}>
              <article className="grid grid-cols-1 gap-4 rounded-2xl border border-border bg-card p-8 transition-colors duration-300 hover:border-white/15 md:grid-cols-[1fr_2fr] md:items-start md:gap-10 md:p-10">
                <div>
                  <h3 className="font-black uppercase tracking-tight text-foreground text-3xl md:text-4xl">
                    {c.name}
                  </h3>
                  <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    {c.subtitle}
                  </p>
                </div>
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  {c.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
