// Array.prototype.every(): verifica se TODOS os elementos de um array seguem uma determinada condição de uma função
const pessoas = [
  {
    nome: "carlos",
    idade: 23,
    altura: 1.81,
  },
  {
    nome: "luiza",
    idade: 24,
    altura: 1.79,
  },
  {
    nome: "henrique",
    idade: 25,
    altura: 1.81,
  },
];

const numeros = [40, 24, 67, 89, 23, 10];

const todosPositivos = numeros.every((elementos) => elementos > 0); //verifica se TODOS são positivos, se sim retorna true,

console.log(todosPositivos);
console.clear();

const maiorIdade = pessoas.every((pessoas) => pessoas.idade >= 18); //se coloca pessoas pq são os objetos que vão passar, e depois se define que é a pessoa.idade para verificar a idade dentro do objeto pessoa, e depois a condição, no caso, maior que 18 anos.

console.log(maiorIdade);
console.clear();

// Array.prototype.some(): verifica se ALGUM elemento de um array torna verdadeira uma determinada condição de uma função

const numeros2 = [-1, 3, 7, -3, 5];
const some = numeros2.some((numero) => numero > 2); //verifica se algum dos numeros é maior que 2 (numero pode ser i)

console.log(some);
console.clear()
