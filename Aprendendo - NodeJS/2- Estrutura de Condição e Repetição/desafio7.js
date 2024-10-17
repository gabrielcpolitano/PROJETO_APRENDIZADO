// FUP que peça um ano e verifique se ano informado é bissexto.

function bissexto(ano) {
  if(ano % 4 === 0 && ano % 100 !== 0){
    console.log('Sim')
  
  }else if(ano % 400 === 0){
    console.log('Sim')
  
  }else{
    console.log('Não')
  }
}

// Linhas de teste
console.log("Teste 1: Deveria imprimir 'Sim' para o ano 2024");
bissexto(2024);

console.log("Teste 2: Deveria imprimir 'Não' para o ano 2023");
bissexto(2023);

console.log("Teste 3: Deveria imprimir 'Sim' para o ano 2000");
bissexto(2000);

console.log("Teste 4: Deveria imprimir 'Não' para o ano 1900");
bissexto(1900);

console.log("Teste 5: Deveria imprimir 'Sim' para o ano 1600");
bissexto(1600);