export default function createInt8TypedArray(length, position, number) {
  const buffer = new ArrayBuffer(length);
  const dataView = new Uint8Array(buffer);
  try {
    dataView[position] = number;
  } catch (error) {
    return new Error('Position outside range');
  }

  return new DataView(buffer);
}
