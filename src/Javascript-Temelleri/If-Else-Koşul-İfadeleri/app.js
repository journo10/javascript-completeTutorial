//Mantıksal operatörler
// && and(ve) operatörü => iki koşulda gerçekleşmesi gerekir. true ve true olmalı.
// || or(veya) operatörü
// ! değil

let username = "c.ronaldo";
let password = "cr7";

if (username == "c.ronaldo") {
  if (password == "cr7") {
    console.log("Başarılı bir şekilde giriş yapıldı!");
  } else {
    console.log("Yanlış Parola!!!");
  }
} else {
  console.log("Geçersiz kullanıcı!");
}

//yas >= 18
//mezuniyet == "Lise" ya da mezuniyet == "Üniversite"
let yas = 20;
let mezuniyet = "Üniversite";

if (yas >= 18 && (mezuniyet == "Lise" || mezuniyet == "Üniversite")) {
  console.log("Ehliyet alabilir.");
} else {
  console.log("Ehliyet alamaz.");
}

// Uygulama: If/Else Koşul İfadeler

// 1- Bir sayının 10-50 arasında olup olmadığını kontrol ediniz.
let sayi1 = 30;

if (sayi1 > 10 && sayi1 < 50) {
  console.log("Sayı 10-50 arasındadır!");
} else {
  console.log("Sayı 10-50 arasında değildir!!!");
}

// 2- Bir sayının pozitif tek sayı olup olmadığını kontrol ediniz.
let sayi = 28;

if (sayi % 2 == 1 || sayi > 0) {
  console.log("Sayı pozitif tek sayıdır.");
} else {
  console.log("Sayı pozitif tek sayı değildir.");
}

// 3- x, y, z sayılarının büyüklük karşılaştırmasını yapınız.
let x = 15;
let y = 25;
let z = 35;

if (x > y && x > z) {
  console.log("x en büyük sayıdır.");
} else if (y > x && y > z) {
  console.log("y en büyük sayıdır.");
} else if (z > x && z > y) {
  console.log("z en büyük sayıdır.");
} else {
  console.log("Tüm sayılar eşittir.");
}

// 4- 2 vize (40%) ve 1 final(60%) notuna göre hesaplanan ortalama için;

let ogrVize1 = 15;
let ogrVize2 = 10;
let ogrFinal = 70;

let ogrOrtalamaNot = ((ogrVize1 + ogrVize2) / 2) * 0.4 + ogrFinal * 0.6;

console.log("Öğrenci Not Ortalamsı: " + ogrOrtalamaNot);

// a- Eğer ortalama 50 ve üstündeyse geçti değilse kaldı yazsın.
if (ogrOrtalamaNot >= 50) {
  console.log("Dersi geçtiniz.");
} else {
  console.log("Dersten kaldınız.");
}

// b- Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır.
if (ogrOrtalamaNot >= 50 && ogrFinal >= 50) {
  console.log("Dersi geçtiniz.");
} else {
  console.log("Dersten kaldınız.");
}

// c- Finalden 70 alındığında ortalama 50' nin altında olsa bile dersten geçilsin.
if (ogrOrtalamaNot >= 50 || ogrFinal >= 70) {
    console.log("Dersi geçtiniz.");
  } else {
    console.log("Dersten kaldınız.");
  }
