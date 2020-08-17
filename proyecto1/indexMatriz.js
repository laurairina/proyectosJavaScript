var matriz = require("./matriz.js");
var matriz1= matriz.crearMatriz(3,5,10);
var matriz2= matriz.crearMatriz(3,5,20);
var matriz3= matriz.crearMatriz(2,3,15);
console.log(matriz1);
console.log(matriz2);
console.log(matriz3);

function resultadoOperacion(resultado){
    var mensaje="";
    if(resultado.length==0){
       mensaje="No se ha realizado la operacion por no tener la misma cantidad de elementos";
    }
    else{
        mensaje="El resultado es "+resultado;
    }
    return mensaje;º
}

console.log(resultadoOperacion(matriz.sumaMatriz(matriz1,matriz2)));
console.log(resultadoOperacion(matriz.productoMatriz(matriz1,2)));
console.log(resultadoOperacion(matriz.restaMatriz(matriz1,matriz2)));
console.log(resultadoOperacion(matriz.multiMatriz(matriz1,matriz2)));
console.log(resultadoOperacion(matriz.restaMatriz(matriz1,matriz3)));