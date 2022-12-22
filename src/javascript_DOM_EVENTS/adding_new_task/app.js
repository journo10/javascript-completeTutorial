let itemList = [
  { id: 1, itemName: "Item 1" },
  { id: 2, itemName: "Item 2" },
  { id: 3, itemName: "Item 3" },
  { id: 4, itemName: "Item 4" },
];

displayTasks();

function displayTasks() {
  let ul = document.getElementById("task-list");
  ul.innerHTML = "";

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
}

document.querySelector("#btnAddNewTask").addEventListener("click", newTask);

function newTask(e) {
  e.preventDefault();
  let task_input = document.querySelector("#txtTaskName");

  if (task_input.value === "") {
    alert("item giriniz...");
  } else {
    itemList.push({ id: itemList.length + 1, itemName: task_input.value });
    task_input.value = ""; //input içinin temizlenmesi.
    displayTasks();
  }
}
