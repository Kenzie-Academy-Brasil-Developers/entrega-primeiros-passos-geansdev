const refrigerante = 11.99 * 3
const macarrao     = 6.99  * 4
const ervilha      = 6.99  * 3
const arroz        = 22.99 * 3
const feijao       = 11.89 * 2
const vinho        = 70.00 * 3

let total = refrigerante + macarrao + ervilha + arroz + feijao + vinho
console.log(`"Total das compras foi $${total}"`)

let metade = total / 2

if(total % 2 ==0){
    let voce  = metade - vinho
    let amigo = metade + vinho
    console.log(`"Voce paga $${voce} e eu amigo paga $${amigo}"`)
}else{
    let voce  = metade
    let amigo = metade
    console.log(`"Voce paga $${voce} e seu amigo paga $${amigo}"`)
}

let precoRefrigerante      = parseFloat(prompt("Digite o valor do refrigerante"))
let quantidadeRefrigerante = parseInt(prompt("Quantas Unidades ?"))

let totalRefrigerante      = precoRefrigerante * quantidadeRefrigerante

let precoMacarrao          = parseFloat(prompt("Digite o valor do macarrão"))
let quantidadeMacarrao     = parseInt(prompt("Quantas Unidades ?"))

let totalMacarrao          = precoMacarrao * quantidadeMacarrao

let precoErvilha           = parseFloat(prompt("Digite o valor do ervilha"))
let quantidadeErvilha      = parseInt(prompt("Quantas Unidades ?"))

let totalErvilha           = precoErvilha * quantidadeErvilha

let precoArroz             = parseFloat(prompt("Digite o valor do arroz"))
let quantidadeArroz        = parseInt(prompt("Quantas Unidades ?"))

let totalArroz             = precoArroz * quantidadeArroz

let precoFeijao            = parseFloat(prompt("Digite o valor do feijão"))
let quantidadeFeijao       = parseInt(prompt("Quantas Unidades ?"))

let totalFeijao            = precoFeijao * quantidadeFeijao

let precoVinho             = parseFloat(prompt("Digite o valor do vinho"))
let quantidadeVinho        = parseInt(prompt("Quantas Unidades ?"))

let totalVinho             = precoVinho * quantidadeVinho
let totaldaCompra          = totalRefrigerante + totalMacarrao + totalErvilha + totalArroz + totalFeijao + totalVinho
alert(`Valor total a ser pago: $${totaldaCompra}`)