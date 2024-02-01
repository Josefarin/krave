document.addEventListener("DOMContentLoaded", function () {
    // Asigna las funciones a los botones usando las clases
    document.querySelector('.calcularBtn').addEventListener('click', function () {
        calcularDescuentoPorVolumen();
    });
    document.querySelector('.limpiarBtn').addEventListener('click', limpiar);
});

function calcularDescuentoPorVolumen() {
    // Recuperar valores del formulario
    let productoElement = document.getElementById('txtProducto');
    let cantidadElement = document.getElementById('txtCantidad');
    let precioElement = document.getElementById('txtPrecio');

    let producto = productoElement ? productoElement.value : '';
    let cantidad = cantidadElement ? recuperarInt(cantidadElement.id) : 0;
    let precioProducto = precioElement ? recuperarFloat(precioElement.id) : 0;

    // Validaciones
    if (producto.length === 0 || isNaN(cantidad) || isNaN(precioProducto) || cantidad < 0 || precioProducto < 0) {
        alert("CAMPO OBLIGATORIO");
        return;
    }

    // Calcular descuento por volumen
    let descuentoPorVolumen = 0;
    if (cantidad >= 3 && cantidad <= 5) {
        descuentoPorVolumen = 3;
    } else if (cantidad >= 6 && cantidad <= 11) {
        descuentoPorVolumen = 4;
    } else if (cantidad >= 12) {
        descuentoPorVolumen = 5;
    }

    // Cálculo del descuento y otros valores
    let subtotal = calcularSubtotal(precioProducto, cantidad);
    let descuento = calcularValorDescuento(subtotal, descuentoPorVolumen);
    let iva = calcularIVA(subtotal - descuento);
    let total = calcularTotal(subtotal, descuento, iva);

    // Mostrar resultados en los elementos HTML correspondientes
    document.getElementById('lblSubtotal').innerText = subtotal.toFixed(2);
    document.getElementById('lblDescuento').innerText = descuento.toFixed(2);
    document.getElementById('lblValorIVA').innerText = iva.toFixed(2);
    document.getElementById('lblTotal').innerText = total.toFixed(2);

    // Asegurarse de que el elemento lblResumen exista y mostrar un resumen
    let resumenElement = document.getElementById('lblResumen');
    if (!resumenElement) {
        resumenElement = document.createElement('h3');
        resumenElement.id = 'lblResumen';
        document.body.appendChild(resumenElement);
    }

    resumenElement.innerText = `Valor a pagar por ${cantidad} ${producto} con ${descuentoPorVolumen}% de descuento: USD ${total.toFixed(2)}`;
}



// Función para limpiar las cajas de texto y montos
function limpiar() {
    document.getElementById('txtProducto').value = '';
    document.getElementById('txtCantidad').value = '';
    document.getElementById('txtPrecio').value = '';
    document.getElementById('lblSubtotal').innerText = '0.0';
    document.getElementById('lblDescuento').innerText = '0.0';
    document.getElementById('lblValorIVA').innerText = '0.0';
    document.getElementById('lblTotal').innerText = '0.0';

    // Asegurarse de que el elemento lblResumen exista y limpiarlo
    let resumenElement = document.getElementById('lblResumen');
    if (resumenElement) {
        resumenElement.innerText = '';
    }
}
