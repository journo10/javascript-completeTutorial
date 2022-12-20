let result;

result = document.getElementById("title"); // doküman içinde id verdiğiniz bir elemanın property'lerine ulaşırız.
result = document.getElementById("title").id; // doküman içindeki id attribute ulaşırız.
result = document.getElementById("title").className; // doküman içindeki className attribute ulaşırız.
result = document.getElementById("title").classList; // doküman içindeki className attribute dizi şeklinde ulaşırız.
result = document.getElementById("title").style; // doküman içindeki style ulaşıp ve değiştirebiliriz.
result = document.getElementById("title").style.fontSize = "50px";
result = document.getElementById("title").style.color = "red";
// result = document.getElementById("title").style.display = "none";

result = document.getElementById("title").innerText = "Todo App 2"; //elementin içeriğini alır ve düz metin olarak ayarlar ve değişiklik yapabilir.
result = document.getElementById("title").innerHTML = "<p>Todo App 2</p>"; // elementin içeriğini HTML biçiminde alır ve ayarlar.

result = document.querySelector("#title");
result = document.querySelector(".card");
result = document.querySelector("div");

result = document.querySelector("li"); // bulduğu elemeni dizi seklinde getirir.
result = document.querySelector("li:first-child"); // ilk element
result = document.querySelector("li:last-child"); // son element
result = document.querySelector("li:nth-child(2)"); // istediğimiz element

console.log(result);
