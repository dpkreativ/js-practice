/**
 * https://www.hackerrank.com/challenges/repeated-string/problem?isFullScreen=true
 */

function repeatedString(s, n) {
  // write your code here
  // Step one: Ensure that the length of the string is greater than n
  while (s.length < n) {
    s = s + s;
  }

  const strArr = s.split('');
  let count = 0;

  for (let i = 0; i < n; i++) {
    strArr[i] === 'a' ? count++ : null;
  }

  return count;
}

console.log(repeatedString('abcac', 15));
