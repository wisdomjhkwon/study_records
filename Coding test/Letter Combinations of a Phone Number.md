# Letter Combinations of a Phone Number
## Leetcode #17
[파이썬 알고리즘 테스트](https://github.com/onlybooks/algorithm-interview)(박상길 저) 책을 보며 풀고있습니다. 
문제 출처: https://leetcode.com/problems/letter-combinations-of-a-phone-number/

## 풀이 과정

어제부터 고민한 문제. 심지어 책을 보고 푸는데도 머리속에 loop문이 잘 돌지 않아서 슬펐던 (ㅠㅠ)

이 문제는 책보다 LeetCode의 Solution이 더 이해하기 쉬웠다.

아래 내용은 [Solution](https://leetcode.com/problems/letter-combinations-of-a-phone-number/solution/)을 번역한 것이다.

Approach : Backtracking

Backtracking은 모든 가능한 후보들을 탐색하면서 해답을 찾는 알고리즘이다. 만약 후보가 해답이 아닌 것이 확인되면, backtracking 알고리즘은 이전 단계로 돌아가서 일부를 변경하고 다시 실행한다. 

이 문제의 경우 만드는 backtrack(combination, next_digits) 함수. combination은 문자열 조합이고, next_digits는 앞으로 확인할 digits이다. 

- 만약 next_digits가 존재하지 않는다면 즉, 앞으로 확인할 digits가 없다면 현재의 combination이 완료되었다는 것을 의미한다.
- 만약 next_digits가 남아있다면(앞으로 확인할 digits가 존재한다면):
  - 다음에 오는 digit에 해당하는 글자들을 순환한다.
    - 현재 글자를 combination에 추가한다. `combination = combination + letter`
    - 다음 digit로 진행한다. `backtrack(combination+letter, next_digits[1:]) `


위 내용을 바탕으로 한번 더 작성한 나의 답안이다. 주의) 일부 변수 명이 다르다

```python
dic = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
}

result = []

def backtrack(combination, next_digit):
    if next_digit == '' :
        result.append(combination)
        return
    
    for char in dic[next_digit[0]]:
        backtrack(combination+char, next_digit[1:])
    
if digits:
    backtrack('', digits)

return result
```

뭔가 머리로 접근은 비슷하게까지 간 것 같은데 실제 구현이 너무 어렵다 (ㅠㅠ)

그리고 책의 방법이 loop를 더 많이 순환하는 것 같다. (실제로도 시간이 조금 더 많이 걸렸다.) 뭔가 뜯어 고쳐보고 싶은데 아직 머리가 복잡s한 관계로.. 조만간.. 한번 더 봐야겠다. 