/*
200709 / 연습문제 / 수박수박수박수박수박수?
출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
*/


function solution(n) {
    var answer = '';
    for(var i=0; i<n; i++) {
        answer = answer + (i%2===0 ? '수' : '박');
    }
    return answer;
}

function solution(n) {
    return '수박'.repeat(n).substring(0, n);
}

