var arrayColores= Array("rojo", "verde");
var numAletorio= Math.round(Math.random()*1);
var mensaje="";
if(arrayColores[numAletorio]=="rojo"){
   mensaje="Peaton no puede cruzar";
}
else{
  mensaje="Peaton puede cruzar";
}

console.log(mensaje);