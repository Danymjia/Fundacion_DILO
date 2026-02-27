import type { Metadata, Viewport } from 'next'
import { Nunito, Nunito_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from 'sonner'
import './globals.css'
import { SmoothScroll } from '@/components/smooth-scroll'
import { WhatsAppButton } from '@/components/whatsapp-button'


const _nunito = Nunito({ subsets: ["latin"], variable: "--font-heading" });
const _nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Fundacion DILO | Habla, Lenguaje y Comunicacion',
  description: 'Fundacion DILO - Servicios de terapia del habla, lenguaje y comunicacion para ninos, adolescentes y adultos. Estimulacion temprana, terapia de lenguaje, trastornos de pronunciacion y mas.',
}

export const viewport: Viewport = {
  themeColor: '#b49be8',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <SmoothScroll />
        {children}
        <WhatsAppButton />
        <Toaster position="top-center" richColors />
        <Analytics />
      </body>
    </html>
  )
}
