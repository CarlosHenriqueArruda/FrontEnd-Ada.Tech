//object literal

const array = ["Carlos", 23, 1.81, true];

const pessoa = { nome: "Carlos",
 idade: 23, 
 altura: 1.81, 
 programador: true, 
 print: ()=>{
  console.log("Chamou a função")
 }
}; //pela chave se obtem o valor, pode ser array

//--//
console.log(pessoa);
console.log(pessoa.nome); // printa um especifico
console.log(pessoa["idade"]); //para chamar chaves mais complexas, por exemplo "nome da pessoa"
console.clear();
//add propriedades
pessoa.profissao = "Desenvolvedor";
console.log(pessoa);
pessoa.nome = "Henrique"; //modificar
console.log(pessoa);
console.clear();
delete pessoa.profissao; //deleta
console.log(pessoa)
console.clear()

const idade = 23;
const altura = 1.81;
const objeto ={
  idade,
  altura,

} // consigo colocar variaveis como atributos em objetos

const {nome,hobbies} = pessoa; //pega um atributo de um objeto e cria uma variavel
