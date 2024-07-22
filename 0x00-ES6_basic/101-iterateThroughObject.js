export default function iterateThroughObject(reportWithIterator) {
  let lastArray = '';
  for (const element of reportWithIterator) {
    lastArray += element + ' | ';
  }
  if (lastArray.length > 0) {
    lastArray = lastArray.slice(0, -3);
  }
  return lastArray;
}
