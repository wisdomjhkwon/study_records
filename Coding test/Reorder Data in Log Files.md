# Reorder Data in Log Files
## Leetcode #937
[파이썬 알고리즘 테스트](https://github.com/onlybooks/algorithm-interview)(박상길 저) 책을 보며 풀고있습니다. 
문제 출처: https://leetcode.com/problems/reorder-data-in-log-files/

## 풀이 과정
```python
digit_logs = []
letter_logs = []
for log in logs:
    if log.split(' ')[1].isdigit() :
        digit_logs.append(log)
    else :
        letter_logs.append(log)

letter_logs = sorted(sorted(letter_logs, key = lambda t:t), key = lambda s:s.split(' ',1)[1])

return letter_logs+digit_logs
```

문제에서 빠뜨린 조건이, identifier를 무시하고 사전정렬을 하지만, 동일한 경우 identifier도 고려한다는 것이었다. 이 부분을 처리하기 위해서 sorted로 애초에 letter_logs를 사전순서 정렬한 후 조건에 따라 정렬하는 방식을 택했다.

이 두 번의 정렬은 이렇게 쉽게 표현이 가능했다.

```python
letter_logs = sorted(letter_logs, key = lambda x:(x.split()[1:], x.split()[0]))
```

일단 공백으로의 split은 파라미터가 생략이 가능. 즉 `s.split()`과 `s.split(' ')`은 동일. 첫 lambda식에서 사용했던 `s.split(' ',1)[1]` 과 `s.split()[1:]`은 동일하다. 그리고 key의 lambda 식 내에 조건의 우선순위를 적어둘 수 있다.

실행시간은 거의 동일하다. 