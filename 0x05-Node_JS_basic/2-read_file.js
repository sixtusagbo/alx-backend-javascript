#!/usr/bin/node
const fs = require('fs');

const countStudents = (dbName) => {
  fs.readFile(dbName, 'utf8', (err, data) => {
    if (err) throw Error('Cannot load the database');

    // Split the data into array of lines
    const lines = data
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line);

    // Covert each line into array of values
    const rows = lines.slice(1).map((line) => line.split(','));

    console.log(`Number of students: ${rows.length}`);
    const fieldIndex = 3;
    const firstNameIndex = 0;
    const fieldValues = rows.map((row) => row[fieldIndex]);
    const fields = new Set(fieldValues);
    for (const field of fields) {
      const students = [];

      for (const row of rows) {
        if (row[fieldIndex] === field) {
          students.push(row[firstNameIndex]);
        }
      }

      const firstNames = students.join(', ');
      console.log(
        `Number of students in ${field}: ${students.length}. List: ${firstNames}`,
      );
    }
  });
};

module.exports = countStudents;
