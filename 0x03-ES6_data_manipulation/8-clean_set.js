export default function cleanSet(set, startString) {
  const s = [];
  for (const val of set.values()) {
    if (typeof val === 'string' && val.startsWith(startString)) {
      const sub = val.slice(startString.length);
      if (val !== sub) { s.push(sub); }
    }
  }
  return s.join('-');
}
