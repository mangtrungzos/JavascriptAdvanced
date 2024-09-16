const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = (() => {
  const cars = [];
  const root = $("#root");
  const input = $("#input");
  const submit = $("#submit");

  return {
    add(car) {
      cars.push(car);
    },
    delete(index) {
      cars.splice(index, 1);
    },
    render() {
      const html = cars
        .map(
          (car, index) => `
      <li>
        ${car}
        <span class="delete" data-index="${index}">X</span>
      </li>`,
        )
        .join("");

      root.innerHTML = html;
    },
    handleDelte(e) {
      const deleteBtn = e.target.closest(".delete");
      if (deleteBtn) {
        const index = deleteBtn.dataset.index; // lấy value của data-index
        // console.log(this);
        this.delete(index);
        this.render();
      }
    },
    init() {
      // Hanlde DOM events
      submit.onclick = () => {
        const car = input.value;
        this.add(car);
        this.render();

        input.value = null;
        input.focus();
      };

      root.onclick = this.handleDelete.bind(this);

      this.render();
    },
  };
})();

app.init();

// Delegate
