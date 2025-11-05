# Web 设计与应用

前端三剑客：HTML + CSS + JavaScript

## HTML（超文本标记语言）

HTML 是构建网页结构的标记语言。

### 基本结构

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>网页标题</title>
</head>
<body>
    <h1>欢迎来到我的网站</h1>
    <p>这是一个段落</p>
</body>
</html>
```

### 常用标签

#### 文本标签
```html
<h1>一级标题</h1>
<h2>二级标题</h2>
<p>段落文本</p>
<span>行内文本</span>
<strong>粗体</strong>
<em>斜体</em>
<br> <!-- 换行 -->
<hr> <!-- 水平线 -->
```

#### 链接和图片
```html
<a href="https://example.com">链接文本</a>
<a href="https://example.com" target="_blank">新窗口打开</a>
<img src="image.jpg" alt="图片描述">
```

#### 列表
```html
<!-- 无序列表 -->
<ul>
    <li>项目1</li>
    <li>项目2</li>
</ul>

<!-- 有序列表 -->
<ol>
    <li>第一项</li>
    <li>第二项</li>
</ol>
```

#### 表格
```html
<table>
    <thead>
        <tr>
            <th>姓名</th>
            <th>年龄</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>张三</td>
            <td>25</td>
        </tr>
    </tbody>
</table>
```

#### 表单
```html
<form action="/submit" method="POST">
    <input type="text" name="username" placeholder="用户名">
    <input type="password" name="password" placeholder="密码">
    <input type="email" name="email" placeholder="邮箱">
    <textarea name="message" rows="5"></textarea>
    
    <select name="city">
        <option value="beijing">北京</option>
        <option value="shanghai">上海</option>
    </select>
    
    <input type="radio" name="gender" value="male"> 男
    <input type="radio" name="gender" value="female"> 女
    
    <input type="checkbox" name="agree"> 同意条款
    
    <button type="submit">提交</button>
</form>
```

#### 语义化标签（HTML5）
```html
<header>页头</header>
<nav>导航栏</nav>
<main>主要内容</main>
<article>文章</article>
<section>章节</section>
<aside>侧边栏</aside>
<footer>页脚</footer>
```

## CSS（层叠样式表）

CSS 用于控制网页的外观和布局。

### 引入方式

```html
<!-- 外部样式表 -->
<link rel="stylesheet" href="style.css">

<!-- 内部样式 -->
<style>
    body { background-color: #f0f0f0; }
</style>

<!-- 行内样式 -->
<div style="color: red;">红色文字</div>
```

### 选择器

```css
/* 元素选择器 */
p { color: blue; }

/* 类选择器 */
.my-class { font-size: 16px; }

/* ID选择器 */
#my-id { margin: 10px; }

/* 后代选择器 */
div p { color: red; }

/* 子选择器 */
div > p { color: green; }

/* 伪类 */
a:hover { color: red; }
input:focus { border-color: blue; }

/* 伪元素 */
p::before { content: "前缀"; }
p::after { content: "后缀"; }
```

### 盒模型

```css
.box {
    width: 200px;
    height: 100px;
    padding: 10px;        /* 内边距 */
    border: 1px solid #ccc; /* 边框 */
    margin: 20px;         /* 外边距 */
}
```

### 布局

#### Flexbox
```css
.container {
    display: flex;
    justify-content: center;  /* 水平居中 */
    align-items: center;      /* 垂直居中 */
    gap: 10px;                /* 间距 */
}

.item {
    flex: 1; /* 占据剩余空间 */
}
```

#### Grid
```css
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
}
```

#### 定位
```css
.element {
    position: relative;  /* 相对定位 */
    position: absolute;  /* 绝对定位 */
    position: fixed;     /* 固定定位 */
    position: sticky;    /* 粘性定位 */
}
```

### 响应式设计

```css
/* 媒体查询 */
@media (max-width: 768px) {
    .container {
        flex-direction: column;
    }
}

/* 移动优先 */
.box {
    width: 100%;
}

@media (min-width: 768px) {
    .box {
        width: 50%;
    }
}
```

### 动画和过渡

```css
/* 过渡 */
.button {
    transition: all 0.3s ease;
}

.button:hover {
    transform: scale(1.1);
    background-color: blue;
}

/* 动画 */
@keyframes slideIn {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
}

.element {
    animation: slideIn 1s ease-out;
}
```

## JavaScript

JavaScript 为网页添加交互功能。

### 基础语法

```javascript
// 变量声明
let name = 'John';
const age = 30;
var oldWay = 'deprecated';

// 数据类型
let number = 42;
let string = "Hello";
let boolean = true;
let array = [1, 2, 3];
let object = { name: 'John', age: 30 };

// 函数
function greet(name) {
    return `Hello, ${name}!`;
}

// 箭头函数
const greet = (name) => `Hello, ${name}!`;

