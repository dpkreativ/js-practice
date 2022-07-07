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
let protein = grocery.slice(2, 5);

// -> print to console
console.log(protein);

/*
[ 'eggs', 'meat', 'fish' ]
*/
