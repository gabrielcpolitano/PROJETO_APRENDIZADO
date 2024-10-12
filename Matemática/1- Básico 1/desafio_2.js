// FUP que ensina como ler uma fração em Japones.

function fração(number) {
  [numerador, denominador] = number.split("/")
  
  return(`De ${denominador} peguei ${numerador} partes `)
}

console.log(fração("5/6"));