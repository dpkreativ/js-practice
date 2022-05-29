// https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

function diagonalDifference(arr) {
  const lastEl = arr.length - 1;

  let leftDiagonal = [],
    rightDiagonal = [],
    i;

  for (i = 0; i <= lastEl; i++) {
    leftDiagonal.push(arr[i][i]);
    rightDiagonal.push(arr[i][lastEl - i]);
  }

  const leftSum = leftDiagonal.reduce((a, b) => a + b);
  const rightSum = rightDiagonal.reduce((a, b) => a + b);

  const difference = Math.abs(leftSum - rightSum);

  return difference;
}

console.log(diagonalDifference(matrix));
