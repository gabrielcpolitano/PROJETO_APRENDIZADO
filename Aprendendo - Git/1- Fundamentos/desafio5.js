// FUP que mostra como criamos uma branch e já entramos nela.

function mudar(mudar){
  if(mudar){
    return 'git switch -c nome_nova_branch'
  
  }else{
    return 'Ok não vamos mudar!'
  }

}

console.log(mudar(true));   // Esperado: 'git switch -c nome_nova_branch'
console.log(mudar(false));  // Esperado: 'Ok não vamos mudar!'
console.log(mudar(1));      // Esperado: 'git switch -c nome_nova_branch' (1 é tratado como true)
console.log(mudar(0));      // Esperado: 'Ok não vamos mudar!' (0 é tratado como false)
console.log(mudar(''));     // Esperado: 'Ok não vamos mudar!' (string vazia é false)
console.log(mudar('sim'));  // Esperado: 'git switch -c nome_nova_branch' (string não vazia é true)
console.log(mudar(null));   // Esperado: 'Ok não vamos mudar!' (null é false)
console.log(mudar(undefined)); // Esperado: 'Ok não vamos mudar!' (undefined é false)