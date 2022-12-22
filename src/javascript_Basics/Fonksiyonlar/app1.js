// 1- Karenin alan ve çevresini hesaplayan fonksiyonu yazınız.

function squareCalculate(num) {
  let area = num * num; // alan
  let perimeter = num * 4; //cevre

  return `Karenin alani: ${area}, Karenin cevresi: ${perimeter}`;
}

let result = squareCalculate(10);
result = squareCalculate(3);
result = squareCalculate(5);

console.log(result);

// 2- Üçgenin alanını hesaplayan fonksiyonu yazınız.

function trigonCalculate(num, height) {
  let trigon = (num * height) / 2; // taban * yükseklik / 2

  return `Ücgenin alani: ${trigon}`;
}

let result1 = trigonCalculate(3, 10);
result1 = trigonCalculate(4, 7);
result1 = trigonCalculate(2, 9);

console.log(result1);

// 3- Santigrat Derece olarak verilen ısı birimini Fahrenhayt’ a çeviren fonksiyonu yazınız.

// °F = °C x 9/5 + 32 formül

function fahrenhaytFunc(c) {
  let fahrenhayt = (c * 9) / 5 + 32;
  return `fahrenhayt degeri: ${fahrenhayt}`;
}

let result2 = fahrenhaytFunc(20);
result2 = fahrenhaytFunc(10);
result2 = fahrenhaytFunc(30);

console.log(result2);

//4- string olarak verilen bir kelimenin tersini çeviren fonksiyonu yazınız.

function reverseStringFunc(word) {
  let arrayText = word.split("");
  let reverseArray = arrayText.reverse().join("");

  return `girilen kelimenin tersi ${reverseArray}`;
}

let result3 = reverseStringFunc("ronaldo");
result3 = reverseStringFunc("messi");
result3 = reverseStringFunc("hello");

console.log(result3);
