export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  const retArr = arr.map(({ id }) => (id));
  return retArr;
}
