// Learning Regex with Arit

const regex1 = /(D|d)ivine/;
const string1 = 'vi';
const string2 = 'Divine';
const string3 = 'divine';
const string4 = 'Rivine';
const string5 = 'DivineOrji';
const string6 = 'OrjiDivine';

console.log(regex1.test(string4));
