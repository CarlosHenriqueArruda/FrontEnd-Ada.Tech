"use strict";
let numero = 10; //type faz a inferencia de tipo
const pi = 3.1415; //não pode ser alterado, o tipo é o proprio valor em constante
let nome = "Carlos";
let correta;
let resultado = numero * pi;
//ARRAYS tipagens
const numeros = [1, 2, 3, 4, 5];
const numeross = [1, 2, 3, 4, 5];
const misto = ["carlos", "idade", 1, 2, 4]; //uniontype - unindo dois tipos, não é recomendado
const pessoaTupla = ["Carlos", 23]; //tupla, geralmente é quando vc sabe quantos dados e os tipos dele
const pessoa = {
    //criando uma constante do "tipo" pessoa com as caracteristicas do tipo criado
    nome: "Carlos",
    idade: 23,
    profissao: "Desenvolvedor",
    altura: 1.81,
};
const pessoa2 = {
    nome: "Luiza",
    idade: 23,
    profissao: "Terapeuta",
    altura: 1.66,
};
//Union Types
function chooseNumber(number1, number2) { }
const outraPessoa = {
    nome: "Top",
};
//cria um tipo com uma chave e dps um objeto
const carlos = {
    "123.456.789-00": {
        nome: "Carlos",
        idade: 23,
        altura: 1.81,
    },
    "123.456.789-01": {
        nome: "Luiza",
        idade: 23,
        altura: 1.81,
    }
};
