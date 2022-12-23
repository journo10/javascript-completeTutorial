let itemList = [
  { id: 1, itemName: "Item 1", status: "completed" },
  { id: 2, itemName: "Item 2", status: "completed" },
  { id: 3, itemName: "Item 3", status: "pending" },
  { id: 4, itemName: "Item 4", status: "completed" },
];

let editId;
let isEditTask = false;

const task_input = document.querySelector("#txtTaskName");
const btnClear = document.querySelector("#btnClear");
const filters = document.querySelectorAll(".filters span");

displayTasks("all");

function displayTasks(filter) {
  let ul = document.getElementById("task-list");
  ul.innerHTML = "";

  if (itemList.length == 0) {
    ul.innerHTML =
      "<p class='p-3 m-0 text-danger'>Item listesi boş eleman ekleyin.</p>";
  } else {
    for (let item of itemList) {
      let completed = item.status == "completed" ? "checked" : "";

      if (filter == item.status || filter == "all") {
        let li = `
        <li class="task list-group-item">
            <div class="form-check">
                <input type="checkbox" id="${item.id}" onclick="updateStatus(this)" class="form-check-input" ${completed}>
                <label for="${item.id}" class="form-check-label ${completed}">${item.itemName}</label>
            </div>
            <div class="dropdown">
                <button class="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa-solid fa-ellipsis"></i>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a onclick="deleteTask(${item.id})" class="dropdown-item" href="#"><i class="fa-solid fa-trash-can"></i> Sil</a></li>
                    <li><a onclick='editTask(${item.id}, "${item.itemName}")'  class="dropdown-item" href="#"><i class="fa-solid fa-pen"></i> Düzenle</a></li>
                </ul>
            </div>
        </li>
    `;
        ul.insertAdjacentHTML("beforeend", li);
      }
    }
  }
}

document.querySelector("#btnAddNewTask").addEventListener("click", newTask);

//filters
for (let span of filters) {
  span.addEventListener("click", function () {
    document.querySelector("span.active").classList.remove("active");
    span.classList.add("active");
    displayTasks(span.id);
  });
}

//Add
function newTask(e) {
  e.preventDefault();

  if (task_input.value == "") {
    alert("item giriniz...");
  } else {
    if (!isEditTask) {
      //ekleme işlemi
      itemList.push({ id: itemList.length + 1, itemName: task_input.value });
    } else {
      //güncelleme işlemi
      for (let item of itemList) {
        if (item.id == editId) {
          item.itemName = task_input.value;
        }
        isEditTask = false;
      }
    }

    task_input.value = ""; //input içinin temizlenmesi.
    displayTasks(document.querySelector("span.active").id);
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
  displayTasks(document.querySelector("span.active").id);
}

//güncelleme
function editTask(taskId, taskName) {
  editId = taskId;
  isEditTask = true;
  task_input.value = taskName;
  task_input.focus();
  task_input.classList.add("active");

  console.log("edit id:", editId);
  console.log("edit mode", isEditTask);
}

//tümünü temizle
btnClear.addEventListener("click", function () {
  itemList.splice(0, itemList.length);
  displayTasks();
});

//checked
function updateStatus(selectedTask) {
  // console.log(selectedTask.parentElement.lastElementChild);
  let label = selectedTask.nextElementSibling;
  let statusTask;

  if (selectedTask.checked) {
    label.classList.add("checked");
    statusTask = "completed";
  } else {
    label.classList.remove("checked");
    statusTask = "pending";
  }

  for (let item of itemList) {
    if (item.id == selectedTask.id) {
      item.status = statusTask;
    }
  }

  //   console.log(itemList);
}
