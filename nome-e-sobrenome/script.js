
let nome = "";
let sobrenome = "";

while (nome === ""|| sobrenomeme === "") {
    nome = prompt("Insira seu primeiro nome:")
    sobrenome = prompt("Insira seu sobrenome:")
    
    if (nome === "" || nome === " " || sobrenome === "" || sobrenome === " ") {
    alert("ERRO: Não deixe nenhum dos campos em branco!");
    } else {
        alert(`Nome validado. Seu nome é ${nome} ${sobrenome}.`)
    }
    
}
