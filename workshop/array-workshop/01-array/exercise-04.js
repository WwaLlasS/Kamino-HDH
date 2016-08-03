// Input: Cadena de caracteres almacenados en una variable
// Outup: Arreglo con la palabra 'Desarrollo' acomodada de manera correcta

'use strict';

let palabra = 'ollorrased';

let toString = function(string){
  let resultado = [];

  for (var i = string.length - 1; i >= 0; i--) {
    resultado += string[i];
  }
  console.log(resultado);
}

toString(palabra);
