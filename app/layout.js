// app/layout.js
import { Inter } from 'next/font/google'
import './globals.css' // Import Tailwind CSS

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['500', '600', '900'] 
})

export const metadata = {
  title: "David Alexander",
  description: "",
  icons: {
    icon: '/img/Favicon.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}