![TypeScript](https://cdn.bangwu.top/img/TypeScript.png)

# Naive UI

Naive UI 是一个 Vue 3 组件库，提供了丰富的组件和完善的 TypeScript 支持。

## 特性

- 🎨 **主题可定制**：完整的主题系统
- 📦 **Tree Shaking**：按需加载，体积小
- 🔧 **TypeScript**：完整的类型定义
- 🌙 **暗色模式**：内置深色主题
- 🎯 **无依赖**：不依赖第三方 UI 库
- 📱 **响应式**：适配移动端

## 安装

```bash
npm install naive-ui
```

## 使用方式

### 全局完整引入

```javascript
// main.js
import { createApp } from 'vue'
import naive from 'naive-ui'
import App from './App.vue'

const app = createApp(App)
app.use(naive)
app.mount('#app')
```

### 按需引入（推荐）

```vue
<script setup>
import { NButton, NSpace, NCard } from 'naive-ui'
</script>

<template>
  <n-space>
    <n-button>Default</n-button>
    <n-button type="primary">Primary</n-button>
  </n-space>
</template>
```

### 自动导入

使用 `unplugin-auto-import` 和 `unplugin-vue-components`：

```bash
npm install -D unplugin-vue-components unplugin-auto-import
```

```javascript
// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar'
          ]
        }
      ]
    }),
    Components({
      resolvers: [NaiveUiResolver()]
    })
  ]
})
```

## 配置提供者

```vue
<script setup>
import { NConfigProvider, zhCN, dateZhCN } from 'naive-ui'
</script>

<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
    <app />
  </n-config-provider>
</template>
```

## 主题配置

### 自定义主题

```vue
<script setup>
import { NConfigProvider } from 'naive-ui'

const themeOverrides = {
  common: {
    primaryColor: '#FF6B6B',
    primaryColorHover: '#FF8787',
    primaryColorPressed: '#FA5252'
  },
  Button: {
    textColor: '#FF6B6B'
  }
}
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <app />
  </n-config-provider>
</template>
```

### 暗色模式

```vue
<script setup>
import { ref } from 'vue'
import { NConfigProvider, darkTheme } from 'naive-ui'

const theme = ref(null)

function toggleTheme() {
  theme.value = theme.value ? null : darkTheme
}
</script>

<template>
  <n-config-provider :theme="theme">
    <n-button @click="toggleTheme">切换主题</n-button>
    <app />
  </n-config-provider>
</template>
```

## 常用组件

### Button 按钮

```vue
<template>
  <n-space>
    <n-button>Default</n-button>
    <n-button type="primary">Primary</n-button>
    <n-button type="info">Info</n-button>
    <n-button type="success">Success</n-button>
    <n-button type="warning">Warning</n-button>
    <n-button type="error">Error</n-button>
    
    <!-- 大小 -->
    <n-button size="small">Small</n-button>
    <n-button size="medium">Medium</n-button>
    <n-button size="large">Large</n-button>
    
    <!-- 状态 -->
    <n-button :loading="true">Loading</n-button>
    <n-button disabled>Disabled</n-button>
    
    <!-- 图标 -->
    <n-button>
      <template #icon>
        <n-icon><search-icon /></n-icon>
      </template>
      Search
    </n-button>
  </n-space>
</template>
```

### Input 输入框

```vue
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <n-space vertical>
    <n-input v-model:value="value" placeholder="请输入" />
    <n-input v-model:value="value" type="password" />
    <n-input v-model:value="value" type="textarea" />
    <n-input-number v-model:value="value" />
  </n-space>
</template>
```

### Select 选择器

```vue
<script setup>
import { ref } from 'vue'

const value = ref(null)
const options = [
  { label: '选项1', value: 1 },
  { label: '选项2', value: 2 },
  { label: '选项3', value: 3 }
]
</script>

<template>
  <n-select v-model:value="value" :options="options" />
</template>
```

### Table 表格

```vue
<script setup>
const columns = [
  { title: 'Name', key: 'name' },
  { title: 'Age', key: 'age' },
  { title: 'Address', key: 'address' }
]

const data = [
  { name: 'John', age: 30, address: 'New York' },
  { name: 'Jane', age: 25, address: 'London' }
]
</script>

<template>
  <n-data-table :columns="columns" :data="data" />
</template>
```

### Card 卡片

```vue
<template>
  <n-card title="Card Title" hoverable>
    <template #header-extra>
      <n-button size="small">Extra</n-button>
    </template>
    
    Card content here
    
    <template #footer>
      Footer content
    </template>
  </n-card>
</template>
```

### Modal 模态框

```vue
<script setup>
import { ref } from 'vue'

const showModal = ref(false)
</script>

<template>
  <n-button @click="showModal = true">打开弹窗</n-button>
  
  <n-modal v-model:show="showModal">
    <n-card style="width: 600px" title="Modal" closable @close="showModal = false">
      Modal content
    </n-card>
  </n-modal>
</template>
```

### Form 表单

```vue
<script setup>
import { ref } from 'vue'

const formValue = ref({
  name: '',
  age: null,
  email: ''
})

const rules = {
  name: {
    required: true,
    message: '请输入姓名',
    trigger: 'blur'
  },
  age: {
    type: 'number',
    required: true,
    message: '请输入年龄',
    trigger: ['blur', 'change']
  }
}

function handleSubmit(e) {
  e.preventDefault()
  console.log(formValue.value)
}
</script>

<template>
  <n-form :model="formValue" :rules="rules" @submit="handleSubmit">
    <n-form-item label="姓名" path="name">
      <n-input v-model:value="formValue.name" />
    </n-form-item>
    
    <n-form-item label="年龄" path="age">
      <n-input-number v-model:value="formValue.age" />
    </n-form-item>
    
    <n-form-item>
      <n-button attr-type="submit" type="primary">提交</n-button>
    </n-form-item>
  </n-form>
</template>
```

## 全局提示

### Message 消息

```vue
<script setup>
import { useMessage } from 'naive-ui'

const message = useMessage()

function showMessage() {
  message.success('操作成功')
  message.error('操作失败')
  message.warning('警告信息')
  message.info('提示信息')
}
</script>
```

### Dialog 对话框

```vue
<script setup>
import { useDialog } from 'naive-ui'

const dialog = useDialog()

function showDialog() {
  dialog.warning({
    title: '警告',
    content: '你确定吗？',
    positiveText: '确定',
    negativeText: '取消',
    onPositiveClick: () => {
      message.success('确定了')
    }
  })
}
</script>
```

### Notification 通知

```vue
<script setup>
import { useNotification } from 'naive-ui'

const notification = useNotification()

function showNotification() {
  notification.success({
    title: '成功',
    content: '操作成功',
    duration: 2500
  })
}
</script>
```

### Loading Bar 加载条

```vue
<script setup>
import { useLoadingBar } from 'naive-ui'

const loadingBar = useLoadingBar()

async function fetchData() {
  loadingBar.start()
  try {
    await api.getData()
    loadingBar.finish()
  } catch (e) {
    loadingBar.error()
  }
}
</script>
```

## 布局组件

### Layout 布局

```vue
<template>
  <n-layout has-sider>
    <n-layout-sider bordered>
      Sider
    </n-layout-sider>
    
    <n-layout>
      <n-layout-header bordered>Header</n-layout-header>
      <n-layout-content>Content</n-layout-content>
      <n-layout-footer bordered>Footer</n-layout-footer>
    </n-layout>
  </n-layout>
</template>
```

### Space 间距

```vue
<template>
  <n-space vertical>
    <n-button>Button 1</n-button>
    <n-button>Button 2</n-button>
  </n-space>
  
  <n-space :size="20">
    <n-button>Button 1</n-button>
    <n-button>Button 2</n-button>
  </n-space>
</template>
```

### Grid 栅格

```vue
<template>
  <n-grid :cols="12" :x-gap="12" :y-gap="8">
    <n-grid-item :span="6">
      <div>Col-6</div>
    </n-grid-item>
    <n-grid-item :span="6">
      <div>Col-6</div>
    </n-grid-item>
  </n-grid>
</template>
```

## 图标

Naive UI 推荐使用 [xicons](https://www.xicons.org/)：

```bash
npm install @vicons/ionicons5
```

```vue
<script setup>
import { Search } from '@vicons/ionicons5'
</script>

<template>
  <n-icon :size="20">
    <Search />
  </n-icon>
</template>
```

## 最佳实践

1. **按需引入**：使用自动导入插件
2. **主题一致性**：统一配置主题
3. **全局配置**：使用 ConfigProvider
4. **类型支持**：充分利用 TypeScript
5. **响应式设计**：使用栅格系统
6. **国际化**：配置 locale

## 参考资源

- [Naive UI 官网](https://www.naiveui.com/)
- [GitHub 仓库](https://github.com/tusen-ai/naive-ui)
- [组件文档](https://www.naiveui.com/zh-CN/os-theme/components/button)
- [主题编辑器](https://www.naiveui.com/zh-CN/os-theme/docs/customize-theme)