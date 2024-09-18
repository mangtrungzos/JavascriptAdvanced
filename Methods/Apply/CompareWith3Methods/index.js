// Similar

// 1. Access syntax:
function fn() {
  // bind
  fn.bind();

  // call
  fn.call();

  // apply
  fn.apply();
}

// 2. methods inherited from Function.prototype
function fN() {
  fN.bind === Function.prototype.bind; // true
  fN.call === Function.prototype.call; // true
  fN.apply === Function.prototype.apply; // true
}

// Differences
// 1. arguments and how it works
function Fn() {}
/**
 * Bind method
 * - Trả ra hàm với 'this' tham chiếu tới 'thisArg'
 * - Không thực hiện gọi hàm
 * - Nếu được bind kèm `arg1, arg2, ...` thì các đối só này sẽ được ưu tiên hơn
 */
const newFn = Fn.bind(thisArg, arg1, arg2, ...) // thisArg sẽ được ưu tiên hơn
newFn(arg1, arg2, ...)

/**
 * Call method
 * - Thực hiện bind `this` với `thisArg` và thực hiện gọi hàm
 * - Nhận các đối số cho hàm gốc từ `arg1, arg2, ...`
 */

Fn.call(thisArg, arg1, arg2, ...)

/**
 * Apply method
 * - Thực hiện bind `this` với `thisArg` và thực hiện gọi hàm
 * - Nhận các đối số cho hàm gốc bằng đói số thứ 2 dưới dạng mảng `[arg1, arg2, ...]`
 */

Fn.apply(thisArg, [arg1, arg2, ...])
