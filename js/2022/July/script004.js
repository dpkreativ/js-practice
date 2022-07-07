// Array splice vs slice examples

// ==== Array.prototype.splice() ====
// INITIAL ARRAY
const gadgets = ['phone', 'laptop', 'headphones', 'earbuds'];

gadgets.splice(3, 0, 'solar lamp', 'clock', 'watch');
console.log(gadgets);

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
