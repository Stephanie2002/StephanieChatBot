import type { Metadata } from 'next'
import { Playfair_Display, Lora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

const lora = Lora({ 
  subsets: ["latin"],
  variable: '--font-lora',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Reino de Fantasía | Libros que despiertan la imaginación',
  description: 'Descubre los mejores libros de fantasía épica, dragones, magia y mundos extraordinarios. Tu portal a universos literarios sin límites.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${lora.variable} font-serif antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
