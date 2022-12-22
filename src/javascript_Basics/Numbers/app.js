let sonuc;

sonuc = 9;
sonuc = "9";
sonuc = Number("9");
sonuc = parseInt("9,99"); // parseInt => kendisine ondalıklı olarak verdiğiniz değerin ondalık kısmını siler ve kalan kısımdan yeni bir değişken oluşturarak döndürür.
sonuc = parseFloat("9,99"); // parseFloat => kendisine parametre olarak verilen değerlere göre verilen değerleri ondalıklı sayı haline dönüştürür ve yeni bir değişken oluşturarak geri döndürür.

console.log(typeof sonuc);
console.log(sonuc);

let sonuc0;

sayi0 = 99.987456321;

sonuc0 = sayi0.toFixed(5); // toFixed => kendisine parametre olarak verilen sayının ondalık hane sayısının belirlenmesi için kullanılır.

sonuc0 = Math.round(2.4); // round => En yakın sayıya yuvarlar
sonuc = Math.round(2.6);
sonuc0 = Math.ceil(2.3); // Aşağı yuvarlar
sonuc0 = Math.floor(2.7); // Yukarı yuvarlar
sonuc0 = Math.sqrt(36); // Karekökünü alır
sonuc0 = Math.pow(4, 2); // üs değerihesaplar.
sonuc0 = Math.abs(-11); // pozitif olarak dışarı çıkarır.
sonuc0 = Math.min(2, 4, 6, 8, 10); // minimum değer
sonuc0 = Math.max(3, 7, 5, 9); // maximum değer
sonuc0 = Math.random(); // rastgele bir sayı üretir.
sonuc0 = Math.random() * 10; // 0-9 arsaında sayı
sonuc0 = Math.random() * 100; // 0-99 arsaında sayı
sonuc0 = Math.floor(Math.random() * 100);
sonuc0 = Math.floor(Math.random() * 100 + 1);

console.log(typeof sonuc0);
console.log(sonuc0);
