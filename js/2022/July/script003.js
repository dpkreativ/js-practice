// Learn about JavaScript Set

const trySet = new Set();

trySet.add('Hello');
trySet.add('Bye');

let school = { school: 'MECDA' };
trySet.add(school);
trySet.delete(school);

console.log(trySet.entries());
