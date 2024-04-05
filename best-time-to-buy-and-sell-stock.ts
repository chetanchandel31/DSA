function maxProfit(prices: number[]): number {
  let maxProfit = 0;

  // initialise buyDay[0] and sellDay[0 + 1]
  let buyI = 0;
  let sellI = 0;

  // while sellDay !== lastDay
  while (sellI < prices.length) {
    const profit = prices[sellI] - prices[buyI];

    // compare and update maxProfit
    maxProfit = Math.max(maxProfit, profit);

    // if price going down
    if (profit < 0) {
      buyI = sellI;
      sellI++;
    } else {
      // if price going up
      sellI++;
    }
  }

  return maxProfit;
}
