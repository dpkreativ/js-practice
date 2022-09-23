const userIDs = new Set();

const ab001c = { firstName: 'Mark', lastName: 'Cuban' };
const ab002c = { firstName: 'Jeff', lastName: 'Bezos' };
const ab003c = { firstName: 'Bill', lastName: 'Gates' };

userIDs.add(ab001c); // adds ab001c to the Set
userIDs.add(ab002c); // adds ab002c to the Set
userIDs.add(ab003c); // adds ab003c to the Set
userIDs.add(ab001c); // will not add ab001c to the Set, because it already exists

const ab004c = { firstName: 'Warren', lastName: 'Buffet' };
userIDs.add(ab004c);
userIDs.delete(ab001c);

userIDs.clear();

console.log(userIDs);

/*
{ firstName: 'Jeff', lastName: 'Bezos' }
{ firstName: 'Bill', lastName: 'Gates' }
{ firstName: 'Warren', lastName: 'Buffet' }
*/
