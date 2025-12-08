'use client'

import { useEffect, useRef, useState } from 'react'

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

type BoardMessage = {
  id: number
  comment: string
  createdAt: number
  webSiteId?: number
}

export default function HomePage() {
  const reasons = [
    {
      label: '熱血團戰',
      tagline: 'BLOOD & GLORY',
      summary: '千人同屏、跨服動員的史詩級戰場。',
      description:
        '從集結、偵查到突擊，每一步都由戰略指揮官與語音調度中心協同完成，確保公會人數優勢被轉化為勝勢。',
      bullets: [
        '跨服集結：一次指令就能號召百人即時響應，戰力瞬間到位。',
        '多頻語音：分工頻道即時指令、補給、偵查三線並行。',
        '戰報回顧：每次戰役都留有錄像與重點紀錄，方便分析與精進。',
      ],
      quote: '戰場是龍成的舞台，我們只接受勝利與榮耀。',
    },
    {
      label: '戰力提升快',
      tagline: 'POWER BOOST',
      summary: '資源傾斜 + 專屬教練團，快速脫離新手期。',
      description:
        '會長與資深指揮會根據你的職業與玩法提供一週成長計畫，裝備、天賦與活動節奏清楚明瞭，再也不迷路。',
      bullets: [
        '週期化養成表，明確標記每個階段要完成的任務與副本。',
        '公會倉庫共享稀有素材與紫金裝備，少走冤枉路。',
        '一對一配置檢視，讓你每一分投資都有最大產出。',
      ],
      quote: '每位成員都是重點培養對象，沒有被遺忘的新手。',
    },
    {
      label: '氣圍滿分',
      tagline: 'LIFESTYLE COMMUNITY',
      summary: '暖心社群與無縫語音，讓每次上線都不孤單。',
      description:
        'Discord、QQ、語音房 24/7 不斷線，從練兵、追劇到音樂派對都能找到同好，真正實現遊戲亦生活。',
      bullets: [
        '每日活動表包含放鬆、練兵、策略講座，人人都能參加。',
        '多語音房依遊戲、音樂、生活分類，想聊就聊。',
        '新人守護計畫，前三天就能熟悉所有成員與制度。',
      ],
      quote: '龍成不只是公會，更是熱愛遊戲的生活方式。',
    },
    {
      label: '專屬福利',
      tagline: 'ELITE PRIVILEGE',
      summary: '官方合作身份，禮包、返利、線下福利全數開放。',
      description:
        '龍成與多家廠商簽訂長期合作，儲值返利、限定造型與線下活動資格優先提供給公會成員。',
      bullets: [
        '月度儲值返利最高可達 20%，直接折抵下一次投資。',
        '限定造型、稱號、周邊贈品僅對龍成成員釋出。',
        '線下聚會與賽事旅費補助，玩遊戲也能拓展人脈。',
      ],
      quote: '只要是龍成會員，每一次投入都值得期待。',
    },
    {
      label: '榮耀認同',
      tagline: 'HONOR ARCHIVE',
      summary: '你的每一步成長，都被記錄並放大成榮耀。',
      description:
        '專屬稱號、成就與媒體曝光機制，從新兵到指揮官的每個瞬間，都在龍成檔案館留下足跡。',
      bullets: [
        'Ladder 榜單與名人堂即時更新，所有人看得到你的突破。',
        '戰功影片由媒體組剪輯上架，戰場高光永遠留存。',
        '榮耀授勳儀式，為每次重大貢獻辦一場真正的頒獎。',
      ],
      quote: '榮耀需要舞台，我們幫你聚焦每一次高光。',
    },
  ]

  const [activeReason, setActiveReason] = useState(reasons[0])
  const [boardMessages, setBoardMessages] = useState<BoardMessage[]>([])
  const [boardLoading, setBoardLoading] = useState(true)
  const [boardError, setBoardError] = useState<string | null>(null)
  const [isBoardHovering, setIsBoardHovering] = useState(false)
  const boardContainerRef = useRef<HTMLDivElement | null>(null)
  const boardResumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const BOARD_API = 'https://admin.xixingsys.com/admin-api/site/company-website/comment/list?webSiteId=12&pageNo=1&pageSize=100'
  const marqueeMessages = boardMessages.length > 0 ? [...boardMessages, ...boardMessages] : []
  const scrollSpeed = 110 // px per second when自動滾動，提速讓視覺更流暢

  const getBoardLikes = (seed: number) => (seed * 17) % 90 + 18

  const pauseBoardAutoScroll = () => {
    if (boardResumeTimeoutRef.current) {
      clearTimeout(boardResumeTimeoutRef.current)
      boardResumeTimeoutRef.current = null
    }
    setIsBoardHovering(true)
  }

  const resumeBoardAutoScroll = (delay = 0) => {
    if (boardResumeTimeoutRef.current) {
      clearTimeout(boardResumeTimeoutRef.current)
      boardResumeTimeoutRef.current = null
    }
    if (delay === 0) {
      setIsBoardHovering(false)
      return
    }
    boardResumeTimeoutRef.current = setTimeout(() => {
      setIsBoardHovering(false)
      boardResumeTimeoutRef.current = null
    }, delay)
  }

  const fetchBoard = async () => {
    try {
      setBoardLoading(true)
      const res = await fetch(BOARD_API)
      if (!res.ok) throw new Error('無法獲取留言')
      const data = await res.json()
      const parsed = Array.isArray(data?.data)
        ? data.data.map((item: any, index: number) => ({
            id: Number(item.id ?? index),
            comment: item.comment ?? '',
            createdAt: Number(item.createTime ?? Date.now()),
            webSiteId: Number(item.webSiteId ?? 12),
          }))
        : []
      setBoardMessages(parsed)
      setBoardError(null)
    } catch (error: any) {
      setBoardError(error.message)
    } finally {
      setBoardLoading(false)
    }
  }

  useEffect(() => {
    fetchBoard()
  }, [])

  useEffect(() => {
    if (boardMessages.length === 0) return
    const container = boardContainerRef.current
    if (!container) return
    let frame: number
    let lastTime = performance.now()

    const step = (time: number) => {
      const delta = time - lastTime
      if (!isBoardHovering) {
        container.scrollTop += (delta / 1000) * scrollSpeed
        const halfHeight = container.scrollHeight / 2
        if (halfHeight > 0 && container.scrollTop >= halfHeight) {
          container.scrollTop -= halfHeight
        }
      }
      lastTime = time
      frame = requestAnimationFrame(step)
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [boardMessages, isBoardHovering])

  useEffect(() => {
    return () => {
      if (boardResumeTimeoutRef.current) {
        clearTimeout(boardResumeTimeoutRef.current)
      }
    }
  }, [])

  return (
    <div className="relative w-full overflow-x-hidden">
      <Header />

      <main className="relative bg-brand-dark overflow-x-hidden">
        {/* =========================================
            1. 🎬 Hero 區域
           ========================================= */}
        <Section
          id="hero"
          className={cn(
            "relative overflow-hidden",
            "aspect-[2160/1816] md:aspect-[16/9]",
            "!px-0 !py-0"
          )}
        >
          {/* Hero 背景圖 (Z-0) */}
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

          {/* Hero 內容 (Z-20) */}
          <div 
            className={cn(
              "absolute left-0 right-0 z-20",
              "flex flex-col items-center justify-end",
              "bottom-[20%] md:bottom-[10%]", 
              "md:gap-2" 
            )}
          >
             {/* 標語 */}
            <p className="text-sm md:text-2xl text-white font-bold  text-center px-4">
              跟對公會,遊戲才真正好玩!
            </p>
            {/* 按鈕 */}
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
                <span className="text-brand-gray font-game text-sm md:text-2xl font-bold tracking-widest opacity-80">
                 始於 2014
                </span>
            </div>
          </div>
        </Section>

        {/* =========================================
            2. 📜 公會介紹 (左文右圖) - 新增區塊
           ========================================= */}
        <Section className="relative z-10 py-16 md:py-24 bg-gradient-to-b from-black to-brand-dark/50 overflow-hidden">
          <Container size="lg">
            <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
              
              {/* 左側：文字內容 */}
              {/* 👇【修改點】：添加 px-4 防止手機端文字頂邊，添加 md:px-0 在桌面端復原 */}
              <div className="flex-1 space-y-6 text-center lg:text-left z-10 px-4 md:px-0">
                <div>
                  {/* 主標題 */}
                  <h2 className="text-4xl md:text-6xl font-bold mb-2 font-serif metal-gradient-title">
                    龍城遊戲公會
                  </h2>

                  {/* 副標題 */}
                  <p className="text-sm md:text-lg font-bold uppercase tracking-[0.5em] md:tracking-[0.8em] pl-1 purple-gradient-subtitle">
                    GAME GUILD
                  </p>
                </div>
                
                <div className="text-gray-300 leading-relaxed text-sm md:text-[15px] text-justify indent-0 md:indent-8 opacity-90 font-light tracking-wide">
                  <p>
                    龍成遊戲公會最早成立於2014年，是一隻專注於宣發精品遊戲的團隊，通俗一點來講，就是好遊戲的搬運工，組織過數以百萬計的精品遊戲宣發，經歷了從網友到手遊的蛻變，跟隨龍成遊戲公會的遊玩的用戶規模達到100萬用戶甚至更多。
                  </p>
                  <br />
                  <p>
                    爲什麼要跟遊戲公會玩？因爲遊玩的過程中，我們有專業的公會會長進行指導，每一名會長都是熱愛遊戲的狂熱粉絲，會教你玩好每一款遊戲，快速熟悉一款遊戲，瞭解遊戲中的一些活動玩法，解疑答惑，幫助對遊戲有更高的理解，組織幫派戰，城戰，跨服戰，國戰等各類遊戲精彩的玩法。
                  </p>
                  <br />
                  <p>
                    另外，讓每位玩家充值的每一分錢都能花在刀刃上，能花小錢辦大事，用最小量的資金幫助你提升更高的戰力。另外，因爲我們是一隻由會長+玩家組織的團隊，可以跟遊戲官方建立合作，獲取更多的遊戲官方禮包碼，所以我們能獲得更優質的資源，這些都是散人玩家獲取不到的資源。這裏不只是遊戲，更是一個家。一起聊天、一起並肩作戰，遊戲變得更有趣！
                  </p>
                </div>
              </div>

              {/* 右側：圖片/插畫 */}
              {/* 👇【建議】：給圖片容器也加個 px-4，防止手機端圖片邊框貼屏幕太緊 */}
              <div className="flex-1 w-full max-w-md lg:max-w-none relative group px-4 md:px-0 overflow-hidden">
                <div className="absolute -inset-1 bg-gradient-to-b from-brand-gold/20 to-transparent rounded-lg blur-sm opacity-50" />
                
                <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden  bg-black/40 backdrop-blur-sm">
                  <Image
                    src="/image/lr_1@2x.png"
                    alt="龍成公會成員展示"
                    fill
                    className="object-contain hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                
                
              </div>

            </div>
          </Container>
        </Section>

        {/* =========================================
            3. 🎯 核心優勢
           ========================================= */}
        <Section id="advantages" className="relative z-10 py-14 md:py-24">
          <Container size="lg">
            <GameTitle variant="gold" size="xl" as="h2">核心優勢</GameTitle>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              <FeatureCard
                image="/image/lr_2@2x.png"
                title="遊戲體驗層面"
                subtitle="GAME EXPERIENCE"
                variant="default"
                features={[
                  "新手無壓力：從零開始也不用怕，有會長和老玩家手把手教，快速上手。",
                  "遊戲攻略直通車：不用自己苦苦摸索，直接拿到最實用的攻略。",
                  "活動提醒：每天、每週的重要活動提前通知，不錯過任何一次好獎勵。",
                  "角色養成規劃：幫你規劃升級、裝備、技能搭配，少走彎路更快成長。"
                ]}
              />

              <FeatureCard
                image="/image/lr_3@2x.png"
                title="經濟與福利層面"
                subtitle="ECONOMY & BENEFITS"
                variant="default"
                features={[
                  "公會專屬折扣和返利：充值更划算，讓你的每一分錢都花在刀刃上。",
                  "資源共享：公會內部共享遊戲資源、禮包碼，大家一起薅羊毛。",
                  "專屬活動獎勵：參與公會活動有額外獎勵，福利拿到手軟。"
                ]}
              />

              <FeatureCard
                image="/image/lr_4@2x.png"
                title="戰鬥與社交層面"
                subtitle="BATTLE & SOCIAL"
                variant="default"
                features={[
                  "組隊開黑更輕鬆：告別孤軍奮戰，隨時找到靠譜隊友一起刷本、PK。",
                  "公會戰熱血沸騰：千人同屏團戰，體驗真正的戰場氛圍。",
                  "交友圈子：認識志同道合的朋友，遊戲裏的兄弟情義無價。"
                ]}
              />

              <FeatureCard
                image="/image/lr_5@2x.png"
                title="榮耀與成就層面"
                subtitle="HONOR & ACHIEVEMENT"
                variant="default"
                features={[
                  "公會排名衝榜：集體的力量衝擊排行榜，共享榮耀。",
                  "專屬稱號和徽章：公會成員獨有的身份標識，走到哪裏都是焦點。",
                  "見證成長：從新人到大佬，公會記錄你的每一步成長軌跡。"
                ]}
              />

              <FeatureCard
                className="lg:col-span-2"
                image="/image/lr_6@2x.png"
                imageClassName="md:w-1/3 lg:w-1/3 max-w-md"
                title="特別優勢"
                subtitle="CORE ADVANTAGE"
                variant="default"
                features={[
                  "10年沉澱：2014年至今，百萬玩家的信任與鼓舞，痕跡盡顯。",
                  "全面競爭力：結合 MMORPG、卡牌與獨立遊戲，打造跨品類的公會命脈。",
                  "全程支援：無論白天黑夜，都有兄弟在線，你的問題隨時有人一同解決。",
                  "陪伴長成：不是打一波熱鬧的公會，而是長線守護，陪你從新兵到老鳥。"
                ]}
              />
            </div>
          </Container>
        </Section>

        {/* =========================================
            4. ❓ 爲什麼選擇我們
           ========================================= */}
        <Section id="why-us" className="relative z-10">
          <Container size="lg">
            {/* Mobile layout */}
            <div className="md:hidden space-y-6 rounded-[28px] border border-white/10 bg-gradient-to-b from-black/85 via-brand-dark/85 to-black/95 p-6 shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
              <div className="text-center space-y-3">
                <span className="text-xs tracking-[0.5em] text-white/60 uppercase">WHY CHOOSE LONGCHENG</span>
                <GameTitle variant="dragon" size="md" as="h2" className="mb-0 text-white">
                  爲什麼選擇加入龍成公會?
                </GameTitle>
                <p className="text-sm text-gray-300">
                  五大核心價值，帶來從戰場到生活的全方位高品質體驗。
                </p>
              </div>

              <div className="space-y-4">
                {reasons.map((reason) => {
                  const isActive = activeReason.label === reason.label
                  return (
                    <button
                      key={reason.label}
                      type="button"
                      onClick={() => setActiveReason(reason)}
                      aria-expanded={isActive}
                      className="w-full rounded-3xl border border-white/15 bg-black/60 px-5 py-2 text-left shadow-[0_18px_35px_rgba(0,0,0,0.45)]"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-[0.65rem] tracking-[0.4em] text-white/60 uppercase">{reason.tagline}</p>
                          <p className="text-2xl font-bold text-white mt-1">{reason.label}</p>
                        </div>
                        <span
                          className={cn(
                            'flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white/80 transition-transform duration-300',
                            isActive ? 'bg-white text-brand-dark rotate-180' : ''
                          )}
                        >
                          ▾
                        </span>
                      </div>
                      <p className="mt-3 text-sm text-gray-300 leading-relaxed">{reason.summary}</p>

                      {isActive && (
                        <div className="mt-4 space-y-3 text-sm text-gray-200">
                          <p className="text-base leading-relaxed">{reason.description}</p>
                          <ul className="space-y-2">
                            {reason.bullets.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-gold shadow-glow-gold" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-center italic text-white/80">
                            “{reason.quote}”
                          </div>
                        </div>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Desktop layout */}
            <div className="relative hidden overflow-hidden rounded-[36px] border border-white/15 bg-gradient-to-b from-black/90 via-brand-dark/90 to-black/95 px-6 py-10 shadow-[0_40px_100px_rgba(0,0,0,0.55)] md:block md:px-16 md:py-18">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[url('https://image.xixingwangluokeji.cn/desktop/bg_stars.png')] opacity-30 mix-blend-screen" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.3),_transparent_65%)] blur-3xl" />
                <div className="absolute inset-y-0 left-8 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
                <div className="absolute inset-y-0 right-8 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
              </div>

              <div className="relative z-10 flex flex-col items-center text-center gap-3">
                <span className="text-[0.75rem] tracking-[0.65em] text-white/70 uppercase">
                  WHY CHOOSE LONGCHENG
                </span>
                <GameTitle
                  variant="dragon"
                  size="xl"
                  as="h2"
                  className="mb-0 text-white drop-shadow-[0_0_24px_rgba(255,255,255,0.4)]"
                >
                  爲什麼選擇加入龍成公會?
                </GameTitle>
                <p className="text-base md:text-lg text-gray-200 max-w-3xl">
                  五大核心價值構成了龍成的基因，從戰場調度、戰力養成到社群福利，專業團隊為你搭建頂級遊戲與生活體驗。
                </p>
                <div className="h-px w-40 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-80" />
              </div>

              <div className="relative z-10 mt-10 flex gap-4 overflow-x-auto sm:flex-wrap sm:justify-center sm:overflow-visible [-webkit-overflow-scrolling:touch]">
                {reasons.map((reason) => {
                  const isActive = activeReason.label === reason.label
                  return (
                    <button
                      key={reason.label}
                      onClick={() => setActiveReason(reason)}
                      className={cn(
                        'group relative flex-shrink-0 overflow-hidden rounded-full px-5 sm:px-7 py-3 text-sm sm:text-base font-bold uppercase tracking-[0.15em] transition-all duration-300 border',
                        'shadow-[inset_0_1px_0_rgba(255,255,255,0.4),_0_12px_30px_rgba(0,0,0,0.45)]',
                        isActive
                          ? 'bg-gradient-to-b from-white via-white/70 to-white/15 text-brand-dark border-white/80'
                          : 'bg-white/5 text-gray-200 border-white/25 hover:bg-white/10'
                      )}
                    >
                      <span className="relative z-10">{reason.label}</span>
                      {isActive && (
                        <span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.8),transparent_60%)] opacity-80" />
                      )}
                    </button>
                  )
                })}
              </div>

              <div className="relative z-10 mt-12 grid gap-8 lg:grid-cols-[0.45fr_0.55fr]">
                <div className="rounded-[28px] border border-white/15 bg-gradient-to-b from-white/10 via-white/5 to-black/20 p-6 md:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]">
                  <p className="text-xs tracking-[0.6em] text-white/70 uppercase">{activeReason.tagline}</p>
                  <h3 className="mt-3 text-3xl font-bold text-white">{activeReason.label}</h3>
                  <p className="mt-4 text-base text-gray-200 leading-relaxed">{activeReason.summary}</p>
                  <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                  <div className="mt-6 space-y-3">
                    {activeReason.bullets.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex gap-3 text-sm text-gray-100">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-gold shadow-glow-gold" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[28px] border border-white/10 bg-black/70 p-6 md:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                  <p className="text-lg text-gray-100 leading-relaxed">{activeReason.description}</p>
                  <ul className="mt-6 grid gap-3 text-sm md:text-base text-gray-200">
                    {activeReason.bullets.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-brand-gold shadow-glow-gold" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-r from-white/10 via-transparent to-white/5 px-4 py-3 text-center italic text-white/80">
                    “{activeReason.quote}”
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* =========================================
            5. 公會留言板
           ========================================= */}
        <Section id="board" className="relative z-10">
          <Container size="lg">
          <GameTitle variant="gold" size="md" as="h2" className="mb-8 text-white">公會留言板</GameTitle>
    
            <div className="rounded-[32px] border border-white/10 bg-gradient-to-b from-black/70 to-black/90 p-6 md:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.45)] space-y-8">
              

              <div className="rounded-2xl bg-black/50 border border-white/10 p-4 flex flex-col md:flex-row gap-4">
                <input
                  disabled
                  className="flex-1 rounded-xl bg-black/60 border border-white/10 p-4 text-sm text-white placeholder:text-white/30"
                  placeholder="寫留言"
                />
               
              </div>

              <div className="relative h-[420px] rounded-2xl border border-white/5 bg-black/40 overflow-hidden">
                {boardLoading && (
                  <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-400">載入留言中...</div>
                )}
                {boardError && (
                  <div className="absolute inset-0 flex items-center justify-center text-sm text-red-400">{boardError}</div>
                )}
                {!boardLoading && !boardError && boardMessages.length === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-400">成為第一個點亮留言板的人！</div>
                )}
                {!boardLoading && !boardError && boardMessages.length > 0 && (
                  <div
                    ref={boardContainerRef}
                    className="relative h-full flex flex-col gap-4 overflow-y-auto pr-2"
                    onMouseEnter={pauseBoardAutoScroll}
                    onMouseLeave={() => resumeBoardAutoScroll(200)}
                    onTouchStart={pauseBoardAutoScroll}
                    onTouchEnd={() => resumeBoardAutoScroll(1200)}
                    onWheel={() => {
                      pauseBoardAutoScroll()
                      resumeBoardAutoScroll(1200)
                    }}
                  >
                    {marqueeMessages.map((message, index) => (
                      <div
                        key={`${message.id}-${index}`}
                        className="flex gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4 backdrop-blur-sm transition-transform duration-300 hover:border-brand-gold/40 hover:bg-white/[0.06]"
                      >
                        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center text-white/80">
                          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="12" cy="8" r="4" />
                            <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-white text-sm md:text-base">公會夥伴 #{message.id}</p>
                          <p className="text-sm text-gray-100 mt-2 leading-relaxed">{message.comment}</p>
                          <div className="mt-3 flex items-center justify-end gap-4 text-xs text-white/60">
                            <button className="flex items-center gap-1 text-white/70 hover:text-white transition-colors">
                              <span className="text-sm">回覆</span>
                            </button>
                            <span className="flex items-center gap-1 text-brand-gold font-semibold">
                              {getBoardLikes(message.id + index)}
                              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M9 22H6a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h3z" />
                                <path d="M9 9.5l3.34-5.33A2 2 0 0 1 14.06 3c.52 0 1.02.2 1.4.57l.11.12A3 3 0 0 1 16 5v4h3a3 3 0 0 1 2.95 3.43l-1.05 6A3 3 0 0 1 17.94 21H9" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Container>
        </Section>

        {/* =========================================
            6. 🚀 CTA 區域
           ========================================= */}
        <Section id="cta" className="relative z-10 pb-32">
          <Container size="md" className="text-center">
            <GameTitle variant="gold" size="xl" as="h2">準備好開始你的傳奇之旅了嗎?</GameTitle>
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
              加入我們,與<span className="text-brand-gold font-bold">100萬+</span>玩家一起,
              書寫遊戲世界的新篇章
            </p>
          </Container>
        </Section>

        <Footer />
      </main>
    </div>
  )
}
