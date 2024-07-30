export default function cleanSet(set, startString) {
  if (startString.length === 0) {
    return '';
  }
  const finishString = [];
  set.forEach((element => {
    if (element.startsWith(startString)) {
      finishString.push(element.slice(startString.length));
    }
  }));
  return finishString.join('-');
}