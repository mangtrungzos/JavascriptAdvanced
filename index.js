// Closure = Tính khép kín or bao đóng
//           *A function can remember where it was created
//           *and can access variables outside its scope

//           Ứng dụng tính private trong OOP
//           Biến được tham chiếu (refer) trong closure sẽ không được xóa khỏi bộ nhớ khi hàm parent thực thi xong

function createdCounter() {
  let counter = 0;

  function increase() {
    return ++counter;
  }

  return increase;
}

const logCounter = createdCounter();

console.log(logCounter());
console.log(logCounter());
console.log(logCounter());

//
function createLogger(namespace) {
  function logger(message) {
    console.log(`[${namespace}] ${message}`);
  }

  return logger;
}

/** ---------- App ----------- */

// Register.js
const infoLogger = createLogger("Info");

infoLogger("start send email");
infoLogger("Send email fail, try again...");
infoLogger("Send email success for user xxx");

// Forgot password
const errorLogger = createLogger("Error");

errorLogger("email does not exist in DB");
errorLogger("Send email fail, try again...");
errorLogger("Send email success for user xxx");

// Applying closure to resolve: Save DB into localStorage
function createStorage(key) {
  const store = JSON.parse(localStorage.getItem(key)) ?? {};

  const save = () => {
    localStorage.setItem(key, JSON.stringify(store));
  };

  const storage = {
    get(key) {
      return store[key];
    },
    set(key, value) {
      store[key] = value; // store["fullName"] = "Sang";
      save(); // store = { "fullName": "Sang" };
    },
    remove(key) {
      delete store[key];
      save();
    },
  };

  return storage;
}

// Profile.js
const profileSetting = createStorage("profile_setting");

profileSetting.set("fullName", "Sang");
profileSetting.set("age", 22);
profileSetting.set("address", "VietNam");

console.log(profileSetting.get("fullName"));
// profileSetting.remove("fullName");

// ex.
function createApp() {
  const cars = [];

  return {
    add(car) {
      cars.push(car);
    },
    show() {
      console.log(cars);
    },
  };
}

const app = createApp();
app.add("BMW");
app.show();

// ex.
function a(x) {
  x++;
  return function () {
    console.log(++x);
  };
}

// IIFE
a(1)(); // x = 1, sau đó x++ => x = 2
// return func ++x tăng x từ 2 lên 3
a(1)(); // Kết quả này giống hệt lần đầu, Cause x chỉ tổn tại cục bộ trong mỗi lần gọi hàm (1 môi trường mới được tạo ra)
a(1)();

// Closure
// hàm bên trong nhớ và giữ nguyên giá trị của biến x trong lần gọi đầu tiên.
let x = a(1);
x();
x();
x();
// Output: 3,3,3 & 3,4,5
