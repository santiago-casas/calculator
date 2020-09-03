var historialNumeros=[];
var resultado;
var numeroElegido="";
var valorFinal="";
var operacion;
var operacion_save;
var resultadoDado = false;

function eleccionNumero(numeroElegido) {
    valorFinal.toString();
    numeroElegido.toString();
    valorFinal = valorFinal + numeroElegido;
    console.log(valorFinal);
}
function elecccionOperacion(operacion) {
        if(resultadoDado == false){
            historialNumeros.push(valorFinal);
        }
        switch(operacion){
            case 1:
                operacion_save=1;
            break;
            case 2:
                operacion_save=2;
            break;
            case 3:
                operacion_save=3;
            break;
            case 4:
                operacion_save=4;
            break;
        }    
    console.log(historialNumeros);
    valorFinal="";
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

    historialNumeros.push(valorFinal);

    var primerValor = parseInt(historialNumeros[historialNumeros.length-2]);
    var segundoValor = parseInt(historialNumeros[historialNumeros.length-1]);
    switch(operacion_save){
        case 1:  
            resultado = primerValor + segundoValor;
            historialNumeros.push(resultado);
        break;
        case 2:
            resultado = primerValor - segundoValor;
            historialNumeros.push(resultado);
        break;
        case 3:
            resultado = primerValor / segundoValor;
            historialNumeros.push(resultado);
        break;
        case 4:
            resultado = primerValor * segundoValor;
            historialNumeros.push(resultado);
        break;
    }  
    resultadoDado = true;
    console.log(resultado);
    document.getElementById("resultadoEnPantalla").innerHTML = historialNumeros[historialNumeros,length-1];
}
