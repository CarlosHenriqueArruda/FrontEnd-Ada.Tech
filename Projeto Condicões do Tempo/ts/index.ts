const form = document.querySelector("#search-form > form");
const input: HTMLInputElement | null =
  document.querySelector("#input-localizacao"); //variavel definida

const sectionTempoInfos = document.querySelector("#tempo-info"); //variavel da aba dinamica

form?.addEventListener("submit", async (event) => {
  //criando o evendo ASSINCRONO de submit do formulario
  event?.preventDefault(); //impedindo que o formulario recarregue a pagina

  if (!input || !sectionTempoInfos) return; //encerrando o codigo se não tiver valor

  const localizacao = input.value; //definindo a variavel de localizacao

  if (localizacao.length < 3) {
    //definindo o minimo de 3 letras
    alert("O local precisa ter pelo menos 3 letras");
    return;
  }
  try{
    const resposta =
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=7cb9600abfd479ffc45c01eb536c421e&lang=pt_br&units=metric
  `); //definindo a html padrão + a localização solicitada !É ASSINCRONO! + pegando os dados

  const dados = await resposta.json(); //recebendo os dados e transformando em JSON !ASSINCRONO!
  console.log(dados);
  const infos = {
    temperatura: Math.round(dados.main.temp), //buscando a temperatura
    local: dados.name, //buscando o local
    icone: `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`, //buscando o icone em um array
    tempmax: dados.main.temp_max, //temperatura maxima
    tempmin: dados.main.temp_min, //temperatura minima
    descricao: dados.weather[0].description, //descricao do clima = precisa colocar com a primeira letra maiuscula
  };

  sectionTempoInfos.innerHTML = `
  <div class="tempo-dados">
  <h2>${infos.local}</h2>
  <h2 id="descricao">${infos.descricao}</h2>
  <span>${infos.temperatura}°C</span>
  </div>
  <div class= tempo-dados2>
  <span>Temperatura Máxima: ${infos.tempmax}°C</span>
  <span>Temperatura Minima:  ${infos.tempmin}°C</span>
  </div>
  <img src="${infos.icone}" />`; //jogando um codigo HTML inteiro de forma dinamica
  }catch(err){
    console.log("Erro na obtenção dos dados, tente novamente! ",err)
  }
});
