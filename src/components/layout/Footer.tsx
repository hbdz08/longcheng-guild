import { Container } from '@/components/ui'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: '关于我们',
      links: [
        { label: '公会简介', href: '#' },
        { label: '发展历程', href: '#' },
        { label: '团队介绍', href: '#' },
        { label: '联系我们', href: '#' },
      ],
    },
    {
      title: '游戏推荐',
      links: [
        { label: 'MMORPG', href: '#' },
        { label: '卡牌策略', href: '#' },
        { label: '竞技对战', href: '#' },
        { label: '休闲游戏', href: '#' },
      ],
    },
    {
      title: '加入我们',
      links: [
        { label: '新人指南', href: '#' },
        { label: '公会福利', href: '#' },
        { label: '活动中心', href: '#' },
        { label: '常见问题', href: '#' },
      ],
    },
  ]

  const socialLinks = [
    { label: 'QQ群', icon: '💬', href: '#' },
    { label: '微信', icon: '💚', href: '#' },
    { label: 'Discord', icon: '🎮', href: '#' },
    { label: 'B站', icon: '📺', href: '#' },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-brand-dark to-black border-t border-white/10">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(217,119,6,0.05),transparent_50%)]" />

      <Container size="lg" className="relative">
        {/* 主要内容 */}
        

        {/* 分隔线 */}
        <div className="border-t border-white/10" />

        {/* 底部信息 */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <div className="text-center md:text-left">
            <p>© {currentYear} 龙成游戏公会. All rights reserved.</p>
            <p className="text-xs mt-1">好游戏的搬运工 · 成立于2014年 · 服务100万+玩家</p>
          </div>

          <div className="flex items-center gap-6 text-xs">
            <a href="#" className="hover:text-brand-gold transition-colors">
              隐私政策
            </a>
            <a href="#" className="hover:text-brand-gold transition-colors">
              服务条款
            </a>
            <a href="#" className="hover:text-brand-gold transition-colors">
              用户协议
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
