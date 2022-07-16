/**
 * Tonight's Challenge:
 * Save form data to localHost using JavaScript and HTML
 */

let getForm = document.getElementById('test-form');
let getInput = document.getElementById('test-input');

getForm.addEventListener('submit', () => {
  console.log(getInput.value);
});
