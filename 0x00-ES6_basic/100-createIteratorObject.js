/* eslint-disable no-plusplus */
export default function createIteratorObject(report) {
  return {
    [Symbol.iterator]() {
      let nextIndex = 0;
      const employeesArray = [];
      for (const dept of Object.values(report.allEmployees)) {
        employeesArray.push(...dept);
      }
      return {
        next() {
          return nextIndex < employeesArray.length
            ? { value: employeesArray[nextIndex++], done: false }
            : { done: true };
        },
      };
    },
  };
}
