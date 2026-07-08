'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const FAQS = [
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
    a: 'Sí. Se paga a mes futuro. Si un mes no querés seguir, no lo abonás. Sin contratos, sin permanencia.',
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
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left"
                  aria-expanded={isOpen}
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
                    className={cn(
                      'size-5 shrink-0 text-muted-foreground transition-transform duration-300',
                      isOpen && 'rotate-45 text-accent',
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-8 text-sm leading-relaxed text-muted-foreground md:text-base">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </Reveal>
    </section>
  )
}
