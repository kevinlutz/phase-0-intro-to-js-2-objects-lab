// Write your solution in this file!
const employee = { name: "kevin", streetAddress: "510 Oak Grove Ave" };

function updateEmployeeWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromEmployeeByKey(obj, key) {
  const oneDeleted = Object.assign({}, obj); //deletes 'key' from clone
  delete oneDeleted[key];
  return oneDeleted;
}

//returns employee without the deleted key/value pair:
function destructivelyDeleteFromEmployeeByKey(obj, key) {
  delete obj[key];
  return obj;
}

/*
 employees
    updateEmployeeWithKeyAndValue(employee, key, value)
      ✓ returns an employee with the original key value pairs and the new key value pair
      ✓ it does not modify the original employee, but rather returns a clone with the new data
    destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
      ✓ updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee
    deleteFromEmployeeByKey(employee, key)
      ✓ deletes `key` from a clone of employee and returns the new employee (it is non-destructive)
      ✓ does not modify the original employee (it is non-destructive)
    destructivelyDeleteFromEmployeeByKey(employee, key)
      ✓ returns employee without the deleted key/value pair
      ✓ modifies the original employee
*/

/* 
1) employees
       updateEmployeeWithKeyAndValue(employee, key, value)
         "before each" hook for "returns an employee with the original key value pairs and the new key value pair":
     ReferenceError: employee is not defined
      at Context.<anonymous> (test/indexTest.js:4:25)
      at processImmediate (node:internal/timers:464:21)

  2) employees
       destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
         updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee:
     ReferenceError: destructivelyUpdateEmployeeWithKeyAndValue is not defined
      at Context.<anonymous> (test/indexTest.js:27:7)
      at processImmediate (node:internal/timers:464:21)

  3) employees
       deleteFromEmployeeByKey(employee, key)
         deletes `key` from a clone of employee and returns the new employee (it is non-destructive):
     ReferenceError: deleteFromEmployeeByKey is not defined
      at Context.<anonymous> (test/indexTest.js:41:25)
      at processImmediate (node:internal/timers:464:21)

  4) employees
       deleteFromEmployeeByKey(employee, key)
         does not modify the original employee (it is non-destructive):
     ReferenceError: deleteFromEmployeeByKey is not defined
      at Context.<anonymous> (test/indexTest.js:48:7)
      at processImmediate (node:internal/timers:464:21)

  5) employees
       destructivelyDeleteFromEmployeeByKey(employee, key)
         returns employee without the deleted key/value pair:
     ReferenceError: destructivelyDeleteFromEmployeeByKey is not defined
      at Context.<anonymous> (test/indexTest.js:56:25)
      at processImmediate (node:internal/timers:464:21)

  6) employees
       destructivelyDeleteFromEmployeeByKey(employee, key)
         modifies the original employee:
     ReferenceError: destructivelyDeleteFromEmployeeByKey is not defined
      at Context.<anonymous> (test/indexTest.js:62:25)
      at processImmediate (node:internal/timers:464:21)
*/
