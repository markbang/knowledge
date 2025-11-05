## Next.js

Next.js 是近些年最火的 React 框架，由 Vercel 开发和维护。

### 核心特性

- **混合渲染**：SSR、SSG、ISR 多种渲染模式
- **文件路由**：基于文件系统的自动路由
- **API Routes**：内置 API 端点
- **优化性能**：自动代码分割、图片优化
- **TypeScript**：原生 TypeScript 支持
- **零配置**：开箱即用的最佳实践

### 快速开始

```bash
# 创建新项目
npx create-next-app@latest my-app
cd my-app

# 启动开发服务器
npm run dev

# 访问 http://localhost:3000
```

### 项目结构

```
my-app/
├── app/              # App Router（推荐）
│   ├── layout.tsx    # 根布局
│   ├── page.tsx      # 首页
│   └── api/          # API 路由
├── public/           # 静态资源
├── components/       # 组件
├── lib/              # 工具函数
└── next.config.js    # Next.js 配置
```

### App Router（Next.js 13+）

#### 页面和布局

```tsx
// app/page.tsx - 首页
export default function Home() {
  return <h1>Welcome to Next.js</h1>
}

// app/layout.tsx - 根布局
export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}

// app/about/page.tsx - /about 路由
export default function About() {
  return <h1>About Page</h1>
}
```

#### 动态路由

```tsx
// app/blog/[slug]/page.tsx
export default function BlogPost({ params }) {
  return <h1>Post: {params.slug}</h1>
}

// app/shop/[...slug]/page.tsx - 捕获所有路由
export default function Shop({ params }) {
  return <div>{params.slug.join('/')}</div>
}
```

#### 数据获取

```tsx
// 服务端组件（默认）
async function getData() {
  const res = await fetch('https://api.example.com/data', {
    cache: 'force-cache', // 缓存
    // next: { revalidate: 3600 } // ISR - 每小时重新验证
  })
  return res.json()
}

export default async function Page() {
  const data = await getData()
  return <div>{data.title}</div>
}
```

#### 客户端组件

```tsx
'use client' // 必须在顶部声明

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  )
}
```

#### Loading 和 Error

```tsx
// app/loading.tsx - 加载状态
export default function Loading() {
  return <div>Loading...</div>
}

// app/error.tsx - 错误处理
'use client'
export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
```

### API Routes

```typescript
// app/api/hello/route.ts
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  return NextResponse.json({ message: 'Hello World' })
}

export async function POST(request: Request) {
  const body = await request.json()
  return NextResponse.json({ data: body })
}
```

### 中间件

```typescript
// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // 认证检查
  const token = request.cookies.get('token')
  
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: '/dashboard/:path*',
}
```

### 图片优化

```tsx
import Image from 'next/image'

export default function Avatar() {
  return (
    <Image
      src="/avatar.jpg"
      alt="Avatar"
      width={500}
      height={500}
      priority // 预加载
      placeholder="blur" // 模糊占位符
    />
  )
}
```

### 字体优化

```tsx
import { Inter, Roboto_Mono } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const robotoMono = Roboto_Mono({ subsets: ['latin'] })

export default function Layout({ children }) {
  return (
    <html lang="zh-CN" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
```

### 元数据

```tsx
// app/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My App',
  description: 'App description',
  keywords: ['Next.js', 'React'],
}

// 动态元数据
export async function generateMetadata({ params }) {
  const post = await getPost(params.id)
  return {
    title: post.title,
    description: post.excerpt,
  }
}
```

### 环境变量

```bash
# .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=postgresql://...
```

```tsx
// 客户端可访问（NEXT_PUBLIC_ 前缀）
const apiUrl = process.env.NEXT_PUBLIC_API_URL

// 仅服务端可访问
const dbUrl = process.env.DATABASE_URL
```

### 配置文件

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['example.com'],
  },
  env: {
    CUSTOM_KEY: 'value',
  },
  async redirects() {
    return [
      {
        source: '/old-path',
        destination: '/new-path',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
```

### 部署

#### Vercel（推荐）
```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
vercel
```

#### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

#### 静态导出
```javascript
// next.config.js
module.exports = {
  output: 'export',
}
```

```bash
npm run build
# 输出到 out/ 目录
```

### 性能优化

- **代码分割**：自动按路由分割
- **懒加载**：动态导入组件
- **图片优化**：next/image 自动优化
- **字体优化**：next/font 优化字体加载
- **预取**：Link 组件自动预取
- **缓存**：细粒度的缓存控制

### 常用库集成

#### Tailwind CSS
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

#### Prisma ORM
```bash
npm install prisma @prisma/client
npx prisma init
```

#### NextAuth.js 认证
```bash
npm install next-auth
```

### 最佳实践

1. **服务端组件优先**：默认使用服务端组件
2. **合理使用缓存**：配置适当的缓存策略
3. **优化图片**：使用 next/image
4. **代码组织**：按功能模块组织代码
5. **TypeScript**：使用类型安全
6. **错误处理**：使用 error.tsx 处理错误
7. **加载状态**：使用 loading.tsx 提升体验

### 常见问题

#### 水合错误（Hydration Error）
- 确保服务端和客户端渲染一致
- 避免在服务端使用浏览器 API

#### 性能优化
- 使用动态导入减少初始包大小
- 启用生产模式优化

### 参考资源

- [Next.js 官方文档](https://nextjs.org/docs)
- [Next.js GitHub](https://github.com/vercel/next.js)
- [Learn Next.js](https://nextjs.org/learn)
- [App Router 文档](https://nextjs.org/docs/app)