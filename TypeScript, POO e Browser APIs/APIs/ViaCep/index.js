//Fetch API
/*
fetch("https://viacep.com.br/ws/53250490/json/")
  .then((resposta) => {
    resposta.json().then((dados) => console.log(dados));
  })
  .catch((erro) => {
    console.log(erro);
  });
*/

async function obterDadosDoCep() { //criação da função assincrona
  try { //"tente fazer isso"
    const resposta = await fetch("https://viacep.com.br/ws/53250490/json/"); //cria uma variavel que busca a API e espera
    const dados = await resposta.json(); //transfere os dados da prmeira variavel para uma nova em JSON e espera
    console.log(dados); //printa na tela os dados transformados
  } catch (erro) { //"em caso de erro"
    console.log("Erro."); //mensagem de erro
  } finally { //finalizado independente do resultado
    console.log("Requisição finalizada!"); //mensagem de finalização
  }
}

obterDadosDoCep(); //chamada da função assíncrona para obter dados pelo CEP
