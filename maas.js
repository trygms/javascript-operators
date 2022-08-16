
let maas = +prompt(`Maaşınızı yazınız`);

if (maas <= 5000) {
  maas = maas + maas * 50 / 100;
}
else {
    maas = maas + maas * 10 / 100;  
}
console.log(`Yeni maaşınız ${maas} TL dir`);