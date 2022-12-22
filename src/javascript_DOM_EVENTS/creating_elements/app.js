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
