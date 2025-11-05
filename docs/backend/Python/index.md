![Python](https://cdn.bangwu.top/img/Python.png)

# Python

Python 是一门简洁优雅的编程语言，广泛应用于 Web 开发、数据分析、人工智能等领域。

## 后端框架

### [FastAPI](fastapi.md)
现代、高性能的 Web 框架，支持异步处理和自动生成 API 文档。

```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}
```

### Flask
轻量级 Web 框架，适合快速开发小型应用。

### Django
全功能 Web 框架，内置 ORM、后台管理等。

## [爬虫开发](spider/)

- **反爬虫技术**: 应对各种反爬策略
- **常用库**: requests, httpx, BeautifulSoup, Scrapy

## [常用库](libs/)

- **数据处理**: pandas, numpy
- **可视化**: matplotlib, wordcloud
- **自动化**: pyautogui
- **深度学习**: PyTorch

## 学习资源

- 官方文档: https://docs.python.org/zh-cn/3/
- PyPI 包索引: https://pypi.org/