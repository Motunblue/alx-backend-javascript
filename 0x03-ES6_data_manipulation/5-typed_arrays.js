export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const arrayView = new Int8Array(buffer);
  if (position >= length) {
    throw new Error('Position outside range');
  }
  arrayView[position] = value;
  return new DataView(buffer);
}
