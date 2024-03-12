export default function getListStudentIds(studentsList) {
  if (studentsList instanceof Array) {
    return studentsList.map(s => s.id);
  }
  return [];
}
