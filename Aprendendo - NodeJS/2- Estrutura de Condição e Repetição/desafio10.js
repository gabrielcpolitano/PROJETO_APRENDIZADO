// FUP que some todos os números entre -30 e 75.

function contar(primeiro, último){
  let contar = 0

  for(let i = primeiro; i <= último; i++){
  
    contar += i 
  }

  console.log(contar)
}




// Linhas de teste
console.log("Teste 1: Deveria imprimir a soma de todos os números entre -30 e 75 (2385)");
contar(-30, 75);  // Esperado: 2385

console.log("Teste 2: Deveria imprimir a soma de todos os números entre 0 e 10 (55)");
contar(0, 10);  // Esperado: 55

console.log("Teste 3: Deveria imprimir a soma de todos os números entre -10 e 10 (0)");
contar(-10, 10);  // Esperado: 0

console.log("Teste 4: Deveria imprimir a soma de todos os números entre 50 e 100 (3825)");
contar(50, 100);  // Esperado: 3825

console.log("Teste 5: Deveria imprimir a soma de todos os números entre 1 e 5 (15)");
contar(1, 5);  // Esperado: 15