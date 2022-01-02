/*
Tobi has a graph showing several expected housing values over the next few years. She has to buy the house in one year and sell it in the next, all while losing money. She wants to keep her financial losses to a minimum. 

Consider the following array, which represents the house price for each year: arr = [10,5,3]. Purchasing in year 2 (at 5) and selling in year 3 results in a minimum loss for her (at 3). In this example, the loss is 5 - 3 = 2.

Complete the function to determine and return the minimum loss given an array of house prices.


Sample Input:

10 5 3

Sample Output:

2
*/

const minLoss = (prices) => {
  let losses = [], diff;
  for (let i = 0; i < prices.length; i++){
    diff = prices[i] - prices[i + 1];
    losses.push(diff);
  }
  losses.sort((a, b) => a - b);
  return losses[0];
}

console.log(minLoss([10, 5, 3]));