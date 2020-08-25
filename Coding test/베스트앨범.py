# 200825 / 해시 / 베스트앨범
# 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
# 풀이 참고: https://gsmesie692.tistory.com/150 

from collections import defaultdict

def solution(genres, plays):
    gCount = {}
    for i in range(len(genres)) :
        if genres[i] not in gCount.keys() :
            gCount[genres[i]] = plays[i]
        else:
            gCount[genres[i]] += plays[i]

    gRank = sorted(gCount.items(), key = lambda x:x[1], reverse = True)

    songs = defaultdict(lambda: [])
    i = 0

    for g, p in zip(genres, plays) :
        songs[g].append((i, p))
        i += 1

    answer = []
    for g in gRank :
        rankbyGenre = sorted(songs[g[0]], key=lambda x:x[1], reverse=True)
        answer.append(rankbyGenre[0][0])
        if len(rankbyGenre) > 1 :
            answer.append(rankbyGenre[1][0])

    return answer
