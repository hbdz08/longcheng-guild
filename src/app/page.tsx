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
            "relative overflow-hidden  ",
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
                className=" object-contain object-top"
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
 
        

          <Section className="pt-40 pb-10 md:pt-64 md:pb-20">
          <Container size="lg">
            <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
              
              {/* 左侧：文字内容 */}
              <div className="flex-1 space-y-6 text-center lg:text-left z-10">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-wide">
                    龙成游戏公会
                  </h2>
                  <p className="text-brand-gold tracking-[0.3em] text-sm font-game uppercase opacity-80">
                    Game Guild
                  </p>
                </div>
                
                <div className="text-gray-300 leading-relaxed text-sm md:text-[15px] text-justify indent-8 lg:indent-0 opacity-90 font-light tracking-wide">
                  <p>
                    龙成游戏公会最早成立于2014年，是一只专注于宣发精品游戏的团队，通俗一点来讲，就是好游戏的搬运工，组织过数以百万计的精品游戏宣发，经历了从网友到手游的蜕变，跟随龙成游戏公会的游玩的用户规模达到100万用户甚至更多。
                  </p>
                  <br />
                  <p>
                    为什么要跟游戏公会玩？因为游玩的过程中，我们有专业的公会会长进行指导，每一名会长都是热爱游戏的狂热粉丝，会教你玩好每一款游戏，快速熟悉一款游戏，了解游戏中的一些活动玩法，解疑答惑，帮助对游戏有更高的理解，组织帮派战，城战，跨服战，国战等各类游戏精彩的玩法。
                  </p>
                  <br />
                  <p>
                    另外，让每位玩家充值的每一分钱都能花在刀刃上，能花小钱办大事，用最小量的资金帮助你提升更高的战力。另外，因为我们是一只由会长+玩家组织的团队，可以跟游戏官方建立合作，获取更多的游戏官方礼包码，所以我们能获得更优质的资源，这些都是散人玩家获取不到的资源。这里不只是游戏，更是一个家。一起聊天、一起并肩作战，游戏变得更有趣！
                  </p>
                </div>
              </div>

              {/* 右侧：图片/插画 */}
              <div className="flex-1 w-full max-w-md lg:max-w-none relative group">
                {/* 装饰边框效果 */}
                <div className="absolute -inset-1 bg-gradient-to-b from-brand-gold/20 to-transparent rounded-lg blur-sm opacity-50" />
                
                <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm">
                  {/* 👇 请替换这里的图片 src 为你的实际人物图 */}
                  <Image
                    src="https://image.xixingwangluokeji.cn/desktop/rw_1.png" 
                    alt="龙成公会成员展示"
                    fill
                    className="object-contain hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* 图片上的光效装饰 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                
                {/* 角落装饰线条 */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-brand-gold/50 rounded-tl-lg" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-brand-gold/50 rounded-br-lg" />
              </div>

            </div>
          </Container>
        </Section>
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

       
        <Footer />
      </main>
    </>
  )
}