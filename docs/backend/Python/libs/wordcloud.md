# WordCloud 词云生成

WordCloud 是一个用于生成词云图的 Python 库，可以将文本数据可视化为美观的词云图。

## 安装

```bash
pip install wordcloud
```

中文字体支持需要额外配置字体路径。

## 基本使用

### 简单词云

```python
from wordcloud import WordCloud
import matplotlib.pyplot as plt

# 生成词云
text = "Python 数据分析 机器学习 深度学习 人工智能"
wordcloud = WordCloud(font_path='simhei.ttf').generate(text)

# 显示图像
plt.imshow(wordcloud, interpolation='bilinear')
plt.axis('off')
plt.show()

# 保存图像
wordcloud.to_file('wordcloud.png')
```

### 从文件读取

```python
with open('text.txt', 'r', encoding='utf-8') as f:
    text = f.read()

wordcloud = WordCloud(
    font_path='simhei.ttf',
    width=800,
    height=400
).generate(text)
```

## 自定义样式

### 基本参数

```python
wordcloud = WordCloud(
    font_path='simhei.ttf',        # 字体路径
    width=800,                      # 宽度
    height=400,                     # 高度
    background_color='white',       # 背景色
    max_words=200,                  # 最大词数
    max_font_size=100,              # 最大字号
    min_font_size=10,               # 最小字号
    colormap='viridis',             # 配色方案
    relative_scaling=0.5,           # 词频重要性
    random_state=42                 # 随机种子
)
```

### 配色方案

```python
# 使用 matplotlib 配色
from matplotlib import cm

wordcloud = WordCloud(
    font_path='simhei.ttf',
    colormap='rainbow'  # 'viridis', 'plasma', 'cool', 'hot'
)
```

## 高级功能

### 使用遮罩图片

```python
from PIL import Image
import numpy as np

# 读取遮罩图片
mask = np.array(Image.open('mask.png'))

wordcloud = WordCloud(
    font_path='simhei.ttf',
    mask=mask,                    # 遮罩图片
    contour_width=3,              # 轮廓宽度
    contour_color='steelblue'     # 轮廓颜色
).generate(text)
```

### 自定义词频

```python
# 使用字典设置词频
word_freq = {
    'Python': 100,
    '数据分析': 80,
    '机器学习': 60,
    '深度学习': 40
}

wordcloud = WordCloud(font_path='simhei.ttf').generate_from_frequencies(word_freq)
```

### 停用词过滤

```python
# 设置停用词
stopwords = set(['的', '了', '在', '是', '我', '有'])

wordcloud = WordCloud(
    font_path='simhei.ttf',
    stopwords=stopwords
).generate(text)

# 从文件加载停用词
with open('stopwords.txt', 'r', encoding='utf-8') as f:
    stopwords = set(f.read().splitlines())
```

## 中文文本处理

### 使用 jieba 分词

```python
import jieba
from wordcloud import WordCloud

# 读取文本
with open('text.txt', 'r', encoding='utf-8') as f:
    text = f.read()

# 分词
words = jieba.cut(text)
text_seg = ' '.join(words)

# 生成词云
wordcloud = WordCloud(
    font_path='simhei.ttf',
    background_color='white'
).generate(text_seg)
```

### 完整示例

```python
import jieba
import jieba.analyse
from wordcloud import WordCloud
import matplotlib.pyplot as plt

# 读取文本
with open('article.txt', 'r', encoding='utf-8') as f:
    text = f.read()

# 加载停用词
with open('stopwords.txt', 'r', encoding='utf-8') as f:
    stopwords = set(f.read().splitlines())

# 分词
words = jieba.cut(text)
filtered_words = [w for w in words if w not in stopwords and len(w) > 1]
text_seg = ' '.join(filtered_words)

# 生成词云
wordcloud = WordCloud(
    font_path='simhei.ttf',
    width=1600,
    height=800,
    background_color='white',
    max_words=100,
    colormap='viridis'
).generate(text_seg)

# 显示
plt.figure(figsize=(12, 6))
plt.imshow(wordcloud, interpolation='bilinear')
plt.axis('off')
plt.savefig('wordcloud.png', dpi=300, bbox_inches='tight')
plt.show()
```

## 实用技巧

### 提取关键词

```python
import jieba.analyse

# TF-IDF 提取关键词
keywords = jieba.analyse.extract_tags(text, topK=50, withWeight=True)
word_freq = {word: weight for word, weight in keywords}

wordcloud = WordCloud(
    font_path='simhei.ttf'
).generate_from_frequencies(word_freq)
```

### 多种形状

```python
from PIL import Image
import numpy as np

# 圆形
def create_circle_mask(size=400):
    x, y = np.ogrid[:size, :size]
    mask = (x - size/2) ** 2 + (y - size/2) ** 2 > (size/2) ** 2
    mask = 255 * mask.astype(int)
    return mask

mask = create_circle_mask()
wordcloud = WordCloud(font_path='simhei.ttf', mask=mask).generate(text)
```

## 常见问题

### 中文显示方块
- 原因: 未指定中文字体
- 解决: 设置 `font_path='simhei.ttf'`

### 常用中文字体路径
- Windows: `C:\Windows\Fonts\simhei.ttf`
- Mac: `/System/Library/Fonts/PingFang.ttc`
- Linux: `/usr/share/fonts/truetype/`

## 参考资源

- GitHub: https://github.com/amueller/word_cloud
- 文档: https://amueller.github.io/word_cloud/