export default function appendToEachArrayValue(array, appendString) {
  let array_cpy = [];
  for (let value of array) {
    array_cpy.push(appendString + value);
  }

  return array_cpy;
}
