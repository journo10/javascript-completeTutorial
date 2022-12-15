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

// 1- Üçgenin alanını hesaplayan fonksiyonu yazınız.

function trigonCalculate(num, height) {
  let trigon = (num * height) / 2; // taban * yükseklik / 2

  return `Ücgenin alani: ${trigon}`;
}

let result1 = trigonCalculate(3, 10);
result1 = trigonCalculate(4, 7);
result1 = trigonCalculate(2, 9);

console.log(result1);
