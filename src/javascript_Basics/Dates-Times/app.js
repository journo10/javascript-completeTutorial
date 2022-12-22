let simdi = new Date(); // şimdiki tarih ve saat bilgisini verir.

// Get Methods
sonuc = simdi.getDate(); // gün bilgisi verir.
sonuc = simdi.getDay(); // hangi gün bilgisi verir.
sonuc = simdi.getFullYear(); // yıl bilgisi verir.
sonuc = simdi.getHours(); // saat bilgisi verir.
sonuc = simdi.getTime(); // şuan ki saat bilgisi verir.

// Set Methods => Bir tarihi güncelleme, değiştirme

simdi.setFullYear(2011); // gitmek istediğim yıl bilgisi
simdi.setMonth(5); // gitmek istediğim ay bilgisi
simdi.setDate(25); // gitmek istediğim gün bilgisi

sonuc = simdi;

let dogumTarihi = new Date(1995, 5, 25);

sonuc = simdi.getFullYear() - dogumTarihi.getFullYear();

let miliSecond = simdi - dogumTarihi;
let saniye = miliSecond / 1000 // saniye cinsinden verir.
let dakika = miliSecond / 60; // dakika cinsinden verir.
let saat = miliSecond / 60; // saat cinsinden verir.
let gün = miliSecond / 24; // gün cinsinden verir.



// sonuc = saniye;
// sonuc = dakika
// sonuc = saat;
sonuc = gün;


console.log(typeof sonuc);
console.log(sonuc);
