export default function getStudentIdsSum(studentsList) {
  return studentsList.reduce((sum, student) => sum + student.id, 0);
}
