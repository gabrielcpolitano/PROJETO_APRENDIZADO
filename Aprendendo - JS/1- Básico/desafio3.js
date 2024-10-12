// Crie uma função que validade usuário e senha
// usuário correto: pedro
// senha correta: 123

function validador(usuário, senha){
  if (usuário === 'pedro' && senha === 123){
    return 'Acesso Liberado!'
  
  }else{
    return 'Acesso Negado!'
  }
}

console.log(validador('gabriel',123))

console.log(validador('pedro', 1253))

console.log(validador('pedro', 123))