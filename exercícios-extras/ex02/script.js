let inicio = Number(prompt("Digite o primeiro Valor:"));
let fim = Number(prompt("Digite o último Valor:"));
let incremento = Number(prompt("Digite o incremento:"));
let resultado = "Contagem: ";

while (inicio <= fim) {
    resultado = resultado + inicio + " "; 
    inicio = inicio + incremento;        
}

alert(resultado);