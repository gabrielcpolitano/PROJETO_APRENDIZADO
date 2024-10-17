// FUP que receba um número e itere de 0 até o número informado, multiplicando os valores.

function multiplicando(número) {
  

  let multiplicação = 1

  for(let i = 1; i <= número; i++){

    multiplicação = multiplicação * i
    
  }

  return(multiplicação)
}


// Função de teste simples
function testMultiplicando() {
  // Teste 1: Se o número é 5, o resultado deve ser 5! = 120
  let resultado1 = multiplicando(5);
  console.log(resultado1 === 120 ? 'Teste 1 passou' : 'Teste 1 falhou: esperado 120, obtido ' + resultado1);

  // Teste 2: Se o número é 3, o resultado deve ser 3! = 6
  let resultado2 = multiplicando(3);
  console.log(resultado2 === 6 ? 'Teste 2 passou' : 'Teste 2 falhou: esperado 6, obtido ' + resultado2);

  // Teste 3: Se o número é 0, o resultado deve ser 1 (por definição de fatorial)
  let resultado3 = multiplicando(0);
  console.log(resultado3 === 1 ? 'Teste 3 passou' : 'Teste 3 falhou: esperado 1, obtido ' + resultado3);

  // Teste 4: Se o número é 1, o resultado deve ser 1! = 1
  let resultado4 = multiplicando(1);
  console.log(resultado4 === 1 ? 'Teste 4 passou' : 'Teste 4 falhou: esperado 1, obtido ' + resultado4);
}

// Rodar os testes
testMultiplicando();
