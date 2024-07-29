export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((students) => students.location === city)
    .map((obj) => {
      let grade;
      const upgraded = newGrades.filter(({ studentId }) => studentId === obj.id);
      if (upgraded.length > 0) {
        grade = upgraded[0].grade;
      } else {
        grade = 'N/A';
      }
      return { ...obj, grade };
    });
}
