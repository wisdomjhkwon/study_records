# Reverse String
## Leetcode #344
[파이썬 알고리즘 테스트](https://github.com/onlybooks/algorithm-interview)(박상길 저) 책을 보며 풀고있습니다. 문제 출처: https://leetcode.com/problems/reverse-string/

## 풀이 과정
```python
s = s[::-1]
```
이거 왜 안되지 이러고 있었는데 리트코드에서 공간복잡도를 제한하는 과정에서의..?! 뭐 그렇다고 한다. 이렇게 하면 제대로 작동한다
```python
s[:] = s[::-1]
```

혹은 이런 함수를 사용할 수 있다
```python
s.reverse()
```
pythonic way라고 한다

투포인터를 이용한 스왑도 가능하다고 함
```python
left, right = 0, len(s) - 1
while left < right:
    s[left], s[right] = s[right], s[left]
    left += 1
    right -= 1
```

실행시간은 다 비슷하다.