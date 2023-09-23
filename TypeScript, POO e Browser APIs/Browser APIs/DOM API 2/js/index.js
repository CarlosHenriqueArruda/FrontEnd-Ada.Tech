const aumentar = document.querySelector("#aumentar-botao"); //# pega pelo ID
const diminuir = document.querySelector("#diminuir-botao");
const contador = document.querySelector("#contador");
const input = document.querySelector("#input");

aumentar.addEventListener("click", (event) => {
  const valorAtual = Number(contador.textContent);
  contador.textContent = valorAtual + 1;
  aumentar.classList.add("btn"); //adicionando uma classe criada para um botão
  diminuir.classList.remove("btn");
});

diminuir.addEventListener("click", (event) => {
  const valorAtual = Number(contador.textContent);
  contador.textContent = valorAtual - 1;
  diminuir.classList.add("btn"); //adicionando uma classe criada para um botão
  aumentar.classList.remove("btn");
});

input.addEventListener("input", () => {
  console.log(input.value);
});

//adicionando estilos inline no elemento contador

contador.style.color = "red";
contador.style.padding = "0 2rem";
contador.style.border = "1px solid #aaa";
contador.style.width = "15px";

//manilupando classes
const themeButton = document.querySelector("#theme");

let darkTheme;

//definindo uma função que será executada ao carregar o conteudo da janela
window.onload = () => {
  const isDarkThemeStorage = localStorage.getItem("isDarkTheme");
  darkTheme = isDarkThemeStorage === "true";
  const body = document.querySelector("body");
  if (darkTheme) {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  }
};

themeButton.addEventListener("click", () => {
  darkTheme = !darkTheme;
  localStorage.setItem("isDarkTheme", darkTheme);
  const body = document.querySelector("body");
  if (darkTheme) {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  }
});
