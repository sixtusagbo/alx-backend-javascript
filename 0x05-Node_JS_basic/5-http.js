const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 1245;

const countStudents = (dbFilePath) => new Promise((resolve, reject) => fs.readFile(dbFilePath, 'utf8', (err, data) => {
  if (err) {
    reject();
    throw new Error('Error: Cannot load the database');
  }
  let result = 'This is the list of our students\n';

  // Split the data into array of lines
  const lines = data
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line);

  // Covert each line into array of values
  const rows = lines.slice(1).map((line) => line.split(','));

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

  resolve(result);
}));

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/' && req.method === 'GET') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students' && req.method === 'GET') {
    const dbName = process.argv[2];
    const output = await countStudents(dbName);

    res.end(output);
  }
});

app.listen(port, hostname, () => console.log(`Server started at https://${hostname}:${port}`));

module.exports = app;
