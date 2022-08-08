/**
 * https://www.hackerrank.com/challenges/repeated-string/problem?isFullScreen=true
 */

function repeatedString(s, n) {
  // write your code here
  // Step one: Ensure that the length of the string is greater than n
  while (s.length < n) {
    s = s + s;
  }

  return s;
}
