# SQLite

SQLite 是一个轻量级的嵌入式关系型数据库，无需独立服务器进程，直接读写磁盘文件。

## 特点

- **零配置**: 无需安装和管理
- **单文件**: 整个数据库存储在一个文件中
- **跨平台**: 支持所有主流操作系统
- **自包含**: 不依赖外部库
- **事务支持**: 完整的 ACID 特性

## Python 中使用

### 基本操作

```python
import sqlite3

# 连接数据库（不存在则创建）
conn = sqlite3.connect('example.db')
cursor = conn.cursor()

# 创建表
cursor.execute('''
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE
    )
''')

# 插入数据
cursor.execute("INSERT INTO users (name, email) VALUES (?, ?)", 
               ("张三", "zhangsan@example.com"))

# 查询数据
cursor.execute("SELECT * FROM users")
rows = cursor.fetchall()

# 提交事务
conn.commit()
conn.close()
```

### 上下文管理器

```python
with sqlite3.connect('example.db') as conn:
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users")
    results = cursor.fetchall()
```

## 常用命令

```sql
-- 查看所有表
.tables

-- 查看表结构
.schema users

-- 导出数据
.output data.sql
.dump

-- 导入数据
.read data.sql
```

## 性能优化

1. **使用事务**: 批量操作时提升性能
2. **创建索引**: 加速查询
3. **使用 WAL 模式**: 提高并发性能

```python
# 启用 WAL 模式
conn.execute('PRAGMA journal_mode=WAL')
```

## 适用场景

- 移动应用本地存储
- 桌面应用数据管理
- 小型 Web 应用
- 嵌入式设备
- 测试和原型开发

## 限制

- 不适合高并发写入
- 数据库大小建议不超过 1TB
- 不支持用户权限管理