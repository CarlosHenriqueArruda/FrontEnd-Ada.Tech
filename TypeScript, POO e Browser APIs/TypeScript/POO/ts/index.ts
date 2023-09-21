//classe
interface iPessoa {
  nome: string;
  idade: number;
  altura: number;
  dormir: () => void;
}

//definindo a classe pessoa, os atributos e metodos
class Pessoa implements iPessoa {
  //implementado a interface iPessoa
  //atributos = caracteristicas (variaveis)
  nome: string;
  idade: number;
  altura: number;
  private _cpf: string; //esse metodo onlyright está em modo apenas de vizualização (private deixa privado)

  //metodo construtor
  constructor(nome: string, idade: number, altura: number, cpf: string) {
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
  get cpf(): string {
    //get é apenas um get normal, igual ao java
    return this._cpf;
  }
  set cpf(newcpf: string) {
    //set é o set normal do
    if (newcpf.length !== 14) {
      //lancando um erro!
      throw new Error("tamanho do CPF incorreto!");
    }
    this._cpf = newcpf;
  }
}

class Professor {
  nome: string;
  idade: number;
  altura: number;
  codigo: string;
}
