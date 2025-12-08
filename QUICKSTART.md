# 🚀 快速開始 - 5分鐘上手

## 第一步:查看效果 (30秒)

開發服務器已啓動,直接訪問:

```
http://localhost:3000
```

你會看到一個**完全用CSS實現**的遊戲公會首頁,包含:
- 🎨 漸變標題和發光按鈕
- 💳 懸浮卡片效果
- 📱 完美響應式佈局
- ✨ 流暢的交互動畫

---

## 第二步:測試響應式 (2分鐘)

### 方法1:瀏覽器開發者工具
1. 按 `F12` 打開開發者工具
2. 點擊左上角的"設備模擬"圖標 (手機圖標)
3. 拖動寬度條從 **320px → 2560px**

**觀察變化:**
- 標題字體平滑縮放 (不會突變)
- 卡片佈局自動調整列數
- 按鈕尺寸自動適配
- 間距自動優化

### 方法2:調整瀏覽器窗口
直接拖動瀏覽器窗口邊緣,從最小拉到最大

---

## 第三步:修改內容 (2分鐘)

### 修改主標題
打開 `src/app/page.tsx`,找到第25行:

```tsx
<GameTitle variant="dragon" size="2xl" as="h1" glow>
  龍成遊戲公會  {/* 👈 改成你的公會名 */}
</GameTitle>
```

保存後瀏覽器會自動刷新!

### 修改按鈕文字
找到第33行:

```tsx
<GameButton variant="gold" size="xl">
  立即加入公會 🚀  {/* 👈 改成你想要的文字 */}
</GameButton>
```

### 修改顏色變體
```tsx
// 改成藍色漸變
<GameTitle variant="dragon">

// 改成粉色漸變
<GameButton variant="game">

// 改成金色漸變
<GameCard variant="gold">
```

---

## 核心優勢

### 🆚 vs 圖片堆砌的舊方式

| 操作 | 舊方式 | 新方式 | 提升 |
|------|--------|--------|------|
| **改標題文字** | 找設計師切圖→30分鐘 | 改代碼→30秒 | ⚡ 60倍 |
| **改按鈕顏色** | 重新切圖→20分鐘 | 改variant→10秒 | ⚡ 120倍 |
| **添加新卡片** | 切圖+調整位置→1小時 | 複製組件→2分鐘 | ⚡ 30倍 |
| **響應式適配** | 每個分辨率切圖→2天 | 自動適配→0秒 | ⚡ 無限 |

---

## 可用組件

### 1. GameButton (按鈕)
```tsx
<GameButton
  variant="gold"    // gold | dragon | game | outline | ghost
  size="lg"         // sm | md | lg | xl
  onClick={() => {}}
>
  按鈕文字
</GameButton>
```

### 2. GameTitle (標題)
```tsx
<GameTitle
  variant="dragon"  // dragon | gold | game
  size="xl"         // sm | md | lg | xl | 2xl
  as="h1"          // h1 | h2 | h3 | h4 | h5 | h6
  glow             // 是否發光
>
  標題文字
</GameTitle>
```

### 3. GameCard (卡片)
```tsx
<GameCard
  icon="🎮"
  title="卡片標題"
  description="卡片描述"
  variant="gold"   // default | gold | dragon | game
/>
```

### 4. GameCardGrid (卡片網格)
```tsx
<GameCardGrid cols={2}>  {/* 2 | 3 | 4 或不設置(自動) */}
  <GameCard />
  <GameCard />
</GameCardGrid>
```

---

## 常見問題

### Q: 如何添加背景圖?
```tsx
<Section className="relative">
  {/* 背景層 */}
  <div className="absolute inset-0">
    <img src="/bg.jpg" alt="" className="w-full h-full object-cover" />
  </div>

  {/* 內容層 */}
  <div className="relative z-10">
    內容
  </div>
</Section>
```

### Q: 如何修改品牌色?
編輯 `tailwind.config.js` 第15行:
```js
colors: {
  brand: {
    gold: '#d97706',    // 👈 改成你的顏色
    dragon: '#3b82f6',
    game: '#ec4899',
  }
}
```

### Q: 如何添加新頁面?
```bash
# 創建文件
src/app/about/page.tsx

# 內容
export default function AboutPage() {
  return <div>關於我們</div>
}

# 訪問
http://localhost:3000/about
```

---

## 下一步學習

1. **查看完整文檔** - [PROJECT_GUIDE.md](PROJECT_GUIDE.md)
2. **查看README** - [README.md](README.md)
3. **學習Tailwind** - https://tailwindcss.com/docs
4. **學習Next.js** - https://nextjs.org/docs

---

**現在就去 http://localhost:3000 試試吧!** 🎉
