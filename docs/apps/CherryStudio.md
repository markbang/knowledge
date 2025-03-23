# CherryStudio

[https://github.com/CherryHQ/cherry-studio]

```css
/* Claude 主题 2.0 */
/* 主题变量 */
:root {
  --color-black-soft: #2a2b2a; /* 深灰黑色，接近炭黑 */
  --color-white-soft: #f8f7f2; /* 温暖的米色，略带象牙色调 */
  --font-family: 'SF Pro Rounded', 'LXGWWenKaiScreenR', -apple-system, BlinkMacSystemFont,
    system-ui, sans-serif;
  --message-text-color-dark: hsl(50, 14%, 91%); /* 暖色调浅米白色 */
}

/* 深色主题 */
body[theme-mode='dark'] {
  /* 颜色定义 */
  --color-background: #2b2b2b; /* 深炭灰色 */
  --color-background-soft: #303030; /* 稍浅的炭灰色 */
  --color-background-mute: #282c34; /* 带深蓝调的石墨灰 */
  --navbar-background: var(--color-black-soft); /* 深灰黑色 */
  --chat-background: var(--color-black-soft); /* 深灰黑色 */
  --chat-background-user: #323332; /* 中深炭灰色 */
  --chat-background-assistant: #2d2e2d; /* 深橄榄灰色 */
  font-family: var(--font-family) !important;
  color: var(--message-text-color-dark) !important;
}

/* 深色主题特定样式 */
body[theme-mode='dark'] {
  #content-container {
    background-color: var(--chat-background-assistant) !important;
    font-family: var(--font-family) !important;
  }

  #content-container #messages {
    background-color: var(--chat-background-assistant);
    color: var(--message-text-color-dark) !important;
    font-family: var(--font-family) !important;
  }

  .message-content-container {
    background: hsl(60, 2%, 21%) !important; /* 深橄榄灰色，带微弱黄绿色调 */
    font-family: var(--font-family) !important;
    box-shadow: 0 4px 16px -8px rgba(0, 0, 0, 0.04) !important;
    border: 1px solid var(--color-border) !important;
    border-radius: 18px !important;
    margin: 8px 0 !important;
    padding: 10px 10px 10px 10px !important;
    color: var(--message-text-color-dark) !important;
  }

  /* 用户消息样式 */
  .message.message-user,
  .message.message-user *,
  .message-user,
  .message-user *,
  .message-user .message-content-container,
  .message-user .message-content-container * {
    color: var(--message-text-color-dark) !important;
  }

  .message-user .message-content-container {
    background: hsl(60, 2%, 21%) !important; /* 深橄榄灰色，与AI回复一致 */
    box-shadow: 0 8px 32px -12px rgba(0, 0, 0, 0.03) !important;
  }

  .inputbar-container {
    background-color: #3d3d3a; /* 中灰色带微橄榄绿调 */
    border: 1px solid #5e5d5940; /* 中灰色带40%透明度 */
    border-radius: 8px;
    font-family: var(--font-family) !important;
    color: var(--message-text-color-dark) !important;
  }

  /* 代码样式 */
  code {
    background-color: #e5e5e20d; /* 浅灰白色，7%透明度 */
    color: #ea928a; /* 淡珊瑚红色 */
    font-family: var(--font-family) !important;
  }

  pre code {
    color: #abb2bf; /* 浅钢蓝灰色 */
    font-family: var(--font-family) !important;
  }

  /* 深色模式下的文本颜色覆盖 */
  p,
  span,
  div {
    color: var(--message-text-color-dark);
  }
}

/* 浅色主题 */
body[theme-mode='light'] {
  /* 颜色定义 */
  --color-white: #ffffff; /* 纯白色 */
  --color-background: hsl(55, 19%, 89%); /* 淡米黄灰色 */
  --color-background-soft: hsl(51, 16%, 85%); /* 浅麦秆黄色 */
  --color-background-mute: #e4e1d7; /* 灰米色，带微暖调 */
  --navbar-background: var(--color-white-soft); /* 温暖的米色 */
  --chat-background: var(--color-white-soft); /* 温暖的米色 */
  --chat-background-user: #f8f7f2; /* 温暖的米色，略带象牙色调 */
  --chat-background-assistant: hsl(51, 24%, 95%); /* 非常浅的麦秆黄色 */
  font-family: var(--font-family) !important;
}

/* 浅色主题特定样式 */
body[theme-mode='light'] {
  #content-container {
    background-color: var(--chat-background-assistant) !important;
    font-family: var(--font-family) !important;
  }

  #content-container #messages {
    background-color: var(--chat-background-assistant);
    font-family: var(--font-family) !important;
  }

  .message-content-container {
    background: hsl(40, 23%, 98%) !important; /* 极浅的米黄色，接近纯白 */
    font-family: var(--font-family) !important;
    box-shadow: 0 4px 16px -8px rgba(0, 0, 0, 0.04) !important;
    border: 1px solid var(--color-border) !important;
    border-radius: 18px !important;
    margin: 8px 0 !important;
    padding: 10px 10px 10px 10px !important;
    color: hsl(47, 15%, 25%) !important; /* 深橄榄褐色 */
  }

  .message-user .message-content-container {
    background: hsl(51, 19%, 87%) !important; /* 浅麦秆黄色 */
    box-shadow: 0 8px 32px -12px rgba(0, 0, 0, 0.03) !important;
    color: hsl(47, 15%, 25%) !important; /* 深橄榄褐色 */
  }

  .inputbar-container {
    background-color: #ffffff; /* 纯白色 */
    border: 1px solid #87867f40; /* 中灰褐色带40%透明度 */
    border-radius: 16px;
    font-family: var(--font-family) !important;
  }

  /* 代码样式 */
  code {
    background-color: #3d39290d; /* 深棕褐色，5%透明度 */
    color: #7c1b13; /* 砖红褐色 */
    font-family: var(--font-family) !important;
  }

  pre code {
    color: #000000; /* 纯黑色 */
    font-family: var(--font-family) !important;
  }
}
```
