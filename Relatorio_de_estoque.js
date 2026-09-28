/* conceito do prorama: Crie três arrays paralelos (mesma ordem, mesma posição = mesmo produto):
produtos — nomes (string), pelo menos 6 itens.
quantidades — quantos itens tem em estoque de cada um (número).
precos — preço unitário de cada um (número).
Use um único for para percorrer os três arrays ao mesmo tempo.*/

let produtos = ['calção','camisetas','casacos','cachicoes','bermudas','sapatos'];
let qu = [25,30,25,14,12,10];
let precos = [49.99,38.99,125.99,12.99,48.99,259.98];



let total = 0;

for(let i = 0; i < produtos.length &&
     i < qu.length &&
     i < precos.length; i++){

let soma = qu[i] * precos[i];
     total = total + soma;

 console.log(`
     |      Produto:     ${produtos[i]}   |
     |      quantidade:  ${qu[i]}         |
     |      preço:       ${precos[i]}     |`);

     
}

console.log(`Total em vendas: ${total}`);