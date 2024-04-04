# 介绍

Rclone是一个命令行程序，用于管理云存储上的文件。他打包了各大供应商云存储的接口提供统一的访问界面。rclone支持40多种云存储产品，包括对象存储、企业和消费者文件存储、服务以及标准传输协议。Rclone符合unix POSIX规范，支持于常见的shell工具，比如rsync、cp、 mv、mount、ls、ncdu、tree、rm 和cat等交互。例如可以补坑[CDN方案里的对象存储同步](https://blog.bangwu.top/environment/CDN%E6%97%A5%E8%AE%B0.html)

# 安装

官网下载链接：https://rclone.org/downloads/

跟着基本教程来就可以安装好了，Windows用户最好添加以下Path环境变量，使用更方便。

## 基本命令

| 命令               | 说明                       |
| ------------------ | -------------------------- |
| rclone config      | 添加、删除、管理网盘等操作 |
| rclone config file | 显示配置文件的路径         |
| rclone config show | 显示配置文件信息           |

```shell
rclone [功能选项] <配置名称:路径> <配置名称:路径> [参数] [参数]
```

## 功能

| 命令          | 说明                                                         |
| ------------- | ------------------------------------------------------------ |
| rclone copy   | 复制                                                         |
| rclone move   | 移动，如果要在移动后删除空源目录，加上 –delete-empty-src-dirs 参数 |
| rclone sync   | 同步：将源目录同步到目标目录，只更改目标目录                 |
| rclone size   | 查看网盘文件占用大小                                         |
| rclone delete | 删除路径下的文件内容                                         |
| rclone purge  | 删除路径及其所有文件内容                                     |
| rclone mkdir  | 创建目录                                                     |
| rclone rmdir  | 删除目录                                                     |
| rclone rmdirs | 删除指定环境下的空目录。如果加上 –leave-root 参数，则不会删除根目录 |
| rclone check  | 检查源和目的地址数据是否匹配                                 |
| rclone ls     | 列出指定路径下的所有的文件以及文件大小和路径                 |
| rclone lsl    | 比上面多一个显示上传时间                                     |
| rclone lsd    | 列出指定路径下的目录                                         |
| rclone lsf    | 列出指定路径下的目录和文件                                   |

## 后面参数

| 命令                               | 说明                                                         |
| ---------------------------------- | ------------------------------------------------------------ |
| -n = –dry-run                      | 测试运行，查看Rclon在实际运行中会进行哪些操作                |
| -P = –progress                     | 显示实时传输进度，500mS刷新一次，否则默认1分钟刷新一次       |
| –cache-chunk-size 5M               | 块的大小，默认5M越大上传越快，占用内存越多，太大可能会导致进程中断 |
| –onedrive-chunk-size 100M          | 提高OneDrive上传速度适用于G口宽带服务器（默认为320KB）       |
| –drive-chunk-size 64M              | 提高Google Drive上传速度适用于G口宽带服务器（默认为8M）      |
| –cache-chunk-total-size SizeSuffix | 块可以在本地磁盘上占用的总大小，默认10G                      |
| –transfers=N                       | 并行文件数，默认为4                                          |
| –config string                     | 指定配置文件路径，string为配置文件路径                       |
| –ignore-errors                     | 跳过错误                                                     |
| –size-only                         | 根据文件大小校验，不校验hash                                 |
| –drive-server-side-across-configs  | 服务端对服务端传输                                           |

## 日志

有4个级别的日志记录：`ERROR` `NOTICE` `INFO` `DEBUG`
默认情况下`Rclon`将生成`ERROR` `NOTICE`日志

| 命令             | 说明                                      |
| ---------------- | ----------------------------------------- |
| -q               | rclone将仅生成ERROR消息                   |
| -v               | rclone将生成ERROR NOTICE INFO 消息        |
| -vv              | rclone 将生成ERROR NOTICE INFO DEBUG 消息 |
| –log-level LEVEL | 标志控制日志级别                          |

## 过滤

| 命令     | 说明                                                         |
| -------- | ------------------------------------------------------------ |
| –exclude | 排除文件或目录                                               |
| –include | 包含文件或目录                                               |
| –filter  | 文件过滤规则，相当于上面两个选项的其它使用方式。包含规则以+开头，排除规则以-开头 |

## 环境变量

`rclone`中的每个选项都可以通过环境变量设置。环境变量的名称可以通过长选项名称进行转换，删除`--`前缀，更改`-`为`_`大写并添加前缀`RCLONE_`环境变量的优先级会低于命令行选项，即通过命令行追加相应的选项时会覆盖环境变量设定的值。
比如设置最小上传大小`--min-size 50`使用环境变量是`RCLONE_MIN_SIZE=50`当环境变量设置后，在命令行中使用`--min-size 100`那么此时环境变量的值就会被覆盖

## 常用环境变量

| 命令                          | 说明                                                         |
| ----------------------------- | ------------------------------------------------------------ |
| RCLONE_CONFIG                 | 自定义配置文件路径                                           |
| RCLONE_CONFIG_PASS            | 若 rclone 进行了加密设置，把此环境变量设置为密码，可自动解密配置文件 |
| RCLONE_RETRIES                | 上传失败重试次数，默认 3 次                                  |
| RCLONE_RETRIES_SLEEP          | 上传失败重试等待时间，默认禁用，单位s、m、h分别代表秒、分钟、小时 |
| CLONE_TRANSFERS               | 并行上传文件数                                               |
| RCLONE_CACHE_CHUNK_SIZE       | 块的大小，默认5M                                             |
| RCLONE_CACHE_CHUNK_TOTAL_SIZE | 块可以在本地磁盘上占用的总大小，默认10G                      |
| RCLONE_IGNORE_ERRORS=true     | 跳过错误                                                     |