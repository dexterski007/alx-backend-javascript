export default function getStudentIdsSum(students) {
  const reducedArray = students.reduce((accumulator, currentValue) => accumulator
  + currentValue.id, 0);
  return reducedArray;
}
