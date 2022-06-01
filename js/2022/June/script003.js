// https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true

const timeString = '02:05:45PM';

function timeConversion(s) {
  console.log(s);
  let timeArray = s.split(':');
  let hour = Number(timeArray[0]),
    z = timeArray[2];

  z.includes('P') && hour !== 12
    ? (timeArray[0] = hour + 12)
    : z.includes('A') && hour === 12
    ? (timeArray[0] = '00')
    : null;

  console.log(timeArray.join(':').replace(/[ap]m/i, ''));
}

timeConversion(timeString);
