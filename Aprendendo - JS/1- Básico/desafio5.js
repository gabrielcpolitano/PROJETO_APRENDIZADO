// FUP com função de seta, acrescenta o sobrenome.

const sob = sobrenome => 'Gabriel ' + sobrenome

// Testes
console.log(sob('Silva'));      // Esperado: 'Gabriel Silva'
console.log(sob('Oliveira'));   // Esperado: 'Gabriel Oliveira'
console.log(sob('Moraes'));     // Esperado: 'Gabriel Moraes'
console.log(sob('Santos'));     // Esperado: 'Gabriel Santos'
console.log(sob(''));           // Esperado: 'Gabriel ' (caso vazio)