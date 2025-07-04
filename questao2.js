let continuar = "s";
while (continuar === "s" || continuar === "S"){
    let n = prompt("Digite um número para que seja calculado seu fatorial: ");
    if (n >0 && n % 1 === 0) {
        let fatorial = 1;
        for (let i = 1; i <= n; i++) {
            fatorial *= i;
        }
        alert(`O fatorial de ${n} é ${fatorial}`);
    }
    else {
        alert("Número inválido. Digite um número inteiro positivo.");
        continuar = "s";
        continue;
    }
    continuar = prompt("Deseja continuar? (s/n): ");

}
