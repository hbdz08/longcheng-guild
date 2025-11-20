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
import Image from 'next/image'
import { cn } from '@/lib/utils' // ✅ 已修复：添加了这行引用，不再报错

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="relative">
        {/* 🎬 Hero 区域 */}
        <Section
          id="hero"
          className={cn(
            "relative overflow-hidden bg-brand-dark",
            "aspect-[9/16] md:aspect-[16/9]", // 锁定比例
            "min-h-[500px] md:min-h-[800px]"  // 最小高度保护
          )}
        >
          {/* 🖼️ 背景图层 */}
          <div className="absolute inset-0 z-0">
            {/* 手机端：完整显示 (contain) */}
            <div className="block md:hidden relative w-full h-full">
              <Image
                src="https://image.xixingwangluokeji.cn/mobile/tv.png"
                alt="Hero Background Mobile"
                fill
                priority
                className="object-contain object-top"
                unoptimized
              />
            </div>

            {/* 桌面端：覆盖显示 (cover) */}
            <div className="hidden md:block relative w-full h-full">
              <Image
                src="https://image.xixingwangluokeji.cn/desktop/tv@2x.png"
                alt="Hero Background Desktop"
                fill
                priority
                className="object-cover object-center"
                unoptimized
              />
            </div>
          </div>

          {/* 📝 顶部标题区域 (保持在上方) */}
          

          {/* 🎮 底部内容整合容器 (按钮 + 标语 + 徽章) */}
          <div 
            className={cn(
              "absolute left-0 right-0 z-20", // 绝对定位，悬浮在背景上
              "flex flex-col items-center justify-end", // 垂直排列，底部对齐
              
              // 👇【关键调整点】：改这一个数值，所有底部内容一起动！
              // 手机端距离底部 5%，桌面端距离底部 10%
              "bottom-[45%] md:bottom-[10%]", 
              
              // 内部元素间距
              "gap-4 md:gap-8" 
            )}
          >
            
            {/* 1. CTA 按钮组 */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center">
              <GameButton
                variant="gold"
                size="sm"
                className="h-10 w-40 text-sm px-0 md:w-auto md:h-auto md:px-10 md:py-5 md:text-xl shadow-lg shadow-brand-gold/20"
                onClick={() => console.log('立即加入')}
              >
                立即加入公会 🚀
              </GameButton>

              
            </div>

            {/* 2. 标语 (跟对公会...) */}
            <p className="text-lg md:text-2xl text-brand-gold font-bold animate-pulse drop-shadow-md text-center px-4">
              跟对公会,游戏才真正好玩!
            </p>

            {/* 3. SINCE 2014 徽章 */}
            <div className="relative">
              <div className="absolute inset-0 bg-brand-gold/20 blur-xl rounded-full" />
              <div className="relative glass rounded-full px-6 py-2 md:px-8 md:py-3 border border-brand-gold/30 bg-black/30">
                <span className="text-brand-gold font-game text-xl md:text-2xl font-bold">
                  SINCE 2014
                </span>
              </div>
            </div>

          </div>
        </Section>

        {/* 下方其他区块保持不变... */}
        
        {/* 🎯 核心优势 */}
        <Section id="advantages" className="bg-gradient-to-b from-brand-dark via-gray-900 to-brand-dark">
           <Container size="lg">
             <GameTitle variant="gold" size="xl" as="h2">核心优势</GameTitle>
             <GameCardGrid cols={2}>
               <GameCard icon="🎮" title="游戏体验升级" description="专业会长全程指导..." variant="gold" />
               <GameCard icon="💰" title="经济与福利" description="公会专属折扣和返利..." variant="gold" />
               <GameCard icon="⚔️" title="战斗与社交" description="告别孤军奋战..." variant="dragon" />
               <GameCard icon="🏆" title="荣耀与成就" description="集体冲击排行榜..." variant="dragon" />
             </GameCardGrid>
             <div className="mt-12 max-w-3xl mx-auto">
                <GameCard icon="⭐" title="特别优势" variant="game" description="10年沉淀 · 全品类覆盖 · 24小时服务" />
             </div>
           </Container>
        </Section>

        {/* 🎯 为什么选择我们 */}
        <Section id="why-us" className="bg-gradient-to-b from-gray-900 to-brand-dark">
          <Container size="lg">
            <GameTitle variant="dragon" size="xl" as="h2">为什么选择我们?</GameTitle>
            {/* ...内容省略，保持原样... */}
          </Container>
        </Section>

        {/* 🚀 CTA 区域 */}
        <Section id="cta" className="bg-gradient-to-b from-brand-dark to-gray-950">
          <Container size="md" className="text-center">
            <GameTitle variant="gold" size="xl">准备好开始了吗?</GameTitle>
            <GameButton variant="gold" size="xl">立即加入 🎮</GameButton>
          </Container>
        </Section>

        <Footer />
      </main>
    </>
  )
}