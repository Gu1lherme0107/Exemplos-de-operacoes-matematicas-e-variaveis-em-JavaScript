let myvar = 0;

myvar = 10;

let soma = 15 + 8;

soma += 1;

soma = 24 * 3; // O valor da variável `soma` até aqui é 72.

let VolkerConst07 = true;

let comida = ['arroz', 'feijão', 'ovo'];

console.log(comida[1]); // Imprime 'feijão'

if (soma === myvar) {
  console.log("As variáveis 'soma' e 'myvar' são do mesmo tipo.");
} else {
  console.log("As variáveis 'soma' e 'myvar' são diferentes ou têm tipos diferentes.");
}

if (myvar < soma) {
  console.log("A variável 'myvar' é menor que a variável 'soma'.");
} else {
  console.log("A variável 'myvar' é maior que a variável 'soma'.");
}

function divisao(a, b) {
  return a / b;
}

let resultado = divisao(10, 2);
console.log(resultado); // Imprime 5