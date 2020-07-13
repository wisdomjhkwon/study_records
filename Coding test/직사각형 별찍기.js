/*
200713 / 연습문제 / 직사각형 별찍기
출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
*/


process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    for(var i=0; i<b; i++) {
        var str = ''
        for(var j=0; j<a; j++) {
            str+='*'
        }
        console.log(str)
    }

    // 한줄로도 가능했다 
    // console.log(('*'.repeat(a)+'\n').repeat(b));
});