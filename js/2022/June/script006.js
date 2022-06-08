// https://www.hackerrank.com/challenges/kangaroo/problem?isFullScreen=true
const x1Int = 0,
  v1Int = 3,
  x2Int = 4,
  v2Int = 2;

function kangaroo(x1, v1, x2, v2) {
  const ab = Math.abs(x1 - x2),
    cd = x1 + v1 * ab,
    ef = x2 + v2 * ab;

  console.log(cd);
  console.log(ef);

  return cd === ef ? 'YES' : 'NO';

  // if (ab || cd) {
  //   console.log('YES');
  // } else {
  //   console.log('NO');
  // }
}

console.log(kangaroo(x1Int, v1Int, x2Int, v2Int));
