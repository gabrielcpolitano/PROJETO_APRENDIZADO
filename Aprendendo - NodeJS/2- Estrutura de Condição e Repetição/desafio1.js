// FUP QUE CALCULE A MÉDIA ARITMÉTICA DE 3 NOTAS.

function médiaAritmética(nota1, nota2, nota3){
  if(typeof nota1 !== 'number' || typeof nota2 !== 'number' || typeof nota3 !== 'number'){
    console.log('NOTA INVÁLIDA')
    return
  }


  const média = (nota1 + nota2 + nota3) / 3

  if(média >= 7 && média <= 10){
    console.log('EXCELENTE!!')
  
  } else if(média >= 3 && média < 7){
    console.log('DÁ PARA MELHORAR')

  } else if(média >= 0 && média < 3){
    console.log('HORRÍVEL')

  } else{
    console.log('NOTA INVÁLIDA')
  }
}

// Testes
médiaAritmética(8, 9, 10);  // EXCELENTE!!
médiaAritmética(5, 6, 4);   // DÁ PARA MELHORAR
médiaAritmética(1, 2, 0);   // HORRÍVEL
médiaAritmética(11, 10, 12);// NOTA INVÁLIDA
médiaAritmética(-1, 4, 5);  // NOTA INVÁLIDA
médiaAritmética(3, 5, 's'); // NOTA INVÁLIDA
médiaAritmética(7, 7, 7);   // EXCELENTE!!
médiaAritmática(3, 3, 3);   // DÁ PARA MELHORAR
médiaAritmática(0, 0, 0);   // HORRÍVEL
médiaAritmática(10, 10, 10);// EXCELENTE!!
médiaAritmática(0, 3, 0);   // DÁ PARA MELHORAR