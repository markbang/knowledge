# Ajax介绍

Ajax即Asynchronous Javascript And XML（异步JavaScript和XML）在 2005年被Jesse James Garrett提出的新术语，用来描述一种使用现有技术集合的‘新’方法，包括: HTML 或 XHTML, CSS, JavaScript, DOM, XML, XSLT, 以及最重要的XMLHttpRequest。**通过在后台与服务器进行少量的数据交换，Ajax可以使网页实现异步更新，这意味着可以在不重新加载整个网页的情况下，对网页的某个部分进行更新。**

当然，Ajax原理我们不需要知道，只需要了解它的形式，能在网页中找到就行，下面是一个简单的Ajax示例：

```html
<html>
    <head>
        <title>Ajax</title>
        <script type="text/javascript">
            function loadXMLDoc()
            {
                var xmlHttp;
                if(window.XMLHttpRequest)
                { // code for IE7+
                    xmlHttp = new XMLHttpRequest();
                }
                else
                { // code for IE5/IE6
                    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
                }

                xmlHttp.onreadystatechange=function()
                {
                    if(xmlHttp.readyState == 4 && xmlHttp.status == 200)
                    {
                        document.getElementById("myDiv").innerHTML=xmlHttp.responseText;
                    }
                }

                // get
                xmlHttp.open("GET", "Ajax.aspx", true);
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

说白了，就是向服务器发送数据请求，然后把数据重新加载。例如：如果我们通过“传统方式”实现上图的商品评论分页效果，每次分页的时候就会使得头部、左侧、底部等已经显示的信息重新从服务器获得出来，这样对带宽、服务器资源、用户等待时间都有额外的损耗。如果使用ajax无刷新分页，每次就只从服务器获得“商品评论区域”信息即可，对各方面资源的使用就有相应节省。因此ajax无刷新分页效果有其存在必要性。

# 判断、查找方法

## 判断

判断网页数据是否使用Ajax，就判断触发事件过后，判断网页是否发生刷新状态。如果网页没有刷新，数据就自动生成，说明数据的加载是通过Ajax生成并渲染到网页上的；反之，数据是通过服务器后台生成并加载的。

## 查找方法

使用Ajax方法，正如上面所说的，会向服务器发送请求，那我们就根据这个特性来破招。发送请求，要么是`get`要么是`post`那我们就在获取的网页源码中`Ctrl+F`搜索`get、post`然后就可以快速定位到Ajax的那个函数（如果你有更好的方法，欢迎在评论区分享），观察它是向哪里发送请求，然后得到`url`后，我们模仿给服务器发送请求，就可以得到数据了。

# 解决办法



# 实战案例

我在爬取某网站时刚好遇到了此典型的案例，感兴趣的可以点击[链接]()前往。

