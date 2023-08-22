import { saveTab } from "../Methoden/save";
import { Link } from "react-router-dom";
export default function add() {
  const categorys: Array<string> = JSON.parse(
    localStorage.getItem("category") || "[]"
  );

  function add() {
    // angeclickte Kategorien rausfiltern
    const checkboxes = document.querySelectorAll(".checkbox");
    const Kategorien: Array<string> = [];

    checkboxes.forEach((element) => {
      const checkbox = element as HTMLInputElement;
      if (checkbox.checked) {
        Kategorien.push(checkbox.name);
      }
    });

    console.log("for each bei checkboxen klappt");
    // checken ob das Inputfeld leer ist
    const input = document.getElementById("inputName") as HTMLInputElement;
    if (!input) {
      return;
    } else if (input.value == null || "") {
      return;
    }
    console.log("input validieren klappt");
    //speichern
    saveTab(Kategorien, input.value.toString());
  }
  return (
    <div style={{ width: "500px", height: "500px" }}>
      <input
        id="inputName"
        type="text"
        placeholder="Give your site a name."
        className="c-black border-none"
      />
      <h3>category:</h3>
      <p>
        You don't need a category but if you want to use one, you can use one,
        two or more.
      </p>
      <Link to="/createCategory">add a category</Link>
      {categorys.map((category) => (
        <div>
          <input type="checkbox" className={"checkbox"} name={category} />
          <label htmlFor={category}>{category}</label>
        </div>
      ))}
      <button
        onClick={add}
        style={{
          position: "fixed",
          bottom: "10px",
          right: "10px",
          color: "black",
        }}
      >
        add
      </button>
    </div>
  );
}
