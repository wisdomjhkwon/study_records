/*
200706 / 연습문제 / 시저 암호
출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges

조건이 까다롭지 않기 때문에 strict하게 charCodeAt을 나눌 필요가 없을 것 같다.
조금 더 간단하게 짤 수 있을듯.
*/

// 1트 

function solution(s, n) {
    var answer = '';

    for(var i=0; i<s.length; i++) {
        if( s.charCodeAt(i)>=65 && s.charCodeAt(i)<=90 ) {
            var code = s.charCodeAt(i);
            code = code + n ;
            answer = answer + String.fromCharCode((code-65)%26+65);
        }
        else if ( s.charCodeAt(i)>=97 && s.charCodeAt(i) <=122 ) {
            var code = s.charCodeAt(i);
            code = code + n ;
            answer = answer + String.fromCharCode((code-97)%26+97);
        }
        else {
            answer = answer + ' ';
        }
    }  
    return answer;
}

// 2트

function solution(s, n) {
    var answer = '';
    
    for(var i=0; i<s.length; i++) {
        if(s[i] === ' ') {
            answer += ' '
        }
        else {
            answer+= String.fromCharCode(s.charCodeAt(i) > 90 ? (s.charCodeAt(i)+n-97)%26+97 : ((s.charCodeAt(i)+n-65)%26+65))
        }
    }  
    return answer;
}