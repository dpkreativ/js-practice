// Sieve of Eratosthenes Algorithm

function getPrimes(input) {
  // Create an array where each element starts as true
  const numsArr = Array.from({ length: input + 1 }, () => true);

  // Create an array to store the prime numbers
  const primeNumbers = [];

  /*
  Loop through numsArr starting from numsArr[2]
  because 0 and 1 are definitely not prime numbers
  */
  for (let i = 2; i <= input; i++) {
    // Check if numsArr[i] === true
    if (numsArr[i]) {
      // add the i to the primeNumbers array
      primeNumbers.push(i);

      /* 
      convert all elements in the numsArr 
      whose indexes are multiples of i 
      to false
      */
      for (let j = i + i; j <= input; j += i) {
        numsArr[j] = false;
      }
    }
  }

  return primeNumbers;
}

console.log(getPrimes(21));
