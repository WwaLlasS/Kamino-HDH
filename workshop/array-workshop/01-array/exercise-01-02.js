// Te daremos un arreglo de enteros, tu trabajo es sumar todos los enteros y regresar la suma total de ellos.
//
// ejemplo...
//
// 1+2+3+4+5+6 = 21
//
// Recuerda que siempre es una buena idea hacer pseudocodigo antes de iniciar a tirar codigo.
//
// Identifica el input.
// Identifica el output.
// Haz el pseudocodigo.
// A tirar codigo...

//input: arreglo de Numeros enteros
//output: variable con la suma de esos numeros.
// ### pseudocodigo ###

'use strict';

let numeros = [1,2,3,4,5,6].reduce(function(a, b){ return a + b; });

console.log(numeros);
