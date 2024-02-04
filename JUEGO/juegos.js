function jugar(seleccionado) {
    const eleccionComputadora = generarElemento();
    const rutaImagen = generarRuta(eleccionComputadora);
    document.getElementById("imagenComputadora").src = rutaImagen;

    const resultado = determinarGanador(seleccionado, eleccionComputadora);
    if (resultado === 0) {
        document.getElementById("resultado").innerText = "Empate";
    } else if (resultado === 1) {
        document.getElementById("resultado").innerText = "¡Ganaste la partida!";
    } else {
        document.getElementById("resultado").innerText = "Perdiste la partida";
    }

    document.getElementById("puntosUsuario").innerText = puntosUsuario;
    document.getElementById("puntosComputadora").innerText = puntosComputadora;

    if (puntosUsuario === 5) {
        alert("¡Has ganado el juego!");
        limpiar();
    } else if (puntosComputadora === 5) {
        alert("El computador ha ganado el juego");
        limpiar();
    }
}
