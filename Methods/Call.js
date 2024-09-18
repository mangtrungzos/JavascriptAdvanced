// Call = Là một method nằm trong prototype của func constructor
//        Vì vậy ở bất cứ hàm nào đều có thể truy cập tới method Call
//        Phương thức này được dùng để gọi hàm và cũng có thẻ "bind this" cho hàm.

// VD:
//    1. Gọi hàm với "call method"
//    2. Gọi hàm và "bind this", lưu ý trong strict mode vẫn có this nếu được bind
//    3. Thể hiện tính kế thừa (extends) trong OOP
//    4. Mượn hàm (func borrowing), vd với "arguments"
//       Arguments tuy có tính chất như một array nhưng nó không có các phương thức trong array

// Note: Khi sử dụng call thì nó sẽ bind this trước sau đó sẽ gọi luôn hàm đó

// Ex. 1
// function random() {
//   console.log(Math.random());
// }

// random.call();

// Ex. 2
// "use strict";
// this.firstName = "Chau";
// this.lastName = "Ngan";

// function showFullName() {
//   console.log(`${this.firstName} ${this.lastName}`);
// }

// showFullName.call(this); this là đối tượng được bind (window)

// Ex. 3
function Animal(name, weight) {
  this.name = name;
  this.weight = weight;
}

function Horse(name, weight, legs) {
  Animal.call(this, name, weight);
  this.legs = legs;
}

const SangVu = new Horse("Sang vu", 47, 2);
// Khi gọi hàm khởi tạo Horse với từ khóa new, nó sẽ tạo ra một đối tượng mới, và this trong hàm khởi tạo sẽ tham chiếu đến đối tượng đó.
console.log(SangVu);

// Ex. 4
// const teacher = {
//   firstName: "Chau",
//   lastName: "Ngoc",
// };

// const me = {
//   firstName: "Sang",
//   lastName: "Vu",
//   showFullName() {
//     console.log(`${this.firstName} ${this.lastName}`);
//   },
// };

// me.showFullName.call(teacher); // Func borrowing

// Ex with Arguments
function logger() {
  // console.log(...arguments);
  // console.log(arguments);
  Array.prototype.forEach.call(arguments, (item) => {
    console.log(item);
  });
}

logger(1, 2, 3, 4);
