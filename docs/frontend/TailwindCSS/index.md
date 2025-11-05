![Tailwindcss6](https://cdn.bangwu.top/img/Tailwindcss6.png)

# Tailwind CSS

Tailwind CSS 是一个功能类优先的 CSS 框架，通过组合原子化的工具类来构建界面。

## 核心理念

不同于传统的语义化 CSS 框架，Tailwind 提供底层的工具类，让你直接在 HTML 中编写样式。

```html
<!-- 传统方式 -->
<div class="card">
  <h2 class="card-title">Title</h2>
</div>

<!-- Tailwind 方式 -->
<div class="bg-white rounded-lg shadow-md p-6">
  <h2 class="text-2xl font-bold mb-2">Title</h2>
</div>
```

## 安装

### 通过 npm

```bash
npm install -D tailwindcss
npx tailwindcss init
```

### 配置文件

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### CSS 文件

```css
/* src/styles.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Vite 项目

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## 常用工具类

### 布局

```html
<!-- Flexbox -->
<div class="flex items-center justify-between">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Grid -->
<div class="grid grid-cols-3 gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

<!-- 容器 -->
<div class="container mx-auto px-4">
  Content
</div>
```

### 间距

```html
<!-- Padding -->
<div class="p-4">所有方向 padding: 1rem</div>
<div class="px-4 py-2">水平 1rem，垂直 0.5rem</div>
<div class="pt-4">顶部 padding</div>

<!-- Margin -->
<div class="m-4">所有方向 margin</div>
<div class="mx-auto">水平居中</div>
<div class="-mt-4">负 margin</div>

<!-- Space Between -->
<div class="flex space-x-4">
  <div>1</div>
  <div>2</div>
</div>
```

### 尺寸

```html
<!-- Width -->
<div class="w-full">100% 宽度</div>
<div class="w-1/2">50% 宽度</div>
<div class="w-64">16rem 宽度</div>
<div class="max-w-md">最大宽度</div>

<!-- Height -->
<div class="h-screen">100vh 高度</div>
<div class="h-64">16rem 高度</div>
<div class="min-h-screen">最小 100vh</div>
```

### 颜色

```html
<!-- 文字颜色 -->
<p class="text-blue-500">蓝色文字</p>
<p class="text-gray-700">深灰色文字</p>

<!-- 背景色 -->
<div class="bg-red-500">红色背景</div>
<div class="bg-gradient-to-r from-blue-500 to-purple-500">渐变背景</div>

<!-- 边框色 -->
<div class="border border-gray-300">灰色边框</div>
```

### 排版

```html
<!-- 字体大小 -->
<h1 class="text-4xl">超大标题</h1>
<p class="text-base">正常文字</p>
<small class="text-sm">小文字</small>

<!-- 字重 -->
<p class="font-light">细体</p>
<p class="font-normal">正常</p>
<p class="font-bold">粗体</p>

<!-- 对齐 -->
<p class="text-left">左对齐</p>
<p class="text-center">居中</p>
<p class="text-right">右对齐</p>

<!-- 行高 -->
<p class="leading-tight">紧凑行高</p>
<p class="leading-loose">宽松行高</p>
```

### 边框和圆角

```html
<!-- 边框 -->
<div class="border">默认边框</div>
<div class="border-2">2px 边框</div>
<div class="border-t">顶部边框</div>

<!-- 圆角 -->
<div class="rounded">小圆角</div>
<div class="rounded-lg">大圆角</div>
<div class="rounded-full">全圆角</div>
```

### 阴影

```html
<div class="shadow">默认阴影</div>
<div class="shadow-md">中等阴影</div>
<div class="shadow-lg">大阴影</div>
<div class="shadow-xl">超大阴影</div>
<div class="shadow-none">无阴影</div>
```

### 透明度

```html
<div class="opacity-0">完全透明</div>
<div class="opacity-50">半透明</div>
<div class="opacity-100">不透明</div>
```

## 响应式设计

Tailwind 使用移动优先的断点系统。

```html
<!-- 默认移动端，md 及以上为桌面端 -->
<div class="text-sm md:text-base lg:text-lg">
  响应式文字大小
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  响应式网格
</div>
```

### 断点

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 伪类和状态

```html
<!-- Hover -->
<button class="bg-blue-500 hover:bg-blue-700">
  Hover me
</button>

<!-- Focus -->
<input class="border focus:border-blue-500 focus:ring-2" />

<!-- Active -->
<button class="active:bg-blue-800">Click</button>

<!-- Disabled -->
<button class="disabled:opacity-50" disabled>
  Disabled
</button>

<!-- 组合使用 -->
<button class="bg-blue-500 hover:bg-blue-700 active:bg-blue-800 disabled:opacity-50">
  Button
</button>
```

## 暗色模式

```html
<!-- 基于 class 的暗色模式 -->
<div class="bg-white dark:bg-gray-800 text-black dark:text-white">
  自适应暗色模式
</div>
```

```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class', // 'media' 或 'class'
}
```

```javascript
// 切换暗色模式
document.documentElement.classList.toggle('dark')
```

## 自定义配置

### 扩展主题

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        secondary: '#ffed4e',
      },
      spacing: {
        '128': '32rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
}
```

