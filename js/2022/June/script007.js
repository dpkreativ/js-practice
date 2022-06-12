// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=true
const records = [10, 5, 20, 20, 4, 5, 2, 25, 1];
const records1 = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];

function breakingRecords(scores) {
  let bestWorst = [0, 0],
    a = scores[0],
    b = scores[0];

  scores.forEach((el) => {
    if (el > a) {
      bestWorst[0]++;
      a = el;
    } else if (el < b) {
      bestWorst[1]++;
      b = el;
    }
  });

  return bestWorst;
}

console.log(breakingRecords(records));
