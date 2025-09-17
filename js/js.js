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

/*resultados dos testes*/

console.log(calcularValorDaCompra(100, true, true)); // 15
console.log(calcularValorDaCompra(100, true, false)); // 10
console.log(calcularValorDaCompra(100,false,false)); // 0

/* Função para encontrar o ano mais próximo */

const anos = ['2012', '2010', '2020', '2022', '2035', '2045'];
function encontrarAno(ano){ 
    
    const resultado = [];
    
    for(let i = 0; i < anos.length; i++){
        if(anos[i] <= ano){

            return anos[i];
        }
    } 
}
console.log(encontrarAno(2021));
