var libVector = require("./vector.js");

function crearMatriz(n,m,k){
    var matriz= new Array();
   for(f=0; f<n; f++){
       var vector=libVector.crearVector(m,k);
       matriz[f]=vector;
   }
   return matriz;
}

function sumaMatriz(matriz1, matriz2){
   var matrizSuma= new Array();
    if(matriz1.length == matriz2.length && matriz1[0].length== matriz2[0].length ){
        for(var i=0; i<matriz1.length ;i++){
            matrizSuma[i]= libVector.sumaVector(matriz1[i],matriz2[i]);
        }     
    }

    return matrizSuma;

}

function productoMatriz(matriz1, numero){

    var matrizProducto= new Array();
     
         for(var i=0; i<matriz1.length ;i++){
             matrizProducto[i]= libVector.productoVector(matriz1[i],numero);
         }     
     
 
     return matrizProducto;
 
 }

 function restaMatriz(matriz1, matriz2){
    var matrizResta= new Array();
     if(matriz1.length == matriz2.length && matriz1[0].length== matriz2[0].length ){
         for(var i=0; i<matriz1.length ;i++){
             matrizResta[i]= libVector.restaVector(matriz1[i],matriz2[i]);
         }     
     }
 
     return matrizResta;
 
 }

 function multiMatriz(matriz1, matriz2){
    var matrizMulti= new Array();
     if(matriz1.length == matriz2.length && matriz1[0].length== matriz2[0].length ){
         for(var i=0; i<matriz1.length ;i++){
             matrizMulti[i]= libVector.productosVector(matriz1[i],matriz2[i]);
         }     
     }
 
     return matrizMulti;
 
 }

module.exports={crearMatriz, sumaMatriz, productoMatriz,restaMatriz,multiMatriz};