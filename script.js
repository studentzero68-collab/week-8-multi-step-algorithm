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
