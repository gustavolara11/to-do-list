document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });
  const form = document.getElementById("form");
  const input = document.getElementById("to-do-input");
  const table = document.getElementById("table");

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
// colocar numa classe e add class "" e add nova classe e colocar os styles no css
function lineT(e) {
  let textToLine = this;
  textToLine.style.textDecoration = "line-through";
  textToLine.style.color = "rgba(1,1,1,0.3)";
  textToLine.style.boxShadow = "2px 2px 5px 2px rgba(45, 0, 194, 0.1)";
  textToLine.style.outline = "none";
  textToLine.style.border = "none";
}
function deleteI(e) {
  let textToDelete = this;
  e.preventDefault();
  textToDelete.parentElement.remove();
}
