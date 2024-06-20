const fs = require('fs');

/* eslint-disable no-continue */
const readDatabase = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      return reject(new Error(err.message));
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

      categories[category].push(student[0].trim());
    }

    return resolve(categories);
  });
});

module.exports = readDatabase;
