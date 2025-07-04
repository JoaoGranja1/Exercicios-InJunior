let anos = [1999, 2002, 2005, 1935, 2024];

function verificarIdades(anos) {
    let n = anos.length;
    let anoAtual = Number(prompt("Ano de comparação: "));
    let resp = [];
    
    for (let i = 0; i < n; i++) {
        if ((anoAtual - anos[i]) >= 18) {
            resp[i] = "maior";
            console.log(`Pessoa ${i+1}: Maior de idade`);
        } else {
            resp[i] = "menor";
            console.log(`Pessoa ${i+1}: Menor de idade`);
        }
    }
    return resp;
}

