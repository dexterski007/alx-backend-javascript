export default function appendToEachArrayValue(array, appendString) {
  const newarray = [];
  for (const [idx, val] of array.entries()) {
    newarray[idx] = appendString + val;
  }
  return newarray;
}
