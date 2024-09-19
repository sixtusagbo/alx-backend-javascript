#!/usr/bin/node
import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    const dbName = process.argv[2];
    readDatabase(dbName).then((studentsPerFields) => {
      let result = 'This is the list of our students\n';
      const orderedFields = Object.keys(studentsPerFields).sort();
      for (const field of orderedFields) {
        const numOfStudents = studentsPerFields[field].length;
        const students = studentsPerFields[field].join(', ');
        result += `Number of students in ${field}: ${numOfStudents}. List: ${students}\n`;
      }
      res.status(200).send(result);
    }).catch(() => res.status(500).send('Cannot load the database'));
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const db = process.argv[2];
      const studentsPerFields = await readDatabase(db);

      const students = studentsPerFields[major].join(', ');
      res.send(`List: ${students}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
