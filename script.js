/* Time Complexity: 2hourss
Finding the average = O(n)
Finding students below average = O(n)
Bubble sort = O(n²)
Overall complexity = O(n²) because sorting takes the longest*/

/* Calculate the class average */
function calculateAverage(students) {
  let total = 0;

  for (let i = 0; i < students.length; i++) {
    total += students[i].score;
  }

  return total / students.length;
}

/* Sort students from highest score to lowest score */
/* Using Bubble Sort because sort() is not allowed */
function sortStudents(students) {
  const sortedStudents = [...students];

  for (let i = 0; i < sortedStudents.length - 1; i++) {
    for (let j = 0; j < sortedStudents.length - 1 - i; j++) {
      if (sortedStudents[j].score < sortedStudents[j + 1].score) {
        let temp = sortedStudents[j];
        sortedStudents[j] = sortedStudents[j + 1];
        sortedStudents[j + 1] = temp;
      }
    }
  }

  return sortedStudents;
}

/* Find students who scored below the average */
function getBelowAverage(students, average) {
  let belowAverage = [];

  for (let i = 0; i < students.length; i++) {
    if (students[i].score < average) {
      belowAverage.push(students[i]);
    }
  }

  return belowAverage;
}

/* Main function*/
function analyzeStudents(students) {
  const average = calculateAverage(students);
  const sortedStudents = sortStudents(students);

  let topThree = [];

  for (let i = 0; i < 3 && i < sortedStudents.length; i++) {
    topThree.push(sortedStudents[i]);
  }

  return {
    topThree: topThree,
    average: average,
    belowAverage: getBelowAverage(students, average)
  };
}

/* Test data */
const students = [
  { name: "John", score: 78 },
  { name: "Sarah", score: 92 },
  { name: "Mike", score: 65 },
  { name: "Emma", score: 88 },
  { name: "David", score: 55 }
];

const results = analyzeStudents(students);

console.log("Top 3 Students:", results.topThree);
console.log("Class Average:", results.average);
console.log("Below Average:", results.belowAverage);

/* Test Case 1*/
console.assert(
  calculateAverage(students) === 75.6,
  "Average calculation failed"
);

/* Test Case 2*/
console.assert(
  results.topThree[0].name === "Sarah",
  "Top scorer should be Sarah"
);

/* Test Case 3*/
console.assert(
  results.topThree.length === 3,
  "Should return exactly 3 students"
);

/* Test Case 4 */
console.assert(
  results.belowAverage.length === 2,
  "Should have 2 students below average"
);

/* Test Case 5 */
console.assert(
  results.belowAverage.some(student => student.name === "Mike"),
  "Mike should be below average"
);

console.log("All tests completed");