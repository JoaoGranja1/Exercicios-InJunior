alert("ax² + bx + c = 0");
alert("Digite os valores de a, b e c para encontrar as raízes.");
let a = prompt("Valor de a: ");
let b = prompt("Valor de b: ");
let c = prompt("Valor de c: ");
let delta = (b * b) - (4 * a * c);
if (delta < 0 ){
    alert("Não existem raízes reais para a equação.");
} else if (delta === 0) {
    let raiz = -b / (2 * a);
    alert(`A equação possui uma raiz real: ${raiz}`);
} else {
    let raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
    let raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
    alert(`As raízes reais da equação são: ${raiz1} e ${raiz2}`);
}

        


