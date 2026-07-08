'use client'

import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/primitives'

const CHAPTERS = [
  {
    n: '01',
    title: 'Analizo tu caso.',
    body: 'Me escribís por WhatsApp. Te paso un formulario donde me contás tu historial, disponibilidad, lesiones, objetivos y hábitos actuales. Con eso arranco el diseño.',
  },
  {
    n: '02',
    title: 'Diseño tu plan a medida.',
    body: 'En 48-72 horas te llega tu rutina adaptada a tu gimnasio, tus proporciones y tus tiempos. Más las pautas nutricionales alineadas con tu objetivo.',
  },
  {
    n: '03',
    title: 'Empezás y resolvemos dudas.',
    body: 'Primera semana en el gym. Videos, técnica, uso de máquinas, ajustes nutricionales. Todo por WhatsApp, sin esperar.',
  },
  {
    n: '04',
    title: 'Feedback semanal detallado.',
    body: 'Cada semana grabo un feedback de 25-30 minutos analizando tu plan al detalle: revisando tus cargas, tu técnica, tus registros y tu progreso. No es un audio genérico, es una sesión completa dedicada exclusivamente a vos. Al primer mes revisamos todo el plan.',
  },
]

export function Process() {
  return (
    <section id="proceso" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 md:px-8 md:py-32">
      <Reveal className="max-w-3xl">
        <SectionLabel>El proceso</SectionLabel>
        <h2 className="mt-5 text-balance font-black leading-[1.02] tracking-tight text-foreground text-3xl sm:text-4xl md:text-5xl">
          De cero a tu primera semana en 72 horas.
        </h2>
      </Reveal>

      <div className="relative mt-16">
        {/* vertical connecting line */}
        <div
          className="absolute bottom-0 left-[1.1rem] top-2 w-px bg-border md:left-[4.5rem]"
          aria-hidden="true"
        />

        <div className="flex flex-col gap-14 md:gap-20">
          {CHAPTERS.map((ch, i) => (
            <Reveal key={ch.n} delay={i * 0.05}>
              <div className="relative grid grid-cols-[auto_1fr] gap-6 md:grid-cols-[9rem_1fr] md:gap-10">
                <div className="flex items-start pt-1.5 md:pt-0">
                  {/* dot on the line for mobile */}
                  <span className="size-2.5 shrink-0 rounded-full bg-accent md:hidden" />
                  <span
                    className="hidden font-black leading-none text-transparent md:block md:text-7xl"
                    style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.18)' }}
                    aria-hidden="true"
                  >
                    {ch.n}
                  </span>
                </div>
                <div className="pt-0.5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
                    Capítulo {ch.n}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">
                    {ch.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                    {ch.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
