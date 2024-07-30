export default function cleanSet(set, startString) {
  if (startString.length === 0 || !set || !(set instanceof Set)
    || typeof (startString) !== 'string') {
    return '';
  }
  const finishString = Array.from(set)
    .filter((element) => element.startsWith(startString))
    .map((element) => element.replace(startString, ''));
  return finishString.join('-');
}
