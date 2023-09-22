//selecionando elementos HTML da pagina usando document
//pegando elementos pelo nome da tag

const h1 = document.getElementsByTagName("h1"); //pegando elementos pela tag

//pegando elementos pelo nome da classe

const paragrafo = document.getElementsByClassName("paragrafo");

console.log(paragrafo);

//pegando elementos pelo NAME da tag

const emailinput = document.getElementsByName("email");

console.log(emailinput)

//pegando elementos pelo ID da tag

const imgjslogo = document.getElementById('js-logo')

console.log(imgjslogo)

//query selector

const imagem = document.querySelector('body > img')

console.log(imagem)

