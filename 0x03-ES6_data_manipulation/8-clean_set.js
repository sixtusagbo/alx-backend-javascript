export default function cleanSet(set, startString) {
  if (!startString.length) {
    return '';
  }

  const values = [...set].filter((string) => string.startsWith(startString));

  return values.reduce((accumulator, currentString) => {
    let result = currentString.slice(startString.length);

    if (currentString !== values[values.length - 1]) {
      result += '-';
    } else {
      console.log();
    }

    return accumulator + result;
  }, '');
}
