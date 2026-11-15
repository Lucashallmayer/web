'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'
import { WA_MESSAGES, waLink } from '@/lib/site'

const FAQS = [
  {
    q: 'Ya entreno hace años y sé bastante. ¿Qué me vas a dar que no encuentre gratis?',
    a: 'Información hay de sobra. Lo que falta es alguien que mire tu caso: tus proporciones, tus lesiones, tu gimnasio y tus registros. Cada semana analizo tu plan durante 25-30 minutos y te digo qué ajustar. Eso no está en ningún video de YouTube.',
  },
  {
    q: '¿En qué se diferencia de una app o de una rutina hecha con IA?',
    a: 'Una app te da el mismo plan que al que entrena al lado tuyo. Acá la rutina se arma según tu biomecánica y las máquinas de tu gimnasio, y se ajusta todas las semanas con un feedback grabado en video. Es un proceso vivo, no un PDF.',
  },
  {
    q: '¿En cuánto tiempo se ven cambios?',
    a: 'Depende de tu punto de partida y de tu objetivo. Ysabella logró su recomposición en tres meses. Esteban tardó ocho en superar los 80 kg. Juan bajó de 95 a 78 kg en dieciséis. Lo que sí tenés desde la primera semana es claridad: qué hacer, cuánto y por qué.',
  },
  {
    q: '¿Y si no tengo constancia?',
    a: 'Es lo primero que me dicen todos. Por eso el sistema está pensado para no depender de tu fuerza de voluntad. Rutinas adaptadas, sostenibles, con revisiones semanales que te marcan el rumbo. Vas a tener alguien que analiza tu progreso todas las semanas. No estás solo.',
  },
  {
    q: '¿Y si me lesiono o tengo lesiones previas?',
    a: 'El análisis biomecánico existe justamente para eso. Trabajamos alrededor de tus lesiones, no en contra, y en muchos casos las mejoramos. Juan llegó con dolor lumbar crónico y hoy hace peso muerto sin dolor.',
  },
  {
    q: '¿Necesito ir a un gimnasio específico?',
    a: 'No. Adapto la rutina al gimnasio que tengas cerca. Solo necesito fotos o videos de las máquinas disponibles.',
  },
  {
    q: '¿Puedo hacerlo desde otro país?',
    a: 'Sí. El servicio es 100% online. Trabajo con gente en Argentina, España, Chile, Australia y más.',
  },
  {
    q: '¿Cuándo respondés los mensajes?',
    a: 'Mensajes cortos, durante la semana. Los feedbacks detallados los mando los domingos, para poder dedicarles el tiempo que merecen (25-30 minutos por cliente, en serio).',
  },
  {
    q: '¿Vendés suplementos?',
    a: 'No. Y si necesitás alguno específico (el 99% de los casos no son necesarios), te lo digo directamente por WhatsApp sin comisión de por medio ni nada raro.',
  },
  {
    q: '¿Puedo cancelar cuando quiera?',
    a: 'Sí. Se paga mes a mes, por adelantado. Si un mes no querés seguir, no lo abonás. Sin contratos, sin permanencia.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-20 px-5 py-24 md:px-8 md:py-32">
      <Reveal className="text-center">
        <h2 className="text-balance font-black leading-[1.02] tracking-tight text-foreground text-3xl sm:text-4xl md:text-5xl">
          Lo que suelen preguntarme.
        </h2>
      </Reveal>

      <Reveal className="mt-12">
        <div className="divide-y divide-border border-y border-border">
          {FAQS.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q}>
                <h3>
                  <button
                    type="button"
                    id={`faq-q-${i}`}
                    aria-controls={`faq-a-${i}`}
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-6 text-left"
                  >
                    <span
                      className={cn(
                        'text-base font-medium transition-colors md:text-lg',
                        isOpen ? 'text-foreground' : 'text-foreground/90',
                      )}
                    >
                      {item.q}
                    </span>
                    <Plus
                      aria-hidden="true"
                      className={cn(
                        'size-5 shrink-0 text-muted-foreground transition-transform duration-300',
                        isOpen && 'rotate-45 text-accent',
                      )}
                    />
                  </button>
                </h3>
                {/* Todas las respuestas quedan en el HTML (antes solo existía la abierta),
                    así Google y los lectores de pantalla pueden leerlas. */}
                <div
                  id={`faq-a-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  aria-hidden={!isOpen}
                  className={cn(
                    'grid transition-[grid-template-rows,opacity] duration-300 ease-out',
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pr-8 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Reveal>

      <Reveal className="mt-10 text-center">
        <p className="text-sm text-muted-foreground md:text-base">
          ¿Te quedó otra duda?{' '}
          <a
            href={waLink(WA_MESSAGES.question)}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
          >
            Escribime por WhatsApp
          </a>
        </p>
      </Reveal>
    </section>
  )
}
