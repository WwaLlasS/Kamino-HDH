// Gran parte del trabajo de un desarrollador es proteger informacion, asi que hoy empezaremos a desencriptar informacion.
//
// var mensaje = 'S23984203948023948234o34234345453y52345435345 345345345345345345u3453453453223452452345n324534545346654768780807896784865 535624643531453245234154g24366464565346r645634564576573a4573435735468n45684568 456d845e684658654867497465732456s246534a7567r456r74568465865865o86l7845685735743573457354735l67645865478564864584658658a45685484658456d456845684684563562453754o73573457437567345635688r'
//
// este mensaje contiene letras y numeros, elimina los numeros usando splice, de esa manera el arreglo resultante sera el mensaje que tenemos preparado para ti.
// input: cadena de texto almacenado en una variable
// output: Mensaje de consola mostrando una cadena de texto original sin numeros.
// declarar una funcion a la cual se le pasa un parametro del tipo string
// convertir cadena de texto en arreglo con el metodo split()
// declarar un ciclo for  que con cada iteracion recorra el index del arreglo
// realizar comprobacion de si es un numero, aplicar el metodo splice sobre el index actual y decrementar la variable I con cada iteracion

'use strict';

let  mensaje = 'S23984203948023948234o34234345453y52345435345 345345345345345345u3453453453223452452345n324534545346654768780807896784865 535624643531453245234154g24366464565346r645634564576573a4573435735468n45684568 456d845e684658654867497465732456s246534a7567r456r74568465865865o86l7845685735743573457354735l67645865478564864584658658a45685484658456d456845684684563562453754o73573457437567345635688r'
let mensaje2 = '1235467876543234567H1231243445323342334E2341245664L1245643224L23423234324 134234234234234234O W123435676645234676755O12346523R1245655443 1345652345537L43564536544D'

let desencriptar = function(string){

  let arrmensaje = string.split('');

  for (var i = 0; i < arrmensaje.length; i++) {
    if (isNaN(arrmensaje[i]) == false) {
        var resultado = arrmensaje.splice(i,1);
        i--;
    }

  }
  console.log(arrmensaje);
}

desencriptar(mensaje);

desencriptar(mensaje2);
