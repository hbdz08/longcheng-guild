import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '龙成游戏公会 | 好游戏的搬运工',
  description: '成立于2014年,服务100万+玩家的专业游戏公会。专业会长指导,花钱更值,兄弟并肩作战。',
  keywords: ['游戏公会', '龙成', 'MMORPG', '手游', '网游', '游戏社区'],
  authors: [{ name: '龙成游戏公会' }],
  openGraph: {
    title: '龙成游戏公会 | 好游戏的搬运工',
    description: '成立于2014年,服务100万+玩家',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
