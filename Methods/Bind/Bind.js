// Bind = Phương thức bind() cho phép ràng buộc "this" cho một phương thức (func)
//        Ràng buộc từ khóa "this" trong hàm, các phương thức trở thành 1 đối tượng khác

// Characteristics:
//                 1. Phương thức bind() sẽ trả về 1 hàm mới (với this mới)
//                 2. Có thể nhận biết các đối số như hàm ban đầu

// Ex:
// 1. bind document object
// 2. DOM listen events
// 3. Kết hợp object methods + DOM listen events

// Note:
//      1. Phương thức bind() cho phép ràng buộc this cho 1 phương thức (func)
//      2. Phương thức bind() sẽ trả về một hàm mới với context được bind
//      3. Hàm được trả về từ bind() vẫn có thể nhận các đối số của hàm gốc
//      4. Là một phương thức nằm trong constructor func

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
