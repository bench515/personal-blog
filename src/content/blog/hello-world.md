---
title: "Hello World：我的第一篇博客"
description: "博客终于搭建好了！记录一下搭建过程和技术选型。"
pubDate: 2026-05-25
tags: ["博客", "Astro", "GitHub Pages"]
---

## 为什么要写博客？

一直以来都想有一个自己的博客，用来记录学习和思考。最近终于动手搭建了。

## 技术选型

经过一番调研，选择了以下技术栈：

- **框架**: [Astro](https://astro.build) — 静态优先，性能出色，Markdown 原生支持
- **部署**: GitHub Pages — 免费、稳定、自动部署
- **搜索**: Pagefind — 纯静态搜索，无需后端
- **评论**: Giscus — 基于 GitHub Discussions 的评论系统

## 为什么选 Astro？

Astro 最大的特点是 **"零 JS 默认输出"**。页面默认只输出纯 HTML/CSS，只有在需要交互的地方才加载 JavaScript。对博客这种内容型站点来说再合适不过了。

### 代码示例

```javascript
// 一个简单的问候
function greet(name) {
  return `Hello, ${name}! Welcome to my blog.`;
}

console.log(greet("World"));
```

## 接下来

接下来会陆续写一些技术笔记和生活感悟。敬请期待！
