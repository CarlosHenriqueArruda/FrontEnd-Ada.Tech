"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const form = document.querySelector("#search-form > form");
const input = document.querySelector("#input-localizacao"); //variavel definida
const sectionTempoInfos = document.querySelector("#tempo-info"); //variavel da aba dinamica
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (event) => __awaiter(void 0, void 0, void 0, function* () {
    //criando o evendo ASSINCRONO de submit do formulario
    event === null || event === void 0 ? void 0 : event.preventDefault(); //impedindo que o formulario recarregue a pagina
    if (!input || !sectionTempoInfos)
        return; //encerrando o codigo se não tiver valor
    const localizacao = input.value; //definindo a variavel de localizacao
    if (localizacao.length < 3) {
        //definindo o minimo de 3 letras
        alert("O local precisa ter pelo menos 3 letras");
        return;
    }
    try {
        const resposta = yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=7cb9600abfd479ffc45c01eb536c421e&lang=pt_br&units=metric
  `); //definindo a html padrão + a localização solicitada !É ASSINCRONO! + pegando os dados
        const dados = yield resposta.json(); //recebendo os dados e transformando em JSON !ASSINCRONO!
        console.log(dados);
        const infos = {
            temperatura: Math.round(dados.main.temp),
            local: dados.name,
            icone: `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`,
            tempmax: dados.main.temp_max,
            tempmin: dados.main.temp_min,
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
    }
    catch (err) {
        console.log("Erro na obtenção dos dados, tente novamente! ", err);
    }
}));
