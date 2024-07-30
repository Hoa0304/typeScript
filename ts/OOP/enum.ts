enum Status {
    CREATED, // 0
    PROCESSING, //1
    FINISHED, //2
}


enum EmployeeStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
    TERMINATED = 'TERMINATED',
    ON_LEAVE = 'ON_LEAVE'
}
  
// Sử dụng Enum
let employeeStatus: EmployeeStatus = EmployeeStatus.ACTIVE;
console.log(employeeStatus); // Output: 'ACTIVE'

const PI = 3.14159;
const GRAVITY_ACCELERATION = 9.8;
const MAX_ARRAY_SIZE = 1000;

// Sử dụng Constant
// let circumference = 2 * PI * radius;
// let weight = mass * GRAVITY_ACCELERATION;
let myArray = new Array(MAX_ARRAY_SIZE);
