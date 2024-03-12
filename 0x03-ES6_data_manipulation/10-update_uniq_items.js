export default function updateUniqueItems(item) {
  if (!(item instanceof Map)) { throw new Error('Cannot process'); }
  item.forEach((value, key) => {
    if (value === 1) {
      item.set(key, 100);
    }
  });
}
