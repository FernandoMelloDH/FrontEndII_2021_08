const promise = fetch('https://dog.ceo/api/breeds/image/random')

console.log(promise)

promise.then((response) => {
    return response.json().then((info) => {
        document.querySelector('body').innerHTML += `<img src="${info.message}">`
    })
}).catch((erro) => {
    console.log(erro)
})