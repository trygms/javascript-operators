let girdi;
let toplamNot = 0;
let notSay = 0;
while (girdi != "Q" || girdi != "q") {
  girdi = prompt("Ortalamasını almak istediğiniz Notları Giriniz");

  if (girdi == "Q" || girdi == "q") {
    break;
  }
  toplamNot += +girdi;
  notSay += 1;
}

console.log(`Girdiğiniz ${notSay} notun ortalaması: ${toplamNot / notSay}`);
