# Array Partition I
## Leetcode #561
[파이썬 알고리즘 테스트](https://github.com/onlybooks/algorithm-interview)(박상길 저) 책을 보며 풀고있습니다. 
문제 출처: https://leetcode.com/problems/array-partition-i/

## 풀이 과정
```python
max_sum = 0
nums.sort()

for i in range(0, len(nums), 2):
    max_sum += min(nums[i], nums[i+1])
    
return max_sum
```

sort했을 때 인접한 두 개씩 묶어야 한다는 점에서 시작한 계산이다.

그런데 이 말은 즉, 정렬된 리스트에서 짝수번째 인덱스들의 합을 구하는 것과 동일하다.

```python
return sum(sorted(nums)[::2])
```

그래서 이렇게까지 줄일 수 있다. 놀라워..
