# 200824 / 연습문제 / 문자열 내 p와 y의 개수
# 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges

def solution(s):
    p = 0
    y = 0

    S = s.upper()

    for i in S:
        if 'P' == i :
            p = p + 1
        if 'Y' == i :
            y = y + 1

    if p == y:
        return True
    else:
        return False

# .upper() 함수는 대문자로 변경된 문자열을 리턴한다. 즉 본래의 문자열을 바꾸진 않는 점에 주의
# .count() 함수가 있다. 사용해보자

def solution(s):
    if s.lower().count('p') == s.lower().count('y') :
        return True
    else :
        return False

# 심지어는 한줄까지도 가능..

def solution(s):
    return s.lower().count('p') == s.lower().count('y')
