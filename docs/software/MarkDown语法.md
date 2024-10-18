# MarkDown 简介

作为一个会写程序的人来说，markdown 是再也熟悉不过的一个轻量标记语言，也就是后缀为.md 的文件，目前是主流的标记语言，而且其比 html 更简单，其主要用于日常写作，文档编写等，但是本文不会教程基本语法，会讲解一些高级用法。

# 主要语法

Markdown 语法主要分为如下几大部分： **标题**，**段落**，**区块引用**，**代码区块**，**强调**，**列表**，**分割线**，**链接**，**图片**，**反斜杠 `\`**，**符号'`'**。

## 标题

两种形式：

### 1、使用`=`和`-`标记一级和二级标题。

> 一级标题
> `=========`
>
> 二级标题
> `---------`

### 2、使用`#`，可表示 1-6 级标题。

> \# 一级标题
>
> \## 二级标题
>
> \### 三级标题
>
> \#### 四级标题
>
> \##### 五级标题
>
> \###### 六级标题

## 段落

段落的前后要有空行，所谓的空行是指没有文字内容。若想在段内强制换行的方式是使用**两个以上**空格加上回车（引用中换行省略回车）。

## 区块引用

在段落的每行或者只在第一行使用符号`>`,还可使用多个嵌套引用，如：

> \> 区块引用
> \>> 嵌套引用

效果：

> 区块引用
>
> > 嵌套引用

## 代码区块

代码区块的建立是在每行加上 4 个空格或者一个制表符（如同写代码一样）。如
普通段落：

print("hello world")

代码区块：

```python
print("hello world")
```

**注意**:需要和普通段落之间存在空行。

## 强调

在强调内容两侧分别加上`*`或者`_`，如：

> \*斜体\*，\_斜体\_
> \*\*粗体\*\*，\_\_粗体\_\_

效果：

> _斜体_，_斜体_ > **粗体**，**粗体**

## 列表

使用`·`、`+`、或`-`标记无序列表，如：

> -（+_） 第一项 -（+_） 第二项 - （+\*）第三项

**注意**：标记后面最少有一个*空格*或*制表符*。若不在引用区块中，必须和前方段落之间存在空行。

效果：

> - 第一项
> - 第二项
> - 第三项

有序列表的标记方式是将上述的符号换成数字,并辅以`.`，如：

> 1 . 第一项
> 2 . 第二项
> 3 . 第三项

效果：

> 1. 第一项
> 2. 第二项
> 3. 第三项

## 分割线

分割线最常使用就是三个或以上`*`，还可以使用`-`和`_`。

## 链接

链接可以由两种形式生成：**行内式**和**参考式**。
**行内式**：

