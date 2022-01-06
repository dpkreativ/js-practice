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

const L = ["(", "{", "["];
const R = [")", "}", "]"];

const validParenthesis = (input) => {
  let i = 0,
    j,
    temp = [],
    strArr = input.split("");

  while (i < strArr.length) {
    if (L.includes(strArr[i])) {
      temp.push(strArr[i]);
      console.log(temp);
      i++;
    } else {
      j = R.indexOf(strArr[i]);
      if (temp[-1] === L[j]) {
        temp.pop();
        i++;
      } else {
        return "input is invalid";
      }
    }
  }

  if (temp.length === 0) {
    return "input is valid";
  }
};

console.log(validParenthesis("{}[[]]"));
