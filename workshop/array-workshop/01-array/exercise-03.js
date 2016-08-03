// input: numero al cual se le aplicara un factorial
// output: resultado de la factorial

"use strict";

let factorial = function(number){
  var resultado = 1;
  for (let i = number; i > 0; i--){
    resultado *= i;
  }
  console.log(resultado);
  return resultado;
}

factorial(5);
