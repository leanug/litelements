import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'litElements - Customizable Web Components built with Lit',
  description: 'litElements provides a collection of customizable Web Components built with Lit, a lightweight and powerful library for building web applications. With litElements, you can easily add UI components to your projects, customize their styles and behavior, and enjoy the benefits of web components, including encapsulation, reusability, and composability. Whether you\'re building a small website or a complex web application, litElements can help you save time and effort and create beautiful, functional, and scalable user interfaces. Try litElements today and start building your next web project with ease.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
