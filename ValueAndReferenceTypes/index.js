// Value types & Reference types

// 1. Value types (Primitive data types)
//    String
//    Number
//    Boolean
//    Null
//    Undefined
//    Symbol
//    BigInt

// 2. Reference types (Non-primitive data types)
//    Object
//    Array
//    Function

// Data types with function
// Value types
// Reference types: Trả về địa chỉ vùng nhớ

// Note: Khi tạo ra 1 biến sẽ có 1 vùng nhớ được tạo ra và lưu giá trị ở vùng nhớ đó
//       - Chỉ lưu địa chỉ trỏ tới ô nhớ của nó, chứ không lưu giá trị của nó

/**------------- Value types ------------ */
// ex. 1
let a = 1; // Tạo ra biến a, cấp 1 ô nhớ và lưu giá trị của a vào ô nhớ

let b = a; // Tạo ra biến b, cấp 1 ô nhớ khác, sao chép giá trị của a (1) vào ô nhớ

a = 2; // Sửa giá trị trong ô nhớ của a thành 2

// Biến a Giá trị = 2, Ô nhớ = 2
// Biến b Giá trị = 1, Ô nhớ = 1

console.log(b); // output = 1

/** ----------- Reference types ----------- */
// ex. 2
let c = {
  name: "Mercedes",
};
// Tạo ra biến c, cấp 1 ô nhớ và lưu giá trị {...} vào ô nhớ
// trả về địa chỉ đã lưu và gán cho biến c
// a: Giá trị: <#001> | Địa chỉ: #001 | Ô nhớ: { name: 'Mercedes' }

let d = c;
// Tạo ra biến d, trỏ biến d tới cùng địa chỉ ô nhớ của c
// d: Giá trị: <#001> | Địa chỉ: #001

c.name = "BMW";
// Sửa giá trị trong ô nhớ của c thành "BMW"

console.log(d.name);

// ex. 2
let a1 = {
  name: "Mercedes",
};
// Tạo ra địa chỉ #001 lưu vào a
// a: Giá trị: <#001> | Địa chỉ: #001 | Ô nhớ: { name: 'Mercedes' }

a1 = {
  name: "BMW",
  model: "i8",
};
// Gán vào a 1 object mới & địa chỉ #002
// a: Giá trị: <#002> | Địa chỉ: #002 | Ô nhớ: { name: 'BMW', model: 'i8' }

// *Khi biến được gán = 1 object mới thì 1 vùng nhớ mới được tạo ra

console.log(a1); // Output: { name: 'BMW', model: 'i8' }

/** ----------- Case: Object containing child object ----------- */
const student = {
  name: "TrongSeag",
  profile: {
    firstName: "Trong",
    lastName: "Seag",
    introduction: "Boy",
  },
};

const studentPRofile = student.profile;
student.profile.introduction = "good";
console.log(studentPRofile.introduction); // Output: good

/** ------------ Data types with function ------------- */
// Value types
function sum(a, b) {
  console.log(a, b);
}

const c1 = 1;
const d1 = 2;
sum(c1, d1);

// Reference types
function func(obj) {
  // Copy địa chỉ của biến a vào obj
  // Trỏ tới địa chỉ và sửa data trong ô nhớ thông qua địa chỉ đó
  obj.name = "Mercedes";
  console.log(obj);
}

const a2 = {
  name: "BMW",
};

func(a2);
console.log(a2);

// Side effect (Tác dụng phụ)
// ex.
function createCar(obj) {
  obj = JSON.parse(JSON.stringify(obj)); // Tạo ra 1 vùng nhớ mới
  // or obj = {...obj} - Chỉ kéo 1 cấp key: value
  obj.name = "Honda";
  return obj;
}

const car = {
  name: "Toyota",
};

const newCar = createCar(car);
console.log(newCar);
console.log(car);

// ex. Compare data
const s = {
  name: "BMW",
};

const v = {
  name: "BMW",
};

console.log(s === v); // Ouput: false

// ex.
const s1 = {
  name: "BMW",
};
const v1 = s1;
console.log(s1 === v1);
