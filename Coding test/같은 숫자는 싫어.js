/*
200702 / 연습문제 / 같은 숫자는 싫어
출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges

다른 짧은 문제풀이를 보고 한 번 더 풀어봐야겠다.
filter를 사용하여 한 줄로도 해결이 가능하고, 내가 짠 코드의 논리 중에서도 초기조건을 따로 변경해서 진행할 수 있다.
*/

// 1트

function solution(arr)
{
    var answer = [];

    for(var i=0; i<arr.length; i++) {
        if(i===0) {
            answer.push(arr[i]);
        }
        else {
            if(arr[i] === answer[answer.length-1]){
                continue
            }
            else {
                answer.push(arr[i]);
            }
        }
    }
    return answer;
}

// 2트 - 초기 조건 변경. 이정도만 되도 깔끔하다..

function solution(arr)
{
    var answer = [arr[0]];
    
    for(var i=1; i<arr.length; i++) {
        if(arr[i] !== answer[answer.length-1]){
            answer.push(arr[i]);
        }    
    }
    
    return answer;
}