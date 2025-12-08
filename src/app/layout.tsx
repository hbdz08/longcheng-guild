import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '龍成遊戲公會 | 好遊戲的搬運工',
  description: '成立於2014年,服務100萬+玩家的專業遊戲公會。專業會長指導,花錢更值,兄弟並肩作戰。',
  keywords: ['遊戲公會', '龍成', 'MMORPG', '手遊', '網遊', '遊戲社區'],
  authors: [{ name: '龍成遊戲公會' }],
  openGraph: {
    title: '龍成遊戲公會 | 好遊戲的搬運工',
    description: '成立於2014年,服務100萬+玩家',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className="overflow-x-hidden">
      <body className={`${inter.className} overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
