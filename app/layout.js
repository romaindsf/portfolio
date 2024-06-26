import './globals.css'
import Header from './components/Header'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function Layout({ children }) {
  return (
    <html lang='fr'>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
