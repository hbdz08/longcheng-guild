import { Container } from '@/components/ui'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-b from-brand-dark to-black border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(217,119,6,0.06),transparent_55%)]" />

      <Container size="lg" className="relative py-12">
        <div className="flex flex-col gap-10 text-sm text-gray-400 md:flex-row md:items-center md:justify-between md:gap-12 md:pl-12">
          <div className="space-y-2 text-center md:text-left md:space-y-1.5">
            <p>&copy; {currentYear} 龍成遊戲公會 &middot; All rights reserved.</p>
            <p className="text-xs text-gray-500">好遊戲的搬運工 &middot; 成立於 2014 年 &middot; 服務 100 萬+ 玩家</p>
          </div>

          <nav className="flex flex-col items-center gap-3 text-xs sm:flex-row sm:flex-wrap sm:justify-center md:flex-nowrap md:gap-4 lg:gap-6">
            <a
              href="#"
              className="inline-flex items-center rounded-full border border-white/10 px-4 py-1.5 transition-colors hover:border-brand-gold hover:text-brand-gold"
            >
              隱私政策
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-full border border-white/10 px-4 py-1.5 transition-colors hover:border-brand-gold hover:text-brand-gold"
            >
              服務條款
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-full border border-white/10 px-4 py-1.5 transition-colors hover:border-brand-gold hover:text-brand-gold"
            >
              用戶協議
            </a>
          </nav>
        </div>
      </Container>
    </footer>
  )
}
