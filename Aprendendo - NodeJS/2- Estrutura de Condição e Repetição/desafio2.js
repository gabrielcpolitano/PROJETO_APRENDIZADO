// FUP QUE O USUÁRIO COLOQUE O OPERADOR E DOIS NÚMEROS, PARA FAZER UMA OPEREÇÃO MATEMÁTICA.

function calculadora(operação, número1, número2){
  if(typeof número1 !== 'number' || typeof número2 !== 'number'){
    console.log('Operador NÃO VÁLIDO')
    return
  }

  if(operação === '*'){
    console.log(número1 * número2)

  } else if(operação === '+'){
    console.log(número1 + número2)

  } else if(operação === '-'){
    console.log(número1 - número2)

  } else if(operação === '/'){
    if(número1 === 0 || número2 === 0){
      console.log('NÃO VALIDO DIVISÃO COM 0')
    
    } else{
      console.log(número1 / número2)

    }
  } else{
    console.log('OPERADOR NÃO VÁLIDO')
  }

}

calculadora('*', 3, 4); // Esperado: 12
calculadora('+', 3, 4); // Esperado: 7
calculadora('-', 10, 4); // Esperado: 6
calculadora('/', 8, 2); // Esperado: 4
calculadora('%', 8, 2); // Esperado: 'OPERADOR NÃO VÁLIDO'
calculadora('/', 8, 0); // Esperado: 'DIVISÃO POR ZERO NÃO PERMITIDA'
calculadora('*', 'abc', 4); // Esperado: 'OPERANDOS NÃO VÁLIDOS'
calculadora('+', 3, 'def'); // Esperado: 'OPERANDOS NÃO VÁLIDOS'
