// FUP que solicite a quantidade de termos e imprima fibonacci até termo solicitado;
function fibonacc(x){
  let anterior = 0 // recebe anterior número da sequência
  let atual = 1 // recebe atual número da sequência
  let proximo = Infinity // quanta a anterior

  for(let i = 0; i < x; i++){
    proximo = anterior + atual
    anterior = atual
    atual = proximo
  }

  return anterior
}

console.log(fibonacc(10))

/*
function fibonacci(num) {
  if (num <= 1) return num

  let total = 1
  let previous = 0

  for (let i = 2; i <= num; i++) {
    total += previous
    previous = total - previous
  }

  return total
}

console.log(fibonacci(10))

*/