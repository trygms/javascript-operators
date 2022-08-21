const rasgeleSay = Math.round(Math.random() * 100);
let tahmin;
let sayac = 5;
let yenidenDene = true;
while (yenidenDene) {
  do {
    tahmin = +prompt("0-100 arası bir sayı giriniz:");
    sayac -= 1;
    if (tahmin === rasgeleSay) {
      console.log(`Tebrikler sayıyı bildin`);
      break;
    } else if (tahmin < rasgeleSay) {
      console.log(
        `Yaklaştın! Biraz daha yüksek bir değer yaz. Unutma ${sayac} tahmin hakkın kaldı`
      );
    } else {
      console.log(
        `Yaklaştın! :Biraz daha küçük bir değer yaz. Unutma ${sayac} tahmin hakkın kaldı`
      );
    }
  } while (sayac > 0);

  if (sayac < 1) {
    console.log("Üzgünüm, Kaybettiniz. Bekli başka bir sefere...");
  }
  let secVeOyna = prompt(
    "Çıkmak için (cik veya CIK) yazınız. Devam etmek için herhangi bir tuşa basınız"
  );

  if (secVeOyna === "cik" || secVeOyna === "CIK") {
    console.log("Güle güle");
    yenidenDene = false;
    break;
  }
}
