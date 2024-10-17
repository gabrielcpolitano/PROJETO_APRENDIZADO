// FUP que conte quantos números pares existem ente 0 e 200.
function pares(primeiro, último){
  let contagem = 0

  for(let i = primeiro; i <= último; i++){
    if(i % 2 === 0){
      contagem++
    }
  }

console.log(contagem)

}

// Testes
console.log("Teste 1: Deveria imprimir 101 para o intervalo entre 0 e 200");
pares(0, 200);

console.log("Teste 2: Deveria imprimir 50 para o intervalo entre 1 e 100");
pares(1, 100);

console.log("Teste 3: Deveria imprimir 26 para o intervalo entre 50 e 100");
pares(50, 100);

console.log("Teste 4: Deveria imprimir 2 para o intervalo entre 101 e 105");
pares(101, 105);

console.log("Teste 5: Deveria imprimir 1 para o intervalo entre 2 e 2");
pares(2, 2);