# Two Sum
## Leetcode #1
[파이썬 알고리즘 테스트](https://github.com/onlybooks/algorithm-interview)(박상길 저) 책을 보며 풀고있습니다. 
문제 출처: https://leetcode.com/problems/two-sum/

## 풀이 과정

역시 맨 처음 생각나는 대로 푼건 Brute Force다. 

```python
for i in range(len(nums)):
    for j in range(i+1, len(nums)):
        if nums[i] + nums[j] == target:
            return [i, j]
```

시간이 많이 걸리는 것 같으니 다른 방법을 생각하던 중, target에서 숫자를 하나 빼서 그 숫자가 있는지 없는지를 확인하면 될 것 같았다.
```python
for i, n in enumerate(nums):
    complement = target - n
    
    if complement in nums:
        return [ nums.index(n), nums.index(target) ]
```

이렇게 했는데, 이러면 같은 숫자 (예: [3, 3] , target=6 등의 경우) 일 때 동일한 인덱스를 출력해버린다. 따라서 complement의 index보다 큰 nums 에서 비교하도록 수정할 수 있다.

```python
for i, n in enumerate(nums):
    complement = target - n
    
    if complement in nums[i+1:]:
        return [ nums.index(n), nums[i+1:].index(complement) + (i+1)]
```

dictionary를 만들어 구현하는 방법도 있다. 

```python
num_dict = {}

for i, n in enumerate(nums):
    num_dict[n] = i
    
for i, n in enumerate(nums):
    if target-n in num_dict and i!=num_dict[target-n]:
        return nums.index(n), num_dict[target-n]
```