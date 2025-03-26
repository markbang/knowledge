## Scoop

## 安装

## 配置

使用aria2

```bash
scoop install aria2
scoop config aria2-warning-enabled false
```

bucket

proxy

```bash
❯ scoop config

last_update           : 2025-03-26T10:11:34.7723777+08:00
gh_token              : *****
global_path           : C:\GlobalScoopApps
root_path             : C:\Scoop
proxy                 : 127.0.0.1:10808
scoop_repo            : https://github.com/ScoopInstaller/Scoop
scoop_branch          : master
aria2-warning-enabled : False
```

备份

```bash
scoop export > app.json
scoop import > app.json
# 会备份bucket和app，不包括config
```

## 常用应用