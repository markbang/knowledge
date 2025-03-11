[leetcode.3](https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/) | 

## 滑动窗口算法

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

