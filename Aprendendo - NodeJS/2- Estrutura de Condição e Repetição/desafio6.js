// FUP que solicite três numero e verifique qual é o menor;

function verificador(número1, número2, número3) {

  if(número1 < número2 && número1 < número3){
    console.log(número1)
  
  }else if(número2 < número1 && número2 < número3){
    console.log(número2)

  }else{
    console.log(número3)
  }

  
}

// Linhas de teste
console.log("Teste 1: Deveria imprimir 1");
verificador(1, 2, 3);

console.log("Teste 2: Deveria imprimir 5");
verificador(8, 5, 9);

console.log("Teste 3: Deveria imprimir -3");
verificador(7, -3, 10);

console.log("Teste 4: Deveria imprimir 0");
verificador(0, 10, 100);

console.log("Teste 5: Deveria imprimir -10");
verificador(-10, -1, 0);

