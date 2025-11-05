# 消息推送服务

消息推送服务用于将通知、告警等信息实时推送到各种终端，常用于监控告警、定时提醒、系统通知等场景。

## Server 酱

[Server酱](https://sct.ftqq.com/) 是一个免费的微信消息推送服务。

### 特点
- 📱 推送到微信
- 🆓 免费额度充足
- 🔧 简单易用
- 📊 支持 Markdown

### 使用方法

1. 访问 [Server酱官网](https://sct.ftqq.com/) 登录
2. 扫码绑定微信
3. 获取 SendKey

```python
import requests

def send_wechat(title, content):
    sendkey = "YOUR_SENDKEY"
    url = f"https://sctapi.ftqq.com/{sendkey}.send"
    
    data = {
        "title": title,
        "desp": content
    }
    
    response = requests.post(url, data=data)
    return response.json()

# 使用
send_wechat("测试标题", "这是测试内容\n支持 **Markdown**")
```

```bash
# curl 方式
curl -X POST "https://sctapi.ftqq.com/YOUR_SENDKEY.send" \
  -d "title=测试标题" \
  -d "desp=测试内容"
```

### 应用场景
- 服务器监控告警
- 定时任务通知
- 爬虫完成提醒
- CI/CD 构建通知

## Bark

[Bark](https://github.com/Finb/Bark) 是一款开源的 iOS 消息推送应用。

### 特点
- 📱 仅支持 iOS
- 🔓 开源免费
- 🔔 支持自定义铃声
- 🎨 支持图标和分组
- 🔐 端到端加密

### 安装
在 App Store 搜索下载 Bark

### 使用方法

获取推送地址后：

```python
import requests

def send_bark(title, content):
    url = "https://api.day.app/YOUR_KEY/"
    
    data = {
        "title": title,
        "body": content,
        "sound": "alarm",  # 铃声
        "icon": "https://example.com/icon.png",  # 图标
        "group": "test"  # 分组
    }
    
    response = requests.post(url, json=data)
    return response.json()

# 使用
send_bark("测试标题", "这是测试内容")
```

```bash
# GET 方式
curl "https://api.day.app/YOUR_KEY/标题/内容"

# POST 方式
curl -X POST "https://api.day.app/YOUR_KEY" \
  -H "Content-Type: application/json" \
  -d '{"title":"标题","body":"内容","sound":"alarm"}'
```

### 进阶功能

```python
# 带跳转链接
send_bark("点击跳转", "内容", url="https://example.com")

# 自动复制内容
send_bark("自动复制", "需要复制的内容", automaticallyCopy=1)

# 时效性通知
send_bark("重要通知", "内容", level="timeSensitive")
```

## [Telegram Bot](https://core.telegram.org/bots)

Telegram Bot API 是功能强大的消息推送方式。

### 创建 Bot

1. 在 Telegram 搜索 `@BotFather`
2. 发送 `/newbot` 创建机器人
3. 获取 Bot Token
4. 发送 `/getid` 给 `@userinfobot` 获取 Chat ID

### 使用方法

```python
import requests

class TelegramBot:
    def __init__(self, token, chat_id):
        self.token = token
        self.chat_id = chat_id
        self.api_url = f"https://api.telegram.org/bot{token}"
    
    def send_message(self, text, parse_mode="Markdown"):
        url = f"{self.api_url}/sendMessage"
        data = {
            "chat_id": self.chat_id,
            "text": text,
            "parse_mode": parse_mode
        }
        return requests.post(url, json=data).json()
    
    def send_photo(self, photo_url, caption=""):
        url = f"{self.api_url}/sendPhoto"
        data = {
            "chat_id": self.chat_id,
            "photo": photo_url,
            "caption": caption
        }
        return requests.post(url, json=data).json()
    
    def send_document(self, file_path):
        url = f"{self.api_url}/sendDocument"
        with open(file_path, 'rb') as f:
            files = {'document': f}
            data = {'chat_id': self.chat_id}
            return requests.post(url, data=data, files=files).json()

# 使用
bot = TelegramBot("YOUR_BOT_TOKEN", "YOUR_CHAT_ID")
bot.send_message("**粗体** _斜体_ `代码`")
```

```bash
# curl 方式
curl -X POST "https://api.telegram.org/botYOUR_BOT_TOKEN/sendMessage" \
  -d "chat_id=YOUR_CHAT_ID" \
  -d "text=Hello World"
```

### 高级功能

```python
# 发送带按钮的消息
def send_with_buttons(bot, text, buttons):
    url = f"{bot.api_url}/sendMessage"
    keyboard = {
        "inline_keyboard": [
            [{"text": btn["text"], "url": btn["url"]} for btn in row]
            for row in buttons
        ]
    }
    data = {
        "chat_id": bot.chat_id,
        "text": text,
        "reply_markup": keyboard
    }
    return requests.post(url, json=data).json()

# 使用
buttons = [
    [{"text": "访问网站", "url": "https://example.com"}],
    [{"text": "GitHub", "url": "https://github.com"}]
]
send_with_buttons(bot, "选择一个操作：", buttons)
```

## [息知](https://xz.qqoq.net)

息知是一个聚合推送平台，支持多种推送方式。

### 特点
- 🔗 聚合多种推送方式
- 📱 支持 iOS、Android、Web
- 🆓 免费使用
- 🔔 支持多种消息类型

### 支持的推送方式
- iOS/Android App
- 企业微信
- 钉钉
- 飞书
- 邮件
- Webhook

### 使用方法

1. 注册并创建应用
2. 获取推送地址

```python
import requests

def send_xizhi(title, content, url=""):
    api_url = "YOUR_XIZHI_URL"
    
    data = {
        "title": title,
        "content": content,
        "url": url
    }
    
    response = requests.post(api_url, json=data)
    return response.json()

# 使用
send_xizhi(
    "通知标题",
    "通知内容",
    "https://example.com"
)
```

## 对比选择

| 服务 | 平台 | 免费 | 特点 | 适用场景 |
|------|------|------|------|---------|
| **Server酱** | 微信 | ✅ | 简单易用 | 国内用户，微信通知 |
| **Bark** | iOS | ✅ | 开源，隐私 | iOS 用户 |
| **Telegram** | 跨平台 | ✅ | 功能强大 | 国际用户，需要翻墙 |
| **息知** | 跨平台 | ✅ | 多渠道聚合 | 企业应用 |

## 综合示例

```python
class NotificationManager:
    """统一的消息推送管理器"""
    
    def __init__(self):
        self.server_chan_key = "YOUR_SENDKEY"
        self.bark_url = "https://api.day.app/YOUR_KEY"
        self.telegram_bot = TelegramBot("TOKEN", "CHAT_ID")
    
    def send(self, title, content, channels=None):
        """发送到多个渠道"""
        if channels is None:
            channels = ['all']
        
        results = {}
        
        if 'all' in channels or 'wechat' in channels:
            results['wechat'] = self._send_wechat(title, content)
        
        if 'all' in channels or 'bark' in channels:
            results['bark'] = self._send_bark(title, content)
        
        if 'all' in channels or 'telegram' in channels:
            results['telegram'] = self._send_telegram(title, content)
        
        return results
    
    def _send_wechat(self, title, content):
        url = f"https://sctapi.ftqq.com/{self.server_chan_key}.send"
        return requests.post(url, data={"title": title, "desp": content})
    
    def _send_bark(self, title, content):
        return requests.post(self.bark_url, json={"title": title, "body": content})
    
    def _send_telegram(self, title, content):
        return self.telegram_bot.send_message(f"*{title}*\n\n{content}")

# 使用
notifier = NotificationManager()
notifier.send("系统告警", "CPU 使用率超过 90%", channels=['wechat', 'telegram'])
```

## 最佳实践

1. **选择合适的服务**：根据用户群体和使用场景
2. **异常处理**：推送可能失败，需要捕获异常
3. **频率限制**：避免频繁推送造成骚扰
4. **敏感信息**：注意不要推送敏感数据
5. **多渠道备份**：重要通知使用多个渠道
6. **分级推送**：区分普通通知和紧急告警

## 应用场景

- 📊 **监控告警**：服务器、应用性能监控
- ⏰ **定时提醒**：每日报表、定时任务
- 🔔 **事件通知**：用户注册、订单变更
- 🐛 **错误报告**：系统异常、bug 通知
- 📈 **数据报告**：日报、周报推送
- 🤖 **自动化通知**：CI/CD、爬虫完成

## 参考资源

- [Server酱文档](https://sct.ftqq.com/sendkey)
- [Bark GitHub](https://github.com/Finb/Bark)
- [Telegram Bot API](https://core.telegram.org/bots/api)
- [息知官网](https://xz.qqoq.net)