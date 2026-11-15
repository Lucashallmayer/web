'use client'

import { useState } from 'react'
import { Reveal } from '@/components/reveal'
import { Accent, WhatsAppButton } from '@/components/primitives'
import { PRICE_TRIAL, WA_MESSAGES, waLink } from '@/lib/site'

// Tres preguntas rápidas. Lo que la persona elige se suma al mensaje que se abre
// en WhatsApp, así el primer contacto ya llega con contexto. No se guarda nada:
// el mensaje lo envía la persona desde su propio WhatsApp.
const QUESTIONS = [
  {
    id: 'objetivo',
    label: '¿Cuál es tu objetivo?',
    options: [
      { label: 'Perder grasa', text: 'Mi objetivo es perder grasa.' },
      { label: 'Ganar músculo', text: 'Mi objetivo es ganar músculo.' },
      { label: 'Recomposición', text: 'Mi objetivo es una recomposición corporal.' },
      { label: 'Salir del estancamiento', text: 'Mi objetivo es salir del estancamiento.' },
    ],
  },
  {
    id: 'experiencia',
    label: '¿Hace cuánto entrenás?',
    options: [
      { label: 'Todavía no entreno', text: 'Todavía no entreno.' },
      { label: 'Menos de 1 año', text: 'Entreno hace menos de 1 año.' },
      { label: '1 a 3 años', text: 'Entreno hace entre 1 y 3 años.' },
      { label: 'Más de 3 años', text: 'Entreno hace más de 3 años.' },
    ],
  },
  {
    id: 'freno',
    label: '¿Qué te frena hoy?',
    options: [
      { label: 'No veo cambios', text: 'Lo que más me frena es que no veo cambios.' },
      { label: 'La alimentación', text: 'Lo que más me frena es la alimentación.' },
      { label: 'La constancia', text: 'Lo que más me frena es la constancia.' },
      { label: 'Una lesión o dolor', text: 'Lo que más me frena es una lesión o dolor.' },
    ],
  },
]

export function FinalCta() {
  // índice de la opción elegida en cada pregunta
  const [answers, setAnswers] = useState<Record<string, number>>({})

  const chosen = QUESTIONS.flatMap((q) =>
    answers[q.id] === undefined ? [] : [q.options[answers[q.id]].text],
  )
  const message = chosen.length
    ? `Hola Lucas. Quiero empezar. ${chosen.join(' ')}`
    : WA_MESSAGES.default

  return (
    <section id="empezar" className="scroll-mt-20 border-t border-border bg-[#0c0c0c] py-28 md:py-40">
      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-balance font-black leading-[1] tracking-tight text-foreground text-4xl sm:text-5xl md:text-6xl">
            La próxima versión de vos <Accent>empieza hoy.</Accent>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Contame tu caso y escribime por WhatsApp. En 24 horas lo evaluamos y
            arrancamos.
          </p>

          <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-border bg-card p-6 text-left md:p-10">
            <div className="space-y-7">
              {QUESTIONS.map((q) => (
                <fieldset key={q.id}>
                  <legend className="text-sm font-medium text-foreground md:text-base">
                    {q.label}
                  </legend>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {q.options.map((o, j) => (
                      <label key={o.label} className="cursor-pointer">
                        <input
                          type="radio"
                          name={q.id}
                          className="peer sr-only"
                          checked={answers[q.id] === j}
                          onChange={() =>
                            setAnswers((prev) => ({ ...prev, [q.id]: j }))
                          }
                        />
                        <span className="inline-flex min-h-11 items-center rounded-full border border-border px-4 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground peer-checked:border-accent peer-checked:bg-accent/15 peer-checked:text-foreground peer-focus-visible:ring-2 peer-focus-visible:ring-ring">
                          {o.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              ))}
            </div>

            <WhatsAppButton
              message={message}
              icon
              className="mt-8 w-full px-9 py-4 text-base"
            >
              Enviar por WhatsApp →
            </WhatsAppButton>
            <p className="mt-3 text-center text-xs leading-relaxed text-muted-foreground">
              Se abre WhatsApp con tu mensaje ya escrito. Lo revisás y lo
              mandás vos.
            </p>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            O si preferís,{' '}
            <a
              href={waLink(WA_MESSAGES.trial)}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
            >
              arrancá con la semana de prueba a {PRICE_TRIAL}
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  )
}
