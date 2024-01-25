calcularValorTotal = function() {
    // Obtener valores de las cajas de texto
    let precioProducto = parseFloat(document.getElementById('txtPrecio').value);
    let cantidad = parseInt(document.getElementById('txtCantidad').value);
    let porcentajeDescuento = parseFloat(document.getElementById('txtPorcentajeDescuento').value);

    // Calcular subtotal
    let subtotal = calcularSubtotal(precioProducto, cantidad);

    // Calcular descuento
    let descuento = calcularValorDescuento(subtotal, porcentajeDescuento);

    // Calcular IVA
    let iva = calcularIVA(subtotal - descuento);

    // Calcular total
    let total = calcularTotal(subtotal, descuento, iva);

    // Mostrar resultados en los elementos HTML correspondientes
    document.getElementById('lblSubtotal').innerText = subtotal.toFixed(2);
    document.getElementById('lblDescuento').innerText = descuento.toFixed(2);  // Asegúrate de que descuento esté definido aquí
    document.getElementById('lblValorIVA').innerText = iva.toFixed(2);
    document.getElementById('lblTotal').innerText = total.toFixed(2);

    // Asegurarse de que el elemento lblResumen exista y mostrar un resumen
    let resumenElement = document.getElementById('lblResumen');
    if (!resumenElement) {
        resumenElement = document.createElement('h3');
        resumenElement.id = 'lblResumen';
        document.body.appendChild(resumenElement);
    }

    // Mostrar un resumen
    resumenElement.innerText = `Valor a pagar por ${cantidad} ${document.getElementById('txtProducto').value} con ${porcentajeDescuento}% de descuento: USD ${total.toFixed(2)}`;

    // Hacer commit o push según sea necesario
}

    
    // Función para limpiar las cajas de texto y montos
    function limpiar() {
        // Limpiar cajas de texto
        document.getElementById("txtProducto").value = '';
        document.getElementById("txtCantidad").value = '';
        document.getElementById("txtPrecio").value = '';
        document.getElementById("txtPorcentajeDescuento").value = '';
    
        // Limpiar montos
        document.getElementById("lblSubtotal").innerText = '0.0';
        document.getElementById("lblDescuento").innerText = '0.0';
        document.getElementById("lblValorIVA").innerText = '0.0';
        document.getElementById("lblTotal").innerText = '0.0';
    
        let resumenElement = document.getElementById("lblResumen");
        if (resumenElement) {
            resumenElement.remove();
        }
    }