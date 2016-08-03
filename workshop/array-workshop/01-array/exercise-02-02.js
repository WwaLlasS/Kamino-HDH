// Muy bien, ya sabes sumar arreglos, ahora que pasaria si solo queremos sumar los numeros pares en un arreglo?
//
// Dado [1,2,3,4,5,6,7,8,9,10] el resultado debe ser
'use strict'

let dado = [1,2,3,4,5,6,7,8,9,10];

let filtrar = dado.filter(function(elemento){
  return elemento % 2 == 0;
}).reduce(function(a,b){
  return a+b;
});

console.log(filtrar);
