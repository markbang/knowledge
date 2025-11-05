![Vue](https://cdn.bangwu.top/img/Vue.png)

# Vue.js

Vue.js 是一个渐进式 JavaScript 框架，用于构建用户界面。易学易用，性能出色，适用范围从简单到复杂的应用。

## 核心特性

- **响应式数据绑定**：数据变化自动更新视图
- **组件化开发**：可复用的组件系统
- **虚拟 DOM**：高效的 DOM 更新
- **渐进式框架**：可以逐步集成到项目中
- **生态丰富**：Vue Router、Pinia、Vuex 等

## Vue 3 vs Vue 2

Vue 3 是当前推荐版本，相比 Vue 2 有以下改进：

- Composition API
- 更好的 TypeScript 支持
- 性能提升
- Tree-shaking 支持
- 更小的包体积

## 快速开始

### 创建项目

```bash
# 使用 create-vue（推荐）
npm create vue@latest

# 手动创建
npm init vue@latest my-app
cd my-app
npm install
npm run dev
```

### CDN 引入

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

<div id="app">{{ message }}</div>

<script>
  const { createApp } = Vue
  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  }).mount('#app')
</script>
```

## 模板语法

### 插值

```vue
<template>
  <!-- 文本插值 -->
  <p>{{ message }}</p>
  
  <!-- HTML -->
  <div v-html="rawHtml"></div>
  
  <!-- 属性绑定 -->
  <img :src="imageUrl" :alt="imageAlt">
  <img v-bind:src="imageUrl">
  
  <!-- 表达式 -->
  <p>{{ count + 1 }}</p>
  <p>{{ ok ? 'YES' : 'NO' }}</p>
</template>
```

### 指令

```vue
<template>
  <!-- v-if 条件渲染 -->
  <p v-if="seen">现在你看到我了</p>
  <p v-else-if="type === 'B'">B</p>
  <p v-else>else</p>
  
  <!-- v-show 切换显示 -->
  <p v-show="isVisible">显示/隐藏</p>
  
  <!-- v-for 列表渲染 -->
  <li v-for="item in items" :key="item.id">
    {{ item.text }}
  </li>
  
  <!-- v-on 事件监听 -->
  <button v-on:click="handleClick">点击</button>
  <button @click="handleClick">简写</button>
  
  <!-- v-model 双向绑定 -->
  <input v-model="message">
</template>
```

## 组件基础

### 单文件组件（SFC）

```vue
<script setup>
import { ref, computed } from 'vue'

// 响应式状态
const count = ref(0)

// 计算属性
const doubleCount = computed(() => count.value * 2)

// 方法
function increment() {
  count.value++
}
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Double: {{ doubleCount }}</p>
    <button @click="increment">+1</button>
  </div>
</template>

<style scoped>
button {
  padding: 0.5rem 1rem;
}
</style>
```

### Props 和 Emit

```vue
<!-- Child.vue -->
<script setup>
const props = defineProps({
  title: String,
  count: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['update', 'delete'])

function handleUpdate() {
  emit('update', props.count + 1)
}
</script>

<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ count }}</p>
    <button @click="handleUpdate">Update</button>
  </div>
</template>
```

```vue
<!-- Parent.vue -->
<script setup>
import Child from './Child.vue'
import { ref } from 'vue'

const count = ref(0)

function handleUpdate(newCount) {
  count.value = newCount
}
</script>

<template>
  <Child 
    title="My Component"
    :count="count"
    @update="handleUpdate"
  />
</template>
```

## Composition API

### 响应式

```vue
<script setup>
import { ref, reactive, computed, watch } from 'vue'

// ref - 基本类型响应式
const count = ref(0)
console.log(count.value) // 访问值

// reactive - 对象响应式
const state = reactive({
  name: 'John',
  age: 30
})

// computed - 计算属性
const fullName = computed(() => {
  return `${state.name} Doe`
})

// watch - 监听变化
watch(count, (newVal, oldVal) => {
  console.log(`count changed: ${oldVal} -> ${newVal}`)
})

// watchEffect - 自动追踪依赖
watchEffect(() => {
  console.log(`Count is: ${count.value}`)
})
</script>
```

### 生命周期

```vue
<script setup>
import { onMounted, onUpdated, onUnmounted } from 'vue'

onMounted(() => {
  console.log('组件已挂载')
})

onUpdated(() => {
  console.log('组件已更新')
})

onUnmounted(() => {
  console.log('组件已卸载')
})
</script>
```

### 组合式函数（Composables）

```javascript
// composables/useCounter.js
import { ref } from 'vue'

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  
  function increment() {
    count.value++
  }
  
  function decrement() {
    count.value--
  }
  
  return {
    count,
    increment,
    decrement
  }
}
```

```vue
<script setup>
import { useCounter } from './composables/useCounter'

const { count, increment, decrement } = useCounter(10)
</script>
```

## Vue Router

### 安装和配置

```bash
npm install vue-router@4
```

```javascript
// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/user/:id', component: User }
  ]
})

export default router
```

```javascript
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
```

### 路由使用

```vue
<template>
  <!-- 导航 -->
  <router-link to="/">Home</router-link>
  <router-link to="/about">About</router-link>
  
  <!-- 路由出口 -->
  <router-view />
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

// 编程式导航
function goToAbout() {
  router.push('/about')
}

// 获取路由参数
const userId = route.params.id
</script>
```

## 状态管理 - Pinia

### 安装

```bash
npm install pinia
```

```javascript
// main.js
import { createPinia } from 'pinia'

app.use(createPinia())
```

### 定义 Store

```javascript
// stores/counter.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  // state
  const count = ref(0)
  
  // getters
  const doubleCount = computed(() => count.value * 2)
  
  // actions
  function increment() {
    count.value++
  }
  
  return {
    count,
    doubleCount,
    increment
  }
})
```

### 使用 Store

```vue
<script setup>
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
</script>

<template>
  <div>
    <p>{{ counter.count }}</p>
    <p>{{ counter.doubleCount }}</p>
    <button @click="counter.increment">+1</button>
  </div>
</template>
```

## 常用技巧

### 插槽（Slots）

```vue
<!-- Card.vue -->
<template>
  <div class="card">
    <header>
      <slot name="header">默认标题</slot>
    </header>
    <main>
      <slot>默认内容</slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
```

```vue
<Card>
  <template #header>
    <h1>自定义标题</h1>
  </template>
  
  <p>主要内容</p>
  
  <template #footer>
    <button>确定</button>
  </template>
</Card>
```

### 异步组件

```vue
<script setup>
import { defineAsyncComponent } from 'vue'

const AsyncComp = defineAsyncComponent(() =>
  import('./components/AsyncComponent.vue')
)
</script>
```

### Teleport

```vue
<template>
  <Teleport to="body">
    <div class="modal">
      Modal content
    </div>
  </Teleport>
</template>
```

## 最佳实践

1. **使用 Composition API**：Vue 3 推荐方式
2. **组件化思维**：拆分小而可复用的组件
3. **Props 验证**：定义清晰的 props 类型
4. **单一职责**：每个组件只做一件事
5. **合理使用 computed**：避免在模板中写复杂逻辑
6. **提取 composables**：复用逻辑代码
7. **使用 TypeScript**：提升代码质量

## 参考资源

- [Vue.js 官方文档](https://cn.vuejs.org/)
- [Vue Router 文档](https://router.vuejs.org/)
- [Pinia 文档](https://pinia.vuejs.org/)
- [Vite 文档](https://vitejs.dev/)
- [Awesome Vue](https://github.com/vuejs/awesome-vue)