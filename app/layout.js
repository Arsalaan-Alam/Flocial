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
  description: 'First ever DSNP on flow',
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
{/*

export default function RootLayout({ children }) {
  return (
    
    <>
      <Navbar />
      <body className={montserrat.className}>{children}</body>
    </>
  )
}
*/
}