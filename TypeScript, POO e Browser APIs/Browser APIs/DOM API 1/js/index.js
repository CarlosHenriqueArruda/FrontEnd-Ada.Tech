//selecionando elementos HTML da pagina usando document
//pegando elementos pelo nome da tag

const h1 = document.getElementsByTagName("h1"); //pegando elementos pela tag

//pegando elementos pelo nome da classe

const paragrafo = document.getElementsByClassName("paragrafo");

console.log(paragrafo);

//pegando elementos pelo NAME da tag

const emailinput = document.getElementsByName("email");

console.log(emailinput);

//pegando elementos pelo ID da tag

const imgjslogo = document.getElementById("js-logo");

console.log(imgjslogo);

//query selector

const imagem = document.querySelector("body > img");

console.log(imagem);

console.clear();

//acessando e/ou alterando os conteudos das tags
const primeiroP = document.querySelector("p.paragrafo");

console.log(primeiroP);

console.log("textContent:", primeiroP.textContent); //pegando o conteúdo em texto (ignora as tags exemplo "strong")
console.log("innerHTML: ", primeiroP.innerHTML); //pega o conteudo completo, em HTML (incluindo tags)

primeiroP.textContent = "Outra coisa"; //modifiquei o conteudo, não aceita tags, coloca em texto

//value

console.clear();

emailinput[0].value = "carlos@email.com"; //get retorna um array, tem que colocar a posição

