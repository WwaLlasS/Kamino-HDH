//input: arreglo de Numeros enteros
//output: variable con la suma de esos numeros.
// ### pseudocodigo ###

"use strict";

let numeros = [1,2,3,4,5,6];

function suma(x) {
  let resultado = 0;
  for (var i = 0; i < x.length; i++) {
    resultado += x[i];
  }
  console.log(resultado);
}

suma(numeros);
