// Data Structures and Algorithm Study Group with Ayomide Oyekanmi
/**
 * Given an arr[] of size N, containing elements from 1 to N
 * Find the position after K jumps from index 1, where the jump from the ith index
 * sends to arr[i]
 */

/**
 * Explanation:
 * Assuming you have an array like:
 *
 * size = 6
 * arr = [1, 2, 3, 4, 5, 6]
 *
 * If you're making three jumps:
 * K = 3
 *
 * First Jump:
 * START FROM arr[0] which has a value of 1
 * LAND IN arr[1] which has a value of 2
 *
 * Second Jump:
 * START FROM arr[2] which has a value of 3
 * LAND IN arr[4] which has a value of 5
 *
 * START FROM arr[5] which has a value of 6
 *
 * Omoh na to Google the correct challenge oh.
 *
 * Anyway to solve this:
 *
 * while / for => K times
 *
 */

// Function to determine the position
function LastElement(arr, N, K) {
  // Decrement all array values by 1
  // so it is easy to jump
  for (let i = 0; i < N; i++) {
    --arr[i];
  }

  // Initialize the unordered Map
  let visit = new Array(N);

  // Initialize elem and len
  let elem = 0,
    len = 0;

  // Traverse until K is not 0
  //or loop is detected
  while (K && !visit[elem]) {
    // Store len in map
    visit[elem] = ++len;

    // Decrement K for a jump
    K--;

    // Jump from one element to another
    elem = arr[elem];
  }

  // After loop is over, take modulo of K
  K = K % (len + 1 - visit[elem]);

  // Now traverse loop K times
  for (let i = 1; i <= K; i++) {
    elem = arr[elem];
  }
  // Lastly return the element
  return elem + 1;
}

// Driver code

let arr = [3, 2, 4, 1];
let N = 4;
let K = 5;
let ans = LastElement(arr, N, K);
document.write(ans);
