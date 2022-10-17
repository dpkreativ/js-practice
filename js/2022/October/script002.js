function RecursionChallenge(num) {
  // code goes here
  let challengeToken = 'c4ht895qf2',
    output,
    finalOutput;

  // Recursion function
  function factorial(n) {
    return n === 1 ? 1 : n * factorial(n - 1);
  }

  // Initial Output
  output = factorial(num);

  // Intersperse function
  function intersperse(x, y) {
    let res = '',
      i,
      z = x.length > y.length ? x.length : y.length;

    for (i = 0; i < z; i++) {
      if (x[i] !== undefined) {
        res += x[i];
      }
      if (y[i] !== undefined) {
        res += y[i];
      }
    }

    return res;
  }

  // Final Output
  finalOutput = intersperse(String(output), challengeToken);
  return finalOutput;
}

// keep this function call here
console.log(RecursionChallenge(8));
