let time = [];
function adicionarJogador(){
    let nome = prompt("Digite o nome do jogador:");
    let idade = parseInt(prompt("Digite a idade do jogador:"));
    let posicao = prompt("Digite a posição do jogador:");
    let pontuacao = parseFloat(prompt("Digite a pontuação do jogador:"));
    let jogador = { nome, idade, posicao, pontuacao };
    time.push(jogador);
}
function buscarPorPosicao(){
    let posicao = prompt("Digite a posição que deseja buscar:");
    let encontrados = [];
    for (let i = 0; i < time.length; i++){
        if (time[i].posicao.toLowerCase() === posicao.toLowerCase()){
            encontrados.push(time[i]);
        }
    }
    if (encontrados.length > 0){
        return encontrados;
    }
    
    else{
        alert("Nenhum jogador encontrado nessa posição.");
        return null;
    }
}
function listarTime(){
    if (time.length === 0){
        console.log("Nenhum jogador cadastrado.");
    } 
    
    else{
        console.log("Jogadores cadastrados:");
        for (let i = 0; i < time.length; i++){
            console.log(`${i + 1}. Nome: ${time[i].nome}, Idade: ${time[i].idade}, Posição: ${time[i].posicao}, Pontuação: ${time[i].pontuacao}`);
        }
    }
}

function calcularPontuacaoMedia(){
    if (time.length === 0){
        return 0;
    }
    
    let totalPontuacao = 0;
    for (let i = 0; i < time.length; i++){
        totalPontuacao += time[i].pontuacao;
    }
    
    return totalPontuacao / time.length;
}
function mostrarMenu(){
    console.log("\nMenu:");
    console.log("1 - Adicionar jogador");
    console.log("2 - Buscar por posição");
    console.log("3 - Listar time");
    console.log("4 - Calcular pontuação média");
    console.log("5 - Sair");
}
let opcao = "";
while (opcao !== "5"){
    mostrarMenu();
    opcao = prompt("Escolha uma opção:");    
    
    switch(opcao){
        case "1": 
            adicionarJogador(); 
            break;

        case "2": 
            let jogadoresEncontrados = buscarPorPosicao();
            console.log(jogadoresEncontrados)
            break;

        case "3": 
            listarTime(); 
            break;

        case "4": 
            let media = calcularPontuacaoMedia();
            console.log(`Pontuação média do time: ${media}`);
            break;

        case "5": 
            console.log("Encerrando..."); 
            break;

        default: 
            console.log("Opção inválida!");
    }
}
