const prompt = require("readline-sync");

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//for (let i = 0; i < arr.length; i++) {
// console.log("indice", i, "- conteudo:", arr[i]);
//}
//console.clear();
//for of

///for (const elemento of arr) {
//  console.log(elemento);
//} //percorre os elementos
//for in

for (const indice in arr) {
  console.log(indice);
} //percorre os indices
