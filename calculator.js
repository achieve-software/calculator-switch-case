// calculator program with switch-case...
console.log("...........CALCULATOR PROGRAM..........");
const s1 = Number(prompt("Enter 1. number:"));
const islem = prompt("islem giriniz (+,-,*,/)");
const s2 = Number(prompt("Enter 2. number:"));
let sonuc = 0;

switch (islem) {
  case "+":
    sonuc = s1 + s2;
    break;
  case "-":
    sonuc = s1 - s2;
    break;

  case "*":
    sonuc = s1 * s2;
    break;

  case "/":
    sonuc = s1 / s2;
    break;

  default:
    alert("yanlış işlem girişi");
    break;
}
console.log("işlem sonucu " + sonuc);
