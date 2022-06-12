/* QUESTION:
An ATM machine is loaded with 3 notes: $100, $50, and $20. 
Write a function that returns an array of numbers, representing the number of each note denomination to be dispensed by the ATM machine when a customer tries to withdraw money.

Example One:
Amount = $150
Function return: [1, 1, 0]
Explanation: This implies that $100 = 1, $50 = 1, $20 = 0

Example Two:
Amount = $230
Function return: [1, 1, 4]
Explanation: This implies that $100 = 1, $50 = 1, $20 = 4

Note that in each case, the function should return based on the minimum number of notes to be dispensed.
*/

/*
What I can do:
- Divide the number into twenties
- Get the modulo value which must be 10 or 0
- Group the twenties into $100s
- If there's a $10, check if there are at least two twenties so you can get a 50
- This means there can only be one $50
*/

const test = 150;

function atm(input) {
  const error = 'Invalid amount. Try a multiple of $20, $50, or $100.', // error message
    rem = `${input % 20}`, // get remainder from dividing input by 20
    isTen = Number(rem) === 10; // check if remainder equals 10

  let twenties = Math.floor(input / 20), // get number of 20s in input
    notes = [0, 0, 0]; // initial array for the denominations

  // - Check if the number of 20s in input is greater than zero
  // - Check if the remainder has 0 in it (between 0 and 20, only 10 and 0 return true)
  // - Change notes variable to display error message if none of the conditions are met
  if (twenties > 0 && rem.includes('0')) {
    if (twenties <= 2) {
      // - Check if number of 20s is less than or equal to 2 (used this to catch an edge case where the input equals 30, as the ATM will be unable to dispense $10)
      isTen ? (notes = error) : (notes[2] = twenties);
    } else if (!isTen) {
      // - If the remainder is not equal to 10, this should run (it ensures that the 20s add up to a 100 if there won't be any 10s remaining)
      notes[0] = Math.floor(twenties / 5);
      notes[2] = twenties % 5;
    } else {
      // - For cases where a 10 will remain, this part subtracts two twenties, and just assumes a $50, then calculates the rest of the denominations.
      twenties = twenties - 2;
      notes[0] = Math.floor(twenties / 5);
      notes[1]++;
      notes[2] = twenties % 5;
    }
  } else {
    notes = error;
  }

  // - Finally, return the notes array, or the error message (based on what the input gives)
  return notes;
}

console.log(atm(test));
