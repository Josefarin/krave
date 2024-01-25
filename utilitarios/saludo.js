salud = function() {
    let nombre = recuperarTexto("txnom");
    let apellido = recuperarTexto("txape");
    let edad = recuperarTexto("txeda");
    let altura = recuperarTexto("txesta");
    let mensajeBienvenida = "Bienvenido " + nombre + " " + apellido;
    mostrarTexto("lbresultados", mensajeBienvenida);
    mostrarImagen("imsalud", "./img/0.gif");
    mostrarTextoCaja("txnom", "");
}
