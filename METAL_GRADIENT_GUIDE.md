# 金屬漸變文字樣式指南

## 📚 可用樣式類

### 1. `.metal-gradient-title` - 金屬漸變主標題

**效果**: 灰白金屬質感,帶陰影立體效果

**漸變色**:
- 0%: #D9D9D9 (淺灰)
- 50%: #8C8C8C (深灰)
- 50.1%: #FFFFFF (白色,硬切換)
- 100%: #A6A6A6 (中灰)

**投影**: 0px 2px 2.5px rgba(0, 0, 0, 0.7)

**使用示例**:
```tsx
<h1 className="text-5xl font-bold font-serif metal-gradient-title">
  龍城遊戲公會
</h1>
```

---

### 2. `.purple-gradient-subtitle` - 紫色漸變副標題

**效果**: 紫色到灰白漸變,優雅輕盈

**漸變色**:
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
  {/* 主標題 */}
  <h2 className="text-4xl md:text-6xl font-bold mb-2 font-serif metal-gradient-title">
    龍城遊戲公會
  </h2>

  {/* 副標題 */}
  <p className="text-sm md:text-lg font-bold uppercase tracking-[0.5em] md:tracking-[0.8em] pl-1 purple-gradient-subtitle">
    GAME GUILD
  </p>
</div>
```

---

## ⚙️ 自定義變體

如需創建新的漸變樣式,在 `globals.css` 中添加:

```css
/* 自定義金色漸變 */
.gold-gradient-title {
  @apply bg-clip-text text-transparent;
  background-image: linear-gradient(175deg, #FFD700 0%, #FFA500 50%, #FFFF00 50.1%, #FFD700 100%);
  filter: drop-shadow(0px 2px 2.5px rgba(0, 0, 0, 0.7));
}
```

---

## 📋 技術說明

- **bg-clip-text**: 將背景裁剪爲文字形狀
- **text-transparent**: 文字本身透明,顯示背景漸變
- **filter: drop-shadow()**: 投影效果(不同於text-shadow,會保留文字輪廓)
- **linear-gradient(175deg, ...)**: 175度微斜漸變,營造立體感
- **硬切換技巧**: 50% → 50.1% 創建明顯分界線

---

## 🎯 最佳實踐

1. ✅ 主標題使用 `font-serif` 增強金屬質感
2. ✅ 副標題使用 `uppercase` + `tracking-widest` 拉開字母間距
3. ✅ 響應式字號: `text-4xl md:text-6xl`
4. ✅ 深色背景下效果最佳
5. ⚠️ 避免在白色背景使用(對比度不足)

---

## 📍 定義位置

所有樣式定義在: `src/app/globals.css` 第93-105行

```css
/* 金屬漸變文字 - 主標題 (灰白金屬質感) */
.metal-gradient-title {
  @apply bg-clip-text text-transparent;
  background-image: linear-gradient(175deg, #D9D9D9 0%, #8C8C8C 50%, #FFFFFF 50.1%, #A6A6A6 100%);
  filter: drop-shadow(0px 2px 2.5px rgba(0, 0, 0, 0.7));
}

/* 紫色漸變副標題 */
.purple-gradient-subtitle {
  @apply bg-clip-text text-transparent;
  background-image: linear-gradient(to bottom, #7B6ECC 0%, #EDEDED 100%);
  filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.5));
}
```
