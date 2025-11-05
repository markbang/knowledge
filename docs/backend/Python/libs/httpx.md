# HTTPX

HTTPX 是一个功能完整的 Python HTTP 客户端库，支持同步和异步请求，是 requests 的现代替代品。

## 特性

- **同步和异步**: 统一的 API，支持两种模式
- **HTTP/2 支持**: 性能更优
- **连接池**: 自动管理连接复用
- **超时控制**: 细粒度的超时设置
- **类型提示**: 完整的类型标注

## 安装

```bash
pip install httpx
```

## 同步请求

### 基本用法

```python
import httpx

# GET 请求
response = httpx.get('https://api.example.com/data')
print(response.status_code)
print(response.json())

# POST 请求
data = {'key': 'value'}
response = httpx.post('https://api.example.com/submit', json=data)

# 带参数的请求
params = {'page': 1, 'size': 10}
response = httpx.get('https://api.example.com/items', params=params)

# 带请求头
headers = {'Authorization': 'Bearer token'}
response = httpx.get('https://api.example.com/user', headers=headers)
```

### 使用 Client

```python
# 复用连接
with httpx.Client() as client:
    r1 = client.get('https://example.com')
    r2 = client.get('https://example.com/api')
```

## 异步请求

### 基本用法

```python
import httpx
import asyncio

async def fetch_data():
    async with httpx.AsyncClient() as client:
        response = await client.get('https://api.example.com/data')
        return response.json()

# 运行
data = asyncio.run(fetch_data())
```

### 并发请求

```python
async def fetch_multiple():
    async with httpx.AsyncClient() as client:
        tasks = [
            client.get(f'https://api.example.com/item/{i}')
            for i in range(10)
        ]
        responses = await asyncio.gather(*tasks)
        return [r.json() for r in responses]
```

## 高级功能

### 超时设置

```python
# 全局超时
timeout = httpx.Timeout(10.0, connect=5.0)
response = httpx.get('https://example.com', timeout=timeout)

# 单独设置
response = httpx.get('https://example.com', timeout=30.0)
```

### 认证

```python
# Basic Auth
auth = ('username', 'password')
response = httpx.get('https://api.example.com', auth=auth)

# Bearer Token
headers = {'Authorization': f'Bearer {token}'}
response = httpx.get('https://api.example.com', headers=headers)
```

### 文件上传

```python
files = {'file': open('report.pdf', 'rb')}
response = httpx.post('https://api.example.com/upload', files=files)

# 多文件
files = [
    ('images', ('image1.jpg', open('image1.jpg', 'rb'), 'image/jpeg')),
    ('images', ('image2.jpg', open('image2.jpg', 'rb'), 'image/jpeg'))
]
response = httpx.post('https://api.example.com/upload', files=files)
```

### 流式下载

```python
with httpx.stream('GET', 'https://example.com/large-file.zip') as r:
    with open('file.zip', 'wb') as f:
        for chunk in r.iter_bytes():
            f.write(chunk)
```

### Cookie 管理

```python
cookies = {'session_id': 'abc123'}
response = httpx.get('https://example.com', cookies=cookies)

# 持久化 cookies
with httpx.Client(cookies=cookies) as client:
    client.get('https://example.com/page1')
    client.get('https://example.com/page2')
```

### 代理设置

```python
proxies = {
    'http://': 'http://proxy.example.com:8080',
    'https://': 'http://proxy.example.com:8080'
}
response = httpx.get('https://example.com', proxies=proxies)
```

### 重试机制

```python
import httpx
from httpx import Timeout

transport = httpx.HTTPTransport(retries=3)
client = httpx.Client(transport=transport)
response = client.get('https://example.com')
```

## 响应处理

```python
response = httpx.get('https://api.example.com/data')

# 状态码
print(response.status_code)

# JSON 数据
data = response.json()

# 文本内容
text = response.text

# 二进制内容
content = response.content

# 响应头
print(response.headers['content-type'])

# 检查状态
response.raise_for_status()  # 4xx/5xx 抛出异常
```

## 与 requests 对比

| 特性 | requests | httpx |
|------|----------|-------|
| 同步请求 | ✅ | ✅ |
| 异步请求 | ❌ | ✅ |
| HTTP/2 | ❌ | ✅ |
| 类型提示 | 部分 | 完整 |
| 维护状态 | 活跃 | 活跃 |

## 最佳实践

1. **使用 Client 复用连接**: 提升性能
2. **设置合理超时**: 避免请求挂起
3. **异步场景优先**: 高并发时性能更好
4. **错误处理**: 捕获异常并重试

```python
import httpx

async def safe_fetch(url: str, max_retries: int = 3):
    for attempt in range(max_retries):
        try:
            async with httpx.AsyncClient() as client:
                response = await client.get(url, timeout=10.0)
                response.raise_for_status()
                return response.json()
        except httpx.HTTPError as e:
            if attempt == max_retries - 1:
                raise
            await asyncio.sleep(2 ** attempt)
```

## 参考资源

- 官方文档: https://www.python-httpx.org/
- GitHub: https://github.com/encode/httpx