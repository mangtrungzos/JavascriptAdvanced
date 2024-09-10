const counter1 = makeCounter();

console.log(counter1()); // Output: ?

function makeCounter() {
  let counter = 0;

  return increase;

  function increase() {
    return ++counter;
  }
}
