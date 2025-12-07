# 金属渐变文字样式指南

## 📚 可用样式类

### 1. `.metal-gradient-title` - 金属渐变主标题

**效果**: 灰白金属质感,带阴影立体效果

**渐变色**:
- 0%: #D9D9D9 (浅灰)
- 50%: #8C8C8C (深灰)
- 50.1%: #FFFFFF (白色,硬切换)
- 100%: #A6A6A6 (中灰)

**投影**: 0px 2px 2.5px rgba(0, 0, 0, 0.7)

**使用示例**:
```tsx
<h1 className="text-5xl font-bold font-serif metal-gradient-title">
  龙城游戏公会
</h1>
```

---

### 2. `.purple-gradient-subtitle` - 紫色渐变副标题

**效果**: 紫色到灰白渐变,优雅轻盈

**渐变色**:
- 0%: #7B6ECC (紫色)
- 100%: #EDEDED (灰白)

**投影**: 0px 1px 2px rgba(0, 0, 0, 0.5)

**使用示例**:
```tsx
<p className="text-lg font-bold uppercase tracking-widest purple-gradient-subtitle">
  GAME GUILD
</p>
```

---

## 🎨 完整使用案例

```tsx
<div>
  {/* 主标题 */}
  <h2 className="text-4xl md:text-6xl font-bold mb-2 font-serif metal-gradient-title">
    龙城游戏公会
  </h2>

  {/* 副标题 */}
  <p className="text-sm md:text-lg font-bold uppercase tracking-[0.5em] md:tracking-[0.8em] pl-1 purple-gradient-subtitle">
    GAME GUILD
  </p>
</div>
```

---

## ⚙️ 自定义变体

如需创建新的渐变样式,在 `globals.css` 中添加:

```css
/* 自定义金色渐变 */
.gold-gradient-title {
  @apply bg-clip-text text-transparent;
  background-image: linear-gradient(175deg, #FFD700 0%, #FFA500 50%, #FFFF00 50.1%, #FFD700 100%);
  filter: drop-shadow(0px 2px 2.5px rgba(0, 0, 0, 0.7));
}
```

---

## 📋 技术说明

- **bg-clip-text**: 将背景裁剪为文字形状
- **text-transparent**: 文字本身透明,显示背景渐变
- **filter: drop-shadow()**: 投影效果(不同于text-shadow,会保留文字轮廓)
- **linear-gradient(175deg, ...)**: 175度微斜渐变,营造立体感
- **硬切换技巧**: 50% → 50.1% 创建明显分界线

---

## 🎯 最佳实践

1. ✅ 主标题使用 `font-serif` 增强金属质感
2. ✅ 副标题使用 `uppercase` + `tracking-widest` 拉开字母间距
3. ✅ 响应式字号: `text-4xl md:text-6xl`
4. ✅ 深色背景下效果最佳
5. ⚠️ 避免在白色背景使用(对比度不足)

---

## 📍 定义位置

所有样式定义在: `src/app/globals.css` 第93-105行

```css
/* 金属渐变文字 - 主标题 (灰白金属质感) */
.metal-gradient-title {
  @apply bg-clip-text text-transparent;
  background-image: linear-gradient(175deg, #D9D9D9 0%, #8C8C8C 50%, #FFFFFF 50.1%, #A6A6A6 100%);
  filter: drop-shadow(0px 2px 2.5px rgba(0, 0, 0, 0.7));
}

/* 紫色渐变副标题 */
.purple-gradient-subtitle {
  @apply bg-clip-text text-transparent;
  background-image: linear-gradient(to bottom, #7B6ECC 0%, #EDEDED 100%);
  filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.5));
}
```
