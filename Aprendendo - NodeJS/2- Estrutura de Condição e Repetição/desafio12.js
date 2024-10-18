// FUP que itere de 0 até 100, mostre como resultado a subtração de números pares e a soma de número impares.
let contar = 0

function conta(numero) {
  for(let i = 0; i < numero; i++){
    if(i % 2 === 0){
      contar++
    }
  }
  return contar
}

