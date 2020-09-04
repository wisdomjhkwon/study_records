# Valid Parentheses
## Leetcode #20
[파이썬 알고리즘 테스트](https://github.com/onlybooks/algorithm-interview)(박상길 저) 책을 보며 풀고있습니다. 
문제 출처: https://leetcode.com/problems/valid-parentheses/

## 풀이 과정

드디어 스택까지 왔다. 


LeetCode의 Solution의 Algorithm :
1. 스택 S 만들고 초기화
2. for문 순환 - 한 번에 하나의 괄호 읽어오기
3. 여는 괄호를 만나면 stack에 push - 나중에 처리할 것임을 의미
4. 닫는 괄호를 만나면, 스택의 가장 위 element를 확인한다.(pop) 같은 타입이면 continue. 같은 타입이 아니면 invalid expression이다.
5. 마지막에 stack S를 확인해서 element가 남아있다면 invalid expression이다.


```python
stack = []
table = {
    ')': '(',
    '}': '{',
    ']': '['
}

for one in s :
    if one not in table :
        stack.append(one)
    elif table[one] != stack.pop() :
        return False
    
    if len(stack) != 0 :
        return False
        
return True
```

여기서 한가지 잡아내지 못하는 케이스가 [ ']' ] 와 같이, 닫는 bracket만 나오는 경우였다. 이 경우 elif 문에 걸려서 빈 스택에서 pop을 수행하다 에러가 나기 때문에 해당 구문을 수정하면 되었다. 

즉 스택이 없는 경우를 추가하면 된다. 


```python
stack = []
table = {
    ')': '(',
    '}': '{',
    ']': '['
}

for one in s :
    if one not in table :
        stack.append(one)
    elif not stack or table[one] != stack.pop() :
        return False
    
return len(stack) == 0 
```

그리고 마지막 stack 확인을 저렇게 간단하게 붙여줄 수도 있다. 역시.. 대단해