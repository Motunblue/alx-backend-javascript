export default function getStudentsByLocation(studentsList, city) {
  return studentsList.filter((s) => s.location === city);
}
