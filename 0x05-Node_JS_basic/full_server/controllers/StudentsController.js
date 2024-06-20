import readDatabase from '../utils';

const PATH = process.argv.length > 2 ? process.argv[2] : '';

class StudentsController {
  static getAllStudents(request, res) {
    readDatabase(PATH).then((val) => {
      res.statusCode = 200;
      const report = ['This is the list of our students'];

      const sorter = (a, b) => a[0].toLowerCase().localeCompare(b[0].toLowerCase());

      for (const [category, students] of Object.entries(val).sort(sorter)) {
        report.push(`Number of students in ${category}: ${students.length}. List: ${students.join(', ')}`);
      }
      res.send(report.join('\n'));
    }).catch((err) => {
      res.statusCode = 500;
      res.send(err.message);
    });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const allowed = ['CS', 'SWE'];
    if (!allowed.includes(major)) {
      res.statusCode = 500;
      res.send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(PATH).then((val) => {
      res.statusCode = 200;
      const names = val[major];
      res.send(`List: ${names.join(', ')}`);
    }).catch((err) => {
      res.statusCode = 500;
      res.send(err.message);
    });
  }
}

export default StudentsController;
module.exports = StudentsController;
