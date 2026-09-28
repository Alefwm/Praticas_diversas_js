const objetos = ['carro','suco','copo','garrafa','tenis']
let precos = [10.99,15.90,89.99,55.45,84.90];

for(let i = 0; i < objetos.length && i < precos.length; i++){// aqui o item vai rodar, até ser menor que o carros
   console.log('o produto: ' + i + '\n que é o '+objetos[i]+" e seu valor: R$"+ precos[i]);
   


}