// https://www.hackerrank.com/challenges/bon-appetit/problem?isFullScreen=true
const getBill = [3, 10, 2, 9],
  didNotEat = 1,
  annaPaid = 12;

function bonAppetit(bill, k, b) {
  bill.splice(k, 1);
  let fairShare = bill.reduce((a, b) => a + b) / 2;
  let diff = Math.abs(fairShare - b);
  console.log(diff === 0 ? 'Bon Appetit' : diff);
}

bonAppetit(getBill, didNotEat, annaPaid);
