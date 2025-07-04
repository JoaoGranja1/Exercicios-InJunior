function countBooksInCategory(booksByCategory){
  const contagem = {};
  
  for (let i = 0; i < booksByCategory.length; i++){
    const categoria = booksByCategory[i];
    
    const nomeCategoria = categoria.category;
    const qtdLivros = categoria.books.length;
    
    contagem[nomeCategoria] = qtdLivros;
    }
  
  return contagem;
}