> \[markbang 的主页]\(https://github.com/markbang\)。

效果：

> [markbang 的主页](https://github.com/markbang)。

**参考式**：

> \[markbang 的主页][1]
>
> \[Hui 的主页][2]

[1]: https:://github.com/markbang 'Markdown'
[2]: https:://github.com/Hui-hub507 'Markdown'

效果：

> [markbang 的主页](https://github.com/markbang) > [Hui 的主页](https://github.com/Hui-hub507)

**注意**：上述的`[1]:https:://github.com/markbang "Markdown"`不出现在区块中。

## 图片

添加图片的形式和链接相似，只需在链接的基础上前方加一个`！`。

也就是这样\!\[]\(example.com)

## 反斜杠\

相当于**反转义**作用(类似于 Python)。使符号成为普通符号。

## 符号‘`’

起到标记作用。如：

> \`ctrl c v`

效果：

> `ctrl c v`

## 表格

Markdown 制作表格使用 **|** 来分隔不同的单元格，使用 **-** 来分隔表头和其他行。

语法格式如下：

```
|  表头   | 表头  |
|  ----  | ----  |
| 单元格  | 单元格 |
| 单元格  | 单元格 |
```

效果：

| 表头   | 表头   |
| ------ | ------ |
| 单元格 | 单元格 |
| 单元格 | 单元格 |

**我们可以设置表格的对齐方式：**

- **-:** 设置内容和标题栏居右对齐。
- **:-** 设置内容和标题栏居左对齐。
- **:-:** 设置内容和标题栏居中对齐。

实例如下：

```
| 左对齐 | 右对齐 | 居中对齐 |
| :-----| ----: | :----: |
| 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 |
```

效果：

| 左对齐 | 右对齐 | 居中对齐 |
| :----- | -----: | :------: |
| 单元格 | 单元格 |  单元格  |
| 单元格 | 单元格 |  单元格  |

# 高级语法

markdown 能做的可不仅仅只是上面所提到的那些，它还支持一些扩展语法。

## HTML

目前支持的 HTML 元素有：`<kbd> <b> <i> <em> <sup> <sub> <br>`等

## 数学公式

**Markdown Preview Enhanced** 使用 [KaTeX](https://github.com/Khan/KaTeX) 或者 [MathJax](https://github.com/mathjax/MathJax) 来渲染数学表达式。

![](https://www.runoob.com/wp-content/uploads/2019/03/0e408954-fda8-11e5-9eb4-562d7c0ca431.gif)

## 画图

可以通过扩展 mermaid 来画流程图、时序图、类图、甘特图、饼图。

> 创建画布：

````markdown
`mermaid`
````

### 流程图

#### 流程图

- 基本形状

```txt
graph TB
  A
  B(圆角矩形节点)
  C[矩形节点]
  D((圆形节点))
  E{菱形节点}
  F>右向旗帜状节点]
1234567
```

<svg id="mermaid-svg-X3iAMpqWQusrgFJl" width="839.9375" xmlns="http://www.w3.org/2000/svg" height="133" viewBox="0 0 839.9375 133" class="mermaid-svg"><g><g class="output"><g class="clusters"></g><g class="edgePaths"></g><g class="edgeLabels"></g><g class="nodes"><g class="node default" id="flowchart-A-90" transform="translate(22.71875,66.5)" style="opacity: 1;"><rect rx="0" ry="0" x="-14.71875" y="-23" width="29.4375" height="46" class="label-container"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-4.71875,-13)"><foreignObject width="9.4375" height="26"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;">A</div></foreignObject></g></g></g><g class="node default" style="opacity: 1;" id="flowchart-B-91" transform="translate(145.4375,66.5)"><rect rx="5" ry="5" x="-58" y="-23" width="116" height="46" class="label-container"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-48,-13)"><foreignObject width="96" height="26"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;">圆角矩形节点</div></foreignObject></g></g></g><g class="node default" style="opacity: 1;" id="flowchart-C-92" transform="translate(295.4375,66.5)"><rect rx="0" ry="0" x="-42" y="-23" width="84" height="46" class="label-container"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-32,-13)"><foreignObject width="64" height="26"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;">矩形节点</div></foreignObject></g></g></g><g class="node default" style="opacity: 1;" id="flowchart-D-93" transform="translate(429.4375,66.5)"><circle x="-42" y="-23" r="42" class="label-container"></circle><g class="label" transform="translate(0,0)"><g transform="translate(-32,-13)"><foreignObject width="64" height="26"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;">圆形节点</div></foreignObject></g></g></g><g class="node default" style="opacity: 1;" id="flowchart-E-94" transform="translate(579.9375,66.5)"><polygon points="58.5,0 117,-58.5 58.5,-117 0,-58.5" transform="translate(-58.5,58.5)" class="label-container"></polygon><g class="label" transform="translate(0,0)"><g transform="translate(-32,-13)"><foreignObject width="64" height="26"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;">菱形节点</div></foreignObject></g></g></g><g class="node default" style="opacity: 1;" id="flowchart-F-95" transform="translate(765.9375,66.5)"><polygon points="-23,0 132,0 132,-46 -23,-46 0,-23" transform="translate(-66,23)" class="label-container"></polygon><g class="label" transform="translate(0,0)"><g transform="translate(-56,-13)"><foreignObject width="112" height="26"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;">右向旗帜状节点</div></foreignObject></g></g></g></g></g></g></svg>

- 连线

```txt
graph TB
  A1-->B1
  A2---B2
  A3--text---B3
  A4--text-->B4
  A5-.-B5
  A6-.->B6
  A7-.text.-B7
  A8-.text.->B8
  A9===B9
  A10==>B10
  A11==text===B11
  A12==text==>B12
12345678910111213
```

<svg id="mermaid-svg-bgPRN0sisdeqJLPr" width="1045.109375" xmlns="http://www.w3.org/2000/svg" height="184" viewBox="0 0 1045.109375 184" class="mermaid-svg"><g><g class="output"><g class="clusters"></g><g class="edgePaths"><g class="edgePath LS-A1 LE-B1" id="L-A1-B1" style="opacity: 1;"><path class="path" d="M26.9140625,54L26.9140625,60.333333333333336C26.9140625,66.66666666666667,26.9140625,79.33333333333333,26.9140625,92C26.9140625,104.66666666666667,26.9140625,117.33333333333333,26.9140625,123.66666666666667L26.9140625,130" marker-end="url(#arrowhead101)" style="fill:none"></path><defs><marker id="arrowhead101" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowheadPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker></defs></g><g class="edgePath LS-A2 LE-B2" style="opacity: 1;" id="L-A2-B2"><path class="path" d="M114.7421875,54L114.7421875,60.333333333333336C114.7421875,66.66666666666667,114.7421875,79.33333333333333,114.7421875,92C114.7421875,104.66666666666667,114.7421875,117.33333333333333,114.7421875,123.66666666666667L114.7421875,130" marker-end="url(#arrowhead102)" style="fill:none"></path><defs><marker id="arrowhead102" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 0 0 L 0 0 z" style="fill: #333"></path></marker></defs></g><g class="edgePath LS-A3 LE-B3" style="opacity: 1;" id="L-A3-B3"><path class="path" d="M202.5703125,54L202.5703125,60.333333333333336C202.5703125,66.66666666666667,202.5703125,79.33333333333333,202.5703125,92C202.5703125,104.66666666666667,202.5703125,117.33333333333333,202.5703125,123.66666666666667L202.5703125,130" marker-end="url(#arrowhead103)" style="fill:none"></path><defs><marker id="arrowhead103" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 0 0 L 0 0 z" style="fill: #333"></path></marker></defs></g><g class="edgePath LS-A4 LE-B4" style="opacity: 1;" id="L-A4-B4"><path class="path" d="M290.3984375,54L290.3984375,60.333333333333336C290.3984375,66.66666666666667,290.3984375,79.33333333333333,290.3984375,92C290.3984375,104.66666666666667,290.3984375,117.33333333333333,290.3984375,123.66666666666667L290.3984375,130" marker-end="url(#arrowhead104)" style="fill:none"></path><defs><marker id="arrowhead104" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowheadPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker></defs></g><g class="edgePath LS-A5 LE-B5" style="opacity: 1;" id="L-A5-B5"><path class="path" d="M378.2265625,54L378.2265625,60.333333333333336C378.2265625,66.66666666666667,378.2265625,79.33333333333333,378.2265625,92C378.2265625,104.66666666666667,378.2265625,117.33333333333333,378.2265625,123.66666666666667L378.2265625,130" marker-end="url(#arrowhead105)" style="fill:none;stroke-width:2px;stroke-dasharray:3;"></path><defs><marker id="arrowhead105" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 0 0 L 0 0 z" style="fill: #333"></path></marker></defs></g><g class="edgePath LS-A6 LE-B6" style="opacity: 1;" id="L-A6-B6"><path class="path" d="M466.0546875,54L466.0546875,60.333333333333336C466.0546875,66.66666666666667,466.0546875,79.33333333333333,466.0546875,92C466.0546875,104.66666666666667,466.0546875,117.33333333333333,466.0546875,123.66666666666667L466.0546875,130" marker-end="url(#arrowhead106)" style="fill:none;stroke-width:2px;stroke-dasharray:3;"></path><defs><marker id="arrowhead106" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowheadPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker></defs></g><g class="edgePath LS-A7 LE-B7" style="opacity: 1;" id="L-A7-B7"><path class="path" d="M553.8828125,54L553.8828125,60.333333333333336C553.8828125,66.66666666666667,553.8828125,79.33333333333333,553.8828125,92C553.8828125,104.66666666666667,553.8828125,117.33333333333333,553.8828125,123.66666666666667L553.8828125,130" marker-end="url(#arrowhead107)" style="fill:none;stroke-width:2px;stroke-dasharray:3;"></path><defs><marker id="arrowhead107" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 0 0 L 0 0 z" style="fill: #333"></path></marker></defs></g><g class="edgePath LS-A8 LE-B8" style="opacity: 1;" id="L-A8-B8"><path class="path" d="M641.7109375,54L641.7109375,60.333333333333336C641.7109375,66.66666666666667,641.7109375,79.33333333333333,641.7109375,92C641.7109375,104.66666666666667,641.7109375,117.33333333333333,641.7109375,123.66666666666667L641.7109375,130" marker-end="url(#arrowhead108)" style="fill:none;stroke-width:2px;stroke-dasharray:3;"></path><defs><marker id="arrowhead108" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowheadPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker></defs></g><g class="edgePath LS-A9 LE-B9" style="opacity: 1;" id="L-A9-B9"><path class="path" d="M729.5390625,54L729.5390625,60.333333333333336C729.5390625,66.66666666666667,729.5390625,79.33333333333333,729.5390625,92C729.5390625,104.66666666666667,729.5390625,117.33333333333333,729.5390625,123.66666666666667L729.5390625,130" marker-end="url(#arrowhead109)" style=" stroke-width: 3.5px;fill:none"></path><defs><marker id="arrowhead109" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 0 0 L 0 0 z" style="fill: #333"></path></marker></defs></g><g class="edgePath LS-A10 LE-B10" style="opacity: 1;" id="L-A10-B10"><path class="path" d="M821.5625,54L821.5625,60.333333333333336C821.5625,66.66666666666667,821.5625,79.33333333333333,821.5625,92C821.5625,104.66666666666667,821.5625,117.33333333333333,821.5625,123.66666666666667L821.5625,130" marker-end="url(#arrowhead110)" style=" stroke-width: 3.5px;fill:none"></path><defs><marker id="arrowhead110" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowheadPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker></defs></g><g class="edgePath LS-A11 LE-B11" style="opacity: 1;" id="L-A11-B11"><path class="path" d="M917.78125,54L917.78125,60.333333333333336C917.78125,66.66666666666667,917.78125,79.33333333333333,917.78125,92C917.78125,104.66666666666667,917.78125,117.33333333333333,917.78125,123.66666666666667L917.78125,130" marker-end="url(#arrowhead111)" style=" stroke-width: 3.5px;fill:none"></path><defs><marker id="arrowhead111" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 0 0 L 0 0 z" style="fill: #333"></path></marker></defs></g><g class="edgePath LS-A12 LE-B12" style="opacity: 1;" id="L-A12-B12"><path class="path" d="M1014,54L1014,60.333333333333336C1014,66.66666666666667,1014,79.33333333333333,1014,92C1014,104.66666666666667,1014,117.33333333333333,1014,123.66666666666667L1014,130" marker-end="url(#arrowhead112)" style=" stroke-width: 3.5px;fill:none"></path><defs><marker id="arrowhead112" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowheadPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker></defs></g></g><g class="edgeLabels"><g class="edgeLabel" transform="" style="opacity: 1;"><g transform="translate(0,0)" class="label"><rect rx="0" ry="0" width="0" height="0"></rect><foreignObject width="0" height="0"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;"><span id="L-L-A1-B1" class="edgeLabel L-LS-A1' L-LE-B1" style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; background-color: rgb(232, 232, 232); font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; fill: rgb(51, 51, 51); color: rgb(51, 51, 51); text-align: center;"></span></div></foreignObject></g></g><g class="edgeLabel" style="opacity: 1;" transform=""><g transform="translate(0,0)" class="label"><rect rx="0" ry="0" width="0" height="0"></rect><foreignObject width="0" height="0"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;"><span id="L-L-A2-B2" class="edgeLabel L-LS-A2' L-LE-B2" style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; background-color: rgb(232, 232, 232); font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; fill: rgb(51, 51, 51); color: rgb(51, 51, 51); text-align: center;"></span></div></foreignObject></g></g><g class="edgeLabel" style="opacity: 1;" transform="translate(202.5703125,92)"><g transform="translate(-14.71875,-13)" class="label"><rect rx="0" ry="0" width="29.4375" height="26"></rect><foreignObject width="29.4375" height="26"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;"><span id="L-L-A3-B3" class="edgeLabel L-LS-A3' L-LE-B3" style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; background-color: rgb(232, 232, 232); font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; fill: rgb(51, 51, 51); color: rgb(51, 51, 51); text-align: center;">text</span></div></foreignObject></g></g><g class="edgeLabel" style="opacity: 1;" transform="translate(290.3984375,92)"><g transform="translate(-14.71875,-13)" class="label"><rect rx="0" ry="0" width="29.4375" height="26"></rect><foreignObject width="29.4375" height="26"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;"><span id="L-L-A4-B4" class="edgeLabel L-LS-A4' L-LE-B4" style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; background-color: rgb(232, 232, 232); font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; fill: rgb(51, 51, 51); color: rgb(51, 51, 51); text-align: center;">text</span></div></foreignObject></g></g><g class="edgeLabel" style="opacity: 1;" transform=""><g transform="translate(0,0)" class="label"><rect rx="0" ry="0" width="0" height="0"></rect><foreignObject width="0" height="0"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;"><span id="L-L-A5-B5" class="edgeLabel L-LS-A5' L-LE-B5" style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; background-color: rgb(232, 232, 232); font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; fill: rgb(51, 51, 51); color: rgb(51, 51, 51); text-align: center;"></span></div></foreignObject></g></g><g class="edgeLabel" style="opacity: 1;" transform=""><g transform="translate(0,0)" class="label"><rect rx="0" ry="0" width="0" height="0"></rect><foreignObject width="0" height="0"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;"><span id="L-L-A6-B6" class="edgeLabel L-LS-A6' L-LE-B6" style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; background-color: rgb(232, 232, 232); font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; fill: rgb(51, 51, 51); color: rgb(51, 51, 51); text-align: center;"></span></div></foreignObject></g></g><g class="edgeLabel" style="opacity: 1;" transform="translate(553.8828125,92)"><g transform="translate(-14.71875,-13)" class="label"><rect rx="0" ry="0" width="29.4375" height="26"></rect><foreignObject width="29.4375" height="26"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;"><span id="L-L-A7-B7" class="edgeLabel L-LS-A7' L-LE-B7" style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; background-color: rgb(232, 232, 232); font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; fill: rgb(51, 51, 51); color: rgb(51, 51, 51); text-align: center;">text</span></div></foreignObject></g></g><g class="edgeLabel" style="opacity: 1;" transform="translate(641.7109375,92)"><g transform="translate(-14.71875,-13)" class="label"><rect rx="0" ry="0" width="29.4375" height="26"></rect><foreignObject width="29.4375" height="26"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;"><span id="L-L-A8-B8" class="edgeLabel L-LS-A8' L-LE-B8" style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; background-color: rgb(232, 232, 232); font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; fill: rgb(51, 51, 51); color: rgb(51, 51, 51); text-align: center;">text</span></div></foreignObject></g></g><g class="edgeLabel" style="opacity: 1;" transform=""><g transform="translate(0,0)" class="label"><rect rx="0" ry="0" width="0" height="0"></rect><foreignObject width="0" height="0"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;"><span id="L-L-A9-B9" class="edgeLabel L-LS-A9' L-LE-B9" style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; background-color: rgb(232, 232, 232); font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; fill: rgb(51, 51, 51); color: rgb(51, 51, 51); text-align: center;"></span></div></foreignObject></g></g><g class="edgeLabel" style="opacity: 1;" transform=""><g transform="translate(0,0)" class="label"><rect rx="0" ry="0" width="0" height="0"></rect><foreignObject width="0" height="0"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;"><span id="L-L-A10-B10" class="edgeLabel L-LS-A10' L-LE-B10" style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; background-color: rgb(232, 232, 232); font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; fill: rgb(51, 51, 51); color: rgb(51, 51, 51); text-align: center;"></span></div></foreignObject></g></g><g class="edgeLabel" style="opacity: 1;" transform="translate(917.78125,92)"><g transform="translate(-14.71875,-13)" class="label"><rect rx="0" ry="0" width="29.4375" height="26"></rect><foreignObject width="29.4375" height="26"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;"><span id="L-L-A11-B11" class="edgeLabel L-LS-A11' L-LE-B11" style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; background-color: rgb(232, 232, 232); font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; fill: rgb(51, 51, 51); color: rgb(51, 51, 51); text-align: center;">text</span></div></foreignObject></g></g><g class="edgeLabel" style="opacity: 1;" transform="translate(1014,92)"><g transform="translate(-14.71875,-13)" class="label"><rect rx="0" ry="0" width="29.4375" height="26"></rect><foreignObject width="29.4375" height="26"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;"><span id="L-L-A12-B12" class="edgeLabel L-LS-A12' L-LE-B12" style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; background-color: rgb(232, 232, 232); font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; fill: rgb(51, 51, 51); color: rgb(51, 51, 51); text-align: center;">text</span></div></foreignObject></g></g></g><g class="nodes"><g class="node default" id="flowchart-A1-120" transform="translate(26.9140625,31)" style="opacity: 1;"><rect rx="0" ry="0" x="-18.9140625" y="-23" width="37.828125" height="46" class="label-container"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-8.9140625,-13)"><foreignObject width="17.828125" height="26"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;">A1</div></foreignObject></g></g></g><g class="node default" style="opacity: 1;" id="flowchart-B1-121" transform="translate(26.9140625,153)"><rect rx="0" ry="0" x="-18.7265625" y="-23" width="37.453125" height="46" class="label-container"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-8.7265625,-13)"><foreignObject width="17.453125" height="26"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;">B1</div></foreignObject></g></g></g><g class="node default" style="opacity: 1;" id="flowchart-A2-122" transform="translate(114.7421875,31)"><rect rx="0" ry="0" x="-18.9140625" y="-23" width="37.828125" height="46" class="label-container"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-8.9140625,-13)"><foreignObject width="17.828125" height="26"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;">A2</div></foreignObject></g></g></g><g class="node default" style="opacity: 1;" id="flowchart-B2-123" transform="translate(114.7421875,153)"><rect rx="0" ry="0" x="-18.7265625" y="-23" width="37.453125" height="46" class="label-container"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-8.7265625,-13)"><foreignObject width="17.453125" height="26"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;">B2</div></foreignObject></g></g></g><g class="node default" style="opacity: 1;" id="flowchart-A3-124" transform="translate(202.5703125,31)"><rect rx="0" ry="0" x="-18.9140625" y="-23" width="37.828125" height="46" class="label-container"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-8.9140625,-13)"><foreignObject width="17.828125" height="26"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;">A3</div></foreignObject></g></g></g><g class="node default" style="opacity: 1;" id="flowchart-B3-125" transform="translate(202.5703125,153)"><rect rx="0" ry="0" x="-18.7265625" y="-23" width="37.453125" height="46" class="label-container"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-8.7265625,-13)"><foreignObject width="17.453125" height="26"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;">B3</div></foreignObject></g></g></g><g class="node default" style="opacity: 1;" id="flowchart-A4-126" transform="translate(290.3984375,31)"><rect rx="0" ry="0" x="-18.9140625" y="-23" width="37.828125" height="46" class="label-container"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-8.9140625,-13)"><foreignObject width="17.828125" height="26"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;">A4</div></foreignObject></g></g></g><g class="node default" style="opacity: 1;" id="flowchart-B4-127" transform="translate(290.3984375,153)"><rect rx="0" ry="0" x="-18.7265625" y="-23" width="37.453125" height="46" class="label-container"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-8.7265625,-13)"><foreignObject width="17.453125" height="26"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;">B4</div></foreignObject></g></g></g><g class="node default" style="opacity: 1;" id="flowchart-A5-128" transform="translate(378.2265625,31)"><rect rx="0" ry="0" x="-18.9140625" y="-23" width="37.828125" height="46" class="label-container"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-8.9140625,-13)"><foreignObject width="17.828125" height="26"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;">A5</div></foreignObject></g></g></g><g class="node default" style="opacity: 1;" id="flowchart-B5-129" transform="translate(378.2265625,153)"><rect rx="0" ry="0" x="-18.7265625" y="-23" width="37.453125" height="46" class="label-container"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-8.7265625,-13)"><foreignObject width="17.453125" height="26"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;">B5</div></foreignObject></g></g></g><g class="node default" style="opacity: 1;" id="flowchart-A6-130" transform="translate(466.0546875,31)"><rect rx="0" ry="0" x="-18.9140625" y="-23" width="37.828125" height="46" class="label-container"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-8.9140625,-13)"><foreignObject width="17.828125" height="26"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;">A6</div></foreignObject></g></g></g><g class="node default" style="opacity: 1;" id="flowchart-B6-131" transform="translate(466.0546875,153)"><rect rx="0" ry="0" x="-18.7265625" y="-23" width="37.453125" height="46" class="label-container"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-8.7265625,-13)"><foreignObject width="17.453125" height="26"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;">B6</div></foreignObject></g></g></g><g class="node default" style="opacity: 1;" id="flowchart-A7-132" transform="translate(553.8828125,31)"><rect rx="0" ry="0" x="-18.9140625" y="-23" width="37.828125" height="46" class="label-container"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-8.9140625,-13)"><foreignObject width="17.828125" height="26"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;">A7</div></foreignObject></g></g></g><g class="node default" style="opacity: 1;" id="flowchart-B7-133" transform="translate(553.8828125,153)"><rect rx="0" ry="0" x="-18.7265625" y="-23" width="37.453125" height="46" class="label-container"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-8.7265625,-13)"><foreignObject width="17.453125" height="26"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;">B7</div></foreignObject></g></g></g><g class="node default" style="opacity: 1;" id="flowchart-A8-134" transform="translate(641.7109375,31)"><rect rx="0" ry="0" x="-18.9140625" y="-23" width="37.828125" height="46" class="label-container"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-8.9140625,-13)"><foreignObject width="17.828125" height="26"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;">A8</div></foreignObject></g></g></g><g class="node default" style="opacity: 1;" id="flowchart-B8-135" transform="translate(641.7109375,153)"><rect rx="0" ry="0" x="-18.7265625" y="-23" width="37.453125" height="46" class="label-container"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-8.7265625,-13)"><foreignObject width="17.453125" height="26"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;">B8</div></foreignObject></g></g></g><g class="node default" style="opacity: 1;" id="flowchart-A9-136" transform="translate(729.5390625,31)"><rect rx="0" ry="0" x="-18.9140625" y="-23" width="37.828125" height="46" class="label-container"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-8.9140625,-13)"><foreignObject width="17.828125" height="26"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;">A9</div></foreignObject></g></g></g><g class="node default" style="opacity: 1;" id="flowchart-B9-137" transform="translate(729.5390625,153)"><rect rx="0" ry="0" x="-18.7265625" y="-23" width="37.453125" height="46" class="label-container"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-8.7265625,-13)"><foreignObject width="17.453125" height="26"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;">B9</div></foreignObject></g></g></g><g class="node default" style="opacity: 1;" id="flowchart-A10-138" transform="translate(821.5625,31)"><rect rx="0" ry="0" x="-23.109375" y="-23" width="46.21875" height="46" class="label-container"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-13.109375,-13)"><foreignObject width="26.21875" height="26"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;">A10</div></foreignObject></g></g></g><g class="node default" style="opacity: 1;" id="flowchart-B10-139" transform="translate(821.5625,153)"><rect rx="0" ry="0" x="-22.921875" y="-23" width="45.84375" height="46" class="label-container"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-12.921875,-13)"><foreignObject width="25.84375" height="26"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;">B10</div></foreignObject></g></g></g><g class="node default" style="opacity: 1;" id="flowchart-A11-140" transform="translate(917.78125,31)"><rect rx="0" ry="0" x="-23.109375" y="-23" width="46.21875" height="46" class="label-container"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-13.109375,-13)"><foreignObject width="26.21875" height="26"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;">A11</div></foreignObject></g></g></g><g class="node default" style="opacity: 1;" id="flowchart-B11-141" transform="translate(917.78125,153)"><rect rx="0" ry="0" x="-22.921875" y="-23" width="45.84375" height="46" class="label-container"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-12.921875,-13)"><foreignObject width="25.84375" height="26"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;">B11</div></foreignObject></g></g></g><g class="node default" style="opacity: 1;" id="flowchart-A12-142" transform="translate(1014,31)"><rect rx="0" ry="0" x="-23.109375" y="-23" width="46.21875" height="46" class="label-container"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-13.109375,-13)"><foreignObject width="26.21875" height="26"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;">A12</div></foreignObject></g></g></g><g class="node default" style="opacity: 1;" id="flowchart-B12-143" transform="translate(1014,153)"><rect rx="0" ry="0" x="-22.921875" y="-23" width="45.84375" height="46" class="label-container"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-12.921875,-13)"><foreignObject width="25.84375" height="26"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;">B12</div></foreignObject></g></g></g></g></g></g></svg>

- 图的方向

| 用词 | 含义     |
| ---- | -------- |
| TB   | 从上到下 |
| BT   | 从下到上 |
| RL   | 从右到左 |
| LR   | 从左到右 |

- 粗线条： **==>**
- 备注：A --> **|备注|** B
- 方形边框： **代号[名称]** （直接写名称默认是这个）
- 圆角边框： **代号(名称)**
- 菱形边框： **代号{名称}**

树形图：

<svg id="mermaid-svg-FxB7l1UNUrgnrULK" width="208.39218139648438" xmlns="http://www.w3.org/2000/svg" height="337.61248779296875" viewBox="0 0 208.39218139648438 337.61248779296875" class="mermaid-svg"><g><g class="output"><g class="clusters"></g><g class="edgePaths"><g class="edgePath LS-A LE-B" id="L-A-B" style="opacity: 1;"><path class="path" d="M94.19021668981333,54L88.45955582915758,60.333333333333336C82.72889496850185,66.66666666666667,71.26757324719038,79.33333333333333,65.53691238653464,92C59.806251525878906,104.66666666666667,59.806251525878906,117.33333333333333,59.806251525878906,123.66666666666667L59.806251525878906,130" marker-end="url(#arrowhead126)" style=" stroke-width: 3.5px;fill:none"></path><defs><marker id="arrowhead126" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowheadPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker></defs></g><g class="edgePath LS-A LE-C" style="opacity: 1;" id="L-A-C"><path class="path" d="M135.8129113619445,54L141.54357222260023,60.333333333333336C147.27423308325595,66.66666666666667,158.73555480456744,79.33333333333333,164.4662156652232,92C170.1968765258789,104.66666666666667,170.1968765258789,117.33333333333333,170.1968765258789,123.66666666666667L170.1968765258789,130" marker-end="url(#arrowhead127)" style="fill:none"></path><defs><marker id="arrowhead127" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowheadPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker></defs></g><g class="edgePath LS-B LE-D" style="opacity: 1;" id="L-B-D"><path class="path" d="M59.806251525878906,176L59.806251525878906,180.16666666666666C59.806251525878906,184.33333333333334,59.806251525878906,192.66666666666666,59.88958485921224,201.08333358764648C59.97291819254557,209.5000005086263,60.13958485921224,218.00000101725263,60.22291819254557,222.25000127156576L60.306251525878906,226.50000152587893" marker-end="url(#arrowhead128)" style="fill:none"></path><defs><marker id="arrowhead128" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowheadPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker></defs></g></g><g class="edgeLabels"><g class="edgeLabel" transform="" style="opacity: 1;"><g transform="translate(0,0)" class="label"><rect rx="0" ry="0" width="0" height="0"></rect><foreignObject width="0" height="0"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;"><span id="L-L-A-B" class="edgeLabel L-LS-A' L-LE-B" style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; background-color: rgb(232, 232, 232); font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; fill: rgb(51, 51, 51); color: rgb(51, 51, 51); text-align: center;"></span></div></foreignObject></g></g><g class="edgeLabel" style="opacity: 1;" transform="translate(170.1968765258789,92)"><g transform="translate(-20.1953125,-13)" class="label"><rect rx="0" ry="0" width="40.390625" height="26"></rect><foreignObject width="40.390625" height="26"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;"><span id="L-L-A-C" class="edgeLabel L-LS-A' L-LE-C" style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; background-color: rgb(232, 232, 232); font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; fill: rgb(51, 51, 51); color: rgb(51, 51, 51); text-align: center;">条件 1</span></div></foreignObject></g></g><g class="edgeLabel" style="opacity: 1;" transform=""><g transform="translate(0,0)" class="label"><rect rx="0" ry="0" width="0" height="0"></rect><foreignObject width="0" height="0"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;"><span id="L-L-B-D" class="edgeLabel L-LS-B' L-LE-D" style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; background-color: rgb(232, 232, 232); font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; fill: rgb(51, 51, 51); color: rgb(51, 51, 51); text-align: center;"></span></div></foreignObject></g></g></g><g class="nodes"><g class="node default" id="flowchart-A-150" transform="translate(115.0015640258789,31)" style="opacity: 1;"><rect rx="0" ry="0" x="-24.421875" y="-23" width="48.84375" height="46" class="label-container"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-14.421875,-13)"><foreignObject width="28.84375" height="26"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;">Test</div></foreignObject></g></g></g><g class="node default" style="opacity: 1;" id="flowchart-B-151" transform="translate(59.806251525878906,153)"><rect rx="5" ry="5" x="-30.1953125" y="-23" width="60.390625" height="46" class="label-container"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-20.1953125,-13)"><foreignObject width="40.390625" height="26"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;">测试 1</div></foreignObject></g></g></g><g class="node default" style="opacity: 1;" id="flowchart-C-153" transform="translate(170.1968765258789,153)"><rect rx="5" ry="5" x="-30.1953125" y="-23" width="60.390625" height="46" class="label-container"></rect><g class="label" transform="translate(0,0)"><g transform="translate(-20.1953125,-13)"><foreignObject width="40.390625" height="26"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;">测试 2</div></foreignObject></g></g></g><g class="node default" style="opacity: 1;" id="flowchart-D-155" transform="translate(59.806251525878906,277.8062515258789)"><polygon points="51.80625,0 103.6125,-51.80625 51.80625,-103.6125 0,-51.80625" transform="translate(-51.80625,51.80625)" class="label-container"></polygon><g class="label" transform="translate(0,0)"><g transform="translate(-24.5625,-13)"><foreignObject width="49.125" height="26"><div style="box-sizing: border-box; outline: 0px; user-select: auto !important; margin: 0px; padding: 0px; font-weight: normal; overflow-wrap: break-word; font-family: &quot;trebuchet ms&quot;, verdana, arial, sans-serif !important; display: inline-block; white-space: nowrap;">Hellow</div></foreignObject></g></g></g></g></g></g></svg>

以及一些其他图，这里就不再展示了，用到的时候很少。

# 总结

其实只要掌握基本语法，能够应对日常笔记需求就行，扩展语法也可以学习，毕竟很多社区评论都支持 markdown，在评论的时候甩一张流程图过去表达更清除。以及，推荐一个写 markdown 的软件，[Typora](/software/Typora/)，非常好用，点击链接有安装教程和介绍。
