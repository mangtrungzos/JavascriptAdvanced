// This = Từ khóa this trong JS đề cập đến đối tượng mà nó thuộc về

// Đặc tính:
//          1. Trong 1 phương thức, "this" tham chiếu tới đối tượng truy cập phương thức (đối tượng trước dấu .)
//          2. Đứng ngoài phương thức, "this" tham chiếu tới đối tượng global

// Note:
//      1. This trong hàm tạo là đại diện cho đối tượng sẽ được tạo
//      2. This trong 1 hàm là 'undefined' khi ở "strict mode"
//      3. Các phương thức bind(), call(), apply() có thể tham chiếu this tới đối tượng khác
//      4. Arrow function không có 'this', nó sẽ lấy 'this' ở phạm vi bên ngoài của nó (ở hàm gần nhất chứa nó)

// Một hàm được dùng làm thuộc tính của 1 object thì gọi là Phương thức
// Khi gọi 1 hàm không thông qua 1 object thì lúc đó từ khóa "this" sẽ trỏ ra đối tượng global (ở trình duyệt nó sẽ chọc ra phạm vi window)

// ex. 1
const iphone = {
  // Property
  name: "iPhone 13",
  price: 999,
  color: "Black",
  weight: 300,

  // Method
  takePhoto() {
    console.log(this);
  },
  objChild: {
    methodChild() {
      console.log(this);
    },
  },
};
// iphone.objChild.methodChild();

console.log(iphone.objChild.methodChild());

// ex. 2
function Car(name, color, weight) {
  this.name = name;
  this.color = color;
  this.weight = weight;
  this.run = function () {
    console.log("Running...", this);
  };
}

const mercedesS450 = new Car("Mercedes S450", "Black", "500kg");
console.log(mercedesS450.run());

// ex. 3
// This trong một hàm in ra là window
function test() {
  console.log(this);
}
test();
