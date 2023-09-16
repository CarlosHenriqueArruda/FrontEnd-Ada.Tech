//funcao que recebe outra função como parametro
const somar = (num1, num2) => num1 + num2;
const subtrair = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;

const calcular = (num1, num2, operacao) => operacao(num1, num2);
//
const retorno = calcular(10, 5, somar);

calcular(10, 5, (num1, num2) => num1 * num2 + 2 * num1 * num2);
