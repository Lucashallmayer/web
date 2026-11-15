'use client'

import { Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Accent, SectionLabel, WhatsAppButton } from '@/components/primitives'
import {
  PRICE_CURRENCY,
  PRICE_MONTH,
  PRICE_TRIAL,
  WA_MESSAGES,
  waLink,
} from '@/lib/site'

const FEATURES = [
  'Rutina diseñada según tu biomecánica y las máquinas de tu gimnasio',
  'Feedback semanal grabado en video de cada entrenamiento, dedicado a ajustar tu plan (25-30 min)',
  'Plan nutricional ajustado a tus hábitos reales',
  'Dudas y ajustes por WhatsApp, sin límite',
  'Se paga mes a mes, por adelantado. Cancelás cuando quieras.',
]

export function Pricing() {
  return (
    <section id="precio" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 md:px-8 md:py-32">
      <Reveal className="mx-auto max-w-2xl text-center">
        <SectionLabel>La inversión</SectionLabel>
        <h2 className="mt-5 text-balance font-black leading-[1.02] tracking-tight text-foreground text-3xl sm:text-4xl md:text-5xl">
          Pocos clientes. <Accent>Trato de verdad.</Accent>
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
            <p className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-black leading-none tracking-tight text-foreground text-5xl md:text-6xl">
                {PRICE_MONTH}
              </span>
              <span className="text-base font-medium text-muted-foreground md:text-lg">
                {PRICE_CURRENCY} / mes
              </span>
            </p>
            <p className="mt-3 text-xs text-muted-foreground">
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

            {/* La semana de prueba ahora es un enlace: abre WhatsApp con ese pedido ya escrito */}
            <a
              href={waLink(WA_MESSAGES.trial)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block rounded-2xl border border-accent/40 bg-accent/10 p-5 transition-colors duration-300 hover:bg-accent/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span className="block text-sm font-medium leading-relaxed text-foreground">
                Semana de prueba: {PRICE_TRIAL} {PRICE_CURRENCY}. Si te quedás,
                se descuenta del primer mes.
              </span>
              <span className="mt-2 block text-sm font-medium text-accent">
                Empezar con la semana de prueba →
              </span>
            </a>

            <WhatsAppButton icon className="mt-4 w-full">
              Empezar ahora →
            </WhatsAppButton>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
