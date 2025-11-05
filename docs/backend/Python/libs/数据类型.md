# Python 数据类型

Python 内置了丰富的数据类型，用于处理各种数据结构和场景。

官方文档: https://docs.python.org/zh-cn/3.12/library/datatypes.html

## 基本数据类型

### 数字类型
```python
# 整数
x = 10
# 浮点数
y = 3.14
# 复数
z = 1 + 2j
```

### 字符串
```python
s = "Hello World"
s1 = 'Python'
s2 = """多行
字符串"""

# 常用方法
s.upper()      # 转大写
s.lower()      # 转小写
s.split()      # 分割
s.strip()      # 去除首尾空格
s.replace("Hello", "Hi")  # 替换
```

### 布尔类型
```python
is_valid = True
is_empty = False
```

## 容器类型

### 列表 (List)
```python
# 可变、有序
fruits = ["apple", "banana", "cherry"]
fruits.append("orange")      # 添加
fruits.remove("banana")      # 删除
fruits[0]                    # 索引访问
fruits[1:3]                  # 切片
```

### 元组 (Tuple)
```python
# 不可变、有序
point = (10, 20)
x, y = point  # 解包
```

### 集合 (Set)
```python
# 无序、不重复
s1 = {1, 2, 3}
s2 = {3, 4, 5}
s1 | s2      # 并集
s1 & s2      # 交集
s1 - s2      # 差集
```

### 字典 (Dict)
```python
# 键值对
user = {
    "name": "张三",
    "age": 25,
    "email": "zhangsan@example.com"
}
user["name"]           # 访问
user.get("age")        # 安全访问
user.keys()            # 所有键
user.values()          # 所有值
user.items()           # 所有键值对
```

## 专用数据类型

### datetime - 日期时间
```python
from datetime import datetime, date, timedelta

now = datetime.now()
today = date.today()
tomorrow = today + timedelta(days=1)

# 格式化
now.strftime("%Y-%m-%d %H:%M:%S")
# 解析
datetime.strptime("2024-01-01", "%Y-%m-%d")
```

### collections - 容器扩展

#### defaultdict
```python
from collections import defaultdict

d = defaultdict(list)
d['key'].append(1)  # 不存在时自动创建空列表
```

#### Counter
```python
from collections import Counter

words = ["apple", "banana", "apple"]
counter = Counter(words)
counter.most_common(1)  # [('apple', 2)]
```

#### deque - 双端队列
```python
from collections import deque

q = deque([1, 2, 3])
q.append(4)      # 右侧添加
q.appendleft(0)  # 左侧添加
q.pop()          # 右侧删除
q.popleft()      # 左侧删除
```

### enum - 枚举
```python
from enum import Enum

class Color(Enum):
    RED = 1
    GREEN = 2
    BLUE = 3

print(Color.RED)      # Color.RED
print(Color.RED.value)  # 1
```

### dataclasses - 数据类
```python
from dataclasses import dataclass

@dataclass
class User:
    name: str
    age: int
    email: str = ""

user = User("张三", 25)
```

### typing - 类型提示
```python
from typing import List, Dict, Optional, Union

def process_items(items: List[str]) -> Dict[str, int]:
    return {item: len(item) for item in items}

def get_user(user_id: int) -> Optional[User]:
    return user if user_id > 0 else None
```

## 类型转换

```python
# 转整数
int("10")      # 10
int(3.14)      # 3

# 转浮点数
float("3.14")  # 3.14

# 转字符串
str(100)       # "100"

# 转列表
list("abc")    # ['a', 'b', 'c']

# 转元组
tuple([1, 2])  # (1, 2)

# 转集合
set([1, 1, 2]) # {1, 2}
```

## 常用操作

### 列表推导式
```python
squares = [x**2 for x in range(10)]
evens = [x for x in range(10) if x % 2 == 0]
```

### 字典推导式
```python
square_dict = {x: x**2 for x in range(5)}
```

### 生成器表达式
```python
gen = (x**2 for x in range(10))  # 惰性求值
```