export default function iterateThroughObject(reportWithIterator) {
  const lastArray = [];
  for (const element of reportWithIterator) {
    lastArray.push(element);
  }
  return lastArray.join(' | ');
}
