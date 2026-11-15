// Datos del sitio en un solo lugar: si cambia un precio, el número o un mensaje,
// se edita acá y se actualiza en toda la página.

export const SITE_URL = 'https://hallmayercoach.vercel.app'

export const WHATSAPP_NUMBER = '5491169228492'

export const PRICE_MONTH = '$120.000'
export const PRICE_TRIAL = '$40.000'
export const PRICE_CURRENCY = 'ARS'

// Mensaje que llega precargado al WhatsApp según el botón que tocó la persona.
export const WA_MESSAGES = {
  default:
    'Hola Lucas. Quiero transformar mi físico y mejorar mi salud, me interesa que seas mi guía en este cambio.',
  trial: 'Hola Lucas. Quiero empezar con la semana de prueba.',
  question: 'Hola Lucas. Tengo una consulta antes de empezar.',
} as const

export function waLink(message: string = WA_MESSAGES.default) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_URL = waLink()

export const NAV_LINKS = [
  { label: 'Método', href: '#metodo' },
  { label: 'Casos', href: '#casos' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Precio', href: '#precio' },
  { label: 'FAQ', href: '#faq' },
] as const
