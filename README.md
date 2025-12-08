# 🎮 龍成遊戲公會官網

> 採用現代化技術棧和CSS優先設計理念構建的遊戲公會官網

## ✨ 特性

- ✅ **完美響應式** - 從手機到4K顯示器,自動適配所有屏幕
- 🎨 **CSS優先設計** - 零圖片堆砌,全部用CSS實現視覺效果
- ⚡ **極致性能** - 首屏加載 < 1秒
- ♿ **可訪問性** - 完整的鍵盤導航和屏幕閱讀器支持
- 🔍 **SEO優化** - 語義化HTML,搜索引擎友好
- 🎬 **流暢動畫** - Framer Motion 驅動的交互動畫

## 🚀 技術棧

- **框架**: Next.js 14 (App Router)
- **語言**: TypeScript
- **樣式**: Tailwind CSS
- **動畫**: Framer Motion
- **字體**: Google Fonts

## 📦 快速開始

### 1. 安裝依賴

```bash
npm install
```

### 2. 啓動開發服務器

```bash
npm run dev
```

訪問 `http://localhost:3000` 查看效果

### 3. 構建生產版本

```bash
npm run build
npm start
```

## 📐 項目結構

```
longcheng-guild/
├── src/
│   ├── app/                  # Next.js App Router 頁面
│   │   ├── layout.tsx        # 根佈局
│   │   ├── page.tsx          # 首頁
│   │   └── globals.css       # 全局樣式
│   ├── components/
│   │   └── ui/               # UI 組件庫
│   │       ├── GameButton.tsx    # 遊戲風格按鈕
│   │       ├── GameTitle.tsx     # 漸變標題
│   │       ├── GameCard.tsx      # 發光卡片
│   │       ├── Section.tsx       # 區塊容器
│   │       └── index.ts          # 導出
│   └── lib/
│       └── utils.ts          # 工具函數
├── tailwind.config.js        # Tailwind 配置
├── tsconfig.json             # TypeScript 配置
└── package.json
```

## 🎨 設計系統

### 顏色

```ts
brand: {
  gold: '#d97706',    // 金黃色 - 主色調
  dragon: '#3b82f6',  // 龍藍色 - 輔助色
  game: '#ec4899',    // 遊戲粉 - 點綴色
  dark: '#0a0a0a',    // 深色背景
}
```

### 漸變

- `bg-gradient-dragon` - 藍色到金黃
- `bg-gradient-game` - 粉色到藍色
- `bg-gradient-gold` - 黃色到橙色

### 動畫

- `animate-float` - 浮動效果
- `animate-shimmer` - 閃光效果
- `animate-glow-pulse` - 發光脈衝

## 🧩 核心組件

### GameButton

```tsx
<GameButton variant="gold" size="lg">
  立即加入
</GameButton>
```

**屬性:**
- `variant`: 'gold' | 'dragon' | 'game' | 'outline' | 'ghost'
- `size`: 'sm' | 'md' | 'lg' | 'xl'

### GameTitle

```tsx
<GameTitle variant="dragon" size="xl" as="h1">
  龍成遊戲公會
</GameTitle>
```

**特性:**
- 流體字體大小 (clamp)
- 漸變文字效果
- 發光陰影

### GameCard

```tsx
<GameCard
  icon="🎮"
  title="遊戲體驗升級"
  description="專業會長指導..."
  variant="gold"
/>
```

**特性:**
- 玻璃態背景
- 懸浮發光效果
- 自動響應式佈局

## 📱 響應式斷點

```js
xs: '475px',   // 大手機
sm: '640px',   // 手機橫屏
md: '768px',   // 平板
lg: '1024px',  // 小桌面
xl: '1280px',  // 大桌面
2xl: '1536px', // 超大屏
```

## 🎯 核心原則

1. **Mobile First** - 默認手機端,逐步增強
2. **CSS優先** - 能用CSS就不用圖片
3. **流式設計** - 使用 clamp() 實現自動縮放
4. **組件化** - 複用勝過複製
5. **可訪問性** - 鍵盤導航,語義化HTML

## 📊 性能指標

- **首屏加載**: < 1s
- **Lighthouse評分**: 90+
- **頁面大小**: < 500KB
- **完全響應式**: 320px - 2560px

## 🔧 開發命令

```bash
npm run dev        # 啓動開發服務器
npm run build      # 構建生產版本
npm run start      # 啓動生產服務器
npm run lint       # 代碼檢查
npm run typecheck  # 類型檢查
```

## 📚 學習資源

- [Next.js 文檔](https://nextjs.org/docs)
- [Tailwind CSS 文檔](https://tailwindcss.com/docs)
- [Framer Motion 文檔](https://www.framer.com/motion/)

## 📝 許可證

MIT License

---

**龍成遊戲公會** - 好遊戲的搬運工 · 成立於2014年
