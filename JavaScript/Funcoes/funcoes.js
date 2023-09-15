function saudacao(nomeEstudante, curso = "Front-end em React") {
  //usar o = deixa um parametro padrão, mas que pode ser substituivel
  // template string - basta usar crases `` e usar ${} para colocar variavel
  return `Olá, ${nomeEstudante}! Seja bem-vindo ao curso de ${curso}`;
}
const mensagemSaudacao = saudacao("Carlos", "Front-end em React");
//////////////////////////////////////////
console.log(mensagemSaudacao);

function somar(numero1, numero2) {
  return numero1 + numero2;
}
const resultado = somar(2, 3);
console.log(resultado);
console.log(resultado + 10);
