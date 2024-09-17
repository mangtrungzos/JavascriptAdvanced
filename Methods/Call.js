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
