import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from 'next/font/google'
import '@/assets/style.scss'

interface RootLayoutProps {
  children: React.ReactNode
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
