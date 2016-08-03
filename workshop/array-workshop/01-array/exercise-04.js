// Input: Cadena de caracteres almacenados en una variable
// Outup: Arreglo con la palabra 'Desarrollo' acomodada de manera correcta

'use strict';

let string = 'ollorrased';

let toString = function(x){
  let resultado = [];

  for (var i = x.length - 1; i >= 0; i--) {
    resultado += x[i];
  }
  console.log(resultado);
}

toString(string);
