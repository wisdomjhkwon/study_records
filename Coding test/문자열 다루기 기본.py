# 200824 / 연습문제 / 문자열 다루기 기본
# 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges

def solution(s):
    if len(s) != 4 and len(s) != 6:
        return False
    else :
        return s.isdigit()

def solution(s):
    return s.isdigit() and len(s) in (4, 6)
