/*
200701 / 연습문제 / 가운데 숫자 가져오기
출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
*/

function solution(s) {
    var answer = '';
    var len = s.length;

    if(len % 2 === 1){
        answer = s.substr(len/2, 1);
    }
    else {
        answer = s.substr(len/2-1, 2);
    }
    return answer;
}

