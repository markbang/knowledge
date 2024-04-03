ShareX是一个非常强大的开源截图并分享软件，提供了非常多的自定义功能，我就是看上的它的可以自动压缩截图图片为webp格式，大大降低的图片大小。软件结构：

![](https://cdn.bangwu.top/img/202312181628293.webp)

下载地址：https://github.com/ShareX/ShareX/releases/tag/v16.0.1

建议下载portable版，自带ffmpeg，可以直接用来压缩

然后在 sharex 的动作设置中，添加一个动作：

![chrome_1712151713](https://cdn.bangwu.top/img/chrome_1712151713.webp)

- 名称: 随意
- 文件路径: ffmpeg 的安装路径，要指定到 ffmpeg 可执行文件
- 参数: `-i "$input" -q 75 "$output"` 其中 -q 75 是以75%质量压缩
- 输出文件扩展名: webp
- 扩展名筛选: png
- 勾上下面的 隐藏窗口 和 删除输入文件

然后在截图后的任务里勾选上`执行操作`就OK了

![chrome_1712151800](https://cdn.bangwu.top/img/chrome_1712151800.webp)