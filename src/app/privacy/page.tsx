import Link from 'next/link'

export const metadata = {
  title: '隱私政策 | 龍成遊戲公會',
  description: '龍成遊戲公會隱私保護與資料使用說明。',
}

const sections = [
  { id: 'scope', title: '資料收集範圍', body: '範例：帳號資訊、聯絡方式、使用紀錄、設備資訊、Cookies/SDK 等，請按實際情況調整。' },
  { id: 'purpose', title: '資料使用目的', body: '範例：帳號維護、服務提供、通知推送、活動或行銷、服務優化、安全防護等，可標註哪些需額外同意。' },
  { id: 'share', title: '資料分享與第三方', body: '範例：是否與支付/客服/數據分析/廣告等第三方共享，目的、類型、合法性基礎與安全措施。' },
  { id: 'retention', title: '資料保存與刪除', body: '範例：保存期限、刪除與匿名化機制，以及用戶申請刪除或下載資料的流程。' },
  { id: 'rights', title: '用戶權利', body: '範例：知情、更正、刪除、撤回同意、資料可攜、限制/反對處理、關閉定向廣告等，並說明行使方式。' },
  { id: 'security', title: '安全措施', body: '範例：加密、存取控制、稽核、備份等技術與組織措施，及資料外洩應變流程。' },
  { id: 'cookies', title: 'Cookies / 追蹤技術', body: '範例：使用的 Cookies/SDK 類型、目的（必要/分析/行銷）、保存期限與用戶管理方式。' },
  { id: 'minor', title: '未成年人保護', body: '範例：使用年齡限制、監護人同意要求、資料收集限制與刪除流程。' },
  { id: 'transfer', title: '國際傳輸', body: '範例：若資料傳至境外伺服器，需說明區域、法律保護與防護措施。' },
  { id: 'contact', title: '聯絡方式', body: '範例：客服郵箱、資料保護窗口或申訴渠道，請填入實際聯絡資訊。' },
  { id: 'update', title: '政策更新', body: '範例：更新頻率、通知方式（公告/站內信/電郵），並標註最近更新日期。' },
]

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-brand-dark/80 to-black text-gray-200">
      <div className="relative mx-auto max-w-5xl px-6 py-14 md:py-18 space-y-10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_45%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(217,119,6,0.08),transparent_50%)]" />
        </div>

        <div className="relative flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.45)]">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <p className="text-xs tracking-[0.4em] text-white/60 uppercase">Privacy Policy</p>
              <h1 className="text-3xl md:text-4xl font-bold text-white">隱私政策</h1>
              <p className="text-sm md:text-base text-gray-300">
                以下為草稿模板，請依實際業務補充。每段文字都可直接替換或增修。
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-brand-gold hover:text-brand-gold"
            >
              ← 回到首頁
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 text-xs md:text-sm text-gray-200">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 transition hover:border-brand-gold hover:text-brand-gold"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>

        <div className="relative grid gap-4 md:gap-6">
          {sections.map((s, idx) => (
            <section
              key={s.id}
              id={s.id}
              className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-7 shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-60 pointer-events-none" />
              <div className="relative flex items-start gap-3">
                <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xs font-bold text-white/80">
                  {idx + 1}
                </span>
                <div className="space-y-2">
                  <h2 className="text-lg md:text-xl font-semibold text-white">{s.title}</h2>
                  <p className="text-sm md:text-base leading-relaxed text-gray-200">{s.body}</p>
                </div>
              </div>
            </section>
          ))}
        </div>

        <div className="relative flex flex-col items-center gap-3 text-sm text-gray-300">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-2 font-semibold text-white transition hover:border-brand-gold hover:text-brand-gold"
          >
            返回首頁
          </Link>
          <p className="text-xs text-gray-500">如需補充內容，可直接覆蓋上述段落文字。</p>
        </div>
      </div>
    </main>
  )
}
