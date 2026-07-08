'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { WHATSAPP_URL } from '@/lib/site'
import { WhatsAppButton } from '@/components/primitives'

export function Hero() {
  const scrollToProcess = (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector('#proceso')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 pb-16 md:min-h-[88vh] md:grid-cols-2 md:gap-16 md:px-8 md:pb-24">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 md:order-1"
        >
          <p className="text-xs font-medium uppercase leading-relaxed tracking-[0.22em] text-muted-foreground">
            Recomposición corporal · Ciencia aplicada · +75 transformaciones
          </p>

          <h1 className="mt-6 text-balance font-black leading-[0.98] tracking-tight text-foreground text-4xl sm:text-5xl md:text-6xl">
            Ya entrenás. Todavía no progresás. Cambiemos el enfoque.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Entrenador online especializado en recomposición corporal. Análisis
            biomecánico, progresión medida semana a semana y ciencia aplicada.
            Para adultos que ya entrenan pero no ven cambios reales.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppButton>Empezar ahora →</WhatsAppButton>
            <a
              href="#proceso"
              onClick={scrollToProcess}
              className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3.5 text-sm font-medium tracking-wide text-foreground transition-all duration-300 hover:scale-[1.02] hover:bg-secondary"
            >
              Ver el proceso
            </a>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            <span className="text-foreground">⭐</span> Escribime por WhatsApp.
            Respondo en menos de 24hs.
          </p>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 md:order-2"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl md:ml-auto"
          >
            <Image
              src="/hero.png"
              alt="Lucas Hällmayer, entrenador online especializado en recomposición corporal"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
