//Desenvolva um algoritmo que mostra uma contagem regressiva de 30 até 1, marcando os números que forem divisíveis por 4, extamente como mostrado abaixo: 30, 29, [28], 27, 26, 25, [24], 23, 22, 21, [20], 19, 18, 17, [16],...
let resultado = "";

for (let i = 30; i >= 1; i--) {
    
    if (i % 4 == 0) {
        resultado = resultado + "[" + i + "]";
    } else {
        resultado = resultado + i;
    }

    if (i > 1) {
        resultado = resultado + " ";
    }
}

alert(resultado);

//Crie um algoritmo que leia o valor inicial da contagem, o valor final e o incremento, mostrando em seguida todos os valores no intervalo: EX.: Digite o primeiro Valor: 3; Digite o último Valor: 10; Digite o incremento: 2; Contagem: 3 5 7 9 Acabou!
