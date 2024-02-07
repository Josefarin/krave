function ejecutarPrueba() {
    let mensaje = recuperarTexto("txtcar");
    recorrerCadena(mensaje);
}

function recorrerCadena(cadena) {
    let car;
    for (let posicion = 0; posicion < cadena.length; posicion++) {
        car = cadena.charAt(posicion);
        console.log("caracter " + car + " posicion " + posicion);
    }

    for (let posicion = 0; posicion <= cadena.length - 1; posicion++) {
        car = cadena.charAt(posicion);
        console.log("caracter " + car + " posicion " + posicion);
    }
}

function invertirCadena() {
    let mensaje = recuperarTexto("txtcar");
    let cadenaInvertida = mensaje.split('').reverse().join('');
    document.getElementById("resultado").innerText = "Cadena Invertida: " + cadenaInvertida;
}
buscarLetra=function(caden,letra){
    let letrad;
    let existe=false;
    for(let i=0; i<cadena.length;i++){
        letra=cadena.charAt(i);
        if(letrad==letra);{
            existe=true;
        }    
    } if(existe==true){
        return true;
    } else{
        return false;
    }
}
function contarMay(cadena) {
    let cont = 0;
    for (let i = 0; i < cadena.length; i++) {
        let letr = cadena.charAt(i);
        if (esMayuscula(letr)) {
            cont = cont + 1;
        }
    }
    console.log(cont);
}