// Learning Regex with Arit

const regex1 = /(D|d)ivine/;
const string1 = 'vi';
const string2 = 'Divine';
const string3 = 'divine';
const string4 = 'Rivine';
const string5 = 'DivineOrji';
const string6 = 'OrjiDivine';

// console.log(regex1.test(string4));

// Phone number validation

const validNumberPattern = /^(0|\+234)(?<network>\d{3})\d{7}$/;

const n1 = '+2349021824073';
const n2 = '789210';
const n3 = '+7128da';
const n4 = '08163791230';

function testRegex(input) {
  if (validNumberPattern.test(input)) {
    const getNetwork = input.match(validNumberPattern).groups.network;
    console.log(getNetwork);
  } else {
    console.log(`${input} does not match regex pattern.`);
  }
}

testRegex(n4);
