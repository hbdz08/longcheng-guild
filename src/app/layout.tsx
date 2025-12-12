import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '龍成遊戲公會 | 好遊戲的搬運工',
  description: '成立於2014年,服務100萬+玩家的專業遊戲公會。專業會長指導,花錢更值,兄弟並肩作戰。',
  applicationName: '龍成遊戲公會',
  alternates: {
    canonical: 'https://www.manmanyouhudong.com',
  },
  keywords: ['遊戲公會', '龍成', 'MMORPG', '手遊', '網遊', '遊戲社區'],
  authors: [{ name: '龍成遊戲公會' }],
  icons: {
    icon: 'https://image.xixingwangluokeji.cn/image/favicon.ico',
    shortcut: 'https://image.xixingwangluokeji.cn/image/favicon.ico',
    apple: 'https://image.xixingwangluokeji.cn/image/favicon.ico',
  },
  openGraph: {
    title: '龍成遊戲公會 | 好遊戲的搬運工',
    description: '成立於2014年,服務100萬+玩家',
    type: 'website',
    siteName: '龍成遊戲公會',
    url: 'https://www.manmanyouhudong.com',
    images: [
      {
        url: 'https://image.xixingwangluokeji.cn/image/favicon.ico',
        width: 48,
        height: 48,
        alt: '龍成遊戲公會',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '龍成遊戲公會',
    url: 'https://www.manmanyouhudong.com',
    logo: 'https://image.xixingwangluokeji.cn/image/favicon.ico',
  }

  return (
    <html lang="zh-CN" className="overflow-x-hidden">
     
      <body className={`  overflow-x-hidden`}>
        <script
          type="application/ld+json"
          // 提示 Google 使用站點名稱與圖標
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
