#!/usr/bin/node
import fs from 'fs';

const readDatabase = (path) => new Promise((resolve, reject) => fs.readFile(path, 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return reject(new Error(err));
  }

  // Organize the data
  const lines = data.split('\n').map((line) => line.trim()).filter((line) => line).map((line) => line.split(','));
  const rows = lines.slice(1);

  // Get the indexes of the fields
  const fieldIndex = lines[0].indexOf('field');
  const firstNameIndex = lines[0].indexOf('firstname');
  const studentsPerFields = {};
  let fields = rows.map((row) => row[fieldIndex]);
  fields = [...new Set(fields)];

  for (const field of fields) {
    const row = rows.filter((row) => row[fieldIndex] === field);
    const students = row.map((row) => row[firstNameIndex]);
    studentsPerFields[field] = students;
  }

  return resolve(studentsPerFields);
}));

export default readDatabase;
