import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { SITE_URL } from '@/lib/site'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

const TITLE =
  'Lucas Hällmayer · Entrenador Online | Ciencia Aplicada al Entrenamiento'
const SHARE_TITLE = 'Lucas Hällmayer · Entrenador Online'
const DESCRIPTION =
  'Entrenamiento y nutrición basados en ciencia, con feedback semanal grabado en video. Para adultos que ya entrenan pero no ven cambios reales.'

// La imagen /og.jpg es la vista previa que aparece al compartir el link
// por WhatsApp, Instagram o cualquier red.
const SHARE_IMAGE = {
  url: '/og.jpg',
  width: 1200,
  height: 630,
  alt: 'Lucas Hällmayer, entrenador online. Ya entrenás. Todavía no progresás. Cambiemos el enfoque.',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: '/',
    siteName: SHARE_TITLE,
    title: SHARE_TITLE,
    description: DESCRIPTION,
    images: [SHARE_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: SHARE_TITLE,
    description: DESCRIPTION,
    images: [SHARE_IMAGE],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-AR" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
