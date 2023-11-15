# headers的参数

在`requests.get()`方法中，后面有关反爬的参数，其中就有headers，使用方法也很简单，`headers=一个字典`这个字典用来储存一些参数，伪造请求头来让网站认为是真人访问，而不是机器人。

```python
headers = {
  			'Referer': '具体的Referer',
            'User-Agent': '具体的user-agent',
    		'cookie':'具体的cookie'
    }
requests.get(url,headers=headers)
```

## User-Agent

对于User-Agent想必大家都不陌生，这是爬虫的第一步，大部分网站都有检查User-Agent，设置它很简单，就是打开开发者工具，在网络请求中找到复制粘贴即可。因为User-Agent一般都是固定的，里面包含的只是一些浏览器型号之类的，目的是确保你这个请求是真人，所以`my_fake_useragent`库也应运而生。

```python
from my_fake_useragent import UserAgent
headers = {'User-Agent': UserAgent(family='chrome').random()}
```

按照这个方式就可以随机User-Agent，更加方便而且会解决一些User-Agent反爬机制。

## cookie

cookie想必大家也很熟悉，cookie就是你在该网站上的身份信息，将你的cookie展示出来，服务器就会知道这是你，然后提供相关服务。

## Referer

Referer与防盗链有关(防盗链：溯源，当前本次请求的上一级是谁  A ->B ->C )添加Referer就是确定是不是根据它所要的网站跳转到请求网站的，如果不是，则拒绝访问。例如一些视频网站的视频网址，如果不是从视频网站跳转过去，大部分可能就是拒绝请求或者返回一个假响应。

这里我会拿豆瓣做一个实例解析，感兴趣的可以去看看，[链接]()。

## Content-type

Content-type是

# 普通参数

在浏览器开发者模式中，我们不光只看到前面所提到的那几个参数，还有很多很多其它的参数，那具体的一个网站我怎么知道要添加哪些参数呢？

普通网站一般添加一个User-Agent就行了，需要账号信息的就再加cookie，剩下的情况就很少见了，遇到是都试一试就行。（这里还有一个万能方法，没错，就是用**selenium**模拟，但写起来比较麻烦）所以建议还是先试试能不能行，**selenium**作为下策。

