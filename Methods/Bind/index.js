const teacher = {
  firstName: "Chau",
  lastName: "Ngoc",
  getFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

const button = document.querySelector("button");
button.onclick = teacher.getFullName.bind(teacher);
