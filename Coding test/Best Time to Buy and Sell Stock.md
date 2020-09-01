# Best Time to Buy and Sell Stock
## Leetcode #121
[파이썬 알고리즘 테스트](https://github.com/onlybooks/algorithm-interview)(박상길 저) 책을 보며 풀고있습니다. 
문제 출처: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

## 풀이 과정

처음엔 최소값 다음에 나오는 가장 큰 값을 찾으면 되지 않을까? 했다. 그런데 최소값이 아니라도 가장 큰 차이가 나는 경우가 있다. [2, 4, 1] 같은 경우 배열의 최소값은 1이지만 2~4 구간에서 차가 2로 가장 큰 것을 알 수 있다. 

그래서 배열 안에서 index를 순회하면서, index 이후에 가장 큰 값이 나오는 경우의 차 중의 max값을 구하는 식으로 코드를 짰다. 

```python
result = 0

if prices:
    for i in range(len(prices)-1):
        max_money = max(prices[i+1:len(prices)]) - prices[i]
        if result < max_money :
            result = max_money

return result
```

이렇게 할 경우 통과는 되었지만 속도가 느린편에 속했다. 그렇다면 이것보다 더 빨리는 어떻게 풀 수 있을까

```python
profit = 0
min_price = sys.maxsize

for price in prices:
    min_price = min(min_price, price)
    profit = max(profit, price-min_price)
    
return profit
```

-> " 현재값을 가리키는 포인터(price)가 우측으로 이동하면서, 이전 상태의 저점을 기준으로 가격 차이를 계산하고, 만약 클 경우 최댓값을 계속 교체해나가는 형태 " 로 풀이가 가능하다. -쉬운데 간단하기까지 한데 이걸 어케 생각해내는걸까-