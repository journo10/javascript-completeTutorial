// Map()

//map() metodu, dizi içerisindeki tüm elemanları bir işlemden geçirmek için kullanılır.
//Her bir eleman tek tek işlenir, değerleri değiştirilebilir, geriye ne döndürüleceği belirlenebilir.
//Ve sonunda ise, işlemden geçen öğelerden oluşan bir dizi geriye döner.

//Yapısı (Syntax)
//array.map(function(currentValue, index, arr), thisValue)

// currentValue => İşlemden geçen elemanın değeri
// index => İşlemden geçen elemanın indis değeri
// arr => İşlemden geçen elemanın ait olduğu dizi

// örnek 1
const mathScores = [39, 50, 45, 41, 50];

mathScores.map((currentValue, index, array) => {
  console.log("Current value:" + currentValue);
  console.log("Index:" + index);
  console.log("Array:" + array);
  return currentValue;
});

// Current value:39
// Index:0
// Array:39,50,45,41,50
// Current value:50
// Index:1
// Array:39,50,45,41,50
// Current value:45
// Index:2
// Array:39,50,45,41,50
// Current value:41
// Index:3
// Array:39,50,45,41,50
// Current value:50
// Index:4
// Array:39,50,45,41,50

// örnek 2
const arrayNum = [3, 5, 7, 11, 9, 21, 27, 15];

const arrayMap = arrayNum.map((x) => x * 2);

console.log(arrayMap); //  [ 6, 10, 14, 22,18, 42, 54, 30 ]

// örnek 3

let numbers = [1, 4, 9, 16, 25];

let newNumbers = numbers.map((newNum) => {
  return Math.sqrt(newNum);
});

let result = newNumbers;
console.log(result); // [ 1, 2, 3, 4, 5 ]

// Örnek 4

const users = [
  {
    name: "Cristiano",
    surname: "Ronaldo",
    age: 38,
  },
  {
    name: "Lionel",
    surname: "Messi",
    age: 35,
  },
];

const newUsers = users.map((user) => {
  return (user.lastname = `Name: ${user.name} - Surname: ${user.surname} - Age: ${user.age}`);
});

const result1 = newUsers;
console.log(result1); // ['Name: Cristiano - Surname: Ronaldo - Age: 38', Name: Lionel - Surname: Messi - Age: 35' ]

// Örnek 5
const mathStudents = [
  {
    name: "Jane",
    score: 60,
    enrollmentYear: 2019,
  },
  {
    name: "Emmy",
    score: 40,
    enrollmentYear: 2020,
  },
  {
    name: "John",
    score: 43,
    enrollmentYear: 2019,
  },
  {
    name: "Linda",
    score: 20,
    enrollmentYear: 2019,
  },
];

const filterStudents = mathStudents.filter((filterStudent) => 
  filterStudent.enrollmentYear < 2020
);

const mapStudents = filterStudents.map((mapStudent) => {
  if (mapStudent.score > 40) {
    return `${mapStudent.name} gecti.`;
  } else {
    return `${mapStudent.name} kaldi.`;
  }
});

const result2 = mapStudents;

console.log(result2); // [ 'Jane gecti.', 'John gecti.', 'Linda kaldi.' ]
