const prompt = require("readline-sync");

let idade = prompt.question("Qual eh a sua idade?");
const idadeNumber = Number(idade);
console.log("O usuario tem", idade, "Anos");
console.log(idadeNumber, typeof idadeNumber);
console.log(String(10));

console.log()