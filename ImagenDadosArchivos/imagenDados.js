let punto = 0;
let lanzamientos = 5;

function jugar() {
    let resultado = lanzarDado();
    console.log(resultado);
    mostrarCara(resultado);
    modificarPuntos(resultado);
    modificarLanzamientos();
}

function modificarPuntos(numero) {
    punto = punto + numero;
    cambiarTexto("lPunto", punto);

    if (punto > 20) {
        cambiarTexto("mensaje", "¡Ganaste!");
        limpiar();
    }
}

function modificarLanzamientos() {
    lanzamientos = lanzamientos - 1;
    cambiarTexto("lan", lanzamientos);

    if (lanzamientos == 0) {
        cambiarTexto("mensaje", "¡Perdiste! Fin del juego");
        limpiar();
    }
}

function limpiar() {
    punto = 0;
    lanzamientos = 5;
    cambiarTexto("LPunto", punto);
    cambiarTexto("lan", lanzamientos);
    cambiarImagen("imagenDado", " ");
   
}

function mostrarCara(numero) {
    let nuevaImagen;

    switch (numero) {
        case 1:
            nuevaImagen = 'dados1.png';
            break;
        case 2:
            nuevaImagen = 'dados2.png';
            break;
        case 3:
            nuevaImagen = 'dados3.png';
            break;
        case 4:
            nuevaImagen = 'dados4.png';
            break;
        case 5:
            nuevaImagen = 'dados5.png';
            break;
        case 6:
            nuevaImagen = 'dados6.png';
            break;
        default:
            nuevaImagen = ''; 
    }

    cambiarImagen("imagenDado", nuevaImagen);
}

function lanzarDado() {
    let aleatorio = Math.random();
    let aleatorioMultiplicado = aleatorio * 6;
    let aleatorioEntero = parseInt(aleatorioMultiplicado);
    let valorDado = aleatorioEntero + 1;
    return valorDado;
}
