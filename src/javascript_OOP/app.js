// OOP: Nesne Tabanlı Programlama
// constructor

function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function (cevap) {
    return cevap === this.dogruCevap
}

let soru1 = new Soru("1-Türkiyenin en büyük takimi hangisidir?", { a: "BJK", b: "GS", c: "FB" }, "b");
let soru2 = new Soru("2-C.Ronaldo hangi takimda oynamadi?", { a: "M.United", b: "GS", c: "R.Madrid" }, "b");

let sorular = [
    new Soru("1-Türkiyenin en büyük takimi hangisidir?", { a: "BJK", b: "GS", c: "FB" }, "b"),
    new Soru("2-Türkiyenin en büyük takimi hangisidir?", { a: "BJK", b: "GS", c: "FB" }, "b"),
    new Soru("3-Türkiyenin en büyük takimi hangisidir?", { a: "BJK", b: "GS", c: "FB" }, "b"),
    new Soru("4-Türkiyenin en büyük takimi hangisidir?", { a: "BJK", b: "GS", c: "FB" }, "b"),
];


console.log(soru1.cevabiKontrolEt("b")) // true