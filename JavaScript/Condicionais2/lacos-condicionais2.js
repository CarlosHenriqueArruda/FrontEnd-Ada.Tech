const prompt = require("readline-sync");

const aleatorio = parseInt(Math.random() * 10);

let numeroUsuario = Number(prompt.question("Informe um numero entre 0 e 10: "));

while (numeroUsuario !== aleatorio) {
  console.log("Voce errou o numero, tente novamente!");
  numeroUsuario = Number(prompt.question("Informe um numero entre 0 e 10: "));
}
console.log("Parabens!");
