'use client'

import Image from 'next/image'
import { Accent, WhatsAppButton } from '@/components/primitives'

// La entrada del hero se anima con CSS (no con JavaScript): el titular, la foto
// y el botón se ven apenas carga la página, sin esperar a que baje el script.
const ENTER =
  'animate-in fill-mode-both ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:animate-none'

export function Hero() {
  const scrollToProcess = (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector('#proceso')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="top" className="relative overflow-hidden md:pt-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center md:min-h-[88vh] md:grid-cols-2 md:gap-16 md:px-8 md:pb-24">
        {/* Texto. En mobile se monta sobre el borde inferior de la foto para que
            el titular y el botón entren en la primera pantalla. */}
        <div
          className={`relative z-10 order-2 -mt-12 px-5 pb-14 md:order-1 md:mt-0 md:px-0 md:pb-0 ${ENTER} fade-in slide-in-from-bottom-6 duration-700`}
        >
          {/* En pantallas de celular muy bajas (por ejemplo, el navegador interno de
              Instagram en teléfonos chicos) esta línea se oculta para que el botón no
              quede fuera de la primera pantalla. */}
          <p className="text-balance text-[11px] font-medium uppercase leading-relaxed tracking-[0.18em] text-muted-foreground max-md:[@media(max-height:640px)]:hidden md:text-xs md:tracking-[0.22em]">
            Ciencia aplicada · Feedback semanal en video · +75 transformaciones
          </p>

          <h1 className="mt-4 text-balance font-black leading-[0.98] tracking-tight text-foreground text-[2.125rem] sm:text-5xl md:mt-6 lg:text-6xl">
            <span className="block">Ya entrenás.</span>{' '}
            <span className="block">Todavía no progresás.</span>{' '}
            <span className="block">
              <Accent>Cambiemos el enfoque.</Accent>
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:mt-6 md:text-lg">
            Entrenamiento y nutrición basados en ciencia, con feedback semanal
            grabado en video. Para adultos que ya entrenan pero no ven cambios
            reales.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center md:mt-8">
            <WhatsAppButton id="hero-cta" icon className="whitespace-nowrap">
              Empezar ahora →
            </WhatsAppButton>
            <a
              href="#proceso"
              onClick={scrollToProcess}
              className="hidden items-center justify-center whitespace-nowrap rounded-full border border-border px-7 py-3.5 text-sm font-medium tracking-wide text-foreground transition-all duration-300 hover:scale-[1.02] hover:bg-secondary sm:inline-flex"
            >
              Ver el proceso
            </a>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Empezás con una semana de prueba, no un compromiso a ciegas.
          </p>

          <p className="mt-3 flex items-start gap-2.5 text-sm text-muted-foreground">
            <span className="relative mt-1.5 flex size-2 shrink-0" aria-hidden="true">
              <span className="absolute inline-flex size-full rounded-full bg-emerald-400 opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            Respondo por WhatsApp en menos de 24 hs.
          </p>
        </div>

        {/* Foto: banda superior en mobile, tarjeta a la derecha en desktop. */}
        <div className={`order-1 md:order-2 ${ENTER} zoom-in-104 duration-1000`}>
          <div className="relative h-[36svh] max-h-[340px] min-h-[210px] w-full overflow-hidden md:ml-auto md:aspect-[3/4] md:h-auto md:max-h-none md:min-h-0 md:max-w-md md:rounded-2xl">
            <Image
              src="/hero.png"
              alt="Lucas Hällmayer, entrenador online especializado en entrenamiento y nutrición basados en ciencia"
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-[50%_35%] md:object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            {/* En mobile el texto se apoya sobre la foto: refuerza el degradado inferior */}
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background via-background/80 to-transparent md:hidden" />
            {/* Oscurece la parte superior en mobile para que el menú se lea sobre la foto */}
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/70 to-transparent md:hidden" />
          </div>
        </div>
      </div>
    </section>
  )
}
