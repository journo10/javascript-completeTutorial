//Değişkenler
// Javascript de değişken tanımlamak için var, let ve const komutları kullanılır.
let maasAli = 5000;
let maasCan = 6000;

let yapilacakZam = 0.3;

let toplamMaasAli = maasAli + maasAli * yapilacakZam;
let toplamMaasCan = maasCan + maasCan * yapilacakZam;

console.log(toplamMaasAli);
console.log(toplamMaasCan);

//Değişken Türleri
let urunAdı = "Samsung"; // string
let urunFiyat = 10000; // number

//typeof => değişken türü tipini verir.
console.log(typeof urunAdı);
console.log(typeof urunFiyat);

//Number => string veri tipini number cevirir.string veri tipinin başına + işareti konulursa eğer number cevirir.
let sayi1 = "15";
let sayi2 = "30";

let toplamSayi = Number(sayi1) + Number(sayi2);

console.log(toplamSayi);

// toString => number veri tipini string  cevirir
let sayi3 = 15;
let sayi4 = 30;

let toplamSayi1 = sayi1.toString() + sayi2.toString();

console.log(toplamSayi1);

//boolean => true, false
let sinavNotu = 85;
let basariliMi = sinavNotu >= 50;

console.log(basariliMi);
console.log(typeof basariliMi);

// undefined => tanımsız
let yas;
console.log(yas);
console.log(typeof yas);

// Uygulama: Değişkenler
/* 
    1- İki öğrencinin aşağıdaki bilgilerini değişkenler içerisinde saklayınız.
        öğrenci 1: 
            isim                : ada bilgi
            doğum tarihi        : 2012
            matematik notları   : 70, 70, 80
        öğrenci 2: 
            isim                : yiğit bilgi
            doğum tarihi        : 2010
            matematik notları   : 40, 40, 50
    2- Öğrencilerinin yaş bilgilerini değişkende tutunuz.
    3- Öğrencilerinin ders ortalama notunu değişkende saklayınız.
    4- Öğrencilerinin 50 geçme notuna göre başarı durumlarını değişkende saklayınız.
*/

//Öğrenci 1
let ogrenciBir_Ad = "Ada";
let ogrenciBir_Soyad = "Bilgi";
let ogrenciBir_DogumTarihi = "2010";
let ogrenciBir_MatemetikNotBir = 70;
let ogrenciBir_MatemetikNotİki = 70;
let ogrenciBir_MatemetikNotUc = 80;

let suankiYıl_Bilgisi = new Date().getFullYear()

let ogrenciBir_Yas = suankiYıl_Bilgisi - parseInt(ogrenciBir_DogumTarihi); // parseInt => tamsayı olarak verir.
console.log(ogrenciBir_Yas);

let ogrenciBir_MatemetikNotOrtalamasi = (ogrenciBir_MatemetikNotBir + ogrenciBir_MatemetikNotİki + ogrenciBir_MatemetikNotUc) / 3;
console.log(ogrenciBir_MatemetikNotOrtalamasi); // 73.33333333333333
console.log(parseInt(ogrenciBir_MatemetikNotOrtalamasi)); // 73, parseInt => tamsayı olarak verir.
console.log(parseFloat(ogrenciBir_MatemetikNotOrtalamasi)); // 73.33333333333333, parseFloat => ondalıklı sayı olarak verir.

let ogrenciBir_BasariDurumu = (ogrenciBir_MatemetikNotOrtalamasi >= 50);
console.log(ogrenciBir_BasariDurumu); // true

//Öğrenci 2
let ogrenciİki_Ad = "Yiğit";
let ogrenciİki_Soyad = "Bilgi";
let ogrenciİki_DogumTarihi = 2012;
let ogrenciİki_MatemetikNotBir = 40;
let ogrenciİki_MatemetikNotİki = 40;
let ogrenciİki_MatemetikNotUc = 50;

let ogrenciİki_Yas = suankiYıl_Bilgisi - parseInt(ogrenciİki_DogumTarihi); // parseInt => tamsayı olarak verir.
console.log(ogrenciİki_Yas);

let ogrenciİki_MatemetikNotOrtalamasi = (ogrenciİki_MatemetikNotBir + ogrenciİki_MatemetikNotİki + ogrenciİki_MatemetikNotUc) / 3;
console.log(ogrenciİki_MatemetikNotOrtalamasi); // 46.666666666666664
console.log(parseInt(ogrenciİki_MatemetikNotOrtalamasi)); // 46, parseInt => tamsayı olarak verir.
console.log(parseFloat(ogrenciİki_MatemetikNotOrtalamasi)); // 46.666666666666664, parseFloat => ondalıklı sayı olarak verir.

let ogrenciİki_BasariDurumu = (ogrenciİki_MatemetikNotOrtalamasi >= 50);
console.log(ogrenciİki_BasariDurumu); // false
