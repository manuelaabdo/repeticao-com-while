let contador = 0;
let nota = Number(prompt("Insira uma nota de 0 a 10:"));
let soma = 0;

while (nota >= 0) {
    soma = soma + nota
    contador++
    nota = Number(prompt("Insira a próxima nota de 0 a 10 (ou um número negativo para sair):"));
}

if (contador > 0) {
    let media = soma / contador;
    alert(`Média final: ${media}
Quantidade de notas: ${contador}`);
}