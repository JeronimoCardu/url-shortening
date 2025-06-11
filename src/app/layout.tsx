import { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './global.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Shortly',
  description: 'BMake your link shorter',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={`${poppins.className} `} cz-shortcut-listen='true'>
        {children}
      </body>
    </html>
  )
}
