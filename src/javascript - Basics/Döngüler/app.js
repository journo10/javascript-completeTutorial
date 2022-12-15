//for döngüsü

//bir sayının toplam değerini alma
let total = 0;

for (let i = 1; i <= 10; i++) {
    total += i; // total = total+i;
}

// console.log(total); //55

let numbers = [2, 4, 6, 8, 10];

let total1 = 0;

//normal for
for (let i = 0; i < numbers.length; i++) {
    total1 += numbers[i];
}

console.log(total1); //30

//in for => index'e numaralarına göre
for (let i in numbers) {
    total1 += numbers[i];
}

console.log(total1); //60

//of for => index'e numaralarını gözardı eder.
for (let number of numbers) {
    total1 += number;
}

console.log(total1); //90

//object hali
let user = {
    username: "Cristiano",
    lastname: "Ronaldo",
    email: "cr7@gmail.com",
    password: "cr7",
};

for (let key in user) {
    console.log(user[key]);
}

// Döngüler : Uygulama

let numbers1 = [1, 5, 7, 15, 3, 25, 12, 24];

// 1- sayilar listesindeki her bir elemanın karesini yazdırınız.
for (let num of numbers1) {
    console.log("Her bir elemanin karesi:", num * num);
}

// 2- sayilar listesindeki hangi sayılar 5' in katıdır?
for (let i = 0; i <= numbers1.length; i++) {
    if (numbers1[i] % 5 === 0) {
        console.log("5'in kati sayilar:", numbers1[i]);
    }
}

// 3- sayilar listesindeki çift sayıların toplamını bulunuz.
let total2 = 0;
for (let num in numbers1) {
    if (numbers1[num] % 2 === 0) {
        total2 += numbers1[num];
    }
}

console.log("çift sayilarin toplami:", total2);


let products = ["iphone 12", "samsung s22", "iphone 13", "samsung s23", "samsung s20"];

// 4- urunler listesindeki tüm ürünleri büyük harf ile yazdırınız.
for (let product of products) {
    console.log("tüm ürünleri büyük harf ile yazma:", product.toUpperCase());
}

// 5- urunler listesinde samsung geçen kaç ürün vardır?
let num = 0;

for (let product of products) {
    if (product.includes("samsung")) {
        num++;
    }
}

console.log("listede samsung adi geçen ürünler:", num);

let students = [
    { id: 1, username: "Cristiano", lastname: "Ronaldo", notes: [60, 70, 60] },
    { id: 2, username: "Lionel", lastname: "Messi", notes: [80, 70, 80] },
    { id: 3, username: "Selcuk", lastname: "Inan", notes: [10, 20, 60] }
];

// ogrenciler listesindeki her öğrencinin not ortalaması ve başarı durumlarını yazdırınız.

for (let student of students) {
    let note_total = 0;
    let ort = 0;
    let num = 0;

    for (let note of student.notes) {
        note_total += note;
        num++
    }

    ort = note_total / num;

    console.log(`${student.username} ${student.lastname} isimli öğrencimnin not ortalamasi : ${ort.toFixed(0)}`);

    if (ort >= 50) {
        console.log("basarili.");
    } else {
        console.log("basarisiz.");
    }

}