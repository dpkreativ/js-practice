// ==== Array.prototype.splice() ====
// INITIAL ARRAY
const gadgets = ['phone', 'laptop', 'headphones', 'earbuds'];

// ==== Example 1 ====
/*
Starting from index 3,
-> remove 0 elements
-> add 'solar lamp', 'clock', 'watch'
*/
gadgets.splice(3, 0, 'solar lamp', 'clock', 'watch');

// -> print to console
// console.log(gadgets);

/*
[
  'phone',     
  'laptop',    
  'headphones',
  'solar lamp',
  'clock',     
  'watch',     
  'earbuds'    
]
*/

// ==== Example 2 ====
/*
Starting from index 5 in our updated gadgets[] array,
-> remove 1 element
-> add 'smart watch'
*/
gadgets.splice(5, 1, 'smart watch');

// -> print to console
// console.log(gadgets);

/*
[
  'phone',
  'laptop',
  'headphones',
  'solar lamp',
  'clock',
  'smart watch',
  'earbuds'
]
*/

// ==== Example 3 ====
/*
Starting from index 3 in our updated gadgets[] array,
-> remove 2 elements
*/
gadgets.splice(3, 2);

// -> print to console
// console.log(gadgets);

/*
[ 'phone', 'laptop', 'headphones', 'smart watch', 'earbuds' ] 
*/
