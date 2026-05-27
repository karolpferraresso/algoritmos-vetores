let numeros = [];

for (let i = 0; i < 7; i++) {
    let numerosDigitado = Number(prompt("Digite um número:"));

    numeros[i] = numerosDigitado;

}

alert("Vetor gerado:" + numeros);