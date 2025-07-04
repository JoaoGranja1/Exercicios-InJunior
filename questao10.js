let fila = [];

function mostrarMenu(){
    console.log("\n--- FILA DE ATENDIMENTO ---");
  
    if (fila.length === 0){
        console.log("Fila vazia");
    } 
  
    else{
        console.log("Clientes na fila:");
        fila.forEach((cliente, posicao) => {
        console.log(`${posicao + 1}º - ${cliente}`);
        });
    }
    

    console.log("\n1. Adicionar cliente");
    console.log("2. Atender próximo");
    console.log("3. Sair");
    }

    function adicionarCliente(){
    const nome = prompt("Nome do cliente:");
    if (nome){
        fila.push(nome);
        console.log(`${nome} entrou na fila.`);
    }
    }

    function atenderCliente(){
    if (fila.length > 0){
        const cliente = fila.shift();
        console.log(`Atendendo: ${cliente}`);
    } 
    else{
        console.log("Não há clientes na fila.");
    }
    }


    let opcao = "";
    while (opcao !== "3"){
    mostrarMenu();
    opcao = prompt("Escolha uma opção:");
    
    switch(opcao){
        case "1": 
        adicionarCliente(); 
        break;

        case "2": 
        atenderCliente(); 
        break;

        case "3": 
        console.log("Encerrando..."); 
        break;
        
        default: 
        console.log("Opção inválida!");
    }
    
    if (opcao !== "3"){
        prompt("Pressione Enter para continuar...");
    }
    }