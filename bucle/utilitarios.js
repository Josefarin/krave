function mostrarImagen(idComponente, rutaImagen) {
    let comp = document.getElementById(idComponente);
    comp.src = rutaImagen;
}

function mostrarTexto(idComponente, mensaje) {
    let comp = document.getElementById(idComponente);
    comp.innerText = mensaje;
}

function mostrarTextoCaja(idComponente, mensaje) {
    let comp = document.getElementById(idComponente);
    comp.value = mensaje;
}

function recuperarTexto(idComponente) {
    let comp = document.getElementById(idComponente);
    return comp.value;
}

function recuperarInt(idComponente) {
    let valorCaja = recuperarTexto(idComponente);
    return parseInt(valorCaja);
}

function recuperarFloat(idComponente) {
    let valorCaja = recuperarTexto(idComponente);
    return parseFloat(valorCaja);
}
