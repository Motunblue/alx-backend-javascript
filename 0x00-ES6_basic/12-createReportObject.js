export default function createReportObject(employeesList) {
  const employeeReport = {
    allEmployees: employeesList,
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
  return employeeReport;
}
