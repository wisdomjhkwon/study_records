# Python 정렬
https://docs.python.org/ko/3/howto/sorting.html 를 읽으며 정리한 글입니다.

## sort() 함수

### syntax
```python
[].sort(*, key=None, reverse=False)
```
```
이 메서드는 항목간의 < 비교만 사용하여 리스트를 제자리에서 정렬합니다.
```

리스트에는 sort() 함수가 있다. 이 함수는 원래 리스트를 제자리에서(in-place) 수정한다. 즉 함수를 호출한 해당 리스트가 수정된다. None을 반환한다.

### usage
```python
a = [9,3,2,5]
print(a) #[9,3,2,5]
b=a.sort()
print(a) #[2,3,5,9]
print(b) # None
```
리스트 a가 변경되었다. sort() 메소드는 변경 후 None을 반환하였으므로, b는 None이 출력된다.


## sorted() 함수

### syntax

```python
sorted(iterable, *, key=None, reverse=False)
```
| Parameter |	Description |
|---|---|
| iterable | Required. The sequence to sort, list, dictionary, tuple etc.
| key	| Optional. A Function to execute to decide the order. |
| reverse	| Optional. A Boolean. False will sort ascending, True will sort descending. |

리스트가 아닌 이터러블-딕셔너리, 튜플 등등-에도 사용 가능하다. 본래의 이터러블(첫번째 parameter인 iterable)을 변경하지 않는다. 정렬한 이터러블을 반환한다.
### usage

```python
a = [9,3,2,5]
b=sorted(a)
print(a) #[9,3,2,5]
print(b) #[2,3,5,9]
```
a는 변경되지 않았다.

## key 함수
list.sort()와 sorted() 모두 key 매개 변수를 가진다. key 변수는 정렬에 사용할 키를 반환해야 한다.

정렬하고자 하는 iterable에는 항목들(a[0], a[1], ... )이 존재한다. 각 항목 내부에 있는 값 중 key가 되는 값(정렬 기준이 되는 값)을 지정하기 위해 lambda함수를 사용한다.


```python
student_tuples = [
    ('john', 'A', 15),
    ('dave', 'B', 10),
    ('jane', 'B', 12),
]

print(sorted(student_tuples, key=lambda s:s[2])) #[('dave', 'B', 10), ('jane', 'B', 12), ('john', 'A', 15)]
```
즉 위 예제는 일정한 형식의 튜플이 모여있는 리스트를, **s**(각 튜플)의 2번째 인자(**s[2]** - 여기에서는 숫자 변수로 지정된 값)를 기준으로 정렬하는 것이다.

### operator 모듈 함수
파이썬에서는 위의 키 함수 패턴을 더 쉽게 할 수 있는 편리 함수를 제공한다. operator 모듈의 itemgetter(), attrgetter() 등을 사용할 수 있다.

```Python
from operator import itemgetter, attrgetter

sorted(student_tuples, key=itemgetter(2))
#[('dave', 'B', 10), ('jane', 'B', 12), ('john', 'A', 15)]
```
다중 수준의 정렬도 가능하다. grade([1]번 값)이후 age([2])로 정렬하려면 다음과 같이 사용할 수 있다.

```Python
sorted(student_tuples, key=itemgetter(2, 1))
#[('dave', 'B', 10), ('jane', 'B', 12), ('john', 'A', 15)]
```

### reverse
default값은 `False` 즉 오름차순이 기본이다. (작은게 먼저)
`reverse=True` 면 내림차순으로 정렬할 수 있다.

### Stability
정렬은 안정적임이 보장된다. key 값이 같을 경우 원래의 순서를 유지한다. Stability는 여러번의 정렬이 실행될 때 앞서 정렬된 것의 순서를 유지한다는 점에서 중요하다. 