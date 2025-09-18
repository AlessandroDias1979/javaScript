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
})

