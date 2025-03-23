# headers 的参数

在`requests.get()`方法中，后面有关反爬的参数，其中就有 headers，使用方法也很简单，`headers=一个字典`这个字典用来储存一些参数，伪造请求头来让网站认为是真人访问，而不是机器人。

```python
headers = {
  			'Referer': '具体的Referer',
            'User-Agent': '具体的user-agent',
    		'cookie':'具体的cookie'
    }
requests.get(url,headers=headers)
```

## User-Agent

对于 User-Agent 想必大家都不陌生，这是爬虫的第一步，大部分网站都有检查 User-Agent，设置它很简单，就是打开开发者工具，在网络请求中找到复制粘贴即可。因为 User-Agent 一般都是固定的，里面包含的只是一些浏览器型号之类的，目的是确保你这个请求是真人，所以`my_fake_useragent`库也应运而生。

```python
from my_fake_useragent import UserAgent
headers = {'User-Agent': UserAgent(family='chrome').random()}
```

按照这个方式就可以随机 User-Agent，更加方便而且会解决一些 User-Agent 反爬机制。

## cookie

cookie 想必大家也很熟悉，cookie 就是你在该网站上的身份信息，将你的 cookie 展示出来，服务器就会知道这是你，然后提供相关服务。

## Referer

Referer 与防盗链有关(防盗链：溯源，当前本次请求的上一级是谁 A ->B ->C )添加 Referer 就是确定是不是根据它所要的网站跳转到请求网站的，如果不是，则拒绝访问。例如一些视频网站的视频网址，如果不是从视频网站跳转过去，大部分可能就是拒绝请求或者返回一个假响应。

这里我会拿豆瓣做一个实例解析，感兴趣的可以去看看，[链接]()。

## Content-type

Content-type 是

# 普通参数

在浏览器开发者模式中，我们不光只看到前面所提到的那几个参数，还有很多很多其它的参数，那具体的一个网站我怎么知道要添加哪些参数呢？

普通网站一般添加一个 User-Agent 就行了，需要账号信息的就再加 cookie，剩下的情况就很少见了，遇到是都试一试就行。（这里还有一个万能方法，没错，就是用**selenium**模拟，但写起来比较麻烦）所以建议还是先试试能不能行，**selenium**作为下策。

# Ajax 介绍

Ajax 即 Asynchronous Javascript And XML（异步 JavaScript 和 XML）在 2005 年被 Jesse James Garrett 提出的新术语，用来描述一种使用现有技术集合的‘新’方法，包括: HTML 或 XHTML, CSS, JavaScript, DOM, XML, XSLT, 以及最重要的 XMLHttpRequest。**通过在后台与服务器进行少量的数据交换，Ajax 可以使网页实现异步更新，这意味着可以在不重新加载整个网页的情况下，对网页的某个部分进行更新。**

当然，Ajax 原理我们不需要知道，只需要了解它的形式，能在网页中找到就行，下面是一个简单的 Ajax 示例：

```html
<html>
  <head>
    <title>Ajax</title>
    <script type="text/javascript">
      function loadXMLDoc() {
        var xmlHttp;
        if (window.XMLHttpRequest) {
          // code for IE7+
          xmlHttp = new XMLHttpRequest();
        } else {
          // code for IE5/IE6
          xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
        }

        xmlHttp.onreadystatechange = function () {
          if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            document.getElementById('myDiv').innerHTML = xmlHttp.responseText;
          }
        };

        // get
        xmlHttp.open('GET', 'Ajax.aspx', true);
        xmlHttp.send();
      }
    </script>
  </head>
  <body>
    <h3>ajax</h3>
    <button type="button" onclick="loadXMLDoc()">请求数据</button>
    <div id="myDiv"></div>
  </body>
</html>
```

说白了，就是向服务器发送数据请求，然后把数据重新加载。例如：如果我们通过“传统方式”实现上图的商品评论分页效果，每次分页的时候就会使得头部、左侧、底部等已经显示的信息重新从服务器获得出来，这样对带宽、服务器资源、用户等待时间都有额外的损耗。如果使用 ajax 无刷新分页，每次就只从服务器获得“商品评论区域”信息即可，对各方面资源的使用就有相应节省。因此 ajax 无刷新分页效果有其存在必要性。

# 判断、查找方法

## 判断

判断网页数据是否使用 Ajax，就判断触发事件过后，判断网页是否发生刷新状态。如果网页没有刷新，数据就自动生成，说明数据的加载是通过 Ajax 生成并渲染到网页上的；反之，数据是通过服务器后台生成并加载的。

## 查找方法

使用 Ajax 方法，正如上面所说的，会向服务器发送请求，那我们就根据这个特性来破招。发送请求，要么是`get`要么是`post`那我们就在获取的网页源码中`Ctrl+F`搜索`get、post`然后就可以快速定位到 Ajax 的那个函数（如果你有更好的方法，欢迎在评论区分享），观察它是向哪里发送请求，然后得到`url`后，我们模仿给服务器发送请求，就可以得到数据了。

# 解决办法

# 实战案例

我在爬取某网站时刚好遇到了此典型的案例，感兴趣的可以点击[链接]()前往。

# IP 反爬机制

# 如何切换 IP

# IP 代理获取方法

## proxy_pool(免费)

proxy_pool 是 GitHub 上的一个开源免费的 IP 代理池创建，原理是爬取各大 IP 代理网站上

## IP 代理商(付费)

## 自建 IP 代理
