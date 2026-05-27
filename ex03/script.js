let numero = [];
let contador = 0;

for (let i = 0; i < 10; i++) {
    let numerosDigitado = Number(prompt("Digite um número da posição " + i + ":"));
numero[i] = numerosDigitado;
}

let numeroChave = Number(prompt("Digite um número para pesquisar no vetor:"));

for (let i = 0; i < 10; i++) {
    if (numero[i] === numeroChave) {
        contador = contador + 1;
    }
}