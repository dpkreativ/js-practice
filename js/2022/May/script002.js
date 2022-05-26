const int = 8,
  str = 'UDDDUDUU';

function countingValleys(steps, path) {
  const pathArray = path.split('');

  let base = 0,
    valCount = 0,
    checker = false,
    i;

  for (i = 0; i < 8; i++) {
    let el = pathArray[i];

    if (el === 'U') {
      base++;
      checker = false;
    } else {
      base--;
      base < 0 && checker === true ? valCount++ : null;
    }
  }
  console.log(pathArray);
}

countingValleys(int, str);

// https://www.hackerrank.com/contests/microverse-fast-track/challenges/counting-valleys
