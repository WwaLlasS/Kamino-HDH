// input: arreglo con numeracion del 1 al 10
// output: variable con la suma de los numeros pares

"use strict";

let numeros = [1,2,3,4,5,6,7,8,9,10];

function sumaDeNumerosPares(arrayNumber) {
  let resultado = 0;
  for (var i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] % 2 == 0) {
      resultado += arrayNumber[i];
    }
  }
  console.log(resultado);
}

sumaDeNumerosPares(numeros);
