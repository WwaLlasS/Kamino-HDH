// Ahora ya sabes como recorrer un array, pero que pasa con las cadenas (strings)?
// ''' var string = 'ollorrased'; // el string es desarrollo al reves '''
// Tu objetivo es crear un array que este en orden, recuerda el uso de for, tambien ten en cuenta de los incrementos y decremetos que puedes hacer en un for...
// No puedes usar split.

// Input: Cadena de caracteres almacenados en una variable
// Outup: Arreglo con la palabra 'Desarrollo' acomodada de manera correcta
//pseudocodigo
'use strict';
 let string = 'ollorrased';
 let arreglo = string.split('');

 arreglo.reverse();

console.log(arreglo);
