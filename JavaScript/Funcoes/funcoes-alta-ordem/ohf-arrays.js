//funcoes de alta ordem de arrays

//Array.forEach \/ //
const numeros = [40, 24, 67, 89, 23, 10];

numeros.forEach((elemento, index, arrayCompleto) => {
  console.log(index, elemento, arrayCompleto);
}); //essa função passa pelo elemento do array e faz o que tiver na função, que no caso, é dar um "print" no elemento (pode ser qualquer nome, não precisa ser elemento)

console.clear();
// Array.prototype.find() > util para encontrar elemento no array \/

const encontrado = numeros.find((numero) => {
  return numero === 10;
}); //busca um item especifico e para quando a condição for verdadeira, geralmente comparação, pode ser maior, menor e etc
console.log(encontrado);
console.clear()

//array de objetos
const pessoas = [
  {
    nome: "carlos",
    idade: 23,
  },
  {
    nome: "luiza",
    idade: 24,
  },
  {
    nome: "henrique",
    idade: 25,
  },
];
const pessoaEncontrada = pessoas.find((pessoa) => pessoa.idade > 24); //nessa função ele percorre um array de objetos, como no exemplo de pessoas, ele busca o item "idade" e verifica se a idade é maior que 40, se for, ele tras o objeto inteiro, no caso, todos os dados da pessoa!

console.log(pessoaEncontrada);
console.clear()

//findIndex é igual ao find, mas ele retorna o indice do elemento, ele retorna -1 se n achar ninguem

const indiceDaPessoaEncontrada = pessoas.findIndex((pessoa) => pessoa.idade > 24);
console.log(indiceDaPessoaEncontrada)
