const fs = require('fs');
const readline = require('readline');

const countStudents = (path) => {
  const categories = {};

  try {
    const fileStream = fs.createReadStream(path);

    fileStream.on('error', () => {
      throw new Error('Cannot load the database');
    });

    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    let isFirstLine = true;

    rl.on('line', (line) => {
      if (isFirstLine) {
        isFirstLine = false;
        return;
      }

      if (line.trim() === '') {
        return;
      }

      const student = line.split(',');
      const category = student[3].trim();

      if (!categories[category]) {
        categories[category] = [];
      }

      categories[category].push(student[1].trim());
    });

    rl.on('close', () => {
      const totalStudents = Object.values(categories).reduce((acc, curr) => acc + curr.length, 0);
      console.log(`Number of students: ${totalStudents}`);

      for (const [category, students] of Object.entries(categories)) {
        console.log(`Number of students in ${category}: ${students.length}. List: ${students.join(', ')}`);
      }
    });
  } catch (err) {
    console.error('Cannot load the database');
  }
};

module.exports = countStudents;
