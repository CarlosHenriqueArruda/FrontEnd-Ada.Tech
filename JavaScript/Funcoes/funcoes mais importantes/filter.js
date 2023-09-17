//basicamente filta os array pegando SOMENTE o que atender a condição desejada

const valores = [29, 45, 32, 24, 4, 22, 2, 49, 23, 8];

const paresEncontrados = valores.filter((i) => i % 2 == 0); //percore um array em busca de numeros pares

console.log(paresEncontrados);
