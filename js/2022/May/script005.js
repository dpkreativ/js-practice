// https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true
function staircase(n) {
  const createArr = [...Array(n).fill(' ')];
  let i;

  for (i = 1; i <= n; i++) {
    createArr[n - i] = '#';
    console.log(createArr.join(''));
  }
}

staircase(6);
