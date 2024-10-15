// FUP PARA VERIFICAR SE O NÚMERO É PAR OU IMPAR
const par = (número) => {
  if(typeof número !== 'number'){
    console.log('ERRO: APENAS NÚMEROS SÃO VÁLIDOS')
    return
  }


  if(número % 2 === 0){
    console.log('É PAR')
  
  } else{
    console.log('É IMPAR')
  } 
}

// Testes
par(4);           // 'É PAR'
par(7);           // 'É IMPAR'
par(0);           // 'É PAR'
par(-3);          // 'É IMPAR'
par(-2);          // 'É PAR'
par('abc');       // 'ERRO: APENAS NÚMEROS SÃO VÁLIDOS'
par(true);        // 'ERRO: APENAS NÚMEROS SÃO VÁLIDOS'
par(undefined);   // 'ERRO: APENAS NÚMEROS SÃO VÁLIDOS'
par(null);        // 'ERRO: APENAS NÚMEROS SÃO VÁLIDOS'
par({});          // 'ERRO: APENAS NÚMEROS SÃO VÁLIDOS'