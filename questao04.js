const EURO = 6.1;
const DOLAR = 5.7;
let x = prompt("Valor em real a ser convertido: ");
valorReal = Number(x);
valorEuro = valorReal / EURO;
valorDolar = valorReal / DOLAR;



console.log(`Valor em Reais: R$ ${valorReal.toFixed(2)}`);
console.log(`Valor em Euro: € ${valorEuro.toFixed(2)}`);
console.log(`Valor em Dólar: US$ ${valorDolar.toFixed(2)}`);

