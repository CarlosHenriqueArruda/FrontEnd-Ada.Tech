//high order functions
// 1 = funcão q retorna outra função como parametro
function wellcome(courseName) {
  return (studentName) => {
    console.log(
      `Olá, ${studentName}, seja bem-vindo ao curso de ${courseName}.`
    );
  };
}
const wellcomeToReact = wellcome("React.js");
const wellcomeToNode = wellcome("Node.js");
wellcomeToReact("Carlos")
