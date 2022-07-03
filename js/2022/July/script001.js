// Learning about Maps in JavaScript

const user = new Map([
  ['First Name', 'Divine'],
  ['Last Name', 'Orji'],
  ['Age', 24],
  [false, 'Dance'],
]);

user.set('Pet', 'Gary');

console.log(user.delete('Age'));

user.forEach((value) => {
  console.log(value);
});

/*
Map(5) {
  'First Name' => 'Divine',
  'Last Name' => 'Orji',   
  'Age' => 24,
  false => 'Dance',        
  'Pet' => 'Gary'
}
*/
