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
