// FUP que calcule a porcentagem entre 2 números

function porcentagem(quantidade, total){
  return((quantidade / total) * 100)
}

const quantidade = 8
const total = 10

const porcento = `${porcentagem(quantidade, total)}%`

console.log(`${quantidade} partes de ${total} a porcentagem é de ${porcento}`)