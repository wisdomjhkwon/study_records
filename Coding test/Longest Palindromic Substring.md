# Longest Palindromic Substring
## Leetcode #5
[파이썬 알고리즘 테스트](https://github.com/onlybooks/algorithm-interview)(박상길 저) 책을 보며 풀고있습니다. 
문제 출처: [Link](https://leetcode.com/problems/longest-palindromic-substring/)

## 풀이 과정
```python
        palindromic = []
        for i in range(len(s)):
            for j in range(len(s)+1):
                if j>=i:
                    if s[i:j] == s[i:j][::-1]:
                        palindromic.append(s[i:j])
        palindromic = sorted(palindromic, key=lambda x:len(x), reverse=True)
        
        if palindromic:
            return palindromic[0]
        else:
            return ""
```
무식하게 모든 substring을 순회하며 문자열을 찾아 배열에 저장한 후 가장 큰 수를 리턴하게 했다. 결과는 역시 시간초과.

solution을 보니 내가 한 접근이 Brute Force인데, Time Complexity는 O(n^3)이다. 각 substring의 판별에 O(n)만큼의 시간이 더 걸리기 때문. 

이후에는 책을 참고했다.

```python
def expand(left: int, right: int) -> str:
    while left >= 0 and right <= len(s) and s[left] == s[right-1] :
        left -= 1
        right += 1
    return s[left+1:right-1]

if len(s) < 2 or s == s[::-1] :
    return s

result = ''
for i in range(len(s)-1):
    result = max(result,
                expand(i, i+1),
                expand(i, i+2),
                key = len)
return result
```

Dynamic Programming이고, 투 포인터를 이용하여 배열을 확장하는 형태다. 문자열의 길이가 홀수, 짝수인 두가지 경우를 고려한다. 투 포인터가 앞으로 진행하면서, (for문) 문자열이 Palindrom일 경우 (예: 'aba') 문자열의 길이를 양쪽으로 1씩 늘린 문자열도 Palindrom인지 확인한다. (expand 함수) 