document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const input = document.getElementById("to-do-input");
  const table = document.getElementById("table");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const valorInput = input.value;

    const novoInput = document.createElement("input");
    novoInput.classList.add("to-do-list");
    novoInput.value = valorInput;
    const newRow = document.createElement("tr");
    const newCell = document.createElement("td");
    newCell.appendChild(novoInput);
    newRow.appendChild(newCell);
    table.appendChild(newRow);

    input.value = "";
  });
});
