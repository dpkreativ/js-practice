/*
Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.

Constraints:
1 <= s.length <= 104
s consists of parentheses only => (){}[]

Example 1:
Input: s = "{}[[]]"
Output: valid

Example 2:
Input: s = "{[](()[])}"
Output: valid

Example 3:
Input: s = "(]"
Output: invalid

Example 4:
Input: s = "([))]"
output: invalid

Example 5:
Input: s = "{()}"
Output: valid

Example 6:
Input: s = "[(])"
Output: invalid
*/

// Test cases
let test1 = "{}[[]]"; // expect: valid
let test2 = "{[](()[])}"; // expect: valid
let test3 = "(]"; // expect: invalid
let test4 = "([))]"; // expect: invalid
let test5 = "{()}"; // expect: valid
let test6 = "[(])"; // expect: invalid
let test7 = "(])"; // expect: invalid

const L = ["(", "{", "["];
const R = [")", "}", "]"];

const validParenthesis = (s) => {
  if (s.length % 2 !== 0) return "invalid";

  let strArr = s.split("");

  let temp = [];
  strArr.forEach((el) => {
    if (L.includes(el)) {
      temp.push(el);
    } else {
      let i = R.indexOf(el),
        j = temp.length - 1;
      if (temp[j] === L[i]) temp.pop();
    }
  });

  return temp.length === 0 ? "valid" : "invalid";
};

console.log(validParenthesis(test7));
