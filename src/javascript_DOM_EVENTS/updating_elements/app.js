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

// document.querySelector("#task-list").parentElement.remove(); // üst eleman silinir.
// document.querySelector("#task-list").children[0].remove(); // alt eleman silinir.
// document.querySelector("#task-list").children[1].remove();

// document.querySelector("#task-list").removeAttribute("class"); // removeAttribute => Attribute siler
// document.querySelector("#task-list").children[1].removeAttribute("class");
// result = document.querySelector("#task-list").children[1].getAttribute("class"); // getAttribute => Attribute getirir.
// document.querySelector("#task-list").children[1].setAttribute("class","ronaldo"); // setAttribute => Attribute günceller.
// result = document.querySelector("#task-list").children[1].classList[1];
document.querySelector("#task-list").children[1].classList.add("bg-danger"); // classList ile class ekler
// document.querySelector("#task-list").children[1].classList.remove("bg-danger"); // // classList ile class siler.
result = document
  .querySelector("#task-list")
  .children[1].classList.contains("bg-warning"); // contains => ilgili element içerisnde class olup olmadığını kontrol edip Boolean şeklinde geri döner.


  console.log(result); // false