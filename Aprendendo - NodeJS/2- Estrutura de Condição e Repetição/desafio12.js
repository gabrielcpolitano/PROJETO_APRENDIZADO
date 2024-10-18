// FUP que itere de 0 até 100, mostre como resultado a subtração de números pares e a soma de número impares.


function conta(numero) {
  let contar = 0

  for(let i = 0; i < numero; i++){
    if(i % 2 === 0){
      contar++
    }
  }
  return contar
}

// Testes manuais
console.log("Teste 1 - até 10:");
let resultado1 = conta(10);
console.log(resultado1 === 5 ? "Passou!" : "Falhou, esperado: 5, recebido: " + resultado1);

console.log("Teste 2 - até 20:");
let resultado2 = conta(20);
console.log(resultado2 === 10 ? "Passou!" : "Falhou, esperado: 10, recebido: " + resultado2);

console.log("Teste 3 - até 0:");
let resultado3 = conta(0);
console.log(resultado3 === 0 ? "Passou!" : "Falhou, esperado: 0, recebido: " + resultado3);

