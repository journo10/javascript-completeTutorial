//Splice

// metodunu veri eklemek için kullanabileceğimiz gibi eleman silmek için de kullanabiliriz.

// metoduna verdiğimiz ilk parametre hangi indeksden başlasın, ikinci parametre ise kaç eleman silinsin anlamına gelir.

//Dolayısıyla splice(0,1) dediğimizde 0.indeks den başka 1 elemanı sil demiş oluyoruz.

//Yapısı (Syntax)
//splice(start)
//splice(start, deleteCount)
//splice(start, deleteCount, item1)
//splice(start, deleteCount, item1, item2, itemN)

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb"); // [ 'Jan', 'Feb', 'March', 'April', 'June' ]
months.splice(4, 1, "May"); // [ 'Jan', 'Feb', 'March', 'April', 'May' ]

console.log(months);

const myFish = ["angel", "clown", "mandarin", "sturgeon"];
myFish.splice(2, 0, "drum");

console.log(myFish); // [ 'angel', 'clown', 'drum', 'mandarin', 'sturgeon' ]

const myFish1 = ["angel", "clown", "mandarin", "sturgeon"];
myFish1.splice(2, 0, "drum", "guitar");

console.log(myFish1); // [ 'angel', 'clown', 'drum', 'guitar', 'mandarin', 'sturgeon' ]

const myFish2 = ["angel", "clown", "drum", "mandarin", "sturgeon"];
myFish2.splice(3, 1);

console.log(myFish2); // [ 'angel', 'clown', 'drum', 'sturgeon' ]

const myFish3 = ["angel", "clown", "drum", "sturgeon"];
myFish3.splice(2, 1, "trumpet");

console.log(myFish3); // [ 'angel', 'clown', 'trumpet', 'sturgeon' ]

const myFish4 = ["angel", "clown", "trumpet", "sturgeon"];
myFish4.splice(0, 2, "parrot", "anemone", "blue");

console.log(myFish4); // [ 'parrot', 'anemone', 'blue', 'trumpet', 'sturgeon' ]

const myFish5 = ["parrot", "anemone", "blue", "trumpet", "sturgeon"];
myFish5.splice(2, 2);

console.log(myFish5); // [ 'parrot', 'anemone', 'sturgeon' ]

const myFish6 = ["angel", "clown", "mandarin", "sturgeon"];
myFish6.splice(-2, 1);

console.log(myFish6); // [ 'angel', 'clown', 'sturgeon' ]

const myFish7 = ["angel", "clown", "mandarin", "sturgeon"];
myFish7.splice(2);

console.log(myFish7); // [ 'angel', 'clown' ]
