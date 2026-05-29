# My Personal Blog 🚀

基于 [Astro](https://astro.build) 构建的个人博客。

## 功能

- 📝 Markdown 写作
- 🏷️ 标签分类
- 🔍 全文搜索（Pagefind）
- 💬 评论系统（Giscus）
- 🌙 暗色模式
- 📡 RSS 订阅
- 🗺️ Sitemap
- 🚀 GitHub Pages 自动部署

## 本地开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
npm run preview
```

## 写文章

在 `src/content/blog/` 目录下创建 `.md` 文件：

```yaml
---
title: "文章标题"
description: "文章描述"
pubDate: 2026-05-30
tags: ["标签1", "标签2"]
---
```

## 部署前配置

1. 修改 `astro.config.mjs` 中的 `site` 为你的 GitHub Pages 地址
2. 修改 `src/layouts/BlogPostLayout.astro` 中的 Giscus 配置
3. 修改 `src/pages/about.astro` 中的个人信息

## 许可

MIT
