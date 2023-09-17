//map
// Cria um novo array que possue o MESMO TAMANHO do array original, composto pelos elementos que foram retornados a cada interação
const numeros = [40, 24, 67, 89, 23, 10];

const teste = numeros.map((i) => {
  //neste exemplo ele percorre um array, cria outro, mas com todos os valores multiplicados por 2
  return i * 2;
});
console.log(teste);
console.clear();

//teste 2

const carrinho = [
  { produto: "Feijão", preco: 7.98, quantidade: 3 },
  { produto: "Arroz", preco: 4.98, quantidade: 5 },
  { produto: "Leite 1L", preco: 6.99, quantidade: 2 },
];
const carrinho2 = carrinho.map((produto) => {    //neste exemplo, pegamos uma lista de compra, mas colocando o valor total em uma nova lista
  return { ...produto, 
    total: produto.preco * produto.quantidade };
});

console.log(carrinho2)
