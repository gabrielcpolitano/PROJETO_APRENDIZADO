//FUP PARA VERIFICAR SE O NÚMERO É POSITIVO OU NEGATIVO

function positivo(número){
  if(typeof número === 'number' && número > 0){
    console.log('SIM É POSITIVO')
  
  } else if(typeof número === 'number' && número < 0){
    console.log('NÃO NEGATIVO')

  } else if(typeof número === 'number' && número === 0){
    console.log('NÃO É NEUTRO')
  
  } else{
    console.log('NÚMERO NÃO VÁLIDO')
  }

}

positivo(5); // Esperado: 'SIM É POSITIVO'
positivo(-3); // Esperado: 'NÃO NEGATIVO'
positivo(0); // Esperado: 'NÃO É NEUTRO'
positivo('abc'); // Esperado: 'NÚMERO NÃO VÁLIDO'
positivo(null); // Esperado: 'NÚMERO NÃO VÁLIDO'
positivo(undefined); // Esperado: 'NÚMERO NÃO VÁLIDO'
