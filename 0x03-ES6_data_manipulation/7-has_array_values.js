export default function hasValuesFromArray(set, array) {
  return array.reduce((val, a) => val && set.has(a), true);
}
