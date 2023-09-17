const fs = require("fs");

//callback

console.log("Antes de ler o arquivo");
/*
//funcao assincrona pq ler arquivo leva tempo
fs.readFile("Programação Assíncrona/arquivo.txt", (erro, conteudoDoArquivo) => {
  if (erro) {
    console.log("Errou!");
  } else {
    console.log(String(conteudoDoArquivo));
  }
});

console.log("DEPOIS de ler o arquivo");

// PROMISES

function lerArquivoPromise() {
  return new Promise((resolve, reject) => {
    fs.readFile(
      "Programação Assíncrona/arquivo.txt",
      (erro, conteudoDoArquivo) => {
        if (erro) {
          reject("Houve um erro ao tentar ler o arquivo...");
        } else {
          resolve(String(conteudoDoArquivo));
        }
      }
    );
  });
}

lerArquivoPromise()
  .then((retornoDoResolve) => {
    //executado quando a promessa dá certo
    console.log("Deu certo!", retornoDoResolve);
  })
  .catch((erro) => {
    //executado quando dá erro com a promessa
    console.log("Deu ruim!", erro);
  })
  .finally(() => {
    //executado independente, sempre ao final da promessa
    console.log(
      "Essa mensagem aparecerá independente do sucesso ou fracasso do codigo!"
    );
  });
*/

//async/await

