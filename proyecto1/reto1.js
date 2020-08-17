function calculadora(tipoOperacion, numero1, numero2){
   var operacion;
   var mensaje="";
    switch(tipoOperacion){
       case "sum":
        mensaje ="Suma --> ";  
         operacion= numero1+numero2;
        break;
      
        case "subs":
         mensaje ="Resta --> ";   
         operacion= numero1-numero2;  
        break;

        case "mult":
            mensaje ="Multiplicacion --> ";  
            operacion= numero1*numero2;
         break;
         
        case "div":
            mensaje ="Division --> ";
            operacion= numero1/numero2;
         break;
        default:
        break;      
    }

    return mensaje+operacion;
}

console.log(calculadora("mult",3,4));