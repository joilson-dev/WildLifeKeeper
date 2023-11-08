const data = require("../data/data");

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }

  const employee = data.employees.find((emp) => {
    const fullName = `${emp.firstName} ${emp.lastName}`;
    return fullName.includes(employeeName);
  });

  return employee || {};
}

module.exports = getEmployeeByName;
