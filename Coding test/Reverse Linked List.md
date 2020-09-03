# Reverse Linked List
## Leetcode #206
[파이썬 알고리즘 테스트](https://github.com/onlybooks/algorithm-interview)(박상길 저) 책을 보며 풀고있습니다. 
문제 출처: https://leetcode.com/problems/reverse-linked-list/

## 풀이 과정
```python
if not head: 
    return None
else:
    def link_list(node: ListNode) -> ListNode:

        if node.next != None :
            n = link_list(node.next)
            k = n
            while k.next is not None:
                k = k.next

            node.next = None
            k.next = node
            return n

        else :
            return node

    return(link_list(head)) 
```

첫 풀이. 뭔가 재귀를 생각해서 풀려고 했고 풀어냈으나 소요시간이 엄청 길었다. (왜지)


```python
node, prev = head, None

while node :
    next_node, node.next = node.next, prev
    node, prev = next_node, node

return prev
```
iteration 방법으로 풀이. next_node라는 새 변수를 사용한다는 점이 인상적이다. while node 처럼 루프를 돌리면 빈 리스트도 걸러낼 수 있다.