/*
200710 / 연습문제 / 두 정수 사이의 합
출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
*/

function solution(a, b) {
    var answer = 0 ;
    if (a > b) {
        for(var i = b; i <= a; i ++ ) {
            answer += i;
        }
    } else if (b > a) {
        for(var i = a; i <= b; i ++ ) {
            answer += i;
        }
    } else {
        answer = a ;    
    }
    return answer;
}

// 2트

function solution(a, b) {
    var answer = 0 ;
    for(var i=Math.min(a,b); i<=Math.max(a,b); i++) answer+=i;
    return answer;
}