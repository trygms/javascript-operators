

const gelir = +prompt('Aylık Gelirinizi Giriniz');
const gider = +prompt('Aylık Giderinizi Giriniz');
let asgariUcret = 5500;
console.log((gelir >= gider + asgariUcret) ? 'Krediniz onaylandi' : 'Krediniz onaylanmadi')