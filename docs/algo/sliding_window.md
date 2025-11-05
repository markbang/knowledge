[leetcode.3](https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/) | 

## 滑动窗口算法

滑动窗口是一种常用的双指针技巧，适用于处理数组/字符串的子元素问题。通过维护一个窗口在数组上滑动，可以在O(n)时间复杂度内解决问题。

### 基本思路

1. 使用两个指针left和right表示窗口的左右边界
2. right指针不断右移扩大窗口
3. 当窗口满足某个条件时，left指针右移缩小窗口
4. 在移动过程中更新结果

### 模板代码

```python
def sliding_window(s: str):
    left = 0
    window = {}  # 窗口内的数据
    result = 0
    
    for right in range(len(s)):
        # 1. 将right位置的元素加入窗口
        c = s[right]
        window[c] = window.get(c, 0) + 1
        
        # 2. 判断窗口是否需要收缩
        while 窗口需要收缩的条件:
            # 3. 移出left位置的元素
            d = s[left]
            left += 1
            window[d] -= 1
            
        # 4. 更新结果
        result = max(result, right - left + 1)
    
    return result
```

## 经典题目

### 1. [LeetCode 3. 无重复字符的最长子串](https://leetcode.cn/problems/longest-substring-without-repeating-characters/)

```python
# leetcode.3 滑动窗口+哈希表 
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        dic, res, i = {}, 0, -1
        for j in range(len(s)):
            if s[j] in dic:
                i = max(i, dic[s[j]])
            dic[s[j]] = j
            res = max(res, j-i)
        return res
```

### 2. [LeetCode 76. 最小覆盖子串](https://leetcode.cn/problems/minimum-window-substring/)

```python
class Solution:
    def minWindow(self, s: str, t: str) -> str:
        from collections import Counter
        need = Counter(t)
        window = {}
        left = 0
        valid = 0
        start, length = 0, float('inf')
        
        for right in range(len(s)):
            c = s[right]
            if c in need:
                window[c] = window.get(c, 0) + 1
                if window[c] == need[c]:
                    valid += 1
            
            while valid == len(need):
                if right - left + 1 < length:
                    start = left
                    length = right - left + 1
                
                d = s[left]
                left += 1
                if d in need:
                    if window[d] == need[d]:
                        valid -= 1
                    window[d] -= 1
        
        return "" if length == float('inf') else s[start:start+length]
```

### 3. [LeetCode 438. 找到字符串中所有字母异位词](https://leetcode.cn/problems/find-all-anagrams-in-a-string/)

```python
class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        from collections import Counter
        need = Counter(p)
        window = {}
        left = 0
        valid = 0
        result = []
        
        for right in range(len(s)):
            c = s[right]
            if c in need:
                window[c] = window.get(c, 0) + 1
                if window[c] == need[c]:
                    valid += 1
            
            while right - left + 1 >= len(p):
                if valid == len(need):
                    result.append(left)
                
                d = s[left]
                left += 1
                if d in need:
                    if window[d] == need[d]:
                        valid -= 1
                    window[d] -= 1
        
        return result
```

### 4. [LeetCode 209. 长度最小的子数组](https://leetcode.cn/problems/minimum-size-subarray-sum/)

```python
class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        left = 0
        total = 0
        result = float('inf')
        
        for right in range(len(nums)):
            total += nums[right]
            
            while total >= target:
                result = min(result, right - left + 1)
                total -= nums[left]
                left += 1
        
        return 0 if result == float('inf') else result
```

### 5. [LeetCode 567. 字符串的排列](https://leetcode.cn/problems/permutation-in-string/)

```python
class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        from collections import Counter
        need = Counter(s1)
        window = {}
        left = 0
        valid = 0
        
        for right in range(len(s2)):
            c = s2[right]
            if c in need:
                window[c] = window.get(c, 0) + 1
                if window[c] == need[c]:
                    valid += 1
            
            while right - left + 1 >= len(s1):
                if valid == len(need):
                    return True
                
                d = s2[left]
                left += 1
                if d in need:
                    if window[d] == need[d]:
                        valid -= 1
                    window[d] -= 1
        
        return False
```

## 适用场景

- 求连续子数组/子串的最值
- 字符串匹配问题
- 固定长度窗口的问题
- 满足某个条件的最长/最短子数组

## 时间复杂度

虽然有两层循环，但每个元素最多被访问两次（一次right，一次left），所以时间复杂度为O(n)。