// 条件语句
if (age >= 18) {
    console.log('成年');
} else {
    console.log('未成年');
}

// 循环
for (let i = 0; i < 5; i++) {
    console.log(i);
}

array.forEach(item => {
    console.log(item);
});
```

### DOM 操作

```javascript
// 获取元素
const element = document.getElementById('myId');
const elements = document.querySelectorAll('.myClass');
const element = document.querySelector('.myClass');

// 修改内容
element.textContent = '新文本';
element.innerHTML = '<strong>粗体文本</strong>';

// 修改样式
element.style.color = 'red';
element.classList.add('active');
element.classList.remove('inactive');
element.classList.toggle('highlight');

// 修改属性
element.setAttribute('data-id', '123');
element.getAttribute('data-id');

// 创建和删除元素
const newDiv = document.createElement('div');
newDiv.textContent = '新元素';
document.body.appendChild(newDiv);
element.remove();
```

### 事件处理

```javascript
// 点击事件
button.addEventListener('click', function(e) {
    console.log('按钮被点击了');
});

// 表单提交
form.addEventListener('submit', function(e) {
    e.preventDefault(); // 阻止默认行为
    const formData = new FormData(form);
    console.log(formData.get('username'));
});

// 键盘事件
input.addEventListener('keyup', function(e) {
    console.log('按键:', e.key);
});

// 鼠标事件
element.addEventListener('mouseenter', function() {
    this.style.backgroundColor = 'yellow';
});
```

### 异步操作

```javascript
// Promise
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

// Async/Await
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

// 定时器
setTimeout(() => {
    console.log('3秒后执行');
}, 3000);

setInterval(() => {
    console.log('每秒执行');
}, 1000);
```

### 本地存储

```javascript
// localStorage - 永久存储
localStorage.setItem('key', 'value');
const value = localStorage.getItem('key');
localStorage.removeItem('key');

// sessionStorage - 会话存储
sessionStorage.setItem('key', 'value');

// 存储对象
const user = { name: 'John', age: 30 };
localStorage.setItem('user', JSON.stringify(user));
const storedUser = JSON.parse(localStorage.getItem('user'));
```

## 实战示例

### 待办事项列表

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>待办事项</title>
    <style>
        .container {
            max-width: 500px;
            margin: 50px auto;
        }
        .todo-item {
            display: flex;
            justify-content: space-between;
            padding: 10px;
            border-bottom: 1px solid #ddd;
        }
        .completed {
            text-decoration: line-through;
            color: #999;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>待办事项</h1>
        <input type="text" id="todoInput" placeholder="输入待办事项">
        <button onclick="addTodo()">添加</button>
        <div id="todoList"></div>
    </div>

    <script>
        let todos = JSON.parse(localStorage.getItem('todos')) || [];

        function renderTodos() {
            const list = document.getElementById('todoList');
            list.innerHTML = '';
            
            todos.forEach((todo, index) => {
                const div = document.createElement('div');
                div.className = 'todo-item';
                div.innerHTML = `
                    <span class="${todo.completed ? 'completed' : ''}"
                          onclick="toggleTodo(${index})">
                        ${todo.text}
                    </span>
                    <button onclick="deleteTodo(${index})">删除</button>
                `;
                list.appendChild(div);
            });
        }

        function addTodo() {
            const input = document.getElementById('todoInput');
            const text = input.value.trim();
            
            if (text) {
                todos.push({ text, completed: false });
                input.value = '';
                saveTodos();
                renderTodos();
            }
        }

        function toggleTodo(index) {
            todos[index].completed = !todos[index].completed;
            saveTodos();
            renderTodos();
        }

        function deleteTodo(index) {
            todos.splice(index, 1);
            saveTodos();
            renderTodos();
        }

        function saveTodos() {
            localStorage.setItem('todos', JSON.stringify(todos));
        }

        renderTodos();
    </script>
</body>
</html>
```

## 学习资源

- [MDN Web Docs](https://developer.mozilla.org/zh-CN/) - 最权威的 Web 技术文档
- [W3Schools](https://www.w3schools.com/) - 在线教程和实例
- [FreeCodeCamp](https://www.freecodecamp.org/) - 免费编程课程
- [CSS-Tricks](https://css-tricks.com/) - CSS 技巧和教程
- [JavaScript.info](https://javascript.info/) - 现代 JavaScript 教程

## 开发工具

- **浏览器**：Chrome DevTools, Firefox DevTools
- **编辑器**：VS Code, Sublime Text
- **在线工具**：CodePen, JSFiddle, CodeSandbox

## 最佳实践

1. **语义化 HTML**：使用合适的标签
2. **响应式设计**：适配不同设备
3. **性能优化**：压缩资源，懒加载
4. **可访问性**：支持屏幕阅读器
5. **代码规范**：保持一致的编码风格
6. **版本控制**：使用 Git 管理代码