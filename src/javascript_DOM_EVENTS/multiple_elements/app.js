let result;

result = document.getElementsByClassName("task")[0];
result = document.getElementsByClassName("task")[1];

// taskList = document.getElementsByClassName("task"); // class'a göre
// ul = document.getElementById("task-list"); // id göre
// taskList = ul.getElementsByTagName("li"); // element' göre

taskList = document.querySelectorAll("#task-list li");

// for(let i=0; i<taskList.length;i++) {
//     console.log(taskList[i]);
// }

for (let task of taskList) {
  task.style.color = "red";
  task.style.fontSize = "20px";
  // task.innerText = "Item"
}

// console.log(result);
