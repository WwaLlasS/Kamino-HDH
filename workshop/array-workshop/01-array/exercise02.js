// Muy bien, ya sabes sumar arreglos, ahora que pasaria si solo queremos sumar los numeros pares en un arreglo?
//
// Dado [1,2,3,4,5,6,7,8,9,10] el resultado debe ser

var dado = [1,2,3,4,5,6,7,8,9,10];
var resultado = 0;

for (var i = 0; i < dado.length; i++) {
  if (dado[i] % 2 == 0 ) {
      resultado += dado[i];
  }
}
 console.log(resultado);
