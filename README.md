# 🎮 龙成游戏公会官网

> 采用现代化技术栈和CSS优先设计理念构建的游戏公会官网

## ✨ 特性

- ✅ **完美响应式** - 从手机到4K显示器,自动适配所有屏幕
- 🎨 **CSS优先设计** - 零图片堆砌,全部用CSS实现视觉效果
- ⚡ **极致性能** - 首屏加载 < 1秒
- ♿ **可访问性** - 完整的键盘导航和屏幕阅读器支持
- 🔍 **SEO优化** - 语义化HTML,搜索引擎友好
- 🎬 **流畅动画** - Framer Motion 驱动的交互动画

## 🚀 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **字体**: Google Fonts

## 📦 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:3000` 查看效果

### 3. 构建生产版本

```bash
npm run build
npm start
```

## 📐 项目结构

```
longcheng-guild/
├── src/
│   ├── app/                  # Next.js App Router 页面
│   │   ├── layout.tsx        # 根布局
│   │   ├── page.tsx          # 首页
│   │   └── globals.css       # 全局样式
│   ├── components/
│   │   └── ui/               # UI 组件库
│   │       ├── GameButton.tsx    # 游戏风格按钮
│   │       ├── GameTitle.tsx     # 渐变标题
│   │       ├── GameCard.tsx      # 发光卡片
│   │       ├── Section.tsx       # 区块容器
│   │       └── index.ts          # 导出
│   └── lib/
│       └── utils.ts          # 工具函数
├── tailwind.config.js        # Tailwind 配置
├── tsconfig.json             # TypeScript 配置
└── package.json
```

## 🎨 设计系统

### 颜色

```ts
brand: {
  gold: '#d97706',    // 金黄色 - 主色调
  dragon: '#3b82f6',  // 龙蓝色 - 辅助色
  game: '#ec4899',    // 游戏粉 - 点缀色
  dark: '#0a0a0a',    // 深色背景
}
```

### 渐变

- `bg-gradient-dragon` - 蓝色到金黄
- `bg-gradient-game` - 粉色到蓝色
- `bg-gradient-gold` - 黄色到橙色

### 动画

- `animate-float` - 浮动效果
- `animate-shimmer` - 闪光效果
- `animate-glow-pulse` - 发光脉冲

## 🧩 核心组件

### GameButton

```tsx
<GameButton variant="gold" size="lg">
  立即加入
</GameButton>
```

**属性:**
- `variant`: 'gold' | 'dragon' | 'game' | 'outline' | 'ghost'
- `size`: 'sm' | 'md' | 'lg' | 'xl'

### GameTitle

```tsx
<GameTitle variant="dragon" size="xl" as="h1">
  龙成游戏公会
</GameTitle>
```

**特性:**
- 流体字体大小 (clamp)
- 渐变文字效果
- 发光阴影

### GameCard

```tsx
<GameCard
  icon="🎮"
  title="游戏体验升级"
  description="专业会长指导..."
  variant="gold"
/>
```

**特性:**
- 玻璃态背景
- 悬浮发光效果
- 自动响应式布局

## 📱 响应式断点

```js
xs: '475px',   // 大手机
sm: '640px',   // 手机横屏
md: '768px',   // 平板
lg: '1024px',  // 小桌面
xl: '1280px',  // 大桌面
2xl: '1536px', // 超大屏
```

## 🎯 核心原则

1. **Mobile First** - 默认手机端,逐步增强
2. **CSS优先** - 能用CSS就不用图片
3. **流式设计** - 使用 clamp() 实现自动缩放
4. **组件化** - 复用胜过复制
5. **可访问性** - 键盘导航,语义化HTML

## 📊 性能指标

- **首屏加载**: < 1s
- **Lighthouse评分**: 90+
- **页面大小**: < 500KB
- **完全响应式**: 320px - 2560px

## 🔧 开发命令

```bash
npm run dev        # 启动开发服务器
npm run build      # 构建生产版本
npm run start      # 启动生产服务器
npm run lint       # 代码检查
npm run typecheck  # 类型检查
```

## 📚 学习资源

- [Next.js 文档](https://nextjs.org/docs)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [Framer Motion 文档](https://www.framer.com/motion/)

## 📝 许可证

MIT License

---

**龙成游戏公会** - 好游戏的搬运工 · 成立于2014年
