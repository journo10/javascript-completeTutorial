// filter()

//Dizideki öğeleri belirli bir koşula göre filtreler.
//Filtrelenen öğeler varsa geriye döndürülür, yoksa boş bir dizi geriye döner.

// Yapısı (Syntax)
// array.filter(function(currentValue, index, arr), thisValue)

// currentValue => Test edilen elemanın değeri
// index => Test edilen elemanın indis değeri
// arr => Test edilen elemanın ait olduğu dizi objesi

// ornek 1
const names = ["ronaldo", "ali", "ece", "gizem", "ceyhun", "selçuk", "akif"];

const result = names.filter((name) => {
  return name.length <= 5;
});

console.log(result); // [ 'ali', 'ece', 'gizem', 'akif' ]

// ornek 2
function isBigEnough(value) {
  return value > 10;
}

const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log(filtered); // [12, 130, 44]

// Arrow fonksiyonlarla kullanımı
const filtered_with_arrow = [12, 5, 8, 130, 44].filter((value) => value > 10);
console.log(filtered_with_arrow); // [12, 130, 44]

//
const numbers = [20, 40, 17, 99, 59, 77];

const filteredNumbers = numbers.filter((num) => {
  return num > 20;
});

console.log(filteredNumbers); // [40,99,59,77]

//
const numbers1 = [20, 40, 17, 99, 59, 77];

const filteredNumbers1 = numbers1.filter((number) => number > 20);
console.log(filteredNumbers); // [40,99,59,77]

// ornek 3
const users = [
  {
    name: "Cristiano Ronaldo",
    age: 38,
  },
  {
    name: "Lionel Messi",
    age: 35,
  },
  {
    name: "Selçuk İnan",
    age: 36,
  },
];

const filtered_users = users.filter((user) => user.age === 36);

console.log(filtered_users); // [ { name: 'Selçuk İnan', age: 36 } ]

// ornek 4, arama yapma
const names1 = ["Ronaldo", "ali", "ece", "gizem", "ceyhun", "selçuk", "akif"];

const search = (keyword) => {
  return names1.filter((name) =>
    name.toLowerCase().includes(keyword.toLowerCase())
  );
};

console.log(search("do")); // [ 'Ronaldo' ]

//ornek 5, asal sayı bulma
const myArray = [
  -7, -5, -2, 2, 1, 3, 12, 14, 13, 15, 70, 17, 33, 25, 27, 30, 97,
];

const newArray = myArray.filter((arr) => {
  for (let i = 2; i < arr; i++) {
    if (arr % i === 0) {
      return false;
    }
  }
  return arr > 1;
});

console.log(newArray); // [ 2, 3, 13, 17, 97 ]
