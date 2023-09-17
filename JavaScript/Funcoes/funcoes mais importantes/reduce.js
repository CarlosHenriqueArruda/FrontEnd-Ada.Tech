// metodo que executa para cada elemento do array a função parametro, resultando em um unico elemento no final

numeros = [1, 2, 3, 4, 5];

const media = numeros.reduce((acumulador, elemento, _, array) => {
  //colocar um underline pula o parametro
  return elemento / array.length + acumulador;
}, 0);

console.log(media);
console.clear();

const somaDosPares = numeros.reduce((acumulador, elemento) => {
  //soma dos numeros pares
  if (elemento % 2 == 0) {
    return elemento + acumulador;
  } else {
    return acumulador;
  }
}, 0);

console.log(somaDosPares);
console.clear();

//total a pagar do carrinho

const carrinho = [
  { produto: "Feijão", preco: 7.98, quantidade: 3 },
  { produto: "Arroz", preco: 4.98, quantidade: 5 },
  { produto: "Leite 1L", preco: 6.99, quantidade: 2 },
];

const totalAPagar = carrinho.reduce((acumulador, item) => {  //esse reduce calcula o total a pagar e mostra o final
  return item.preco * item.quantidade + acumulador;
}, 0);

console.log(totalAPagar);
