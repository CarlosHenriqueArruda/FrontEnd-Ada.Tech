const prompt = require("readline-sync");

const idade = Number(prompt.question("Qual eh a sua idade?"));

const maiorDeIdade = idade >18;

if (maiorDeIdade == true){
  console.log("Eh maior de idade!")
} else{
  console.log("Eh menor de idade!")
} // else if = elif
