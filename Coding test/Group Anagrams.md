# Group Anagrams
## Leetcode #49
[파이썬 알고리즘 테스트](https://github.com/onlybooks/algorithm-interview)(박상길 저) 책을 보며 풀고있습니다. 
문제 출처: https://leetcode.com/problems/group-anagrams/

## 풀이 과정
```python
dictionary = collections.defaultdict(list)
answer = []

for i, st in enumerate(strs):
    spell = []
    for s in st:
        spell.append(s)
    spell.sort()
    spell = tuple(spell)
    dictionary[spell].append(i)

for d in dictionary.values() :
    part_answer = []
    for i in d :
        part_answer.append(strs[i])
    answer.append(part_answer)
    
return answer
```

anagram: '어구전철', 문자를 재배열하여 다른 단어를 만드는 방법

나는 스펠링을 가지는 튜플을 key로, 인덱스를 value로 하는 dictionary를 만들어서 해결하려고 했다.

하지만 굳이 그럴 필요 없다. 스펠을 정렬해서 다시 문자열로 만들면 anagram들은 모두 같은 문자열이 되므로 -> 정렬한 문자열을 key로, 해당 단어를 value로 하는 dictionary를 만들어 value값들을 반환하면 된다. 

```python
dictionary = collections.defaultdict(list)

for s in strs :
    dictionary[''.join(sorted(s))].append(s)

return dictionary.values()
```

시간과 메모리 사용도 약간씩 줄어들었다. 어떻게 이런 생각을 하는거지.. 신기하다