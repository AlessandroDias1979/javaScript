const usuario = 'Bruce Wayne';
const deposito = [100, 200, 200, 400];
const saque = [200, 200, 100];
let soma = 0;
let subtracao = 0;
let saldo = 0; 


for (let i = 0; i < deposito.length; i++) {
    soma += deposito[i];
}
console.log(`O usuário é: ${usuario}`);
console.log(`O total de depósitos é: R$${soma}`);


for (let i = 0; i < saque.length; i++) {
   subtracao += saque[i];
   saldo = soma - subtracao;
}

console.log(`O usuário é: ${usuario}`);
console.log(`O total de saques é: R$${subtracao}`);
console.log(`O saldo final é: R$${saldo}`);

/* constantes para conversão*/

const moeda = saldo;
let real = moeda;
let dolar = moeda / 6;
let euro = moeda / 7;     

/* conversão de moedas */
/* toFixed(2) -> limita o número de casas decimais para 2 */

console.log(`O saldo em real é: R$${real}`);
console.log(`O saldo em dólar é: U$${dolar.toFixed(2)}`);
console.log(`O saldo em euro é: €${euro.toFixed(2)}`);


/* Função para calcular o valor da compra com base em convênios e cartão da loja */

function calcularValorDaCompra(valorDaCompra, possuiOuNaoConvenio, compraOuNaoComCartaoDaLoja){
    if(possuiOuNaoConvenio && compraOuNaoComCartaoDaLoja){
        return valorDaCompra - valorDaCompra * 0.15;
}
    else if(possuiOuNaoConvenio || compraOuNaoComCartaoDaLoja){
        return valorDaCompra - valorDaCompra * 0.10;
    } else {

        return valorDaCompra;

    }
}
/* Função para calcular o valor da compra sem desconto se o valor for maior que 100 */

function semDesconto(valorDaCompra, possuiOuNaoConvenio, compraOuNaoComCartaoDaLoja){
    if(valorDaCompra >= 100 && possuiOuNaoConvenio && compraOuNaoComCartaoDaLoja ){
        return valorDaCompra; 
    } 
    if (valorDaCompra < 100 && possuiOuNaoConvenio && compraOuNaoComCartaoDaLoja ){
        return valorDaCompra - valorDaCompra * 0.15
    } 
    if (valorDaCompra < 100 || possuiOuNaoConvenio || compraOuNaoComCartaoDaLoja ){
        return valorDaCompra - valorDaCompra * 0.10
    } 
    else {
        return valorDaCompra;
}
}

console.log(`Não ouve desconto por que passou do valor de R$ 100 e você gasotu R$ `+ semDesconto(150, true, true)); // 150
console.log(`Voce teve um desconto de 15% e você gastou R$ ` + semDesconto(90, true, true)); // 76.5





/*resultados dos testes*/

console.log(calcularValorDaCompra(100,false,false)); // 0

console.log(' Seu desconto é de R$ ' + (100 - calcularValorDaCompra(100, true, true)));// 15
console.log('Sua compra foi de R$ ' + calcularValorDaCompra(100, true, true)); // 85
console.log(' Seu desconto é de R$' + (100 - calcularValorDaCompra(100, true, false))); // 10
console.log(' Sua compra foi de R$ ' + calcularValorDaCompra(100, true, false)); // 90
console.log(' Você não teve descontos e sua compra foi de R$' + (100 - calcularValorDaCompra(100, false, false)));// 100

/* Função para encontrar o ano mais próximo */

const anos = ['2012', '2010', '2020', '2022', '2035', '2045'];
function encontrarAno(ano){ 
    
    const resultado = [];
    for(let i = 0; i < anos.length; i++){
        if(anos[i] <= ano){

            resultado.push(anos[i]);
        }
    } 
    return resultado;
}

/* Função para encontrar o ano mais distante */

function encotrarAnoReverso(anoReverso){

    const resultado = [];
    for(let i = 0; i < anos.length; i++){
        if(anos[i] >= anoReverso){ 
            resultado.push(anos[i]);
}
    }
    return resultado;
}

/* Resultados dos testes */

console.log(encotrarAnoReverso(2015));
console.log(encotrarAnoReverso(2021));
console.log(encontrarAno(2021));
console.log(encontrarAno(2035));

anos.forEach(function(ano){
    console.log(ano);
}
)

/*Crie uma função em JavaScript que retorna um array das suas músicas favoritas.
Essa função deve receber como parâmetro qual o nome do artista.
Você deve implementar pelo menos dois artistas, com pelo menos uma música
cada. Se a função receber o nome de um artista que você não definiu então deve ser retornado um array vazio.*/

function musicasFavoritas(artista){
    const musicas = {
        'Linkin Park': ['In the End', 'Numb', 'Crawling'], 

        'Coldplay': ['Yellow', 'Fix You', 'The Scientist'],
    };
    return musicas[artista];

}
console.log(musicasFavoritas('Linkin Park'));
console.log(musicasFavoritas('Coldplay'));

/*Em mercados, a compra de bananas é feita por quilos.
Vai acontecer um evento escolar que precisa calcular quantos quilos de banana serão necessários para 200 alunos.
Sendo que as bananas serão distribuídas no turno da manhã e no turno da noite.
Faça uma função que irá gerar quantos quilos a escola deve comprar.
Considere que cada banana pesa em média 90g.
Além disso, considere uma marge de erro de 20%.*/

function calcularBananas(alunos){
    const pesoBanana = 0.09; // peso em kg

    const margemDeErro = 1.2; // 20% de margem de erro
    const bananasPorAluno = 2; // 2 bananas por aluno
}

/*Faça a modelagem e definição de uma lista dos seus filmes. Cada filme deve
conter pelo menos 3 propriedades (das não especificadas) e pelo menos um
deles deve ser um array de number . Você deve indicar se o filme está na sua
lista de favoritos ou não. Além disso, seu filme deve possuir uma lista de
gêneros. */

const filmes = {
    filme1: {
        titulo: 'Star Wars',
        ano: 1977,
        diretor: 'George Lucas',
    },
    filme2: {
        titulo: 'Senhor dos Anéis',
        ano: 2001,
        diretor: 'Peter Jackson',
    }
}
const favorito = filmes.filme1;
console.log(favorito);
console.log(`O filme favorito é ${favorito.titulo}, lançado em ${favorito.ano} e dirigido por ${favorito.diretor}`);


