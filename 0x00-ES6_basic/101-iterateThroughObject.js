/* eslint-disable no-unused-vars */
export default function iterateThroughObject(reportWithIterator) {
  let result = '';

  for (const person of reportWithIterator) {
    result += person;
    result += ' | ';
  }
  result = result.substring(0, result.length - 3);

  return result;
}
