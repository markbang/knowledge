# Docker Compose

Docker Compose 是用于定义和运行多容器 Docker 应用的工具，通过 YAML 文件配置应用服务。

## 安装

Docker Desktop 已内置 Docker Compose。

### Linux 独立安装
```bash
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# 验证安装
docker-compose --version
```

## 基本命令

```bash
# 启动服务
docker-compose up -d

# 停止服务
docker-compose down

# 查看服务状态
docker-compose ps

# 查看日志
docker-compose logs -f

# 重启服务
docker-compose restart

# 构建镜像
docker-compose build

# 执行命令
docker-compose exec service_name bash
```

## docker-compose.yml 语法

### 基本结构

```yaml
version: '3.8'

services:
  web:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./html:/usr/share/nginx/html
    restart: always

  db:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: password
    volumes:
      - db_data:/var/lib/mysql

volumes:
  db_data:
```

### 常用配置项

- `image`: 使用的镜像
- `build`: 构建配置
- `ports`: 端口映射
- `volumes`: 数据卷挂载
- `environment`: 环境变量
- `depends_on`: 依赖关系
- `networks`: 网络配置
- `restart`: 重启策略
- `command`: 覆盖默认命令

## 常用服务配置

## MySQL

```yaml
version: '3.8'

services:
  mysql:
    image: mysql:8.0
    container_name: mysql
    restart: always
    ports:
      - "3306:3306"
    environment:
      MYSQL_ROOT_PASSWORD: root_password
      MYSQL_DATABASE: mydb
      MYSQL_USER: user
      MYSQL_PASSWORD: password
      TZ: Asia/Shanghai
    volumes:
      - mysql_data:/var/lib/mysql
      - ./mysql/conf:/etc/mysql/conf.d
      - ./mysql/init:/docker-entrypoint-initdb.d
    command:
      - --character-set-server=utf8mb4
      - --collation-server=utf8mb4_unicode_ci
      - --default-authentication-plugin=mysql_native_password

volumes:
  mysql_data:
```

## Redis

```yaml
version: '3.8'

services:
  redis:
    image: redis:7-alpine
    container_name: redis
    restart: always
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data
      - ./redis/redis.conf:/usr/local/etc/redis/redis.conf
    command: redis-server /usr/local/etc/redis/redis.conf --appendonly yes
    environment:
      TZ: Asia/Shanghai

volumes:
  redis_data:
```

## PostgreSQL

```yaml
version: '3.8'

services:
  postgres:
    image: postgres:16-alpine
    container_name: postgres
    restart: always
    ports:
      - "5432:5432"
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
      POSTGRES_DB: mydb
      PGDATA: /var/lib/postgresql/data/pgdata
      TZ: Asia/Shanghai
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

## MongoDB

```yaml
version: '3.8'

services:
  mongo:
    image: mongo:7
    container_name: mongodb
    restart: always
    ports:
      - "27017:27017"
    environment:
      MONGO_INITDB_ROOT_USERNAME: admin
      MONGO_INITDB_ROOT_PASSWORD: password
      TZ: Asia/Shanghai
    volumes:
      - mongo_data:/data/db

volumes:
  mongo_data:
```

## Nginx

```yaml
version: '3.8'

services:
  nginx:
    image: nginx:alpine
    container_name: nginx
    restart: always
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf
      - ./nginx/conf.d:/etc/nginx/conf.d
      - ./html:/usr/share/nginx/html
      - ./nginx/logs:/var/log/nginx
      - ./nginx/ssl:/etc/nginx/ssl
```

## Open WebUI

```yaml
version: '3.8'

services:
  open-webui:
    image: ghcr.io/open-webui/open-webui:main
    container_name: open-webui
    restart: always
    ports:
      - "3000:8080"
    environment:
      OLLAMA_BASE_URL: http://host.docker.internal:11434
      WEBUI_SECRET_KEY: your-secret-key
    volumes:
      - open-webui:/app/backend/data
    extra_hosts:
      - "host.docker.internal:host-gateway"

volumes:
  open-webui:
```

## 完整 Web 应用栈

```yaml
version: '3.8'

services:
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - web
    networks:
      - webnet

  web:
    build: .
    environment:
      DATABASE_URL: postgres://user:password@db:5432/mydb
      REDIS_URL: redis://redis:6379
    depends_on:
      - db
      - redis
    networks:
      - webnet

  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
      POSTGRES_DB: mydb
    volumes:
      - postgres_data:/var/lib/postgresql/data
    networks:
      - webnet

  redis:
    image: redis:alpine
    volumes:
      - redis_data:/data
    networks:
      - webnet

networks:
  webnet:

volumes:
  postgres_data:
  redis_data:
```

## 环境变量文件

创建 `.env` 文件：

```env
MYSQL_ROOT_PASSWORD=root_password
MYSQL_DATABASE=mydb
REDIS_PASSWORD=redis_password
```

在 docker-compose.yml 中使用：

```yaml
services:
  mysql:
    environment:
      MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD}
      MYSQL_DATABASE: ${MYSQL_DATABASE}
```

## 实用技巧

### 查看服务日志

```bash
# 查看所有服务日志
docker-compose logs -f

# 查看特定服务日志
docker-compose logs -f web

# 查看最后100行
docker-compose logs --tail=100 web
```

### 扩展服务

```bash
# 启动3个web服务实例
docker-compose up -d --scale web=3
```

### 只重建特定服务

```bash
docker-compose up -d --build web
```

### 清理资源

```bash
# 停止并删除容器、网络
docker-compose down

# 同时删除数据卷
docker-compose down -v

# 同时删除镜像
docker-compose down --rmi all
```

## 最佳实践

1. **使用 .env 文件**管理敏感信息
2. **使用命名卷**持久化数据
3. **定义网络**隔离服务
4. **设置 restart: always** 保证服务可用
5. **使用 depends_on** 声明依赖关系
6. **添加健康检查** health check
7. **限制资源使用** deploy.resources

## 参考资源

- [Docker Compose 官方文档](https://docs.docker.com/compose/)
- [Compose 文件规范](https://docs.docker.com/compose/compose-file/)
- [Awesome Compose](https://github.com/docker/awesome-compose)