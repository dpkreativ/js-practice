// https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true

const intArray = [3, 2, 1, 3];

function birthdayCakeCandles(candles) {
  const lastCandle = candles.length - 1;

  const tallestCandles = candles
    .sort((a, b) => a - b)
    .filter((a) => a === candles[lastCandle]);

  console.log(tallestCandles.length);
}

birthdayCakeCandles(intArray);
