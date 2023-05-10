document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });
  const form = document.getElementById("form");
  const input = document.getElementById("to-do-input");
  const table = document.getElementById("table");
  //salvar em localstorage
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (input.value != "") {
      const valorInput = input.value;

      const novoInput = document.createElement("input");
      novoInput.classList.add("to-do-list");
      novoInput.addEventListener("click", lineT);
      novoInput.addEventListener("contextmenu", deleteI);
      novoInput.value = valorInput;
      const newRow = document.createElement("tr");
      const newCell = document.createElement("td");
      newCell.appendChild(novoInput);
      newRow.appendChild(newCell);
      table.appendChild(newRow);

      input.value = "";
    }
  });
});

function lineT(e) {
  let textToLine = this;
  textToLine.classList.remove("to-do-list");
  textToLine.classList.add("to-do-line-through");
}

function deleteI(e) {
  let textToDelete = this;
  e.preventDefault();
  textToDelete.parentElement.remove();
}
