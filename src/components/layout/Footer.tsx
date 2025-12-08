import { Container } from '@/components/ui'

export function Footer() {
  const currentYear = new Date().getFullYear()

  

  return (
    <footer className="relative bg-gradient-to-b from-brand-dark to-black border-t border-white/10 overflow-hidden">
      {/* 背景裝飾 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(217,119,6,0.05),transparent_50%)]" />

      <Container size="lg" className="relative py-12 space-y-10">
        

       

        <div className="flex flex-col gap-4 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p>© {currentYear} 龍成遊戲公會 · All rights reserved.</p>
            <p className="text-xs mt-1">好遊戲的搬運工 · 成立於 2014 年 · 服務 100 萬+ 玩家</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs">
            <a href="#" className="hover:text-brand-gold transition-colors">
              隱私政策
            </a>
            <a href="#" className="hover:text-brand-gold transition-colors">
              服務條款
            </a>
            <a href="#" className="hover:text-brand-gold transition-colors">
              用戶協議
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
