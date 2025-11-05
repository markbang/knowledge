# Docker

Docker 是一个开源的应用容器引擎，让开发者可以打包应用及依赖到一个可移植的容器中。

## 安装

### Windows/Mac
下载 [Docker Desktop](https://www.docker.com/products/docker-desktop/)

### Linux (Ubuntu)
```bash
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```

## 基本概念

- **镜像 (Image)**：只读的模板，包含运行容器所需的文件系统
- **容器 (Container)**：镜像的运行实例
- **仓库 (Repository)**：存储镜像的地方，如 Docker Hub

## 常用命令

### 镜像管理

```bash
# 搜索镜像
docker search nginx

# 拉取镜像
docker pull nginx:latest

# 查看本地镜像
docker images

# 删除镜像
docker rmi nginx:latest

# 构建镜像
docker build -t myapp:1.0 .

# 导出镜像
docker save -o nginx.tar nginx:latest

# 导入镜像
docker load -i nginx.tar
```

### 容器管理

```bash
# 运行容器
docker run -d --name mynginx -p 80:80 nginx

# 参数说明：
# -d：后台运行
# --name：指定容器名称
# -p：端口映射 宿主机端口:容器端口
# -v：挂载卷 宿主机路径:容器路径
# -e：设置环境变量
# --restart：重启策略（no/always/on-failure/unless-stopped）

# 查看运行中的容器
docker ps

# 查看所有容器（包括停止的）
docker ps -a

# 停止容器
docker stop mynginx

# 启动容器
docker start mynginx

# 重启容器
docker restart mynginx

# 删除容器
docker rm mynginx

# 强制删除运行中的容器
docker rm -f mynginx

# 进入容器
docker exec -it mynginx bash

# 查看容器日志
docker logs -f mynginx

# 查看容器详细信息
docker inspect mynginx

# 查看容器资源占用
docker stats

# 复制文件到容器
docker cp file.txt mynginx:/path/

# 从容器复制文件
docker cp mynginx:/path/file.txt ./
```

### 数据卷管理

```bash
# 创建数据卷
docker volume create mydata

# 查看数据卷列表
docker volume ls

# 查看数据卷详情
docker volume inspect mydata

# 删除数据卷
docker volume rm mydata

# 清理未使用的数据卷
docker volume prune
```

### 网络管理

```bash
# 查看网络
docker network ls

# 创建网络
docker network create mynet

# 删除网络
docker network rm mynet

# 容器连接到网络
docker network connect mynet mynginx
```

## Dockerfile

Dockerfile 是用于构建镜像的文本文件。

### 基本结构

```dockerfile
# 基础镜像
FROM python:3.11-slim

# 设置工作目录
WORKDIR /app

# 设置环境变量
ENV PYTHONUNBUFFERED=1

# 复制文件
COPY requirements.txt .

# 执行命令
RUN pip install --no-cache-dir -r requirements.txt

# 复制应用代码
COPY . .

# 暴露端口
EXPOSE 8000

# 启动命令
CMD ["python", "app.py"]
```

### 常用指令

- FROM：指定基础镜像
- WORKDIR：设置工作目录
- COPY：复制文件到镜像
- ADD：复制文件，支持URL和自动解压
- RUN：执行命令（构建时）
- CMD：容器启动时执行的命令
- ENTRYPOINT：入口点，不会被docker run覆盖
- ENV：设置环境变量
- EXPOSE：声明端口
- VOLUME：定义数据卷
- USER：指定运行用户
- ARG：构建参数

### 多阶段构建

```dockerfile
# 构建阶段
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 运行阶段
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## .dockerignore

类似 .gitignore，用于排除不需要复制到镜像的文件。

```
node_modules
.git
.env
*.log
__pycache__
.vscode
```

## 镜像加速

### 配置镜像源（Linux）

编辑 /etc/docker/daemon.json：

```json
{
  "registry-mirrors": [
    "https://docker.mirrors.ustc.edu.cn",
    "https://hub-mirror.c.163.com"
  ]
}
```

重启 Docker：
```bash
sudo systemctl daemon-reload
sudo systemctl restart docker
```

## 实用技巧

### 清理系统

```bash
# 清理未使用的容器、网络、镜像
docker system prune -a

# 查看磁盘占用
docker system df
```

### 容器自动重启

```bash
docker run -d --restart=always nginx
```

### 限制资源

```bash
# 限制内存和CPU
docker run -d --memory="512m" --cpus="1.5" nginx
```

### 查看容器IP

```bash
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' container_name
```

## 常见应用部署

### Nginx

```bash
docker run -d \
  --name nginx \
  -p 80:80 \
  -v /path/to/html:/usr/share/nginx/html \
  nginx:alpine
```

### MySQL

```bash
docker run -d \
  --name mysql \
  -p 3306:3306 \
  -e MYSQL_ROOT_PASSWORD=password \
  -v mysql_data:/var/lib/mysql \
  mysql:8.0
```

### Redis

```bash
docker run -d \
  --name redis \
  -p 6379:6379 \
  -v redis_data:/data \
  redis:alpine \
  redis-server --appendonly yes
```

### PostgreSQL

```bash
docker run -d \
  --name postgres \
  -p 5432:5432 \
  -e POSTGRES_PASSWORD=password \
  -v postgres_data:/var/lib/postgresql/data \
  postgres:16
```

## 参考资源

- [Docker 官方文档](https://docs.docker.com/)
- [Docker Hub](https://hub.docker.com/)
- [Dockerfile 最佳实践](https://docs.docker.com/develop/dev-best-practices/)
