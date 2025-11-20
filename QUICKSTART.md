# 🚀 快速开始 - 5分钟上手

## 第一步:查看效果 (30秒)

开发服务器已启动,直接访问:

```
http://localhost:3000
```

你会看到一个**完全用CSS实现**的游戏公会首页,包含:
- 🎨 渐变标题和发光按钮
- 💳 悬浮卡片效果
- 📱 完美响应式布局
- ✨ 流畅的交互动画

---

## 第二步:测试响应式 (2分钟)

### 方法1:浏览器开发者工具
1. 按 `F12` 打开开发者工具
2. 点击左上角的"设备模拟"图标 (手机图标)
3. 拖动宽度条从 **320px → 2560px**

**观察变化:**
- 标题字体平滑缩放 (不会突变)
- 卡片布局自动调整列数
- 按钮尺寸自动适配
- 间距自动优化

### 方法2:调整浏览器窗口
直接拖动浏览器窗口边缘,从最小拉到最大

---

## 第三步:修改内容 (2分钟)

### 修改主标题
打开 `src/app/page.tsx`,找到第25行:

```tsx
<GameTitle variant="dragon" size="2xl" as="h1" glow>
  龙成游戏公会  {/* 👈 改成你的公会名 */}
</GameTitle>
```

保存后浏览器会自动刷新!

### 修改按钮文字
找到第33行:

```tsx
<GameButton variant="gold" size="xl">
  立即加入公会 🚀  {/* 👈 改成你想要的文字 */}
</GameButton>
```

### 修改颜色变体
```tsx
// 改成蓝色渐变
<GameTitle variant="dragon">

// 改成粉色渐变
<GameButton variant="game">

// 改成金色渐变
<GameCard variant="gold">
```

---

## 核心优势

### 🆚 vs 图片堆砌的旧方式

| 操作 | 旧方式 | 新方式 | 提升 |
|------|--------|--------|------|
| **改标题文字** | 找设计师切图→30分钟 | 改代码→30秒 | ⚡ 60倍 |
| **改按钮颜色** | 重新切图→20分钟 | 改variant→10秒 | ⚡ 120倍 |
| **添加新卡片** | 切图+调整位置→1小时 | 复制组件→2分钟 | ⚡ 30倍 |
| **响应式适配** | 每个分辨率切图→2天 | 自动适配→0秒 | ⚡ 无限 |

---

## 可用组件

### 1. GameButton (按钮)
```tsx
<GameButton
  variant="gold"    // gold | dragon | game | outline | ghost
  size="lg"         // sm | md | lg | xl
  onClick={() => {}}
>
  按钮文字
</GameButton>
```

### 2. GameTitle (标题)
```tsx
<GameTitle
  variant="dragon"  // dragon | gold | game
  size="xl"         // sm | md | lg | xl | 2xl
  as="h1"          // h1 | h2 | h3 | h4 | h5 | h6
  glow             // 是否发光
>
  标题文字
</GameTitle>
```

### 3. GameCard (卡片)
```tsx
<GameCard
  icon="🎮"
  title="卡片标题"
  description="卡片描述"
  variant="gold"   // default | gold | dragon | game
/>
```

### 4. GameCardGrid (卡片网格)
```tsx
<GameCardGrid cols={2}>  {/* 2 | 3 | 4 或不设置(自动) */}
  <GameCard />
  <GameCard />
</GameCardGrid>
```

---

## 常见问题

### Q: 如何添加背景图?
```tsx
<Section className="relative">
  {/* 背景层 */}
  <div className="absolute inset-0">
    <img src="/bg.jpg" alt="" className="w-full h-full object-cover" />
  </div>

  {/* 内容层 */}
  <div className="relative z-10">
    内容
  </div>
</Section>
```

### Q: 如何修改品牌色?
编辑 `tailwind.config.js` 第15行:
```js
colors: {
  brand: {
    gold: '#d97706',    // 👈 改成你的颜色
    dragon: '#3b82f6',
    game: '#ec4899',
  }
}
```

### Q: 如何添加新页面?
```bash
# 创建文件
src/app/about/page.tsx

# 内容
export default function AboutPage() {
  return <div>关于我们</div>
}

# 访问
http://localhost:3000/about
```

---

## 下一步学习

1. **查看完整文档** - [PROJECT_GUIDE.md](PROJECT_GUIDE.md)
2. **查看README** - [README.md](README.md)
3. **学习Tailwind** - https://tailwindcss.com/docs
4. **学习Next.js** - https://nextjs.org/docs

---

**现在就去 http://localhost:3000 试试吧!** 🎉
