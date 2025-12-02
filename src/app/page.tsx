'use client'

import {
  GameButton,
  GameTitle,
  FeatureCard,
  Section,
  Container,
} from '@/components/ui'
import { Header, Footer } from '@/components/layout'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export default function HomePage() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <Header />

      <main className="relative bg-brand-dark overflow-x-hidden">
        {/* =========================================
            1. 🎬 Hero 区域
           ========================================= */}
        <Section
          id="hero"
          className={cn(
            "relative overflow-hidden",
            "aspect-[2160/1816] md:aspect-[16/9]",
            "!px-0 !py-0"
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

          {/* Hero 内容 (Z-20) */}
          <div 
            className={cn(
              "absolute left-0 right-0 z-20",
              "flex flex-col items-center justify-end",
              "bottom-[20%] md:bottom-[10%]", 
              "md:gap-2" 
            )}
          >
             {/* 标语 */}
            <p className="text-sm md:text-2xl text-white font-bold  text-center px-4">
              跟对公会,游戏才真正好玩!
            </p>
            {/* 按钮 */}
            <div className="flex justify-center">
              <GameButton
                className={cn(
                  "relative z-10 cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95",
                  "bg-transparent border-none shadow-none flex items-center justify-center",
                  "bg-[url('https://image.xixingwangluokeji.cn/desktop/ljjr_1.png')] bg-contain bg-center bg-no-repeat",
                  "w-[140px] h-[16px] sm:w-[180px] sm:h-[20px] md:w-[260px] md:h-[72px]",   
                  "text-transparent select-none" 
                )}
                onClick={() => console.log('立即加入')}
              >
                立即加入
              </GameButton>
            </div>

         

            {/* 徽章 */}
            <div className="relative">
                <span className="text-brand-gold font-game text-sm md:text-2xl font-bold tracking-widest opacity-80">
                 SINCE 2014
                </span>
            </div>
          </div>
        </Section>

        {/* =========================================
            2. 📜 公会介绍 (左文右图) - 新增区块
           ========================================= */}
        <Section className="relative z-10 py-16 md:py-24 bg-gradient-to-b from-black to-brand-dark/50 overflow-hidden">
          <Container size="lg">
            <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
              
              {/* 左侧：文字内容 */}
              {/* 👇【修改点】：添加 px-4 防止手机端文字顶边，添加 md:px-0 在桌面端复原 */}
              <div className="flex-1 space-y-6 text-center lg:text-left z-10 px-4 md:px-0">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-wide">
                    龙成游戏公会
                  </h2>
                  <p className="text-brand-gold tracking-[0.3em] text-sm font-game uppercase opacity-80">
                    Game Guild
                  </p>
                </div>
                
                <div className="text-gray-300 leading-relaxed text-sm md:text-[15px] text-justify indent-0 md:indent-8 opacity-90 font-light tracking-wide">
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
              {/* 👇【建议】：给图片容器也加个 px-4，防止手机端图片边框贴屏幕太紧 */}
              <div className="flex-1 w-full max-w-md lg:max-w-none relative group px-4 md:px-0 overflow-hidden">
                <div className="absolute -inset-1 bg-gradient-to-b from-brand-gold/20 to-transparent rounded-lg blur-sm opacity-50" />
                
                <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm">
                  <Image
                    src="https://image.xixingwangluokeji.cn/desktop/rw_1.png" 
                    alt="龙成公会成员展示"
                    fill
                    className="object-contain hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                
                {/* 装饰线条 */}
                <div className="absolute top-0 left-4 md:top-0 md:left-0 w-8 h-8 border-t-2 border-l-2 border-brand-gold/50 rounded-tl-lg" />
                <div className="absolute bottom-0 right-4 md:bottom-0 md:right-0 w-8 h-8 border-b-2 border-r-2 border-brand-gold/50 rounded-br-lg" />
              </div>

            </div>
          </Container>
        </Section>

        {/* =========================================
            3. 🎯 核心优势
           ========================================= */}
        <Section id="advantages" className="relative z-10 py-16 md:py-24">
          <Container size="lg">
            <GameTitle variant="gold" size="xl" as="h2">核心优势</GameTitle>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              <FeatureCard
                image="https://image.xixingwangluokeji.cn/desktop/rw_1.png"
                title="游戏体验层面"
                subtitle="GAME EXPERIENCE"
                variant="gold"
                features={[
                  "新手无压力：从零开始也不用怕，有会长和老玩家手把手教，快速上手。",
                  "游戏攻略直通车：不用自己苦苦摸索，直接拿到最实用的攻略。",
                  "活动提醒：每天、每周的重要活动提前通知，不错过任何一次好奖励。",
                  "角色养成规划：帮你规划升级、装备、技能搭配，少走弯路更快成长。"
                ]}
              />

              <FeatureCard
                image="https://image.xixingwangluokeji.cn/desktop/rw_1.png"
                title="经济与福利层面"
                subtitle="ECONOMY & BENEFITS"
                variant="dragon"
                features={[
                  "公会专属折扣和返利：充值更划算，让你的每一分钱都花在刀刃上。",
                  "资源共享：公会内部共享游戏资源、礼包码，大家一起薅羊毛。",
                  "专属活动奖励：参与公会活动有额外奖励，福利拿到手软。"
                ]}
              />

              <FeatureCard
                image="https://image.xixingwangluokeji.cn/desktop/rw_1.png"
                title="战斗与社交层面"
                subtitle="BATTLE & SOCIAL"
                variant="game"
                features={[
                  "组队开黑更轻松：告别孤军奋战，随时找到靠谱队友一起刷本、PK。",
                  "公会战热血沸腾：千人同屏团战，体验真正的战场氛围。",
                  "交友圈子：认识志同道合的朋友，游戏里的兄弟情义无价。"
                ]}
              />

              <FeatureCard
                image="https://image.xixingwangluokeji.cn/desktop/rw_1.png"
                title="荣耀与成就层面"
                subtitle="HONOR & ACHIEVEMENT"
                variant="gold"
                features={[
                  "公会排名冲榜：集体的力量冲击排行榜，共享荣耀。",
                  "专属称号和徽章：公会成员独有的身份标识，走到哪里都是焦点。",
                  "见证成长：从新人到大佬，公会记录你的每一步成长轨迹。"
                ]}
              />
            </div>
          </Container>
        </Section>

        {/* =========================================
            4. ❓ 为什么选择我们
           ========================================= */}
        <Section id="why-us" className="relative z-10">
          <Container size="lg">
            <GameTitle variant="dragon" size="xl" as="h2">为什么选择加入龙成公会?</GameTitle>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {['专业带玩', '战力提升快', '氛围满分', '专属福利', '热血团战'].map((label, idx) => (
                <div key={idx} className="glass rounded-full px-6 py-3 hover:bg-white/10 transition-colors cursor-default">
                  <span className="text-gray-200 font-bold">{label}</span>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* =========================================
            5. 🚀 CTA 区域
           ========================================= */}
        <Section id="cta" className="relative z-10 pb-32">
          <Container size="md" className="text-center">
            <GameTitle variant="gold" size="xl" as="h2">准备好开始你的传奇之旅了吗?</GameTitle>
            <div className="flex justify-center">
                <GameButton 
                  className={cn(
                    "relative z-10 cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95",
                    "bg-transparent border-none shadow-none flex items-center justify-center",
                    "bg-[url('https://image.xixingwangluokeji.cn/desktop/ljjr_1.png')] bg-contain bg-center bg-no-repeat",
                    "w-[140px] h-[40px] sm:w-[180px] sm:h-[50px] md:w-[260px] md:h-[72px]",
                    "text-transparent select-none"
                  )}
                  onClick={() => console.log('立即加入')}
                >
                  立即加入
                </GameButton>
            </div>
            <p className="mt-8 text-gray-400 text-lg">
              加入我们,与<span className="text-brand-gold font-bold">100万+</span>玩家一起,
              书写游戏世界的新篇章
            </p>
          </Container>
        </Section>

        <Footer />
      </main>
    </div>
  )
}