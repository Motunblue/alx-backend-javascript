export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  return studentsList
    .filter((student) => student.location === city)
    .map((s) => {
      const gradeObj = newGrades.filter((g) => g.studentId === s.id);
      return {
        ...s,
        grade: gradeObj.length > 0 ? gradeObj[0].grade : 'N/A',
      };
    });
}
