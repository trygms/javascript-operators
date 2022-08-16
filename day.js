 let gun = prompt("Program için günü yazınız, örneğin: Pazartesi");
  switch(gun) {
    case `Pazar`:
        console.log(`${gun}: Self-Study`);
    break;
    case `Pazartesi`:
        console.log(`${gun}: InClass`);
    break;
    case `Salı`:
        console.log(`${gun}: InClass`);
    break;
    case `Çarşamba`:
        console.log(`${gun}: InClass`);
    break;
    case `Perşembe`:
        console.log(`${gun}: InClass`);
    break;
    case `Cuma`:
        console.log(`${gun}: Teamwork`);
    break;
    case `Cumartesi`:
        console.log(`${gun}: InClass + Workshop`);
        break;
        default:
            console.log(`${gun} isimli bir gün yok!`);
    }
