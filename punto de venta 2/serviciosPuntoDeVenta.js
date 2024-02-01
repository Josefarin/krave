
function calcularValorDescuento(monto, porcentajeDescuento) {
    return (monto * porcentajeDescuento) / 100;
}

function calcularIVA(monto) {
    const porcentajeIVA = 12;
    return (monto * porcentajeIVA) / 100;
}

function calcularSubtotal(precio, cantidad) {
    return precio * cantidad;
}

function calcularTotal(subtotal, descuento, iva) {
    return subtotal - descuento + iva;
}

function recuperarInt(idComponente) {
    let valorCaja = recuperarTexto(idComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
}

function recuperarTexto(idComponente) {
    let componente = document.getElementById(idComponente);
    return componente ? componente.value : '';
}