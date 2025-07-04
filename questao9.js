function authors(booksByCategory) {
  const listaAutores = [];
  
  for (let i = 0; i < booksByCategory.length; i++){
    const categoria = booksByCategory[i];
    
    for (let j = 0; j < categoria.books.length; j++){
      const livro = categoria.books[j];
      const autor = livro.author;
      
      if (!listaAutores.includes(autor)){
        listaAutores.push(autor);
      }
    }
  }
  
  return listaAutores;
}
