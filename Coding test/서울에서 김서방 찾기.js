/*
200708 / 연습문제 / 서울에서 김서방 찾기
출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges

for문을 떠올리기 쉽지만
다양한 함수를 알면 좀 더 간단하게 짤 수 있다. 
*/

function solution(seoul) {
    var answer = '';
    for(var i=0; i<seoul.length; i++) {
        if (seoul[i] === 'Kim') {
            answer = '김서방은 '+ i +'에 있다';
        }  
    }
    return answer;
}

// 2트
// 배열에서 indexOf 로 처음 등장하는 값의 index를 알수있음
function solution(seoul) {
    return '김서방은 '+seoul.indexOf('Kim')+'에 있다';
}