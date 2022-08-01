// Write a function that takes an array of integers representing the price of a stock on different days. Return the maximum profit that can be made from buying and selling a single stock

var maxProfit = function(prices) {
  // I need to compare the difference between the highest and lowest profits

  // set smallest to ridiculously huge number
  let smallest = Infinity;
  // if no profit can be made, 0 will be returned
  // setting equal to 0 also allows for profits > 0 effectively.
  let bestProfit = 0;

  // loop through prices arr
  for (let i = 0; i < prices.length; i++) {
    // keeping track of current price in iteration
    const price = prices[i];
    // set smallest to Math.min of smallest and price
    // compares price and infinity
    smallest = Math.min(smallest, price);
    // bestProfit set to Math.max of 0 and current price - smallest
    // compares price and 0
    bestProfit = Math.max(bestProfit, price - smallest);
    
  };
  // return the greater of 0 and difference of price and smallest
  return bestProfit;
};
