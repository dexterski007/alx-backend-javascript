export default function createEmployeesObject(departmentName, employees) {
  const newArray = [];
  newArray.push(departmentName);
  newArray.push(employees);
  return newArray;
}
