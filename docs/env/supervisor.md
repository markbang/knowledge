# Supervisor 进程管理

Supervisor 是一个 Python 编写的进程管理工具，用于监控和控制 Unix/Linux 系统上的进程。

[详细教程博客文章](https://bangwu.top/posts/supervisor)

## 简介

Supervisor 可以：
- 自动启动、停止、重启进程
- 监控进程状态，崩溃后自动重启
- 提供 Web 界面管理
- 记录进程输出日志
- 进程分组管理

## 安装

### Ubuntu/Debian
```bash
sudo apt update
sudo apt install supervisor
```

### CentOS/RHEL
```bash
sudo yum install supervisor
```

### Python pip
```bash
pip install supervisor
```

## 配置文件

主配置文件位置：
- Ubuntu: `/etc/supervisor/supervisord.conf`
- 自定义程序配置: `/etc/supervisor/conf.d/*.conf`

### 基本配置结构

```ini
[program:myapp]
command=/usr/bin/python /path/to/app.py    ; 启动命令
directory=/path/to/                        ; 工作目录
user=www-data                              ; 运行用户
autostart=true                             ; 随supervisor启动
autorestart=true                           ; 自动重启
startsecs=10                               ; 启动10秒后无异常才认为成功
startretries=3                             ; 失败重试次数
redirect_stderr=true                       ; 重定向错误输出
stdout_logfile=/var/log/myapp.log         ; 日志文件
stdout_logfile_maxbytes=50MB               ; 日志文件大小
stdout_logfile_backups=10                  ; 日志备份数量
environment=PATH="/usr/local/bin"          ; 环境变量
```

## 常用命令

### 管理 Supervisor 服务

```bash
# 启动 supervisor
sudo systemctl start supervisor

# 停止 supervisor
sudo systemctl stop supervisor

# 重启 supervisor
sudo systemctl restart supervisor

# 查看状态
sudo systemctl status supervisor

# 开机自启
sudo systemctl enable supervisor
```

### 管理进程

```bash
# 重新加载配置
sudo supervisorctl reread
sudo supervisorctl update

# 启动程序
sudo supervisorctl start myapp

# 停止程序
sudo supervisorctl stop myapp

# 重启程序
sudo supervisorctl restart myapp

# 查看所有程序状态
sudo supervisorctl status

# 查看特定程序状态
sudo supervisorctl status myapp

# 启动所有程序
sudo supervisorctl start all

# 停止所有程序
sudo supervisorctl stop all

# 重启所有程序
sudo supervisorctl restart all

# 查看日志
sudo supervisorctl tail myapp
sudo supervisorctl tail -f myapp  # 实时查看

# 清空日志
sudo supervisorctl clear myapp
```

## 配置示例

### Python Web 应用

```ini
[program:flask_app]
command=/usr/bin/python3 /home/user/app/run.py
directory=/home/user/app
user=www-data
autostart=true
autorestart=true
startsecs=5
startretries=3
redirect_stderr=true
stdout_logfile=/var/log/supervisor/flask_app.log
environment=FLASK_ENV="production",SECRET_KEY="your-secret"
```

### Node.js 应用

```ini
[program:nodejs_app]
command=/usr/bin/node /home/user/app/server.js
directory=/home/user/app
user=nodejs
autostart=true
autorestart=true
redirect_stderr=true
stdout_logfile=/var/log/supervisor/nodejs_app.log
environment=NODE_ENV="production"
```

### Celery Worker

```ini
[program:celery_worker]
command=/home/user/venv/bin/celery -A myapp worker --loglevel=info
directory=/home/user/myapp
user=celery
numprocs=1
autostart=true
autorestart=true
startsecs=10
stopwaitsecs=600
stopasgroup=true
killasgroup=true
redirect_stderr=true
stdout_logfile=/var/log/celery/worker.log
```

### 进程组

```ini
[group:myproject]
programs=web,worker,beat
priority=999

[program:web]
command=/usr/bin/gunicorn myapp:app
...

[program:worker]
command=/usr/bin/celery worker
...

[program:beat]
command=/usr/bin/celery beat
...
```

## Web 界面

启用 Web 管理界面：

```ini
[inet_http_server]
port=127.0.0.1:9001
username=admin
password=password
```

访问：http://localhost:9001

## 环境变量

```ini
[program:myapp]
command=/usr/bin/python app.py
environment=
    PATH="/usr/local/bin",
    DATABASE_URL="postgresql://localhost/db",
    SECRET_KEY="secret"
```

## 日志管理

```ini
[program:myapp]
stdout_logfile=/var/log/myapp/stdout.log
stdout_logfile_maxbytes=50MB        ; 单个文件最大50MB
stdout_logfile_backups=10           ; 保留10个备份
stderr_logfile=/var/log/myapp/stderr.log
stderr_logfile_maxbytes=50MB
stderr_logfile_backups=10
```

## 优雅关闭

```ini
[program:myapp]
stopsignal=TERM                     ; 停止信号
stopwaitsecs=10                     ; 等待10秒后强制杀死
stopasgroup=true                    ; 停止整个进程组
killasgroup=true                    ; 杀死整个进程组
```

## 多进程管理

```ini
[program:worker]
command=/usr/bin/python worker.py
process_name=%(program_name)s_%(process_num)02d
numprocs=4                          ; 启动4个进程
autostart=true
autorestart=true
```

## 故障排查

### 查看日志

```bash
# supervisor 主日志
sudo tail -f /var/log/supervisor/supervisord.log

# 程序日志
sudo tail -f /var/log/supervisor/myapp.log

# 使用 supervisorctl 查看
sudo supervisorctl tail -f myapp
```

### 常见问题

1. **进程启动失败**
   - 检查命令路径是否正确
   - 检查用户权限
   - 查看日志文件

2. **进程频繁重启**
   - 增加 `startsecs` 值
   - 检查程序本身是否有问题

3. **配置不生效**
   ```bash
   sudo supervisorctl reread
   sudo supervisorctl update
   ```

## 最佳实践

1. **使用配置文件分离**：每个程序一个配置文件
2. **设置合理的日志大小**：避免磁盘占满
3. **使用专用用户**：提高安全性
4. **进程分组**：方便批量管理
5. **设置环境变量**：配置与代码分离
6. **监控告警**：结合监控系统使用
7. **定期备份配置**：版本控制配置文件

## 替代方案

- **systemd**：Linux 系统服务管理
- **PM2**：Node.js 进程管理器
- **circus**：Python 进程管理
- **monit**：系统监控和进程管理

## 参考资源

- [Supervisor 官方文档](http://supervisord.org/)
- [配置文件详解](http://supervisord.org/configuration.html)
- [详细博客教程](https://bangwu.top/posts/supervisor)