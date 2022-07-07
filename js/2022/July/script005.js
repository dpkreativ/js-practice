// ==== Array.prototype.slice() ====
// INITIAL ARRAY
const grocery = [
  'tomatoes',
  'pumpkin leaves',
  'eggs',
  'meat',
  'fish',
  'onions',
];

// ==== Example 1 ====
/*
-> copy all elements from index 2 to index 5 
    except the element at index 5
*/
const protein = grocery.slice(2, 5);

// -> print to console
console.log(protein);

/*
[ 'eggs', 'meat', 'fish' ]
*/

// ==== Example 2 ====
/*
-> copy all elements from index 1 to the end of the array
*/
const noTomatoes = grocery.slice(1);

// -> print to console
console.log(noTomatoes);

/*
[ 'pumpkin leaves', 'eggs', 'meat', 'fish', 'onions' ]
*/
