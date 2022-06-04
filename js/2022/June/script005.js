// https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true
const sInt = 7,
  tInt = 10,
  aInt = 4,
  bInt = 12,
  applesArr = [2, 3, -4],
  orangesArr = [3, -2, -4];

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  function range(x) {
    return x >= s && x <= t;
  }

  function checkFruits(y, z) {
    return y.map((el) => range(el + z)).filter((el) => el === true).length;
  }

  console.log(checkFruits(apples, a));

  console.log(checkFruits(oranges, b));
}

countApplesAndOranges(sInt, tInt, aInt, bInt, applesArr, orangesArr);
