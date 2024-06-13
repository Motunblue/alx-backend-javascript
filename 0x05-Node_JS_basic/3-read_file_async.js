const fs = require('fs');

/* eslint-disable no-continue */
const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      return reject(new Error('Cannot load the database'));
    }

    const lines = data.split('\n');
    const categories = {};
    let isFirstLine = true;

    for (const line of lines) {
      if (isFirstLine) {
        isFirstLine = false;
        continue;
      }

      if (line.trim() === '') {
        continue;
      }

      const student = line.split(',');
      const category = student[3].trim();

      if (!categories[category]) {
        categories[category] = [];
      }

      categories[category].push(student[1].trim());
    }

    const totalStudents = Object.values(categories).reduce((acc, curr) => acc + curr.length, 0);
    console.log(`Number of students: ${totalStudents}`);

    for (const [category, students] of Object.entries(categories)) {
      console.log(`Number of students in ${category}: ${students.length}. List: ${students.join(', ')}`);
    }
    return resolve(true);
  });
});

module.exports = countStudents;
