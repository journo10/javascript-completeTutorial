//Function - Fonksiyonlar

function sayHello(msg) {
  console.log(msg);
}

sayHello("Merhaba");
sayHello("İyi günler");
sayHello("Selam");

//yas hesapla
function ageCalculator(date) {
  return new Date().getFullYear() - date;
}

let ageRonaldo = ageCalculator(1984);
let ageMessi = ageCalculator(1987);

console.log(ageRonaldo, ageMessi);

//emeklilik hesapla
function retirementAgeCalculator(date_1, name) {
  let age = ageCalculator(date_1);
  let rest_year = 65 - age;

  if (rest_year > 0) {
    console.log(`${name}, emekli olmaniza ${rest_year} yil kaldi.`);
  } else {
    console.log(`${name}, zaten emakli oldunuz.`);
  }
}

retirementAgeCalculator(1995, "Ceyhun");
retirementAgeCalculator(1985, "Mehmet");
retirementAgeCalculator(1950, "Hakan");

//Function - Fonksiyonlar : Uygulama

// 1- Kendisine gönderilen kelimeyi belirtilen kez ekranda yazan fonksiyonu yapınız.

function wordPrint(text, number) {
  for (let i = 1; i <= number; i++) {
    console.log(`${text} kelimesi ${number} defa yazdirildi.`);
  }
}

wordPrint("Ronaldo", 7);

// 2- Dikdörtgenin alan ve çevresini hesaplayan fonksiyonu yazınız.

function calculateArea(short_edge, long_edge) {
  let area = short_edge * long_edge; // alan
  let perimeter = (short_edge + long_edge) * 2; // cevre

  return `Dikdörtgenin alani: ${area}, Dikdörtgenin cevresi: ${perimeter}`;
}

let result = calculateArea(7, 10);
result = calculateArea(7, 12);

console.log(result);

// 3- Yazı tura uygulamasını fonksiyon kullanarak yapınız.

function headsTailsFunc() {
  let random = Math.random(); // 0-1 arsında rakam olusurur.

  if (random < 0.5) {
    console.log("Yazi geldi.", random);
  } else {
    console.log("Tura geldi.", random);
  }
}

headsTailsFunc();

// 4- Kendisine gönderilen bir sayının tam bölenlerini dizi şeklinde döndüren fonksiyonu yazınız.

function divisorsCountFunc(num) {
  let numbers = [];

  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      numbers.push(i);
    }
  }
  return numbers;
}

let result1 = divisorsCountFunc(15);
result1 = divisorsCountFunc(21);
result1 = divisorsCountFunc(28);

console.log(result1);

// 5- Değişken sayıda parametre alan toplam isminde bir fonksiyon tanımlayınız.

function totalFunc() {
  let result2 = 0;

  for (let i = 0; i < arguments.length; i++) {
    result2 += arguments[i]; // arguments ile, oluşturduğumuz fonksiyonun kaç parametreli olacağını belirtmemize gerek yoktur.
  }
  return result2;
}

console.log(totalFunc(2, 5));
console.log(totalFunc(2, 5, 7));
console.log(totalFunc(2, 5, 7, 11, 13));

// 6-  Kendisine gönderilen bir sayının faktöriyelini hesaplayınız.

function myFactorial(number) {
  let x = 1;

  for (let i = 1; i <= number; i++) {
    x *= i; // x = x * i
  }
  return x;
}

let result3 = myFactorial(5);
result3 = myFactorial(3);
result3 = myFactorial(6);

console.log(result3);
