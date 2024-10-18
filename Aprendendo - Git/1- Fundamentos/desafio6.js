// FUP que mostre como fazemos merge, entre branch.
function merge(merge){
  if(merge){
    return 'Dentro da Brancha que recebrá faça: git merge nome_ branch_deseja_junta_a_essa'
  
  }else{
    return 'Ok não fazer MERGE'
  }
}

// Testes
console.log(merge(true));   
// Esperado: 'Dentro da branch que receberá faça: git merge nome_branch_desejada'

console.log(merge(false));  
// Esperado: 'Ok não fazer MERGE'

console.log(merge(1));      
// Esperado: 'Dentro da branch que receberá faça: git merge nome_branch_desejada' (1 é tratado como true)

console.log(merge(0));      
// Esperado: 'Ok não fazer MERGE' (0 é tratado como false)

console.log(merge('sim'));  
// Esperado: 'Dentro da branch que receberá faça: git merge nome_branch_desejada' (string não vazia é true)

console.log(merge(''));     
// Esperado: 'Ok não fazer MERGE' (string vazia é false)

console.log(merge(null));   
// Esperado: 'Ok não fazer MERGE' (null é false)

console.log(merge(undefined)); 
// Esperado: 'Ok não fazer MERGE' (undefined é false)