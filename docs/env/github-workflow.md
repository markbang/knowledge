# GitHub Actions

GitHub Actions 是 GitHub 提供的 CI/CD 自动化工具，可以自动执行构建、测试、部署等工作流程。

对公开仓库是免费不限额度的，私有仓库每月有免费额度。

## 基本概念

- **Workflow（工作流）**：自动化流程，由一个或多个 job 组成
- **Job（任务）**：一组在同一 runner 上执行的 steps
- **Step（步骤）**：单个任务，可以是 action 或 shell 命令
- **Action（动作）**：可复用的最小单元
- **Runner（运行器）**：执行工作流的服务器

## 基本语法

工作流配置文件使用 YAML 格式，存放在 `.github/workflows/` 目录。

### 最简单的工作流

```yaml
name: Hello World

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Say hello
        run: echo "Hello, World!"
```

### 完整示例

```yaml
name: CI

# 触发条件
on:
  push:
    branches: [ main, dev ]
  pull_request:
    branches: [ main ]
  schedule:
    - cron: '0 0 * * 0'  # 每周日午夜
  workflow_dispatch:  # 手动触发

# 环境变量
env:
  NODE_VERSION: 18

jobs:
  test:
    name: Test
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
      
      - name: Install dependencies
        run: npm install
      
      - name: Run tests
        run: npm test
```

## 触发事件

### Push 事件

```yaml
on:
  push:
    branches:
      - main
      - 'releases/**'
    paths:
      - '**.js'
      - '!docs/**'
    tags:
      - v1.*
```

### Pull Request 事件

```yaml
on:
  pull_request:
    types: [opened, synchronize, reopened]
    branches: [ main ]
```

### 定时任务

```yaml
on:
  schedule:
    - cron: '30 5 * * 1-5'  # 工作日早上5:30
```

### 手动触发

```yaml
on:
  workflow_dispatch:
    inputs:
      environment:
        description: 'Environment to deploy'
        required: true
        default: 'staging'
        type: choice
        options:
          - staging
          - production
```

## 常用 Actions

### Checkout 代码

```yaml
- uses: actions/checkout@v4
  with:
    fetch-depth: 0  # 获取完整历史
```

### 设置 Node.js

```yaml
- uses: actions/setup-node@v4
  with:
    node-version: '18'
    cache: 'npm'
```

### 设置 Python

```yaml
- uses: actions/setup-python@v4
  with:
    python-version: '3.11'
    cache: 'pip'
```

### 缓存依赖

```yaml
- uses: actions/cache@v3
  with:
    path: ~/.npm
    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-node-
```

### 上传构建产物

```yaml
- uses: actions/upload-artifact@v3
  with:
    name: build-files
    path: dist/
```

### 下载构建产物

```yaml
- uses: actions/download-artifact@v3
  with:
    name: build-files
    path: dist/
```

## 自动发布 Release

### 创建 Release

```yaml
name: Release

on:
  push:
    tags:
      - 'v*'

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Build
        run: |
          npm install
          npm run build
      
      - name: Create Release
        uses: softprops/action-gh-release@v1
        with:
          files: dist/*
          body: |
            ## Changes
            - Feature 1
            - Feature 2
          draft: false
          prerelease: false
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

### 自动生成 Release Notes

```yaml
- name: Create Release
  uses: actions/create-release@v1
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
  with:
    tag_name: ${{ github.ref }}
    release_name: Release ${{ github.ref }}
    generate_release_notes: true
```

## Self-hosted Runner

自托管运行器允许在自己的服务器上运行工作流。

### 添加 Runner

1. 进入仓库 Settings → Actions → Runners → New self-hosted runner
2. 根据提示在服务器上安装和配置
3. 启动 runner

### 安装（Linux）

```bash
# 创建目录
mkdir actions-runner && cd actions-runner

# 下载
curl -o actions-runner-linux-x64-2.311.0.tar.gz -L \
  https://github.com/actions/runner/releases/download/v2.311.0/actions-runner-linux-x64-2.311.0.tar.gz

# 解压
tar xzf ./actions-runner-linux-x64-2.311.0.tar.gz

# 配置
./config.sh --url https://github.com/user/repo --token YOUR_TOKEN

# 运行
./run.sh

# 作为服务运行
sudo ./svc.sh install
sudo ./svc.sh start
```

### 使用 Self-hosted Runner

```yaml
jobs:
  build:
    runs-on: self-hosted
    steps:
      - uses: actions/checkout@v4
      - run: ./build.sh
```

### 标签选择

```yaml
jobs:
  build:
    runs-on: [self-hosted, linux, x64]
```

## Secrets 管理

### 添加 Secret

Settings → Secrets and variables → Actions → New repository secret

### 使用 Secret

```yaml
steps:
  - name: Deploy
    env:
      API_KEY: ${{ secrets.API_KEY }}
    run: ./deploy.sh
```

## 矩阵构建

```yaml
jobs:
  test:
    runs-on: ${{ matrix.os }}
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest, macos-latest]
        node: [16, 18, 20]
    steps:
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node }}
      - run: npm test
```

## 条件执行

```yaml
steps:
  - name: Only on main
    if: github.ref == 'refs/heads/main'
    run: echo "Main branch"
  
  - name: Only on success
    if: success()
    run: echo "Previous steps succeeded"
  
  - name: Always run
    if: always()
    run: echo "Cleanup"
```

## 实用示例

### 自动部署到服务器

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Deploy to server
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.SERVER_HOST }}
          username: ${{ secrets.SERVER_USER }}
          key: ${{ secrets.SSH_PRIVATE_KEY }}
          script: |
            cd /var/www/myapp
            git pull
            npm install
            pm2 restart myapp
```

### Docker 构建和推送

```yaml
name: Docker Build

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Login to Docker Hub
        uses: docker/login-action@v3
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}
      
      - name: Build and push
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: user/app:latest
```

### 代码检查

```yaml
name: Lint

on: [push, pull_request]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - run: npm install
      - run: npm run lint
```

## 最佳实践

1. **使用缓存**：加速依赖安装
2. **矩阵构建**：多环境测试
3. **并行执行**：多个独立 job
4. **合理使用 if**：条件执行节省资源
5. **保护 secrets**：不要在日志中输出
6. **使用官方 actions**：更可靠和维护良好
7. **限制权限**：按需设置 permissions

## 参考资源

- [GitHub Actions 官方文档](https://docs.github.com/actions)
- [Actions Marketplace](https://github.com/marketplace?type=actions)
- [工作流语法](https://docs.github.com/actions/reference/workflow-syntax-for-github-actions)