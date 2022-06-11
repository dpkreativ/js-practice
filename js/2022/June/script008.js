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
  const error = 'Invalid amount. Try a multiple of $20, $50, or $100.',
    rem = `${input % 20}`,
    isTen = Number(rem) === 10;

  let twenties = Math.floor(input / 20),
    notes = [0, 0, 0];

  if (twenties > 0 && rem.includes('0')) {
    if (twenties <= 2) {
      isTen ? (notes = error) : (notes[2] = twenties);
    } else if (!isTen) {
      notes[0] = Math.floor(twenties / 5);
      notes[2] = twenties % 5;
    } else {
      twenties = twenties - 2;
      notes[0] = Math.floor(twenties / 5);
      notes[1]++;
      notes[2] = twenties % 5;
    }
  } else {
    notes = error;
  }

  return notes;
}

console.log(atm(test));
