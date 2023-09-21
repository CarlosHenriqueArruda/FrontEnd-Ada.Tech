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

class Professor extends Pessoa {
  codigo: string;
  constructor(
    nome: string,
    idade: number,
    altura: number,
    cpf: string,
    codigo: string
  ) {
    super(nome, idade, altura, cpf); //esse super no construtor é para passar os atributos da classe mãe para a filha
    this.codigo = codigo;//esse codigo é exclusivo por isso é chamado
  }
  ensinar(){//ele já herda todos os metodos da classe mãe
    console.log("Ensinando...🧠")
  }
}

const professor = new Professor("professor",23,1.81,"123.123.456-00","12") //criando um novo professor

console.log(professor.ensinar)

//polimorfismo