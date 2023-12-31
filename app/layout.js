import './globals.css'
import { Montserrat } from 'next/font/google'
import { Inter } from 'next/font/google'

import Navbar from './navbar'

const montserrat = Montserrat({
  weight: ['400','500','600','700','800'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Flocial',
  description: 'First-ever social identity protocol for Flow!',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={montserrat.className}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
