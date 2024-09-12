/**---------- Pass by value ------------ */

// ex.
function changeValue(y) {
  console.log(y);
  y = 20;
}

let x = 10;
changeValue(x);
console.log(x);

function changeValues(y) {
  y = { name: "Bob" };
  // y.name = "Bob";
}

let x1 = { name: "John" };
changeValues(x1);
console.log(x1);
