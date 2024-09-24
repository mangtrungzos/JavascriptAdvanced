import html from "../core.js";
import { connect } from "../store.js";

const connector = connect();

// In this situation: App is a component
function App({ cars }) {
  return html`
    <ul>
      ${cars.map((car) => `<li>${car}</li>`).join("")}
    </ul>

    <button onclick="dispatch('ADD', 'Porsche')">Add car</button>
  `;
}

export default connector(App);
