function alphabetPosition(input) {
  let tempArr = [];
  for (let i = 0; i < input.length; i++) {
    tempArr.push(input.toLowerCase().charCodeAt(i) - 96);
  }
  return tempArr.filter((x) => x > 0 && x <= 26).join(' ');
}

console.log(alphabetPosition(`The sunset sets at twelve o'clock`));
