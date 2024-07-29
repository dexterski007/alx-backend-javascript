export default function getStudentsByLocation(students, city) {
  const filteredStudents = students.filter(({ location }) => location === city);
  return filteredStudents;
}
