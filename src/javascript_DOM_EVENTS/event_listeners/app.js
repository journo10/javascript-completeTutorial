let result;

let itemList = [
  { id: 1, itemName: "Item 1" },
  { id: 2, itemName: "Item 2" },
  { id: 3, itemName: "Item 3" },
  { id: 4, itemName: "Item 4" },
];

let ul = document.getElementById("task-list");

for (let item of itemList) {
  let li = `
                <li class="task list-group-item">
                    <div class="form-check">
                        <input type="checkbox" id="${item.id}" class="form-check-input">
                        <label for="${item.id}" class="form-check-label">${item.itemName}</label>
                    </div>
                </li>
            `;

  ul.insertAdjacentHTML("beforeend", li);
}

document.querySelector("#btnClear").addEventListener("click", (e) => {
  e.preventDefault(); // sayfanın refresh etmwsini önler.
  console.log("Temizle buttonuna tiklandi...");
});

document.querySelector("#btnAddNewTask").addEventListener("click", newTask);

function newTask(e) {
  e.preventDefault();
  console.log(e.target);
  e.target.classList.remove("btn-warning");
  e.target.classList.add("btn-primary");
}
