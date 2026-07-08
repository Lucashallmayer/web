'use client'

import Image from 'next/image'
import { Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/primitives'

const CREDENTIALS = [
  'Formación en ENFAF, HIGH Fitness, Fit Generation (avaladas por universidades europeas)',
  'Competidor INBA/PNBA (culturismo natural)',
  '+8 años como entrenador online',
  '+75 transformaciones documentadas',
]

export function About() {
  return (
    <section
      id="sobre-mi"
      className="scroll-mt-20 border-t border-border bg-[#0c0c0c] py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        {/* Left: text */}
        <Reveal>
          <SectionLabel>Sobre mí</SectionLabel>
          <h2 className="mt-5 font-black leading-[1] tracking-tight text-foreground text-4xl md:text-6xl">
            Lucas Hällmayer.
          </h2>
          <p className="mt-5 text-pretty text-lg font-medium text-foreground">
            Entrenador online especializado en recomposición corporal. 8 años.
            +75 clientes analizados uno por uno.
          </p>

          <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base">
            <p>
              Empecé con 18 años. Me obsesioné leyendo libros, yendo a
              conferencias y estudiando papers. Me formé en ENFAF, HIGH Fitness
              y Fit Generation (titulaciones europeas) pero mi mejor formación
              fueron los 75+ casos reales que analicé de cerca durante los
              últimos años.
            </p>
            <p>
              Competí dos veces en culturismo natural internacional (INBA/PNBA).
              No por trofeos: porque no puedo pedirte algo que no le exijo a mi
              propio cuerpo.
            </p>
            <p>
              Trabajo con pocos clientes por mes. No es marketing: es la única
              manera de que cada persona reciba los feedbacks semanales de 25-30
              minutos que ofrezco.
            </p>
          </div>

          <ul className="mt-8 space-y-4">
            {CREDENTIALS.map((c) => (
              <li key={c} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Check className="size-3" />
                </span>
                <span className="text-sm leading-relaxed text-muted-foreground">
                  {c}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Right: images */}
        <Reveal delay={0.1} className="flex flex-col gap-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-card">
            <Image
              src="/about-main.png"
              alt="Retrato de Lucas Hällmayer, entrenador online"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-card">
            <Image
              src="/about-inba.png"
              alt="Lucas Hällmayer compitiendo en culturismo natural INBA/PNBA"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover object-top"
            />
          </div>
          <figure className="flex items-center gap-4">
            <div className="relative size-24 shrink-0 overflow-hidden rounded-xl border border-border bg-card">
              <Image
                src="/about-mate.png"
                alt="Lucas tomando mate en Buenos Aires"
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>
            <figcaption className="text-sm leading-relaxed text-muted-foreground">
              Buenos Aires, Argentina. Atiendo clientes en todo el mundo.
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
