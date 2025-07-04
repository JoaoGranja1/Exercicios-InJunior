function EncontrarElementoUnico(array){
    for (let i = 0; i < array.length; i++){
        let cont = 0;
        
        for (let j = 0; j < array.length; j++){
            if (array[i] === array[j]){
                cont++;
            }
        }
        
        if (count === 1){
            return array[i];
        }
    }
}
