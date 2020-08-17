function crearVector(cantidad, hastaNumero){
   var vector= new Array();

   for(i=0; i<cantidad;i++){
        vector[i]=Math.round(Math.random()*hastaNumero);
   }

   return vector;
}

function sumaVector(vector1, vector2){
    var sumaVectores= new Array();
    if(vector1.length == vector2.length){
       for(var i=0; i<vector1.length; i++){
           sumaVectores[i]=vector1[i]+vector2[i];
       }
    }
    return sumaVectores;
}

function productoVector(vector, numero){
   for(var i=0;i<vector.length; i++){
        vector[i]= vector[i]* numero;
   }
   return vector;
}

function restaVector(vector1, vector2){
    var restaVectores= new Array();
    if(vector1.length == vector2.length){
       for(var i=0; i<vector1.length; i++){
           restaVectores[i]=vector1[i]-vector2[i];
       }
    }
    return restaVectores;
}

function productosVector(vector1, vector2){
    var productoVectores= new Array();
    if(vector1.length == vector2.length){
       for(var i=0; i<vector1.length; i++){
           productoVectores[i]=vector1[i]*vector2[i];
       }
    }
    return productoVectores;
}


module.exports={crearVector, sumaVector, productoVector, restaVector, productosVector }
