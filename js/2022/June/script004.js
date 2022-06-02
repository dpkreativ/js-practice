// https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true

const intArray = [73, 67, 38, 33];

function gradingStudents(grades) {
  return grades.map((grade) =>
    grade < 38 || grade % 5 < 3 ? grade : grade + (5 - (grade % 5))
  );
}

console.log(gradingStudents(intArray));
