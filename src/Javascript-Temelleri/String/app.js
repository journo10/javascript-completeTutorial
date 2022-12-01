let userName = "Cristiano";
let lastName = "Ronaldo";
let age = 37;
let city = "M.United";

//let message = "Benim adım " + userName + " ve soyadım " + lastName + "," + " Ben " + age + " yaşındayım. " + city + ' takımın\'da oynuyorum.';

//backtick
let message = `Benim adım ${userName} ve soyadım ${lastName}, Ben ${age} yaşındayım. ${city} takımın'da oynuyorum. Emekliliğe ${
  40 - age
} yıl kaldı.`;

//ternary operators
let emeklilik =
  40 - age > 0
    ? "Emekliliğe " + (40 - age) + " yıl kaldı."
    : "Zaten emekli oldunuz.";

message = `Benim adım ${userName} ve soyadım ${lastName}, Ben ${age} yaşındayım. ${city} takımın'da oynuyorum. ${emeklilik}`;

console.log(message);

//String Metodları
let kursAdi = "Javascript Eğitimi ";

let sonuc;

sonuc = kursAdi.toLowerCase(); // Küçük harfe cevirir.
sonuc = kursAdi.toUpperCase(); // Büyük harfe çevirir.
sonuc = kursAdi.length; // kaç karekterli olduğunu verir.
sonuc = kursAdi.slice(0, 4); // belirtilen iki adet index noktası arasındaki ifadeleri kesip alır.
sonuc = kursAdi.substring(0, 7); // slice() metodun olduğu gibi substring() metoduyla başlangıç ve bitiş indeksi vererek aralıktaki karakter dizisini alır.
sonuc = kursAdi.replace("Eğitimi", "Kursu"); //replace() metodu ile belirtilen bir string bilgiyi başka bir string bilgi ile güncelleyebiliriz.
sonuc = kursAdi.trim(); // trim() metodu ile karakter dizisinin başındaki ve sonundaki boşluk karakterlerini sileriz.
sonuc = kursAdi.trimEnd();
sonuc = kursAdi.trimStart();
sonuc = kursAdi.search(); // search() metodu da indexof() metodu gibi karakter dizisi içinde arama yapıp bulduğu karakterin indeks numarasını döndürür.
sonuc = kursAdi.indexOf("script"); //indexof() metodunu karakter dizisinde arama yapmak için kullanıyoruz.
sonuc = kursAdi.split(" "); // Karakter dizisini belirtilen karakterden parçalara ayırarak bir dizi oluşturur.
sonuc = kursAdi.split(" ")[0];

console.log(sonuc);

// Uygulama : String

let url = "https://www.youtube.com/";
let kursAdi1 = "Javascript Komple Web Geliştirme Kursu";

let sonuc0;

// 1- url kaç karakterlidir?
sonuc0 = url.length;

// 2- kursAdi kaç kelimeden oluşmaktadır?
sonuc0 = kursAdi1.split(" ").length;

// 3- url https ile mi başlıyor?
sonuc0 = url.startsWith("https");

if (sonuc0) {
  console.log("Evet");
}

// 4- kursAdi içerisinde Eğitimi kelimesi var mı?

if (kursAdi1.indexOf("Eğitimi") > -1) {
  console.log("Evet");
} else {
  console.log("Hayır");
}

// 5- url ve kursAdi1 değişkenlerini kullanarak aşağıdaki string bilgiyi oluşturunuz.

// https://www.youtube.com//javascript-komple-web-gelistirme-kursu

kursAdi1 = kursAdi1.toLowerCase();
kursAdi1 = kursAdi1.replaceAll(" ", "-");
kursAdi1 = kursAdi1.replace("ş", "s").replace("ı", "i");

sonuc0 = `${url}/${kursAdi1}`;

console.log(sonuc0);
