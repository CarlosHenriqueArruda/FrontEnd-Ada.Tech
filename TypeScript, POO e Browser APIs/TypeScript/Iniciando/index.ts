let numero = 10; //type faz a inferencia de tipo

const pi = 3.1415; //não pode ser alterado, o tipo é o proprio valor em constante

let nome: string = "Carlos";

let correta: boolean;

let resultado = numero * pi;

//ARRAYS tipagens

const numeros: number[] = [1, 2, 3, 4, 5];
const numeross: Array<number> = [1, 2, 3, 4, 5];

const misto: (number | string)[] = ["carlos", "idade", 1, 2, 4]; //uniontype - unindo dois tipos, não é recomendado

const pessoaTupla: [string, number] = ["Carlos", 23]; //tupla, geralmente é quando vc sabe quantos dados e os tipos dele

//Object Types

//Interface

interface Person {
  //usado geralmente para modelagem de uma classe, no caso, seria a classe pessoa e seus atributos
  //criando um "tipo" pessoa personalisado
  nome: string;
  idade: number;
  profissao?: string; //com o "?" esse parametro passa a ser opcional, podendo ser colocado depois do objeto criado
  altura: number;
}
const pessoa: Person = {
  //criando uma constante do "tipo" pessoa com as caracteristicas do tipo criado
  nome: "Carlos",
  idade: 23,
  profissao: "Desenvolvedor",
  altura: 1.81,
};

const pessoa2: Person = {
  nome: "Luiza",
  idade: 23,
  profissao: "Terapeuta",
  altura: 1.66,
};

//Type

type Pessoa = {
  //type é mais generico, pode ser usado pra qualquer coisa
  nome: string;
  idade: number;
  profissao: string;
  altura: number;
};

//Union Types

function chooseNumber(number1: number, number2: number) {}

//utility types: cria tipos a partir de um tipo que já existe

//partial
//posso criar um tipo a partir de um outro tipo tonando todos os parametros opcionais
type PersonPartial = Partial<Person>;

const outraPessoa: PersonPartial = {
  nome: "Top",
};

//required
//torna todos os parametros de um tipo obrigatorio, criando um novo tipo
type PersonRequired = Required<Person>;

//pick
//perga apenas alguns parametros de um tipo
type PersonPicked = Pick<Person, "nome" | "idade">;

//Omit
//ele omite algum parametro de um tipo criando outro sem ele
type PersonOmit = Omit<Person, "profissao">;

//excluded
//exclue de dentro de um parametro algum tipo

//Record

type Pessoas = Record<string, Person>;
//cria um tipo com uma chave e dps um objeto
const carlos: Pessoas = {
  "123.456.789-00": {
    nome: "Carlos",
    idade: 23,
    altura: 1.81,
  },
  "123.456.789-01":{
    nome: "Luiza",
    idade: 23,
    altura: 1.81,
  }
};
