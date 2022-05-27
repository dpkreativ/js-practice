const int = 8,
  str = 'UDDDUDUU';

function countingValleys(steps, path) {
  const pathArray = path.split('');

  let base = 0,
    valCount = 0,
    checker = false,
    i;

  for (i = 0; i < steps; i++) {
    let el = pathArray[i];

    if (el === 'U') {
      base++;

      if (base >= 0 && checker === true) {
        checker = false;
      }
    } else {
      base--;

      if (base < 0 && checker === false) {
        valCount++;
        checker = true;
      }
    }
  }
  console.log(valCount);
}

countingValleys(int, str);

// https://www.hackerrank.com/contests/microverse-fast-track/challenges/counting-valleys
