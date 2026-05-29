---
title: "Web 性能优化实践"
description: "整理一些前端性能优化的实用技巧：从图片优化到代码分割，提升用户体验。"
pubDate: 2026-05-30
tags: ["前端", "性能优化", "JavaScript"]
---

## 为什么性能重要？

Google 的研究表明，页面加载时间超过 3 秒，53% 的移动用户会离开。性能直接影响用户体验和转化率。

## Core Web Vitals

Google 定义了三个核心指标：

| 指标 | 衡量 | 目标 |
|------|------|------|
| **LCP** | 最大内容绘制 | < 2.5s |
| **FID** | 首次输入延迟 | < 100ms |
| **CLS** | 累计布局偏移 | < 0.1 |

## 图片优化

图片通常占页面体积的 50% 以上。几个关键优化：

```html
<!-- 使用 WebP 格式 + 响应式图片 -->
<picture>
  <source srcset="hero.webp" type="image/webp" />
  <source srcset="hero.jpg" type="image/jpeg" />
  <img src="hero.jpg" alt="Hero" loading="lazy" width="800" height="400" />
</picture>
```

要点：
1. 使用现代格式（WebP、AVIF）
2. 设置 `loading="lazy"` 延迟加载
3. 指定 `width` 和 `height` 防止布局偏移

## 代码分割

```javascript
// 动态导入，按需加载
const handleClick = async () => {
  const { heavyFunction } = await import("./heavy-module.js");
  heavyFunction();
};
```

## 字体优化

```css
/* 使用 font-display: swap 避免 FOIT */
@font-face {
  font-family: "CustomFont";
  src: url("/fonts/custom.woff2") format("woff2");
  font-display: swap;
}
```

## 总结

性能优化是一个持续的过程。从最简单的图片优化和代码分割开始，逐步深入。记住：**先测量，再优化**。
