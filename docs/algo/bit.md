# 位运算

位运算是一种直接对二进制位进行操作的运算方式，效率高，常用于算法优化。

## 基础位运算符

| 运算符 | 名称 | 说明 | 示例 |
|--------|------|------|------|
| `&` | 按位与 | 两位都为1时结果为1 | `5 & 3 = 1` (101 & 011 = 001) |
| `|` | 按位或 | 有一位为1时结果为1 | `5 | 3 = 7` (101 | 011 = 111) |
| `^` | 按位异或 | 两位不同时结果为1 | `5 ^ 3 = 6` (101 ^ 011 = 110) |
| `~` | 按位取反 | 0变1，1变0 | `~5 = -6` |
| `<<` | 左移 | 二进制左移n位，相当于乘以2^n | `5 << 1 = 10` |
| `>>` | 右移 | 二进制右移n位，相当于除以2^n | `5 >> 1 = 2` |

## 常用技巧

### 1. 判断奇偶性
```python
# 判断n是否为奇数
if n & 1:
    print("奇数")
else:
    print("偶数")
```

### 2. 交换两个数（不用临时变量）
```python
a = a ^ b
b = a ^ b
a = a ^ b
```

### 3. 判断第k位是否为1
```python
# 判断n的第k位（从0开始）是否为1
if n & (1 << k):
    print("第k位是1")
```

### 4. 将第k位设为1
```python
n = n | (1 << k)
```

### 5. 将第k位设为0
```python
n = n & ~(1 << k)
```

### 6. 将第k位取反
```python
n = n ^ (1 << k)
```

### 7. 取出最低位的1
```python
lowbit = n & (-n)
```

### 8. 去掉最低位的1
```python
n = n & (n - 1)
```

### 9. 判断是否为2的幂次
```python
# 2的幂次只有一个1
if n > 0 and (n & (n - 1)) == 0:
    print("是2的幂次")
```

### 10. 计算二进制中1的个数
```python
def count_ones(n):
    count = 0
    while n:
        n = n & (n - 1)
        count += 1
    return count
```

## 经典题目

### [LeetCode 136. 只出现一次的数字](https://leetcode.cn/problems/single-number/)

**题目：**数组中除了一个数字出现一次外，其余都出现两次，找出只出现一次的数字。

**解法：**利用异或的性质：a ^ a = 0, a ^ 0 = a

```python
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        result = 0
        for num in nums:
            result ^= num
        return result
```

### [LeetCode 191. 位1的个数](https://leetcode.cn/problems/number-of-1-bits/)

```python
class Solution:
    def hammingWeight(self, n: int) -> int:
        count = 0
        while n:
            n &= n - 1
            count += 1
        return count
```

### [LeetCode 231. 2的幂](https://leetcode.cn/problems/power-of-two/)

```python
class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
        return n > 0 and (n & (n - 1)) == 0
```

### [LeetCode 338. 比特位计数](https://leetcode.cn/problems/counting-bits/)

```python
class Solution:
    def countBits(self, n: int) -> List[int]:
        # dp[i] = dp[i & (i-1)] + 1
        result = [0] * (n + 1)
        for i in range(1, n + 1):
            result[i] = result[i & (i - 1)] + 1
        return result
```

## 应用场景

- **状态压缩**：用一个整数表示多个布尔状态
- **集合运算**：用位运算实现集合的交、并、补
- **权限管理**：用位表示不同权限
- **性能优化**：位运算速度快，可替代乘除运算
