let prices = [7, 1, 5, 3, 6, 8];

const maxProfit = (prices) => {
  let minStockPurchaseStock = prices[0];
  profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minStockPurchaseStock) {
      minStockPurchaseStock = prices[i];
    }
    profit = Math.max(profit, prices[i] - minStockPurchaseStock);
  }
  return profit;
};

document.write(maxProfit(prices));
