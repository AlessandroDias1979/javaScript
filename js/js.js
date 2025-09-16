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

const moeda = saldo;
let real = moeda;
let dolar = moeda / 6;
let euro = moeda / 7;     

/* conversão de moedas */

console.log(`O saldo em real é: R$${real}`);
console.log(`O saldo em dólar é: U$${dolar}`);
console.log(`O saldo em euro é: €${euro}`);

