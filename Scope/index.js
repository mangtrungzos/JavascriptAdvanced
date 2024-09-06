// Scope - Scope types:
//         Global
//         Code Block - Khối mã: let, const
//         Local scope - Hàm: var, function

//         Khi gọi mỗi hàm luôn có 1 phạm vi mới được tạo
//         Các hàm có thể truy cập các biến được khai báo trong phạm vi của nó và bên ngoài của nó
//         Cách thức một biến được truy cập
//         Khi nào một biến bị xóa khỏi bộ nhớ ?
//            - Biến toàn cầu?
//            - Biến trong code block & trong hàm?
//            - Biến trong hàm được tham chiếu bởi 1 hàm?

//         Biến Global xóa khỏi bộ nhứ khi thoát khỏi chương trình

/**  Global scope  */
var message = "Global scope"; // variable declared in global scope (var, let, const)
// therefore we can access it from anywhere

function logger() {
  console.log(message);
}

logger();

/**  Code Block Scope  */
{
  const age = 22;
}
// console.log(age); // Error: age is not defined
// if else, for, while, v.v in couple {} actually it's a code block

// var: Sẽ nhảy ra phạm vị gần nhất ở bên ngoài

/**  Local Scope   */
// This Scope will be created when a function called

function log() {
  const fullName = "Johan";
  function log2() {
    console.log(fullName);
  }
  log2();
}

log();

// functions can access variable outside their scope
const ages = 23;

function logAge() {
  console.log(ages);
}
logAge();

// Or :
const names = "Sang";
function logName() {
  function showName() {
    console.log(names);
  }
  showName();
}
logName();

/**   Cách thức một biến được truy cập   */

// Nó sẽ tìm biến ở phạm vi gần nhất để có thể truy cập
// Mỗi biến sẽ được khai báo ở phạm vi khác nhau
const agez = 18;

{
  const agez = 19;
  {
    {
      const agez = 20;
      {
        const agez = 21;
        console.log(agez);
      }
    }
  }
}

// case 1: Khai báo sau khi được sử dụng
const agess = 18;
{
  {
    console.log(agess); // Error: can not access 'age' before initialization
    const agess = 19;
  }
}

/**  Delete from memory */

// Biến trong code block & trong hàm
// Khi hàm thực thi xong sẽ xóa những biến thuộc phạm vi của hàm khỏi memory

function logg() {
  const rand = Math.random();
  console.log(rand);
}

logg();

//  Biến trong hàm được tham chiếu bởi 1 hàm
function makeCounter() {
  let counter = 0;

  function increase() {
    return ++counter;
  }

  return increase;
}

const counter1 = makeCounter();
console.log(counter1());
console.log(counter1());
console.log(counter1());
