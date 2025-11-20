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
              "bottom-[54%] md:bottom-[10%]", 
              
              // 内部元素间距
              "  md:gap-8" 
            )}
          >
            
            {/* 1. CTA 按钮组 */}
            {/* 1. CTA 按钮组 */}
            <div className="flex flex-col sm:flex-row items-center">
              <GameButton
                // ❌ 移除 variant 和 size，因为我们完全自定义了
                // variant="gold"
                // size="sm"
                
                className={cn(
                  // --- 1. 基础交互 ---
                  "relative z-10 cursor-pointer",
                  " ",
                  
                  // --- 2. 清除默认样式 ---
                  "bg-transparent border-none shadow-none", // 去掉默认的颜色和阴影
                  "flex items-center justify-center",
                  
                  // --- 3. 背景图设置 (关键) ---
                  // 引用你放入 public/images 的图片
                  "bg-[url('https://image.xixingwangluokeji.cn/desktop/ljjr_1.png')]", 
                  "bg-contain bg-center bg-no-repeat", // 保证图片完整显示不裁剪
                  
                  // --- 4. 尺寸控制 (根据你的切图比例来定) ---
                  // 你的图大概是长方形，假设是 4:1 的比例
                  "w-[150px] h-[20px]",         // 📱 手机端尺寸
                  "md:w-[260px] md:h-[72px]",   // 💻 桌面端尺寸 (放大一点)

                  // --- 5. 隐形文字 (核心) ---
                  // 文字依然存在于 DOM 中(对搜索引擎友好)，但视觉上透明
                  "text-transparent select-none" 
                )}
                onClick={() => console.log('立即加入')}
              >
                立即加入  
              </GameButton>
            </div>

            {/* 2. 标语 (跟对公会...) */}
            <p className="text-sm md:text-2xl text-brand-whith font-bold   drop-shadow-md text-center px-4">
              跟对公会,游戏才真正好玩!
            </p>

            {/* 3. SINCE 2014 徽章 */}
            <div className="relative">
              <div className="absolute inset-0 bg-brand-gold/20 blur-xl rounded-full" />
              
                <span className="text-brand-whith font-game text-sm md:text-2xl font-bold">
                 2014
                </span>
              
            </div>

          </div>
        </Section>

    

        {/* ===========================================================
            2. 🌍 长背景容器 (包含核心优势、为什么选择、CTA)
            注意：Footer 不在这里面
           =========================================================== */}
        <div className="relative w-full">
          
          {/* 🖼️ 【长背景图层】 */}
          <div className="absolute inset-0 z-0 pointer-events-none">
             {/* 手机端长图 */}
             <div className="block md:hidden relative w-full h-full">
               <Image
                 // 👇 请替换为你的手机端长图 URL
                 src="https://image.xixingwangluokeji.cn/mobile/bj_1.png" 
                 alt="Long Background Mobile"
                 fill
                 className="object-cover object-top"
                 unoptimized
               />
             </div>
             
             {/* 桌面端长图 */}
             <div className="hidden md:block relative w-full h-full">
               <Image
                 // 👇 请替换为你的桌面端长图 URL
                 src="https://image.xixingwangluokeji.cn/desktop/bj_1.png" 
                 alt="Long Background Desktop"
                 fill
                 className="object-cover object-top"
                 unoptimized
               />
             </div>
          </div>

          {/* 👇 下面的 Section 背景必须透明 (bg-transparent) */}
          
          {/* 🎯 核心优势 */}
          <Section id="advantages" className="relative z-10 bg-transparent">
            <Container size="lg">
              <GameTitle variant="gold" size="xl" as="h2">核心优势</GameTitle>
              <GameCardGrid cols={2}>
                <GameCard icon="🎮" title="游戏体验升级" description="专业会长全程指导..." variant="gold" />
                <GameCard icon="💰" title="经济与福利" description="公会专属折扣和返利..." variant="gold" />
                <GameCard icon="⚔️" title="战斗与社交" description="告别孤军奋战..." variant="dragon" />
                <GameCard icon="🏆" title="荣耀与成就" description="集体冲击排行榜..." variant="dragon" />
              </GameCardGrid>
              <div className="mt-12 max-w-3xl mx-auto">
                  <GameCard 
                    icon="⭐" 
                    title="特别优势" 
                    variant="game" 
                    description="10年沉淀 · 全品类覆盖 · 24小时服务" 
                  />
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
              <div className="max-w-4xl mx-auto">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-dragon/10 blur-3xl rounded-3xl" />
                  <div className="relative glass rounded-3xl p-8 md:p-12 border-2 border-brand-gold/30">
                    <p className="text-gray-200 text-lg md:text-xl leading-relaxed text-center">
                      <span className="text-brand-gold font-bold">龙成公会</span>
                      不只是一个游戏组织,更是一个<span className="text-brand-dragon font-bold">充满温度的游戏社区</span>。
                    </p>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          {/* 🚀 CTA 区域 */}
          <Section id="cta" className="relative z-10 bg-transparent pb-32">
            <Container size="md" className="text-center">
              <GameTitle variant="gold" size="xl" as="h2">准备好开始你的传奇之旅了吗?</GameTitle>
              <div className="flex justify-center">
                 {/* 复用上面的图片按钮样式，或者使用普通按钮 */}
                 <GameButton 
                    variant="gold" 
                    size="xl"
                    className="w-[200px] h-[55px] md:w-[260px] md:h-[72px] bg-[url('/images/btn-join.png')] bg-contain bg-center bg-no-repeat bg-transparent border-none shadow-none text-transparent"
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

        </div> {/* End of 长背景容器 */}

        <Footer />
      </main>
    </>
  )
}