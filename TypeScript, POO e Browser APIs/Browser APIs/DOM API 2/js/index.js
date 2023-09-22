const aumentar = document.querySelector("#aumentar-botao"); //# pega pelo ID
const diminuir = document.querySelector("#diminuir-botao");
const contador = document.querySelector("#contador");
const input = document.querySelector("#input")

aumentar.addEventListener("click", (event) => {
  const valorAtual = Number(contador.textContent);
  contador.textContent = valorAtual + 1;
});

diminuir.addEventListener("click", (event) => {
  const valorAtual = Number(contador.textContent);
  contador.textContent = valorAtual - 1;
});


input.addEventListener('input',()=>{
  console.log(input.value)
})