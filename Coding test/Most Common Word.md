# Most Common Word
## Leetcode #819
[파이썬 알고리즘 테스트](https://github.com/onlybooks/algorithm-interview)(박상길 저) 책을 보며 풀고있습니다. 
문제 출처: [Link](https://leetcode.com/problems/most-common-word/)

## 풀이 과정
```python
words = re.sub('[^a-zA-Z ]', ' ', paragraph).lower().split()
ranks = collections.Counter(words).most_common()

for rank in ranks:
    if rank[0] not in banned:
        return rank[0]
```

정규식에서 \w는 단어 문자를 뜻하므로 [^a-zA-Z] 는 [^\w]로 바꿀 수 있다. 

나는 단어 랭킹을 만들고 -> 랭킹 중에 밴 목록에 없는 첫 단어를 리턴하게 했지만, 랭킹을 만들 때 밴 목록에 있는 단어를 제외하고 랭킹을 만들어 -> (뒤의 for문 없이) 바로 출력하는 방법도 있다. 순서의 차이

