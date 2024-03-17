import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import LayoutIndex from './style/Index.vue'

import './style/var.css'
const theme: Theme = {
  ...DefaultTheme,
  Layout: LayoutIndex
}

export default theme
