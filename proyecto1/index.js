function sum(numero1, numero2){
    var mensaje ="Suma --> ";
    var operacion= numero1+numero2;

   return mensaje +operacion; 
}

function subs(numero1, numero2){
    var mensaje ="Resta --> ";
    var operacion= numero1-numero2;

   return mensaje +operacion; 
}

function mult(numero1, numero2){
    var mensaje ="Multiplicacion --> ";
    var operacion= numero1*numero2;

   return mensaje +operacion; 
}

function div(numero1, numero2){
    var mensaje ="Division --> ";
    var operacion= numero1/numero2;

   return mensaje +operacion; 
}

module.exports={sum, subs, mult, div};

