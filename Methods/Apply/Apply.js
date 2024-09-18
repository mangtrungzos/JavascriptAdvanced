// apply() = This method allow to call a function with a "this" (bind) and pass arguments for original function as an array

// ex. 1
const teacher = {
  firstName: "Chau",
  lastName: "Ngan",
};

function greet(greeting, message) {
  return `${greeting} ${this.firstName} ${this.lastName}. ${message}`;
}

let result = greet.apply(teacher, ["Hello", "How are you?"]);
console.log(result);

// Compare with call() method
result = greet.call(teacher, "falling in love with", "You");

console.log(result);

// ex. 2: Function borrowing
const person = {
  firstName: "Chau",
  lastName: "Ngan",
  isOnline: false,
  goOnline() {
    this.isOnline = true;
    console.log(`${this.firstName} ${this.lastName} is Online`);
  },
  goOffline() {
    this.isOffline = false;
    console.log(`$this.firstName} ${this.lastName} is Offline`);
  },
};

const me = {
  firstName: "Sang",
  lastName: "Vu",
  isOnline: false,
};

console.log("Person:", person.isOnline);
person.goOnline();
console.log("Person:", person.isOnline);

console.log("Me:", me.isOnline);
person.goOnline.apply(me); // Func borrowing
console.log("Me:", me.isOnline);

// ex. 3: Extends: Tinh ke thua
function Animal(name, weight) {
  this.name = name;
  this.weight = weight;
}

function Parrot() {
  Animal.apply(this, arguments); // arguments have properties of arrays
  this.speak = function () {
    console.log("House with guests!");
  };
}

const parrot = new Parrot("Vet", 300);
console.log(parrot);
