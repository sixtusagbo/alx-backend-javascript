const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

const countStudents = (path) => new Promise((resolve, reject) => fs.readFile(path, 'utf-8', (err, data) => {
  let result = 'This is the list of our students\n';

  if (err) {
    result += 'Cannot load the database';
    return reject(new Error(result));
  }

  // Split the data into array of lines
  const lines = data
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line);

  // Convert each line into array of values
  const rows = lines.slice(1).map((line) => line.split(','));

  // Work with the database
  result += `Number of students: ${rows.length}\n`;
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
    result += `Number of students in ${field}: ${students.length}. List: ${firstNames}\n`;
  }

  return resolve(result);
}));

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  res.end('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  const dbName = process.argv[2];
  try {
    const output = await countStudents(dbName);

    res.end(output);
  } catch (error) {
    res.end(error.message);
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}`));

module.exports = app;
