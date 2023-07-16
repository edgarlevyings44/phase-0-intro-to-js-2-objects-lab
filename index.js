// Write your solution in this file!
const employee = {
    name:'DeMarcus',
    streetAddress:'1st Avenue',
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObject= {...employee};
    newObject [key]= value;
    return newObject;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value) {
    employee [key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newDelObj = {...employee}
    delete newDelObj[key];
    return newDelObj;
}

function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee[key];
    return employee;


}
