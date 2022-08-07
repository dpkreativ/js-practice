/**
 * TECH HUB Regex challenge
 */

// INSTRUCTIONS
// Create a Regex pattern that validates emails at the domain "arit.dev".
// The pattern should validate emails that have only letters and numbers in the "user" part (the part before the "@")
// To test your pattern, uncomment the 7 console logs below. In the console, they should all return the expected boolean.

const emailRegex = /^[a-z]{1,}\d*@arit.dev$/;

console.log(`This should return TRUE: ${emailRegex.test('hello@arit.dev')}`);

console.log(
  `This should return TRUE: ${emailRegex.test('mentoring@arit.dev')}`
);

console.log(`This should return TRUE: ${emailRegex.test('mabel35@arit.dev')}`);

console.log(`This should return FALSE: ${emailRegex.test('helloarit.dev')}`);

console.log(`This should return FALSE: ${emailRegex.test('hello@aritdev')}`);

console.log(`This should return FALSE: ${emailRegex.test('@arit.dev')}`);

console.log(
  `This should return FALSE: ${emailRegex.test('mabel%45@arit.dev')}`
);
