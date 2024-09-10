// Hoisting = Kéo lên / Đưa lên

// Declare with "var" và declare the function at the top of the declared scope

// ex. 1
console.log(age); // undefined - đưa biến age được khai báo lên đầu phạm vi
// var age
var age = 16;

// ex. 2
console.log(sum(6, 9));

// Phần khai báo hàm sẽ được đưa lên đầu, sử dụng func này trước khi khai báo
function sum(a, b) {
  return a + b;
}

// Hoisting with "let", "const"
{
  console.log(fullName); // ReferenceError: Cannot access 'fullName' before initialization
  let fullName = "TrongSeag";
}
// Note: let & const khi được hoisted không được tạo giá trị và được đưa vào "Temporal Dead Zone" - Vùng tạm thời không thể sử dụng

// ex. 1
// Việc hoist của let fullName giúp hiểu được trong phạm vi đã có biến fullName sẽ không lấy fullName bên ngoài
let fullName = "TrongSeag";

{
  {
    console.log(fullName);
    let fullName = "TrongSeag";
  }
}

// ex. 2
const counter1 = makeCounter();

console.log(counter1()); // Output: ?

function makeCounter() {
  let counter = 0;

  return increase;

  function increase() {
    return ++counter;
  }
}

// ex. 3
var tip = 100;

(function () {
  console.log("I have $" + husband());

  function wife() {
    return tip * 2;
  }

  function husband() {
    return wife() / 2;
  }

  var tip = 10;
})();
// Output: ?
// tip : undefined cause var tip = 10 declared in function
// Biến tip được hoisted với giá trị là undefined
// Khi tính toán với 1 biến undefined => result: NaN
