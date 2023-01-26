import '~/styles/globals.scss'

import { Roboto } from '@next/font/google'

interface RootLayoutProps {
  children: React.ReactNode
}

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'optional'
})

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="pt-br" className={roboto.className}>
      <head />
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
