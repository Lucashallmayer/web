'use client'

import type { ReactNode } from 'react'
import { Check, Video } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Accent, CtaBand, SectionLabel } from '@/components/primitives'
import { WA_MESSAGES } from '@/lib/site'

function DetailCard({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 md:p-6">
      <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </p>
      <div className="mt-4">{children}</div>
    </div>
  )
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm leading-snug text-foreground/90">
          <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
            <Check className="size-2.5" aria-hidden="true" />
          </span>
          {item}
        </li>
      ))}
    </ul>
  )
}

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs text-foreground/90"
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

// Los cuatro bloques que cubre el feedback semanal.
const FEEDBACK_PARTS = ['Cargas', 'Técnica', 'Registros', 'Progreso']

const CHAPTERS: { n: string; title: string; body: string; detail: ReactNode }[] = [
  {
    n: '01',
    title: 'Analizo tu caso.',
    body: 'Me escribís por WhatsApp. Te paso un formulario donde me contás tu caso. Con eso arranco el diseño.',
    detail: (
      <DetailCard label="Lo que te pregunto">
        <CheckList
          items={[
            'Historial',
            'Disponibilidad',
            'Lesiones',
            'Objetivos',
            'Hábitos actuales',
          ]}
        />
      </DetailCard>
    ),
  },
  {
    n: '02',
    title: 'Diseño tu plan a medida.',
    body: 'En 48-72 horas te llega tu rutina adaptada a tu gimnasio, tus proporciones y tus tiempos. Más las pautas nutricionales alineadas con tu objetivo.',
    detail: (
      <DetailCard label="Tu planilla">
        <Chips
          items={[
            'Rutina',
            'Nutrición',
            'Peso y pasos',
            'Macros',
            'Equivalencias',
            'Progreso',
          ]}
        />
        <div className="mt-5 border-t border-border pt-5">
          <CheckList
            items={[
              'Cada ejercicio con su video de técnica',
              'Cuatro opciones por comida, en gramos',
              'Plan para las próximas 12 semanas',
            ]}
          />
        </div>
      </DetailCard>
    ),
  },
  {
    n: '03',
    title: 'Empezás y resolvemos dudas.',
    body: 'Primera semana en el gym. Videos, técnica, uso de máquinas, ajustes nutricionales. Todo por WhatsApp, sin esperar.',
    detail: (
      <DetailCard label="Cómo hablamos">
        <dl className="space-y-4">
          <div>
            <dt className="text-xs text-muted-foreground">Durante la semana</dt>
            <dd className="mt-1 text-sm text-foreground/90">Mensajes cortos por WhatsApp</dd>
          </div>
          <div className="border-t border-border pt-4">
            <dt className="text-xs text-muted-foreground">Los domingos</dt>
            <dd className="mt-1 text-sm text-foreground/90">Tu feedback detallado en video</dd>
          </div>
        </dl>
      </DetailCard>
    ),
  },
  {
    n: '04',
    title: 'Feedback semanal grabado en video.',
    body: 'Cada semana grabo un feedback de 25-30 minutos analizando tu plan al detalle. Al primer mes revisamos todo el plan.',
    detail: (
      <DetailCard label="Tu feedback de la semana">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
              <Video className="size-4" aria-hidden="true" />
            </span>
            <p className="text-sm font-medium leading-snug text-foreground">
              Video grabado para vos
            </p>
          </div>
          <span className="shrink-0 rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground">
            25-30 min
          </span>
        </div>
        <ul className="mt-5 grid grid-cols-4 gap-1.5">
          {FEEDBACK_PARTS.map((part) => (
            <li key={part}>
              <span className="block h-1.5 rounded-full bg-accent/70" aria-hidden="true" />
              <span className="mt-2 block text-[11px] leading-tight text-muted-foreground">
                {part}
              </span>
            </li>
          ))}
        </ul>
      </DetailCard>
    ),
  },
]

export function Process() {
  return (
    <section id="proceso" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 md:px-8 md:py-32">
      <Reveal className="max-w-3xl">
        <SectionLabel>El proceso</SectionLabel>
        <h2 className="mt-5 text-balance font-black leading-[1.02] tracking-tight text-foreground text-3xl sm:text-4xl md:text-5xl">
          De cero a tu primera semana <Accent>en 72 horas.</Accent>
        </h2>
      </Reveal>

      <div className="relative mt-16">
        {/* línea vertical que une los capítulos */}
        <div
          className="absolute bottom-0 left-[4.5px] top-2 w-px bg-border md:left-[4.5rem]"
          aria-hidden="true"
        />

        <div className="flex flex-col gap-14 md:gap-20">
          {CHAPTERS.map((ch, i) => (
            <Reveal key={ch.n} delay={i * 0.05}>
              <div className="relative grid grid-cols-[auto_1fr] gap-6 md:grid-cols-[9rem_1fr] md:gap-10">
                <div className="flex items-start pt-1.5 md:pt-0">
                  {/* punto sobre la línea en mobile */}
                  <span className="size-2.5 shrink-0 rounded-full bg-accent md:hidden" />
                  <span
                    className="hidden font-black leading-none text-transparent md:block md:text-7xl"
                    style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.18)' }}
                    aria-hidden="true"
                  >
                    {ch.n}
                  </span>
                </div>
                <div className="grid gap-6 pt-0.5 lg:grid-cols-[minmax(0,1fr)_21rem] lg:items-start lg:gap-12">
                  <div>
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
                  {ch.detail}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal className="mt-16 md:mt-24">
        <CtaBand
          message={WA_MESSAGES.trial}
          note="Cupos limitados por mes para mantener el nivel de análisis."
        >
          Empezar con la semana de prueba →
        </CtaBand>
      </Reveal>
    </section>
  )
}
