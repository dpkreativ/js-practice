/*
=== Description ===
- Write a range function that takes two arguments: start and end; and returns an array containing all the numbers from start up to (and including) end.

- Next, write a sum function that takes an array of numbers and returns the sum of these numbers. (The array of numbers with come from the range function created earlier)

- Bonus: modify your range function to take an optional third argument that indicates the "step" value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior.

The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2];
*/

// === Solution ===

// Range function
const range = (start, end, step = 1) => {
  // Initialize variables
  let arr = [],
    i;

  // Conditionals
  if (start < end) {
    for (i = start; i <= end; i += step) {
      arr.push(i);
    }
  } else {
    for (i = start; i >= end; i += step) {
      arr.push(i);
    }
  }

  return arr;
};

console.log(range(1, 10, 2));

// Sum function
const sum = (arr) => {
  return arr.reduce((prev, curr) => prev + curr);
};

console.log(sum(range(1, 5)));
