const prompt = require("readline-sync");
//------------------------------------//

//let saldo= Number(prompt.question("Qual o seu saldo?:"))
//while (saldo < 0){
//saldo= Number(prompt.question("Saldo invalido, por favor digite novamente: "));
//}
//console.log(saldo);

let notaDoAluno = Number(prompt.question("Informe a nota do aluno"));
let notaGeral = 0;
let contador = 0;
while (notaDoAluno >= 0) {
  notaGeral += notaDoAluno;
  notaDoAluno = Number(prompt.question("Informe a nota do aluno"));
  contador ++;
}
console.log(contador);
console.log(notaGeral);
console.log(notaGeral / contador);
