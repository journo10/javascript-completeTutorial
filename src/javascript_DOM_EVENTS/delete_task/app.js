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
                        <div class="dropdown">
                            <button class="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa-solid fa-ellipsis"></i>
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a onclick="deleteTask(${item.id})" class="dropdown-item" href="#"><i class="fa-solid fa-trash-can"></i> Sil</a></li>
                                <li><a class="dropdown-item" href="#"><i class="fa-solid fa-pen"></i> Düzenle</a></li>
                            </ul>
                        </div>
                    </li>
                `;

    ul.insertAdjacentHTML("beforeend", li);
  }
}

document.querySelector("#btnAddNewTask").addEventListener("click", newTask);

//Add
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

//delete
function deleteTask(id) {
  let deletedId;

  // 1. Yol
  //   for (let index in itemList) {
  //     if (itemList[index].id == id) {
  //       deletedId = index;
  //     }
  //   }

  // 2. Yol
  // deletedId = itemList.findIndex(function(item) {
  //     return item.id == id;
  // });

  // arrow function, 3. Yol
  deletedId = itemList.findIndex((item) => item.id == id);

  itemList.splice(deletedId, 1);
  displayTasks();
}
