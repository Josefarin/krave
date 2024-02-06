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
