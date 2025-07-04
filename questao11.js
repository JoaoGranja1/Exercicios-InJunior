let tamVetor = prompt("Quantidade de números que deseja alocar: ");
let vetor = [];

for (let i = 0; i < tamVetor; i++) {
    vetor[i] = prompt(`Digite o número ${i + 1}: `);
}

let cont = 0;
for (let i = 0; i < tamVetor; i++){
    if (vetor[i] > vetor[i-1])
        cont ++;
}

console.log(`Quantidade de números maiores que o anterior: ${cont}`);