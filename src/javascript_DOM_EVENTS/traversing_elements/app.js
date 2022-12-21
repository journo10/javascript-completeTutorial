let result;

ul = document.getElementById("task-list");

// children, firstElementChild, lastElementChild =>alt elemente yani cocuk ulasır
result = ul.children;
ul.children[0].children[0].children[0].checked = true;

// parentElement => bir üst elemente ulasır
result = ul.firstElementChild;
result = ul.lastElementChild;

// nextElementSibling, previousElementSibling => aynı seviyedeki elementlere ulasır.
result = document.getElementById("title").parentElement;

result =
    document.querySelector(".task").nextElementSibling.nextElementSibling
        .previousElementSibling;

console.log(result);
