import fs from 'fs';

const readDatabase = async (filePath) => new Promise((resolve, reject) => fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    return reject(new Error('Cannot load the database'));
  }

  const result = {};

  // Split the data into array of lines
  const lines = data
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line);

  // Covert each line into array of values
  const rows = lines.slice(1).map((line) => line.split(','));

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

    result[field] = students;
  }

  return resolve(result);
}));

export default readDatabase;
