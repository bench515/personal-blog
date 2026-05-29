---
title: "Markdown 写作指南"
description: "一篇 Markdown 格式测试文章，展示各种排版能力：标题、代码、引用、列表、图片等。"
pubDate: 2026-05-28
tags: ["写作", "Markdown", "教程"]
---

## 标题层级

Markdown 使用 `#` 号表示标题，从一级到六级。

### 三级标题

#### 四级标题

## 文本格式

- **粗体文字** 用 `**粗体**`
- _斜体文字_ 用 `*斜体*`
- ~~删除线~~ 用 `~~删除线~~`
- `行内代码` 用反引号

## 列表

### 无序列表

- 第一项
- 第二项
  - 子项 A
  - 子项 B
- 第三项

### 有序列表

1. 第一步
2. 第二步
3. 第三步

## 引用

> 学而不思则罔，思而不学则殆。
>
> — 孔子

## 链接与图片

[Astro 官网](https://astro.build)

## 代码块

```python
def fibonacci(n):
    """生成斐波那契数列"""
    a, b = 0, 1
    result = []
    for _ in range(n):
        result.append(a)
        a, b = b, a + b
    return result

print(fibonacci(10))
```

## 表格

| 特性 | 描述 | 状态 |
|------|------|------|
| 搜索 | Pagefind 全文搜索 | ✅ |
| 评论 | Giscus 评论系统 | ✅ |
| 暗色模式 | 自动/手动切换 | ✅ |
| RSS | RSS 2.0 订阅 | ✅ |

## 分隔线

---

以上就是 Markdown 的基本用法。Happy writing! ✍️
