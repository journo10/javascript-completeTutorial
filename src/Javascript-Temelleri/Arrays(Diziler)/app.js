// arrays - diziler

let urunler = ["Samsung 12", "Samsung 13", "Samsung 13 pro"];
let fiyatlar = [7000, 11000, 21000];
let renkler = ["red", "black", "white"];

let urun1 = ["iphone 12", 7000, "red"];

let urun2 = [];
urun2[0] = "Samsung 13";
urun2[1] = 11000;
urun2[2] = "black";

let urun3 = ["Samsung 13 pro", 21000, ["red", "white", "black"]];

console.log(urun3[2]);
console.log(urun3[2][0]);
console.log(urun3[2][1]);
console.log(urun3[2][2]);
console.log(typeof urun3[2]);

console.log(urunler[0]);
console.log(urunler[1]);
console.log(urunler[2]);

console.log(`${urunler[0]}-${fiyatlar[0]}-${renkler[0]}`);
console.log(`${urunler[1]}-${fiyatlar[1]}-${renkler[1]}`);
console.log(`${urunler[2]}-${fiyatlar[2]}-${renkler[2]}`);

let kursAdi = "Javascript Web Geliştirme Eğitimi";
console.log(kursAdi[5]);
console.log(kursAdi.split(" ")); // bosluktan kurlulup string'ten yeni bir dizi oluşturur.
console.log(kursAdi.split(" ")[3]);

// array methods

let ogrenciler = ["Akif", "Ceyhun", "Murat", "Ronaldo"];

sonuc = ogrenciler.length; // kaç sayısı verir.
sonuc = ogrenciler.toString(); // array string cevirir.
sonuc = ogrenciler.join("-"); // join() => verilen bir diziyi stringe dönüştürür. Aksi belirtilmedikçe string elemanları default olarak virgül(,) karakteri ile ayrılır

sonuc = ogrenciler.pop(); // pop => dizideki son elemanı siler.
sonuc = ogrenciler.shift(); // shift => dizideki ilk elemanı siler.
sonuc = ogrenciler.push("Messi"); // push => dizinin sonuna yeni bir elemanı ekler.
sonuc = ogrenciler.unshift("Drogba"); // unshift => dizinin başına yeni bir elemanı ekler.

let markalar1 = ["mazda", "toyota"];
let markalar2 = ["opel", "renault"];
let markalar3 = ["mercedes"];

sonuc = markalar1.concat(markalar2, markalar3); // concat => dizileri birleştirip tek bir dizi haline getirir.
sonuc = markalar1.splice(0, 1, "bmw", "audi"); // splice => diziye eleman ya da elemanlar eklenebilmesini sağladığı gibi, silinebilmesini de sağlar.
sonuc = markalar1.splice(0, 1);

console.log(sonuc);
console.log(typeof sonuc);
console.log(ogrenciler);

console.log("***** uygulama başlangıc *****");

// Uygulama: Diziler

// 1- "Elma,Armut,Muz,Çilek" elemanlarına sahip bir dizi oluşturunuz.

let fruits = ["Elma", "Armut", "Muz", "Çilek"];

// 2- Dizi kaç elemanlıdır?
console.log(fruits.length);

// 3- Dizinin ilk ve son elemanı nedir?
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

// 4- Elma dizinin bir elemanımıdır?
console.log(fruits.includes("Elma"));
console.log(fruits.indexOf("Elma"));

// 5- Kiraz meyvesini listenin sonuna ekleyiniz.
fruits.push("Kiraz");
fruits[fruits.length] = "Kiraz";

// 6- Dizinin son 2 elemanını siliniz.
// fruits.pop();
// fruits.pop();
fruits.splice(fruits.length - 2, 2);

console.log(fruits);

// 7- Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını ve not ortalamasını hesaplayınız.
// Öğrenci 1: Yiğit Bilgi 2010 (70,60,80)
// Öğrenci 2: Ada Bilgi 2012   (80,80,90)
// Öğrenci 3: Ahmet Turan  2009 (60,60,70)

let ogrBir = ["Yiğit", "Bilgi", 2010, [70, 60, 80]];
let ogrIki = ["Ada", "Bilgi", 2012, [80, 80, 90]];
let ogrUc = ["Ahmet", "Turan", 2009, [60, 60, 70]];

// let tumOgrBilgileri = [...ogrBir, ...ogrIki, ...ogrUc]; // spread operatör
// console.log(tumOgrBilgileri);

let tumOgr = [ogrBir, ogrIki, ogrUc];

let yasYigitBilgisi = new Date().getFullYear() - tumOgr[0][2];
let yasAdaBilgisi = new Date().getFullYear() - tumOgr[1][2];
let yasAhmetBilgisi = new Date().getFullYear() - tumOgr[2][2];

console.log(yasYigitBilgisi); // 12
console.log(yasAdaBilgisi); // 10
console.log(yasAhmetBilgisi); // 13

let notYigit = (tumOgr[0][3][0] + tumOgr[0][3][1] + tumOgr[0][3][2]) / 3;
let notAda = (tumOgr[1][3][0] + tumOgr[1][3][1] + tumOgr[1][3][2]) / 3;
let notAhmet = (tumOgr[2][3][0] + tumOgr[2][3][1] + tumOgr[2][3][2]) / 3;

console.log(notYigit.toFixed(1)); // 70.0
console.log(notAda.toFixed(1)); // 83.3
console.log(notAhmet.toFixed(1)); // 63.3
