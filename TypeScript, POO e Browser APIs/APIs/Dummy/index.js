async function getUsers() {
  const resposta = await fetch("https://dummyapi.io/data/v1/user?created=1", {
    //metodo usado - get
    //get
    headers: {
      //header com o id obrigatorio
      "app-id": "650852ee1941c279155136cc",
    },
  });
  const users = await resposta.json(); //variavel que guarda a resposta e transforma em JSON
  console.log(users.data); //print
}

async function getUser() {
  const resposta = await fetch(
    "https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109ca",
    {
      //get
      headers: {
        "app-id": "650852ee1941c279155136cc",
      },
    }
  );
  const user = await resposta.json();
  console.log(user);
}

async function createUser() {
  const userData = {
    //variavel com os dados do usuario em objeto
    firstName: "Carlos",
    lastName: "Henrique",
    email: "carlos@email.com",
  };
  try {
    //tentattiva
    await fetch("https://dummyapi.io/data/v1/user/create", {
      //não preciso da resposta por isso não tem const
      method: "POST", //modificando o metodo para POST
      headers: {
        "app-id": "650852ee1941c279155136cc", //id do usuario
        "Content-Type": "application/json", //tipo do conteudio
      },
      body: JSON.stringify(userData), //corpo, define o que será enviado ao banco de dados em JSON (pega o objeto e converte)
    });
  } catch (erro) {
    //erro
    console.log("Erro"); //mensagem de erro
  }
}

getUsers();
