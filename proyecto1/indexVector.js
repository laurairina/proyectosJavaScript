var libVector = require("./vector.js");


var vector1 = libVector.crearVector(5,10);
var vector2 = libVector.crearVector(3,10);
var vector3 = libVector.crearVector(5,20);

function resultadoOperacion(resultado){
    var mensaje="";
    if(resultado.length==0){
       mensaje="No se ha realizado la operacion por no tener la misma cantidad de elementos";
    }
    else{
        mensaje="El resultado es "+resultado;
    }
    return mensaje;
}
console.log(vector1);
console.log(vector2);
console.log(vector3);

console.log(resultadoOperacion(libVector.sumaVector(vector1,vector2)));
console.log(resultadoOperacion(libVector.restaVector(vector1,vector3)));
console.log(resultadoOperacion(libVector.productoVector(vector1,2)));
console.log(resultadoOperacion(libVector.productosVector(vector1,vector3)));

