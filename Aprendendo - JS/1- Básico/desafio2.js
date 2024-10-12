// FUP que calcule o preço do imóvel
// metro2 = 3.000
// 1 quarto = metro2 é 1x
// 2 quarto = metro2 é 1.2x
// 3 quarto = metro2 é 1.5x

function preço(metros2, quartos){
  metros2 *= 3000

  if(quartos === 3){
    const valor = metros2 * 1.5
    return `Preço do Imovel: R$${valor}`

  }else if(quartos === 2){
    const valor = metros2 * 1.2
    return `Preço do Imovel: R$${valor}`

  }else if(quartos ===1){
    return `Preço do Imovel: R$${metros2}`

  }else{
    return 'Quantidade de quartos não valida, só temos disponíveis (1, 2, 3) quartos'

  }
}

const metros2 = 150
const quartos = 1



console.log(preço(metros2, quartos))

