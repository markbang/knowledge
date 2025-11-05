# PyTorch

PyTorch 是一个开源的深度学习框架，由 Facebook AI Research 开发，广泛应用于学术研究和工业界。

## 安装

### 自动安装

访问官网选择配置: https://pytorch.org/get-started/locally/

```bash
# CPU 版本
pip install torch torchvision torchaudio

# GPU 版本 (CUDA 12.4)
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu124
```

### 手动安装 GPU 版本

下载地址: https://download.pytorch.org/whl/torch/

需要下载三个包（注意 Python 版本和 CUDA 版本）:
- `torch-2.4.1+cu124-cp312-cp312-win_amd64.whl`
- `torchvision-0.19.1+cu124-cp312-cp312-win_amd64.whl`
- `torchaudio-2.4.1+cu124-cp312-cp312-win_amd64.whl`

```bash
pip install torch-2.4.1+cu124-cp312-cp312-win_amd64.whl
pip install torchvision-0.19.1+cu124-cp312-cp312-win_amd64.whl
pip install torchaudio-2.4.1+cu124-cp312-cp312-win_amd64.whl
```

### 验证安装

```python
import torch

print(torch.__version__)
print(torch.cuda.is_available())  # True 表示 GPU 可用
print(torch.cuda.get_device_name(0))  # 显示 GPU 名称
```

## 基础概念

### Tensor 张量

```python
import torch

# 创建张量
x = torch.tensor([1, 2, 3])
y = torch.zeros(2, 3)
z = torch.randn(2, 3)

# 张量运算
a = torch.tensor([1.0, 2.0])
b = torch.tensor([3.0, 4.0])
c = a + b
d = torch.matmul(a, b)  # 矩阵乘法

# GPU 加速
if torch.cuda.is_available():
    x = x.cuda()  # 转移到 GPU
    # 或者
    x = x.to('cuda')
```

### 自动求导

```python
# 需要梯度的张量
x = torch.tensor([1.0, 2.0], requires_grad=True)
y = x ** 2
z = y.sum()

# 反向传播
z.backward()
print(x.grad)  # 梯度: [2.0, 4.0]
```

## 构建神经网络

### 简单模型

```python
import torch.nn as nn

class SimpleNet(nn.Module):
    def __init__(self):
        super(SimpleNet, self).__init__()
        self.fc1 = nn.Linear(784, 128)
        self.fc2 = nn.Linear(128, 10)
        self.relu = nn.ReLU()
    
    def forward(self, x):
        x = self.fc1(x)
        x = self.relu(x)
        x = self.fc2(x)
        return x

model = SimpleNet()
```

### 卷积神经网络

```python
class CNN(nn.Module):
    def __init__(self):
        super(CNN, self).__init__()
        self.conv1 = nn.Conv2d(1, 32, 3, 1)
        self.conv2 = nn.Conv2d(32, 64, 3, 1)
        self.fc1 = nn.Linear(9216, 128)
        self.fc2 = nn.Linear(128, 10)
        self.relu = nn.ReLU()
        self.maxpool = nn.MaxPool2d(2)
    
    def forward(self, x):
        x = self.conv1(x)
        x = self.relu(x)
        x = self.maxpool(x)
        x = self.conv2(x)
        x = self.relu(x)
        x = self.maxpool(x)
        x = x.view(x.size(0), -1)
        x = self.fc1(x)
        x = self.relu(x)
        x = self.fc2(x)
        return x
```

## 训练模型

```python
import torch.optim as optim

# 准备数据
train_loader = torch.utils.data.DataLoader(dataset, batch_size=64)

# 定义模型、损失函数、优化器
model = SimpleNet()
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)

# 训练循环
for epoch in range(10):
    for batch_idx, (data, target) in enumerate(train_loader):
        # 前向传播
        output = model(data)
        loss = criterion(output, target)
        
        # 反向传播
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()
        
        if batch_idx % 100 == 0:
            print(f'Epoch: {epoch}, Loss: {loss.item()}')
```

## 数据加载

### Dataset 和 DataLoader

```python
from torch.utils.data import Dataset, DataLoader

class CustomDataset(Dataset):
    def __init__(self, data, labels):
        self.data = data
        self.labels = labels
    
    def __len__(self):
        return len(self.data)
    
    def __getitem__(self, idx):
        return self.data[idx], self.labels[idx]

dataset = CustomDataset(data, labels)
dataloader = DataLoader(dataset, batch_size=32, shuffle=True)
```

### 图像数据增强

```python
from torchvision import transforms

transform = transforms.Compose([
    transforms.Resize(256),
    transforms.CenterCrop(224),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406],
                        std=[0.229, 0.224, 0.225])
])
```

## 保存和加载模型

```python
# 保存模型
torch.save(model.state_dict(), 'model.pth')

# 加载模型
model = SimpleNet()
model.load_state_dict(torch.load('model.pth'))
model.eval()

# 保存完整模型
torch.save(model, 'model_complete.pth')
model = torch.load('model_complete.pth')
```

## Jupyter Notebook 配置

创建 PyTorch 专用内核:

```bash
# 创建虚拟环境
python -m venv pytorch_env

# 激活环境
source pytorch_env/bin/activate  # Linux/Mac
pytorch_env\Scripts\activate     # Windows

# 安装 PyTorch 和 Jupyter
pip install torch torchvision jupyter ipykernel

# 创建内核
python -m ipykernel install --user --name=pytorch --display-name "Python (PyTorch)"
```

参考: https://blog.csdn.net/ccaoshangfei/article/details/126521809

## 常用技巧

### 设置随机种子

```python
torch.manual_seed(42)
if torch.cuda.is_available():
    torch.cuda.manual_seed(42)
```

### 查看模型结构

```python
from torchsummary import summary

summary(model, input_size=(1, 28, 28))
```

### 冻结部分层

```python
# 冻结前两层
for param in model.parameters():
    param.requires_grad = False

for param in model.fc2.parameters():
    param.requires_grad = True
```

## 学习资源

- 官方文档: https://pytorch.org/docs/
- 官方教程: https://pytorch.org/tutorials/
- 中文文档: https://pytorch-cn.readthedocs.io/
- GitHub: https://github.com/pytorch/pytorch