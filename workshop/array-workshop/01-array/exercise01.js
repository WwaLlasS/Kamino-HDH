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



var numeros = [1,2,3,4,5,6];
var resultado = 0;

for (var i = 0; i < numeros.length; i++) {
    resultado += numeros[i];
}

console.log(resultado);
