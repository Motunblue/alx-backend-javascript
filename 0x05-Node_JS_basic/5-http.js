const app = require('http').createServer();
const fs = require('fs');

const file = process.argv.length > 2 ? process.argv[2] : '';

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

      categories[category].push(student[0].trim());
    }

    const report = [];
    const totalStudents = Object.values(categories).reduce((acc, curr) => acc + curr.length, 0);
    report.push(`Number of students: ${totalStudents}`);

    for (const [category, students] of Object.entries(categories)) {
      report.push(`Number of students in ${category}: ${students.length}. List: ${students.join(', ')}`);
    }
    return resolve(report.join('\n'));
  });
});

const hostname = 'localhost';
const port = 1245;

app.on('request', (req, res) => {
  const { url } = req;
  res.setHeader('Content-Type', 'text/plain');

  if (url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    const initialMessage = 'This is the list of our students\n';

    countStudents(file).then((val) => {
      res.statusCode = 200;
      res.end(initialMessage + val);
    }).catch((err) => {
      res.statusCode = 500;
      res.end(initialMessage + err.message);
    });
  } else {
    res.statusCode = 404;
    res.end('Page not found');
  }
});

app.listen(port, hostname);

module.exports = app;
