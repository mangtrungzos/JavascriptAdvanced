function Name(a,b) {
  this.a = a;
  this.b = b;
}

const result = Name('snn','nns');

// Đối với tên của func được viết hoa thì nó là một function constructor và sẽ được dùng để tạo ra một object
// Không có từ khóa new thì nó chỉ là một hàm và nó sẽ không tạo ra 1 object
// Nên 'this' ở đây sẽ không phải là 'object' đó nhưng nó sẽ trỏ vào 'window'

/**
 * this.a = a;
 * this.b = b;
 * Đây là đang khai báo biến a và b ở phạm vi window
 *
 * const result = Name('snn','nns'); Nên result sẽ trả ra undefined - Bởi hàm Name không return ra gì cả
 */