#!/usr/bin/node
const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => fs.readFile(path, 'utf-8', (err, data) => {
  if (err) {
    return reject(new Error('Cannot load the database'));
  }

  // Split data into array of lines
  const lines = data
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line);

  // Convert each line into array of values
  const rows = lines.slice(1).map((line) => line.split(','));

  // Work with the database
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
    let msg = `Number of students in ${field}: ${students.length}. `;
    msg += `List: ${firstNames}`;
    console.log(msg);
  }

  return resolve();
}));

module.exports = countStudents;
