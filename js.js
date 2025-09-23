
const filmes = [
    {
    "nome": "Star Wars",
    "lancamento": 1977,
    "diretor": ["George Lucas"],
    "gênero": ["Ficção Científica"]},
    {
    "nome": "Senhor dos Anéis",
    "lancamento": 2001,
    "diretor": ["Peter Jackson"],
    "gênero": ["Fantasia", "Aventura"]},
    {
     "nome": "Matrix", 
      "lancamento": 1999,
      "diretor": ["Irmãos Wachowski"],
      "gênero": ["Ficção Científica", "Ação"]  
    }];

    /*Utilizando o Node.js, crie uma função que irá retornar um novo array com apenas o nome e o ano de lançamento
    dos filmes. Você deve utilizar o forEach para isso.*/

    filmes.forEach(filme => {
        console.log(`Nome: ${filme.nome}, Ano de lançamento: ${filme.lancamento}`);
    });

    /*Crie uma função que irá retornar um novo array e adicione um atributo chamado id que é gerado de forma incremental
    para cada filme. Você deve utilizar o forEach.*/

    let id = 1;
    filmes.forEach(filme => {
        filme.id = id++;

    });
    console.log(filmes);

    const filmeFantasia = filmes.filter(filme => filme.gênero.includes("Fantasia"));
    console.log(filmeFantasia);

    const filmeAcaoFiccaoCientifica = filmes.filter(filme => filme.gênero.includes("Ação") ||
    filme.gênero.includes("Ficção Científica"));
      
    console.log(filmeAcaoFiccaoCientifica);

    const filmeLancadoAntes2000 = filmes.filter(filme => filme.lancamento < 2000);
    console.log(filmeLancadoAntes2000);

    