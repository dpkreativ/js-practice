/**
 * Tonight's Challenge:
 * Save form data to localHost using JavaScript and HTML
 */

let getForm = document.getElementById('test-form');

getForm.addEventListener('submit', (e) => {
  console.log(e.target.value);
});
