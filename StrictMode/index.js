// 3 ways use strict mode
// 1. "use strict" at the top of the file js
// 2. "use strict" in the function
// 3. "use strict" in the tag <script>

"use strict";
fullName = "TrongSeag"; // fullName is not defined

function testFunc() {
  age = 18;
}

testFunc();
console.log(fullName);
console.log(age);

// or

// function testFunc() {
//   "use strict";
//   age = 18;
// }

// writeable = true (Có thể sửa được)
const student = {
  fullName: "TrongSeag",
};

student.fullName = "SeagTrong";

console.log(student);

// writeable = false (Không thể sửa được) - freeze
// const student = Object.freeze({
//   fullName: "TrongSeag",
// });

// student.fullName = "SeagTrong";
// console.log(student);

const students = {};

// Khai báo mặc định là false
Object.defineProperty(students, "fullName", {
  value: "TrongSeag",
  // writable: true,
});

console.log(students);
