// IIFE - Immediately Invoked Function Expression
// Một hàm được tạo ra từ một biểu thức
// Self - Invokeing Function

// IIFE - Syntax (func normal & arrow func)
(function (){
    console.log("IIFE");
})();

(() => {
    console.log("IIFE!");
})();

// Have to ";" before function expression
let fullName = "TrongSeag"; // Cause it will generate an err that is not the function

(() => {

})();

// ex. 
// let functionName = "TrongSeag" // here

// (() => {})();
// Generate an err

// IIFE is a "Private" Function
let i = 0;

(function myFunc() {
    i++;
    console.log(i);

    if(i < 10) // If i < 10, it will call myFunc()
        myFunc();
})();

// When IIFE is used ?
// Muốn tạo ra 1 đoạn mã chạy ngay
// Tuy nhiên đoạn mã ở trong đó biến và hàm nó không chui phạm vi Global và ảnh hưởng đến dự án

// IIFE đảm bảo tính toàn vẹn dữ liệu (Dữ liệu Private)
const app = (function() {
    // Private
    const cars = [];

    return {
        add(car) {
            cars.push(car);
        },
        edit(index, car) {
            cars[index] = car;
        },
        delete(index) {
            cars.splice(index, 1);
        }
    }
})();

// ex 1.
const number = (function(a, b) {
    a + b;
})(1, 2);
console.log(number); // Output: undefined
// Function return undefined - Cause func initialized not have "return"

// ex 2.
(function js(x) {
    const y = (j) => j * x;

    console.log(y(s()));

    function s() {
        return j();
    }

    function j() {
        return x ** x;
    }
})(3)
// Output: ? 81

// Hàm js() được thực thi ngay lập tức sau khi được khai báo và được gọi là IIFE. Lưu ý rằng tham số x của hàm js được truyền thực tế với giá trị 3.

// Giá trị trả về của hàm là y(s())), nghĩa là gọi ba hàm khác là y(), s() và j() vì hàm s() trả về j().

// j() trả về 3 ^ 3 = 27 để s() trả về27.

// y(s()) có nghĩa là y(27) trả về 27 * 3 = 81.


// When we call a(1):

// x ban đầu được truyền vào là 1.
// Câu lệnh x++ sẽ tăng x lên 2. Tuy nhiên, do toán tử ++ được sử dụng sau biến (x++ là hậu tố), 
// Giá trị của x chỉ tăng sau khi được sử dụng. Nhưng vì câu lệnh này không sử dụng giá trị của x, nên chỉ có việc tăng x lên 2.
// Hàm a trả về một hàm (closure) mà bên trong nó, biến x hiện đang có giá trị là 2.


