//exercicio 1
function calculaArea(comprimento, largura){
    return "O valor da area é: " + comprimento * largura
}

let comprimento = prompt("Informe o comprimento")
let largura = prompt("Informe a largura")

console.log(calculaArea(comprimento, largura))

//exercicio 2
function calcularQuantidadesFerraduras(quantidadeCavalos){
    return "Essa é a quantidade de ferraduras: " + quantidadeCavalos * 4
}

console.log(calcularQuantidadesFerraduras(prompt("Informe a quantidade de cavalos:")))

//exercicio 3
function calculeQuantidadeLitros(valorGasolina, valorTotalPagar){
    return "Essa é a quantidade de litros total: " + (valorTotalPagar/ valorGasolina).toFixed(2)
}

let valorGasolina = prompt("Informe o preço da gasolina:")
let valorTotalPagar = prompt("Informe o valor total a pagar:")

console.log(calculeQuantidadeLitros(valorGasolina, valorTotalPagar))

//exercicio 4
function calculeImc(altura, peso){
    return `Esse e o seu IMC: ${(peso / (altura * altura)).toFixed(2)}`
}

console.log(calculeImc(prompt("Informe sua altura"), prompt("Informe seu peso")))


//exercicio 5
function calculeValorTotalPrato(pesoPrato){
     return "Esse e o valor total do prato:" + (pesoPrato * 28).toFixed(2)
}

console.log(calculeValorTotalPrato(prompt("Informe o peso do prato:")))