var name = "Mehemt"; // global scope
const address = "İstanbul"; // const sabit, değiştirlemez. const => Değer olarak sabit olarak tanımlanan ve kod blog boyunca değişmeyen ve değiştirilemeyen değişkenler.


function printFunc() {
  var name = "Gizem";
  var age = 20;
  console.log("function scope: ", name, age);
}

if (true) {
  let gender = "Kadin";
  let name = "Zeynep";
  console.log(name, gender);
}

console.log(name);

printFunc();

// fonksiyonlar kendi scope alanlarını oluşturur.
// block(if, for vs) içerisinde yeni bir scope oluşmaz. Ayrıca bu block içindeki degişkenleri let ve const keyword'ü ile olustur. (let,const)
