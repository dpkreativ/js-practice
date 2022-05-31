// https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true

const intArray = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
  console.log(arr);
  let ln = arr.length,
    val = [0, 0, 0];

  function rounded(x) {
    return Math.round(x * 1000000) / 1000000;
  }

  arr.forEach((el) => (el > 0 ? val[0]++ : el < 0 ? val[1]++ : val[2]++));

  val.forEach((el) => console.log(rounded(el / ln)));
}

plusMinus(intArray);
