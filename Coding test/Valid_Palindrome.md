# Valid Palindrome
## Leetcode #125
[파이썬 알고리즘 테스트](https://github.com/onlybooks/algorithm-interview)(박상길 저) 책을 보며 풀고있습니다. 문제 출처: https://leetcode.com/problems/valid-palindrome/

## 풀이 과정
첫번째 풀이. 정규표현식으로 문자열을 변환하고 이후에는 테스트케이스를 보면서 경우에 따라 처리했다. (맨 첫자와 끝자를 비교해서, 틀린 경우가 있으면 False를 리턴) 난잡한 코드가 완성되었다.

```python
class Solution:
    def isPalindrome(self, s: str) -> bool:
        # 문자열 변환
        new_s = re.sub('[^0-9a-zA-Z]', '', s).lower()

        # 첫글자와 뒷글자 비교
        if len(new_s)%2 == 1:
            for i in range(len(new_s)//2) :
                if i != 0:
                    if new_s[i-1] != new_s[-i] :
                        return False
                else:
                    if new_s[0] != new_s[-1]:
                        return False
        else:
            for i in range(len(new_s)//2+1) :
                if i != 0:
                    if new_s[i-1] != new_s[-i] :
                        return False
        return True

```

이제 더 나은 방법이 있는지 생각해보자.

책에서 첫번째 풀이로 나오는 리스트 변환의 경우 문자열을 리스트로 분해하여 (for in 문) isalnum() 함수로 비교했다. 이후 while문 내부에 pop을 이용해서 비교했다. 그런데 이렇게 하면 실행시간이 7배 가까이 증가했다. 

어쨌든 문자열 변환은 정규식이 더 쉽고 빠른 것 같고 그렇다면 이후에는?

나는 Palindrome의 정의에 따라 맨 앞글자와 맨 뒷글자, 두번째 글자와 뒤에서 두번째 글자 ... 이런식으로 이들이 계속 같아야 한다는 조건을 주려고 했다. 그런데 결국 이 문자열은 **뒤집어도 같다**. 이 점을 활용해서 나의 길었던 for if 구문들을 한 줄로 정리할 수 있다.

```python
return new_s == new_s[::-1]
```

`[::-1]`은 문자열 처음부터 끝까지 -1칸 간격, 즉 역순으로 나열하게 한다는 뜻이다. 

세상에 그 길었던 코드가 한줄로 정리된다. 게다가 슬라이싱은 처리 시간도 짧다! 아마 내가 짠 코드의 처리 시간이 짧았던 것도 슬라이싱을 이용했기 때문인듯.. 