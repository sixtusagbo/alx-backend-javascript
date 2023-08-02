export default function updateUniqueItems(groceriesList) {
  try {
    for (const [key, value] of groceriesList) {
      if (value === 1) {
        groceriesList.set(key, 100);
      }
    }
  } catch (error) {
    throw Error('Cannot process');
  }

  return groceriesList;
}
