const frase = prompt("Digite uma frase para verificar se é um palíndromo:");

let fraseModificada = frase.toLowerCase().split(' ').join('');
let fraseReversa = "";

for (let i = fraseModificada.length - 1; i>=0 ; i--){
    fraseReversa += fraseModificada[i];
}
if (fraseModificada === fraseReversa){
    console.log("A frase é um palíndromo");
}
else{
    console.log("A frase não é um palíndromo");
}
