# Palindrome Linked List
## Leetcode #234
[파이썬 알고리즘 테스트](https://github.com/onlybooks/algorithm-interview)(박상길 저) 책을 보며 풀고있습니다. 
문제 출처: [{Link}](https://leetcode.com/problems/palindrome-linked-list/)

## 풀이 과정
linked list를 list로 변환하여 풀이

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        numbers = []
        
        node = head
        
        while node != None :
            numbers.append(node.val)
            node = node.next
        
        return numbers == numbers[::-1]
```

런너(Runner)기법을 사용하여 데이터 형을 변환하지 않고 풀이 가능하다. (to be continued..)