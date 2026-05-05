let saldo = Number(15000);
let valorSaque = 0

alert("Seu saldo atual é de R$15000,00")
while (saldo > 0) {
    valorSaque = Number(prompt("Insira o valor a ser sacado:"))
    
    if (valorSaque > saldo) {
        alert("ERRO: saldo insuficiente");
    } else {
        saldo = saldo - valorSaque 

        if (saldo > 0) {
            alert(`Saque realizado! Seu saldo atual é R$${saldo.toFixed(2)}.`)
        } else { 
            alert(`Saque realizado! Seu saldo agora está zerado.`)
        }
    
    }
}

