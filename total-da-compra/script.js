let contador = 0;
let valor = Number(prompt("Insira o valor do produto:"));
let total = 0;

while (valor !== 0) {
    total = total + valor
    contador++
    valor = Number(prompt("Insira o valor do próximo produto (ou digite 0 para encerrar a compra):"));
}

if (contador > 0) {
    alert(`Total da compra: R$${total.toFixed(2)}
Quantidade de itens: ${contador}`);
} else {
    alert("Nenhum produto inserido.")
}