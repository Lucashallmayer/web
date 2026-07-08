'use client'

import { Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionLabel, WhatsAppButton } from '@/components/primitives'

const FEATURES = [
  'Rutina 100% adaptada a tu gimnasio y proporciones',
  'Plan nutricional personalizado',
  'Feedback semanal en video (+25-30 min)',
  'Ajustes ilimitados por WhatsApp',
  'Se paga a mes futuro. Cancelás cuando quieras.',
]

export function Pricing() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <Reveal className="mx-auto max-w-2xl text-center">
        <SectionLabel>La inversión</SectionLabel>
        <h2 className="mt-5 text-balance font-black leading-[1.02] tracking-tight text-foreground text-3xl sm:text-4xl md:text-5xl">
          Pocos clientes. Trato de verdad.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          Manejo un número limitado de clientes por mes. No es estrategia de
          venta: es la única forma de dar el nivel de análisis que ofrezco.
        </p>
      </Reveal>

      <Reveal className="mx-auto mt-14 max-w-xl">
        <div className="overflow-hidden rounded-3xl border border-border bg-card">
          <div className="border-b border-border p-8 md:p-10">
            <h3 className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Plan completo
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Entrenamiento + Nutrición + Feedback semanal
            </p>
            <p className="mt-6 font-black tracking-tight text-foreground text-4xl md:text-5xl">
              $100.000 ARS{' '}
              <span className="text-lg font-medium text-muted-foreground">
                / mes
              </span>
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              (consultar equivalente en USD/EUR para clientes fuera de
              Argentina)
            </p>
          </div>

          <div className="p-8 md:p-10">
            <ul className="space-y-4">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Check className="size-3" />
                  </span>
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-accent/40 bg-accent/10 p-5">
              <p className="text-sm font-medium leading-relaxed text-foreground">
                Semana de prueba: $40.000 ARS. Si te quedás, se descuenta del
                primer mes.
              </p>
            </div>

            <WhatsAppButton className="mt-8 w-full">
              Empezar ahora →
            </WhatsAppButton>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
