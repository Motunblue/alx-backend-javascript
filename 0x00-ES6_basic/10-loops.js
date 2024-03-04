export default function appendToEachArrayValue(array, appendString) {
  const arrayCpy = [];
  for (const value of array) {
    arrayCpy.push(appendString + value);
  }

  return arrayCpy;
}
