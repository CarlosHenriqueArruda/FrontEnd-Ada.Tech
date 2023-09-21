"use strict";
//definindo a classe pessoa, os atributos e metodos
class Pessoa {
    //metodo construtor
    constructor(nome, idade, altura, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this._cpf = cpf;
    }
    //metodos = ações (funcoes)
    dormir() {
        console.log("zZz...😴");
    }
    //accessor: getter
    get cpf() {
        return this._cpf;
    }
    set cpf(newcpf) {
        if (newcpf.length !== 14) {
            //lancando um erro!
            throw new Error("tamanho do CPF incorreto!");
        }
        this._cpf = newcpf;
    }
}
const carlos = new Pessoa("Carlos", 23, 1.81, "123.456.789-00");
console.log(carlos.cpf);
