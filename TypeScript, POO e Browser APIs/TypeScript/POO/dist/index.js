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
        //get é apenas um get normal, igual ao java
        return this._cpf;
    }
    set cpf(newcpf) {
        //set é o set normal do
        if (newcpf.length !== 14) {
            //lancando um erro!
            throw new Error("tamanho do CPF incorreto!");
        }
        this._cpf = newcpf;
    }
}
class Professor extends Pessoa {
    constructor(nome, idade, altura, cpf, codigo) {
        super(nome, idade, altura, cpf); //esse super no construtor é para passar os atributos da classe mãe para a filha
        this.codigo = codigo; //esse codigo é exclusivo por isso é chamado
    }
    ensinar() {
        console.log("Ensinando...🧠");
    }
}
const professor = new Professor("professor", 23, 1.81, "123.123.456-00", "12"); //criando um novo professor
console.log(professor.ensinar);
//polimorfismo
