// console.log(1);
// console.log(2);
// setTimeout(() =>  console.log(3), 3000);
// console.log(4);

async function escreverInformacoesPais(paisDesejado) {
    const info = await fetch('https://restcountries.com/v3.1/name/' + paisDesejado);
    console.log(await  info.json());
}

escreverInformacoesPais('brazil'); 