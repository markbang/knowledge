[Python 上的包管理器和虚拟环境——V2EX](https://www.v2ex.com/t/1032069)

Python的环境管理工具可谓是多之又多

![python-tools](https://cdn.bangwu.top/img/202503131258281.webp)

> 图片来源[https://alpopkes.com/posts/python/packaging_tools/](https://alpopkes.com/posts/python/packaging_tools/)



## Python 版本管理

pyenv pipenv

## Python包管理

pip uv pdm

## Rye配置

vscode 识别不到解释器路径问题

```json
{
    "python.defaultInterpreterPath": ".\\.venv\\Scripts\\python.exe"
}
```

```cmd
rye config --set proxy.http=http://127.0.0.1:7890
rye config --set proxy.https=http://127.0.0.1:7890
```

设置shims全局

```cmd
rye config --set-bool behavior.global-python=true
```

设置pypi镜像 [config.toml](https://rye.astral.sh/guide/config/#config-file)

```toml
# Rye config.toml
[[sources]]
name = "default"
url = "https://pypi.org/simple/"
```

设置jupyter

```bash
rye add ipykernel
```

### 我的配置

```toml
[default]
toolchain = "cpython@3.13.2"
license = "MIT"
author = "bangwu <i@bangwu.top>"

[proxy]
https = "http://127.0.0.1:10808"
http = "http://127.0.0.1:10808"

[behavior]
global-python = true
autosync = true

[[sources]]
name = "default"
url = "https://pypi.tuna.tsinghua.edu.cn/simple/"
```

## 开一个项目

```bash
rye pin 3.x
rye init
rye sync
rye add [package]
```

