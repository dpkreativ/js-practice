// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?isFullScreen=true
const intArray = [1, 3, 2, 6, 1, 2],
  posInt = 3,
  arrLn = intArray.length;

function divisibleSumPairs(n, k, ar) {
  let pairs = 0,
    i,
    filtered;

  for (i = 0; i < n; i++) {
    filtered = ar.filter((el, idx) => i !== idx);
    filtered.forEach((el) => ((ar[i] + el) % k === 0 ? pairs++ : null));
  }

  return pairs / 2;
}

console.log(divisibleSumPairs(arrLn, posInt, intArray));
