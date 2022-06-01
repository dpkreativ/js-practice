// https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true

const intArray = [1, 3, 4, 5, 6];

function minMaxSum(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  let min = sortedArr[0] + sortedArr[1] + sortedArr[2] + sortedArr[3];
  let max = sortedArr[1] + sortedArr[2] + sortedArr[3] + sortedArr[4];

  console.log(`${min} ${max}`);
}

minMaxSum(intArray);
