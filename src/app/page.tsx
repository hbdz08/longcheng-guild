'use client'

import {
  GameButton,
  GameTitle,
  GameSubtitle,
  GameCard,
  GameCardGrid,
  Section,
  Container,
} from '@/components/ui'
import { Header, Footer } from '@/components/layout'
import Image from 'next/image' // 👈 必须加这一行
export default function HomePage() {
  return (
    <>
      {/* 导航栏 */}
      <Header />

      {/* 主内容 */}
      <main className="relative">
      {/* 🎬 Hero 区域 */}
      <Section
        id="hero"
       
        className="relative overflow-hidden aspect-[9/16] md:aspect-[16/9] min-h-[500px] md:min-h-[800px] pt-20 md:pt-24"
      >
        {/* 背景装饰 */}
        <div className="absolute inset-0 -z-10" >
          {/* Mobile Image: 手机显示，平板隐藏 */}
          <div className="block md:hidden relative w-full h-full">
             <Image
               src="https://image.xixingwangluokeji.cn/mobile/tv.png"
               alt="Hero Background Mobile"
               fill  
               priority  
               
               className="object-contain object-top" // 关键：保持比例填满，重心靠上(避免裁掉头)
             
             />
          </div>

          {/* Desktop Image: 手机隐藏，平板显示 */}
          <div className="hidden md:block relative w-full h-full">
             <Image
               src="https://image.xixingwangluokeji.cn/desktop/tv@2x.png"
               alt="Hero Background Desktop"
               fill // 自动填满父容器
               priority
               className="object-cover object-center" // 关键：保持比例填满，居中对齐
           
             />
          </div>
        </div>
 

        {/* 内容 */}
        <Container size="lg" className="relative z-0 text-center">
          {/* 主标题 */}
        

          {/* <GameSubtitle>
            成立于2014年 · 服务<span className="text-brand-gold font-bold">100万+</span>玩家 · 好游戏的搬运工
          </GameSubtitle> */}

          {/* CTA 按钮 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <GameButton
              variant="gold"
              size="xl"
              onClick={() => console.log('立即加入')}
            >
              立即加入公会 🚀
            </GameButton>

            <GameButton
              variant="outline"
              size="xl"
              onClick={() => console.log('了解更多')}
            >
              了解更多
            </GameButton>
          </div>

          {/* 关键数据 */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              { label: '成立时间', value: '2014年', icon: '🏆' },
              { label: '服务玩家', value: '100万+', icon: '👥' },
              { label: '推广游戏', value: '500+', icon: '🎮' },
              { label: '在线时长', value: '24小时', icon: '⏰' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="glass rounded-2xl p-4 md:p-6 transform transition-transform duration-300 hover:scale-105"
              >
                <div className="text-3xl md:text-4xl mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-brand-gold mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div> */}

          {/* 底部标语 */}
          <p className="mt-16 text-xl md:text-2xl text-brand-gold font-bold animate-pulse">
            跟对公会,游戏才真正好玩!
          </p>
        </Container>

        {/* 底部装饰徽章 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="relative">
            <div className="absolute inset-0 bg-brand-gold/20 blur-2xl rounded-full" />
            <div className="relative glass rounded-full px-8 py-3 border border-brand-gold/50">
              <span className="text-brand-gold font-game text-2xl font-bold">
                SINCE 2014
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* 🎯 核心优势 */}
      <Section
        id="advantages"
        className="bg-gradient-to-b from-brand-dark via-gray-900 to-brand-dark"
      >
        <Container size="lg">
          <GameTitle variant="gold" size="xl" as="h2">
            龙成游戏公会的核心优势
          </GameTitle>

          <GameCardGrid cols={2}>
            {/* 卡片1 */}
            <GameCard
              icon="🎮"
              title="游戏体验升级"
              description="专业会长全程指导,新手也能快速上手,跳过繁琐的摸索期,直接享受游戏真正的乐趣。告别孤独的单机体验!"
              variant="gold"
            />

            {/* 卡片2 */}
            <GameCard
              icon="💰"
              title="经济与福利"
              description="公会专属折扣和返利,让你花的每一分钱都更值。定期福利发放,游戏资源唾手可得,省钱又省心。"
              variant="gold"
            />

            {/* 卡片3 */}
            <GameCard
              icon="⚔️"
              title="战斗与社交"
              description="告别孤军奋战!与兄弟并肩作战,体验真正的团队配合。这里不只是游戏,更是一个温暖的家。"
              variant="dragon"
            />

            {/* 卡片4 */}
            <GameCard
              icon="🏆"
              title="荣耀与成就"
              description="集体冲击排行榜,共同创造传奇。个人的荣耀就是公会的荣耀,一起书写属于我们的游戏史诗。"
              variant="dragon"
            />
          </GameCardGrid>

          {/* 特别优势 */}
          <div className="mt-12 max-w-3xl mx-auto">
            <GameCard
              icon="⭐"
              title="龙成公会的特别优势"
              description={
                <ul className="space-y-3 text-left">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold">✓</span>
                    <span><strong className="text-white">10年沉淀</strong>: 自2014年起积累的丰富经验</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold">✓</span>
                    <span><strong className="text-white">全品类覆盖</strong>: MMORPG、卡牌、竞技,应有尽有</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold">✓</span>
                    <span><strong className="text-white">24小时服务</strong>: 随时随地为你提供帮助</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold">✓</span>
                    <span><strong className="text-white">长线陪伴</strong>: 不是快餐公会,而是长期的游戏伙伴</span>
                  </li>
                </ul>
              }
              variant="game"
            />
          </div>
        </Container>
      </Section>

      {/* 🎯 为什么选择我们 */}
      <Section
        id="why-us"
        className="bg-gradient-to-b from-gray-900 to-brand-dark"
      >
        <Container size="lg">
          <GameTitle variant="dragon" size="xl" as="h2">
            为什么选择加入龙成公会?
          </GameTitle>

          {/* 理由标签 */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { label: '专业带玩', emoji: '🎯', color: 'gold' },
              { label: '战力提升快', emoji: '⚡', color: 'dragon' },
              { label: '氛围满分', emoji: '🎉', color: 'game' },
              { label: '专属福利', emoji: '🎁', color: 'gold' },
              { label: '热血团战', emoji: '🔥', color: 'dragon' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="glass rounded-full px-6 py-3 transform transition-all duration-300 hover:scale-110 hover:shadow-glow-gold cursor-pointer group"
              >
                <span className="flex items-center gap-2 text-gray-200 font-bold">
                  <span className="text-2xl group-hover:animate-bounce">{item.emoji}</span>
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* 描述框 */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* 发光背景 */}
              <div className="absolute inset-0 bg-gradient-dragon/10 blur-3xl rounded-3xl" />

              {/* 内容 */}
              <div className="relative glass rounded-3xl p-8 md:p-12 border-2 border-brand-gold/30">
                <p className="text-gray-200 text-lg md:text-xl leading-relaxed text-center">
                  <span className="text-brand-gold font-bold">龙成公会</span>
                  不只是一个游戏组织,更是一个<span className="text-brand-dragon font-bold">充满温度的游戏社区</span>。
                  这里不只是游戏,更是一个家。一起聊天、一起并肩作战,
                  <span className="text-brand-game font-bold">游戏变得更有趣</span>!
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 🚀 CTA 区域 */}
      <Section
        id="cta"
        className="bg-gradient-to-b from-brand-dark to-gray-950"
      >
        <Container size="md" className="text-center">
          <GameTitle variant="gold" size="xl" as="h2">
            准备好开始你的传奇之旅了吗?
          </GameTitle>

          <GameButton
            variant="gold"
            size="xl"
            onClick={() => console.log('立即加入')}
          >
            立即加入龙成公会 🎮
          </GameButton>

          <p className="mt-8 text-gray-400 text-lg">
            加入我们,与<span className="text-brand-gold font-bold">100万+</span>玩家一起,
            书写游戏世界的新篇章
          </p>
        </Container>
      </Section>

      {/* 页脚 */}
      <Footer />
    </main>
    </>
  )
}
