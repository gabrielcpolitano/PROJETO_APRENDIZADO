// FUP que itere de 0 até 100, mostre como resultado a subtração de números pares e a soma de número impares.


function conta(numero) {
  let impar = 0
  let par = 0

  for(let i = 0; i <= numero; i++){
    if(i % 2 === 0){
      impar -= i
    
    }else{
      par += i
    }
  }
  return{ impar, par}
}

console.log(conta(10))

// Teste 1 - até 10
let resultado1 = conta(10);
console.log("Teste 1 - até 10");
console.log(resultado1.par === -30 ? "Passou!" : "Falhou! Esperado subtração: -30, Recebido: " + resultado1.par);
console.log(resultado1.impar === 25 ? "Passou!" : "Falhou! Esperado soma: 25, Recebido: " + resultado1.impar);

// Teste 2 - até 5
let resultado2 = conta(5);
console.log("Teste 2 - até 5");
console.log(resultado2.par === -6 ? "Passou!" : "Falhou! Esperado subtração: -6, Recebido: " + resultado2.par);
console.log(resultado2.impar === 9 ? "Passou!" : "Falhou! Esperado soma: 9, Recebido: " + resultado2.impar);

// Teste 3 - até 100
let resultado3 = conta(100);
console.log("Teste 3 - até 100");
console.log(resultado3.par === -2550 ? "Passou!" : "Falhou! Esperado subtração: -2550, Recebido: " + resultado3.par);
console.log(resultado3.impar === 2500 ? "Passou!" : "Falhou! Esperado soma: 2500, Recebido: " + resultado3.impar);

// Teste 4 - até 0
let resultado4 = conta(0);
console.log("Teste 4 - até 0");
console.log(resultado4.par === 0 ? "Passou!" : "Falhou! Esperado subtração: 0, Recebido: " + resultado4.par);
console.log(resultado4.impar === 0 ? "Passou!" : "Falhou! Esperado soma: 0, Recebido: " + resultado4.impar);
