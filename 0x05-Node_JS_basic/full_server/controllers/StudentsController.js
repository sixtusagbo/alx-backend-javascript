const readDatabase = require('../utils');

class StudentController {
  static async getAllStudents(request, response) {
    const dbName = process.argv[2];
    readDatabase(dbName).then((students) => {
      let output = 'This is the list of our students\n';
      const orderedFields = Object.keys(students).sort();
      for (const field of orderedFields) {
        output += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`;
        output += '\n';
      }
      response.status(200).send(output);
    }).catch(() => response.status(500).send('Cannot load the database'));
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' || major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
    }

    const dbName = process.argv[2];
    readDatabase(dbName).then((students) => {
      const output = `List: ${students[major].join(', ')}`;
      response.status(200).send(output);
    }).catch(() => response.status(500).send('Cannot load the database'));
  }
}

module.exports = StudentController;
