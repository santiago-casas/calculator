var historialNumeros=[];
var resultado;
var numeroElegido="";
var valorFinal="";
var operacion;

function eleccionNumero(numeroElegido) {
    valorFinal.toString();
    numeroElegido.toString();
    valorFinal = valorFinal + numeroElegido;
    console.log(valorFinal);
}

function elecccionOperacion(operacion) {
    historialNumeros.push(valorFinal);
    switch(operacion){
        case 1:
            historialNumeros.push("+");
            
        break;
        case 2:
            historialNumeros.push("-");
            //valorFinal += " - ";
        break;
        case 3:
            historialNumeros.push("/");
            //valorFinal += " / ";
        break;
        case 4:
            historialNumeros.push("*");
            //valorFinal += " * ";
        break;
    }    
    valorFinal="";
    console.log(historialNumeros);
}
function atras(){
    valorFinal.substring(0, valorFinal.length -1);
    console.log(valorFinal);
}
    /*
    if(historialNumeros[historialNumeros,length-1] == "+" || "-" || "/" || "*"){
        historialNumeros.pop();
        console.log(valorFinal);
    }
    else
    if(historialNumeros[historialNumeros,length-1] = Number){
        historialNumeros.substring(0, historialNumeros - 1);
        console.log(valorFinal);
    }*/
function llamarResultado(){
    var primerValor = historialNumeros[historialNumeros,length-3];
    var segundoValor = historialNumeros[historialNumeros,length-1];
    switch(operacion){
        case 1:
            resultado == primerValor + segundoValor;
            historialNumeros.push(resultado);
        break;
        case 2:
            resultado == primerValor - segundoValor;
            historialNumeros.push(resultado);
        break;
        case 3:
            resultado == primerValor / segundoValor;
            historialNumeros.push(resultado);
        break;
        case 4:
            resultado == primerValor * segundoValor;
            historialNumeros.push(resultdo);
        break;
    }  
    console.log(resultado);
    document.getElementById("resultadoEnPantalla").innerHTML = historialNumeros[historialNumeros,length-1];
}
