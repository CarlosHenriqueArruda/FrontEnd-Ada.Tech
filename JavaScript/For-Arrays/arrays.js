const prompt = require("readline-sync");

const array = [1, 2, 3];
const pessoa = ["Carlos", 1.81, 23, true];

console.log(pessoa);
pessoa[3] = false; // vc pode alterar os elementos do arrays
console.log(pessoa);
console.log(pessoa.length); //mostra total do array
// pesquisar metodo dos arrays //
console.clear();

//fatiando arrays
const numeros = [1, 2, 3, 4, 5, 6];
console.log(numeros.slice(0, 3));

console.clear();

//adicionando elementos
//final
numeros.push(0);
console.log(numeros);
//inicio
numeros.unshift(-1);
console.log(numeros);
//removendo no final
numeros.pop();
console.log(numeros);
//removendo do inivio
numeros.shift();
console.log(numeros);
console.clear();
////////////////////////////////////////////
//verificar se um elemento existe em um array  - exemplo com 20 e 2
console.log(numeros.includes(20));
console.log(numeros.includes(2));
console.clear();
//indexOF  - f2 muda a variavel em todo codigo
const indice = numeros.indexOf(2);
console.log(indice); // mostra o indice de um elemento no array, o primeiro que achar
// lastindexof - procura o ultimo indice que tem aquele elemento, podendo ele se repetir varias vezes
