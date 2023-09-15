//muito util quando sua variavel possui valores especificos

const permissoes = "aluno" //aluno || professor || admin

switch(permissoes){
  case "aluno":
    console.log("Voce so pode vizualizar as aulas!")
    break
  case "professor":
    console.log("Voce pode alterar as aulas e adicionar exercicios!")
    break
  case "admin":
    console.log("Voce pode fazer o que quiser!")
    break
  default:
    console.log("Usuario nao encontrado.")
    break
}