// Bind = Ràng buộc từ khóa "this" trong hàm, các phương thức trở thành 1 đối tượng khác

// Characteristics:
//                 1. Phương thức bind() sẽ trả về 1 hàm mới (với this mới)
//                 2. Có thể nhận biết các đối số như hàm ban đầu
// Window scope:
// ex. 1
this.firstName = "Chau";
this.lastName = "Ngan";

const teacher = {
  firstName: "Chau",
  lastName: "Ngoc",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

// Case 1:
console.log(teacher.getFullName()); // Chau Ngoc

// Case 2: Ràng buộc đối tượng teacher with bind
const getTeacherName = teacher.getFullName.bind(teacher);
// teacher.getFullName : Func not called yet, it only accesses the func
console.log(getTeacherName()); // "Chau Ngan"

// ex. 1.1
const student = {
  firstName: "Sang",
  lastName: "Vu",
};

// const getTeacherName = teacher.getFullName.bind(student)
// console.log(getTeacherName()) // Sang Vu
