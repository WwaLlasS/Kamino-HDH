// input: arreglo con numeracion del 1 al 10
// output: variable con la suma de los numeros pares

"use strict";

let numeros = [1,2,3,4,5,6,7,8,9,10];

function sumaDeNumerosPares(x) {
  let resultado = 0;
  for (var i = 0; i < x.length; i++) {
    if (x[i] % 2 == 0) {
      resultado += x[i];
    }
  }
  console.log(resultado);
}

sumaDeNumerosPares(numeros);
