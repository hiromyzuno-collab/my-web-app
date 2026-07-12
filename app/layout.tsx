import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '大地のムクナ｜発酵とムクナ豆の薬膳味噌 — 限定レシピ5選を無料で',
  description:
    '発酵のチカラとムクナ豆のやさしさを、一杯の味噌汁に。糸島発、自然素材の薬膳味噌。LINE登録で限定レシピ5選を無料でお届けします。登録無料・約30秒で完了。',
  generator: 'Next.js',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f4ecd8',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