### 自定义工具类

```css
@layer utilities {
  .text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
}
```

### 自定义组件

```css
@layer components {
  .btn-primary {
    @apply bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700;
  }
}
```

## 常用插件

### 官方插件

```bash
npm install -D @tailwindcss/forms
npm install -D @tailwindcss/typography
npm install -D @tailwindcss/aspect-ratio
```

```javascript
// tailwind.config.js
module.exports = {
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
```

### Typography（排版）

```html
<article class="prose lg:prose-xl">
  <h1>Markdown 标题</h1>
  <p>自动美化的排版</p>
</article>
```

## 实用技巧

### 提取组件

使用 `@apply` 提取重复的工具类：

```css
.card {
  @apply bg-white rounded-lg shadow-md p-6;
}
```

### 条件类名

使用 `clsx` 或 `classnames` 库：

```tsx
import clsx from 'clsx'

function Button({ primary, children }) {
  return (
    <button className={clsx(
      'px-4 py-2 rounded',
      primary ? 'bg-blue-500 text-white' : 'bg-gray-200'
    )}>
      {children}
    </button>
  )
}
```

### 组与子元素

```html
<div class="group">
  <img class="group-hover:scale-110 transition" />
  <p class="group-hover:text-blue-500">Text</p>
</div>
```

### 任意值

```html
<div class="w-[137px] top-[117px]">
  自定义值
</div>
```

## 性能优化

### 生产环境优化

Tailwind 会自动移除未使用的样式。

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
}
```

### JIT 模式

Just-In-Time 模式默认启用，按需生成样式。

## 编辑器支持

### VS Code 插件

- **Tailwind CSS IntelliSense**：自动补全和预览
- **Headwind**：自动排序类名

## 常见问题

### 样式优先级

使用 `!` 前缀强制应用样式：

```html
<div class="!text-red-500">
  强制红色文字
</div>
```

### 自定义颜色

```html
<div class="bg-[#1da1f2]">
  自定义十六进制颜色
</div>
```

## 最佳实践

1. **保持一致性**：遵循设计系统
2. **避免过度抽象**：不要过早提取组件
3. **使用响应式**：移动优先设计
4. **利用配置**：自定义主题颜色和间距
5. **编辑器辅助**：安装 IntelliSense 插件
6. **组件化**：复杂组件提取为独立文件

## 参考资源

- [Tailwind CSS 官网](https://tailwindcss.com/)
- [Tailwind UI](https://tailwindui.com/) - 官方组件库
- [Headless UI](https://headlessui.com/) - 无样式组件
- [Tailwind Play](https://play.tailwindcss.com/) - 在线编辑器
- [Awesome Tailwind](https://github.com/aniftyco/awesome-tailwindcss)