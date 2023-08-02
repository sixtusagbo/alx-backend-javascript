export default function hasValuesFromArray(set, array) {
  let result = true;

  for (const num of array) {
    if (!set.has(num)) {
      result = false;
      return result;
    }
    result = true;
  }

  return result;
}
