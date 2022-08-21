//ODEV1: Dort Islem Hesap Makinasi
let say1 = +prompt("1.Sayı:");
let say2 = +prompt("2.Sayı:");
let islem = prompt(`"islem yazınız: +, -, *, /"`);
let sonuc;

if (islem == '+') {
  sonuc=say1+say2;
}
else if (islem == '-') {
  sonuc=say1-say2;
}
else if (islem == '*') {
  sonuc=say1*say2;
}
else if (islem == '/') {
  sonuc=say1/say2;
}
else {
console.log("Dort islemden birisini giriniz");
}
console.log(`Sonuç: ${sonuc} dir`);