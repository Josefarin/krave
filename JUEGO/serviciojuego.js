let puntosUsuario = 0;
let puntosComputadora = 0;

function obtenerAleatorio() {
    return Math.floor(Math.random() * 3) + 1;
}

function generarElemento() {
    const numero = obtenerAleatorio();
    if (numero === 1) return "piedra";
    if (numero === 2) return "papel";
    if (numero === 3) return "tijera";
}

function determinarGanador(eleccionUsuario, eleccionComputadora) {
    if (eleccionUsuario === eleccionComputadora) return 0;
    if (
        (eleccionUsuario === "piedra" && eleccionComputadora === "tijera") ||
        (eleccionUsuario === "papel" && eleccionComputadora === "piedra") ||
        (eleccionUsuario === "tijera" && eleccionComputadora === "papel")
    ) {
        puntosUsuario++;
        return 1;
    } else {
        puntosComputadora++;
        return 2;
    }
}

function generarRuta(nombre) {
    return `img/${nombre}.png`;
}

function jugar(seleccionado) {

    const eleccionComputadora = generarElemento();
    const rutaImagen = generarRuta(eleccionComputadora);
    document.getElementById("imagenComputadora").src = rutaImagen ;

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

function nuevaPartida() {
    limpiar();
}

function limpiar() {
    puntosUsuario = 0;
    puntosComputadora = 0;
    document.getElementById("imagenComputadora").src="img/usuario.png";
    document.getElementById("resultado").innerText = "";
    document.getElementById("puntosUsuario").innerText = "0";
    document.getElementById("puntosComputadora").innerText = "0";
}
