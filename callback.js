let somar = (numeroA, numeroB) => numeroA + numeroB;

let calculadora = (numeroA, numeroB, operacao) => operacao(numeroA,numeroB);

console.log(calculadora(10, 20, (numeroA,numeroB) => numeroA - numeroB))