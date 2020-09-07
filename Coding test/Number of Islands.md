# Number of Islands
## Leetcode #200
[파이썬 알고리즘 테스트](https://github.com/onlybooks/algorithm-interview)(박상길 저) 책을 보며 풀고있습니다. 
문제 출처: https://leetcode.com/problems/number-of-islands/

## 풀이 과정
DFS를 풀고싶어서 먼저 푼 문제. LeetCode엔 Example 2의 Output이 3으로 되어있는데 책에는 1로 되어있으니 주의

```python
def numIslands(self, grid: List[List[str]]) -> int:
    def dfs(i, j) :
        # 범위를 넘거나 육지가 아닌 경우 종료
        if i < 0 or i >= len(grid) or j < 0 or j >= len(grid[0]) or grid[i][j] == "0" :
            return
        
        # 이 육지는 이미 탐색되었습니다. 물로 바꿉니다.
        # 그리고 이 문제에서는 숫자 0 이 아닌 문자 0이니 주의
        grid[i][j] = "0"
        
        # 사방을 탐색하여 물인지 육지인지 찾는 과정
        dfs(i-1, j)
        dfs(i, j-1)
        dfs(i+1, j)
        dfs(i, j+1)
    
    count = 0
        
    for i in range(len(grid)):
        for j in range(len(grid[0])):
            # 육지인 땅부터 탐색을 시작한다
            if grid[i][j] == "1":
                dfs(i, j)
                # 탐색이 끝나면 count를 추가한다.
                count+=1
        
    return count
```

생각보다 어렵지 않다. (답을 보고 풀어서 그럴지도)

순서를 생각해보면 : 육지인 땅을 찾는다 -> 물로 바꿔주고 사방을 탐색한다 -> 사방이 다 물이거나 범위를 넘으면 return을 만나 함수가 종료될 것이다. 반복하다가 맨 처음 호출된 dfs (numIslands의 nested loop에서 호출된 dfs())가 종료되면, 한 개의 연결된 섬을 모두 찾은 것이므로 count를 추가한다. 육지를 물로 바꿔줬기 때문에 전체 grid에서 1을 찾아서 반복하면 된다.