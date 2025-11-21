'use client'

import {
  GameButton,
  GameTitle,
  GameCard,
  GameCardGrid,
  Section,
  Container,
} from '@/components/ui'
import { Header, Footer } from '@/components/layout'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="relative bg-black">
        {/* =========================================
            1. 🎬 Hero 区域 (保持独立背景)
           ========================================= */}
        <Section
          id="hero"
          className={cn(
            "relative overflow-hidden bg-brand-dark",
            "aspect-[9/16] md:aspect-[16/9]", 
            
          )}
        >
          {/* Hero 背景图 (Z-0) */}
          <div className="absolute inset-0 z-0">
            <div className="block md:hidden relative w-full h-full">
              <Image
                src="https://image.xixingwangluokeji.cn/mobile/tv.png"
                alt="Hero Mobile"
                fill
                priority
                className="object-contain object-top"
                unoptimized
              />
            </div>
            <div className="hidden md:block relative w-full h-full">
              <Image
                src="https://image.xixingwangluokeji.cn/desktop/tv@2x.png"
                alt="Hero Desktop"
                fill
                priority
                className="object-cover object-center"
                unoptimized
              />
            </div>
          </div>

          {/* Hero 内容 (Z-20: 确保在所有背景之上) */}
          <div 
            className={cn(
              "absolute left-0 right-0 z-20",
              "flex flex-col items-center justify-end",
              // 按钮位置：留出足够空间给下方背景"插入"
              "bottom-[55%] md:bottom-[12%]", 
              " md:gap-8" 
            )}
          >
            {/* 按钮 */}
            <div className="flex justify-center">
              <GameButton
                className={cn(
                  "relative z-10 cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95",
                  "bg-transparent border-none shadow-none flex items-center justify-center",
                  "bg-[url('https://image.xixingwangluokeji.cn/desktop/ljjr_1.png')] bg-contain bg-center bg-no-repeat",
                  // 按钮尺寸优化
                  "w-[180px] h-[20px] md:w-[260px] md:h-[72px]",   
                  "text-transparent select-none" 
                )}
                onClick={() => console.log('立即加入')}
              >
                立即加入
              </GameButton>
            </div>

            {/* 标语 */}
            <p className="text-sm md:text-2xl text-white font-bold animate-pulse drop-shadow-md text-center px-4">
              跟对公会,游戏才真正好玩!
            </p>

            {/* 徽章 */}
            <div className="relative">
                <span className="text-brand-gold font-game text-sm md:text-2xl font-bold tracking-widest opacity-80">
                 SINCE 2014
                </span>
            </div>
          </div>
        </Section>

        {/* ===========================================================
            2. 🌍 长背景容器
            ⚡️ 关键修改：添加了 -mt-[100px] 和 z-10
           =========================================================== */}
        <div 
          className={cn(
            "relative w-full",
            "z-10", // 层级：比 Hero 背景(0)高，比 Hero 按钮(20)低
            // 👇 负边距：让整个区域往上提，盖住 Hero 的底部
            // 你可以调整这个数值：-mt-20, -mt-32, -mt-[100px] 等
            "-mt-[120%] md:-mt-36" 
          )}
        >
          
          {/* 长背景图层 */}
          <div className="absolute inset-0 z-0 pointer-events-none">
             <div className="block md:hidden relative w-full h-full">
               <Image
                 src="https://image.xixingwangluokeji.cn/mobile/bj_1.png" 
                 alt="Long Background Mobile"
                 fill
                 className="object-cover object-top"
                 unoptimized
               />
             </div>
             <div className="hidden md:block relative w-full h-full">
               <Image
                 src="https://image.xixingwangluokeji.cn/desktop/bj_1.png" 
                 alt="Long Background Desktop"
                 fill
                 className="object-cover object-top"
                 unoptimized
               />
             </div>
          </div>

          {/* 👇 下面的 Section 需要加 pt (Padding Top) 
              因为容器往上提了，如果不加 padding，文字可能会撞到 Hero 的按钮
          */}
          
          {/* 🎯 核心优势 */}
          <Section id="advantages" className="relative z-10 bg-transparent pt-40 md:pt-48">
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
          <Section id="why-us" className="relative z-10 bg-transparent">
            <Container size="lg">
              <GameTitle variant="dragon" size="xl" as="h2">为什么选择加入龙成公会?</GameTitle>
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {['专业带玩', '战力提升快', '氛围满分', '专属福利', '热血团战'].map((label, idx) => (
                  <div key={idx} className="glass rounded-full px-6 py-3">
                    <span className="text-gray-200 font-bold">{label}</span>
                  </div>
                ))}
              </div>
              {/* ... */}
            </Container>
          </Section>

          {/* 🚀 CTA 区域 */}
          <Section id="cta" className="relative z-10 bg-transparent pb-32">
            <Container size="md" className="text-center">
              <GameTitle variant="gold" size="xl" as="h2">准备好开始你的传奇之旅了吗?</GameTitle>
              <div className="flex justify-center">
                 <GameButton 
                    className={cn(
                      "relative z-10 cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95",
                      "bg-transparent border-none shadow-none flex items-center justify-center",
                      "bg-[url('https://image.xixingwangluokeji.cn/desktop/ljjr_1.png')] bg-contain bg-center bg-no-repeat",
                      "w-[180px] h-[50px] md:w-[260px] md:h-[72px]",
                      "text-transparent select-none"
                    )}
                    onClick={() => console.log('立即加入')}
                  >
                    立即加入
                 </GameButton>
              </div>
              <p className="mt-8 text-gray-400 text-lg">
                加入我们,与<span className="text-brand-gold font-bold">100万+</span>玩家一起...
              </p>
            </Container>
          </Section>

        </div> {/* End of 长背景容器 */}

        <Footer />
      </main>
    </>
  )
}