// Time Complexity:
// Finding the average = O(n)
// Finding students below average = O(n)
// Bubble sort = O(n²)
// Overall complexity = O(n²) because sorting takes the longest

// Calculate the class average
function calculateAverage(students) {
  let total = 0;

  for (let i = 0; i < students.length; i++) {
    total += students[i].score;
  }

  return total / students.length;
}

// Sort students from highest score to lowest score
// Using Bubble Sort because sort() is not allowed
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
