const onKey = () => {
  const input = document.querySelector("#to-do-input");

  input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      const valorInput = input.value;

      const table = document.getElementById("table");
      const novoInput = document.createElement("input");
      novoInput.classList.add("to-do-list");
      novoInput.value = valorInput;
      const newRow = document.createElement("tr");
      const newCell = document.createElement("td");
      newCell.appendChild(novoInput);
      newRow.appendChild(newCell);
      table.appendChild(newRow);

      input.value = "";
    }
  });
};
