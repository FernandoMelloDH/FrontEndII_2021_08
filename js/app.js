console.log("Bem-vindo ao Banco FES")
    //Simulação da nossa base de dados
const contaBancaria = {
    usuario: "Neymar",
    situacao: "Ativa",
    valorConta: 50000
}

let minhaPromise = new Promise((resolve, reject) => {
    //Chamamos um resolve (...) quando o que estavamos fazendo termina com sucesso e reject (...) quando falha.
    //Neste exemplo, usaremos o setTimeout (...) para simular código assíncrono, isso comumente seria utilizado para a requisição de um servidor.
    //Na "vida real", recorremos a uma função fecth() [a qual veremos na próxima aula]

    setTimeout(function() {
        if (contaBancaria.valorConta < 1) {
            reject({
                mensagem: "Saldo em conta insuficiente."
            })
        } else if (contaBancaria.situacao != "Ativa") {
            reject({
                mensagem: "A conta não se encontra ativa."
            })
        } else {
            resolve({
                mensagem: "A transação foi concluida com sucesso!"
            })
        }
    }, 2500)

    console.log("O banco mais legal do Brasil.")
})

let tentativa
const caixa = document.querySelector('.bancaMobile')
minhaPromise.then((resposta) => {
    tentativa = resposta
    caixa.innerHTML = `<h4> ${tentativa.mensagem} </h4>`
    console.log(tentativa)
}).catch((erro) => {
    tentativa = erro
    caixa.innerHTML = `<h4> ${tentativa.imagem} </h4>`
})