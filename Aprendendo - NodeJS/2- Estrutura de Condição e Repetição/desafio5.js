//FUP que verifique dois números e veja qual deles é maior
const verificação = (número1, número2) => {
  if(typeof número1 !== 'number' || typeof número2 !== 'number'){
    console.log('ERRO: PROGRAMA SÓ ACEITA NÚMEROS')
    return
  }

  if(número1 > número2){
    console.log('Número 1 é maior')
  
  } else if(número1 < número2){
    console.log('Número 2 é maior')
  
  } else{
    console.log('Número 1 e Número 2 são iguais')
  }
}

// Testes
verificação(5, 3);       // 'Número 1 é maior'
verificação(3, 5);       // 'Número 2 é maior'
verificação(5, 5);       // 'Número 1 e Número 2 são iguais'
verificação('abc', 5);   // 'ERRO: PROGRAMA SÓ ACEITA NÚMEROS'
verificação(5, 'def');   // 'ERRO: PROGRAMA SÓ ACEITA NÚMEROS'
verificação(true, 5);    // 'ERRO: PROGRAMA SÓ ACEITA NÚMEROS'
verificação(5, null);    // 'ERRO: PROGRAMA SÓ ACEITA NÚMEROS'
verificação(undefined, 5); // 'ERRO: PROGRAMA SÓ ACEITA NÚMEROS'