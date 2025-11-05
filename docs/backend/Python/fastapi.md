# FastAPI

FastAPI 是一个现代、高性能的 Python Web 框架，基于 Python 3.6+ 的类型提示构建。在 Github 上拥有超过 70k+ stars，是目前最流行的 Python 后端框架之一。

## 核心特性

- **高性能**: 性能媲美 NodeJS 和 Go
- **快速开发**: 提高开发效率 200%-300%
- **自动文档**: 自动生成交互式 API 文档
- **类型检查**: 基于 Pydantic 的数据验证
- **异步支持**: 原生支持 async/await

## 快速开始

### 安装

```bash
pip install fastapi
pip install "uvicorn[standard]"
```

### Hello World

```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/items/{item_id}")
async def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}
```

### 运行

```bash
uvicorn main:app --reload
```

访问 http://127.0.0.1:8000/docs 查看自动生成的 API 文档。

## 路径参数与查询参数

```python
from typing import Optional

@app.get("/users/{user_id}")
async def read_user(
    user_id: int,
    skip: int = 0,
    limit: int = 10,
    q: Optional[str] = None
):
    return {"user_id": user_id, "skip": skip, "limit": limit, "q": q}
```

## 请求体

```python
from pydantic import BaseModel

class Item(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    tax: Optional[float] = None

@app.post("/items/")
async def create_item(item: Item):
    return item
```

## 响应模型

```python
class UserOut(BaseModel):
    username: str
    email: str

@app.post("/users/", response_model=UserOut)
async def create_user(user: User):
    return user  # 自动过滤敏感字段
```

## 依赖注入

```python
from fastapi import Depends

def get_db():
    db = Database()
    try:
        yield db
    finally:
        db.close()

@app.get("/users/")
async def read_users(db = Depends(get_db)):
    return db.query_users()
```

## 中间件

```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

## 数据库集成

### SQLAlchemy

```python
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URL = "sqlite:///./sql_app.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
```

## 认证与授权

```python
from fastapi.security import OAuth2PasswordBearer

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

@app.get("/users/me")
async def read_users_me(token: str = Depends(oauth2_scheme)):
    return {"token": token}
```

## 文件上传

```python
from fastapi import File, UploadFile

@app.post("/uploadfile/")
async def create_upload_file(file: UploadFile = File(...)):
    return {"filename": file.filename}
```

## 后台任务

```python
from fastapi import BackgroundTasks

def send_email(email: str):
    # 发送邮件逻辑
    pass

@app.post("/send-notification/")
async def send_notification(
    email: str,
    background_tasks: BackgroundTasks
):
    background_tasks.add_task(send_email, email)
    return {"message": "Email will be sent"}
```

## 学习资源

- 官方文档: https://fastapi.tiangolo.com/
- 中文文档: https://fastapi.tiangolo.com/zh/
- GitHub: https://github.com/tiangolo/fastapi