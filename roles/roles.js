
let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1234567890", nombre: "Nuevo", apellido: "Empleado", sueldo: 700.0 } 
];

function mostrarOpcionEmpleado() {
    ocultarComponente('divRol');
    ocultarComponente('divResumen');
    mostrarComponente('divEmpleado');
    mostrarEmpleados();
}
  
function agregarEmpleado(empleado) {
    if (!buscarEmpleado(empleado.cedula)) {
        empleados.push(empleado);
        return true;
    }
    return false;
}

function mostrarOpcionRol() {
    ocultarComponente('divEmpleado');
    ocultarComponente('divResumen');
    mostrarComponente('divRol');
}
    
function mostrarOpcionResumen() {
    ocultarComponente('divEmpleado');
    ocultarComponente('divRol');
    mostrarComponente('divResumen');
}
    
function mostrarEmpleados() {
    const tablaEmpleados = document.getElementById('tablaEmpleados');
    if (tablaEmpleados) {
        const tablaHTML = '<table border="1">' +
            '<tr><th>Cédula</th><th>Nombre</th><th>Apellido</th><th>Sueldo</th></tr>' +
            empleados.map(empleado =>
                `<tr><td>${empleado.cedula}</td><td>${empleado.nombre}</td><td>${empleado.apellido}</td><td>${empleado.sueldo}</td></tr>`
            ).join('') +
            '</table>';

        tablaEmpleados.innerHTML = tablaHTML;
    }
}
function deshabilitarComponente(idComponente) {
    const componente = document.getElementById(idComponente);
    if (componente) {
        componente.disabled = true;
    }
}

function recuperarFloatDiv(idComponente) {
    const valorCaja = recuperarTextoDiv(idComponente).trim();
    
    if (!valorCaja) {
        mostrarMensajeError({ id: idComponente }, 'Ingrese un valor.');
        return NaN; 
    }

    const valorNumerico = parseFloat(valorCaja);

    if (isNaN(valorNumerico)) {
        mostrarMensajeError({ id: idComponente }, 'Ingrese un número válido.');
        return NaN; 
    } else {
        mostrarMensajeError({ id: idComponente }, ''); 
        return valorNumerico;
    }
}

function recuperarIntDiv(idComponente) {
    const valorCaja = recuperarTextoDiv(idComponente);
    return parseInt(valorCaja);
}

function recuperarTextoDiv(idComponente) {
    const componente = document.getElementById(idComponente);
    return componente ? componente.textContent.trim() : '';
}

function calcularValorPagar(sueldo, aporteIESS, descuento) {
    return sueldo - aporteIESS - descuento;
}

function calcularAporteEmpleado(sueldo) {
    const porcentajeAporte = 9.45;
    return (porcentajeAporte / 100) * sueldo;
}

function buscarEmpleadoPorRol() {
    const cedulaBusqueda = document.getElementById('txtBusquedaCedulaRol').value;
    const empleadoEncontrado = buscarEmpleado(cedulaBusqueda);

    if (empleadoEncontrado) {
        document.getElementById('infoCedula').innerText = `${empleadoEncontrado.cedula}`;
        document.getElementById('infoNombre').innerText = `${empleadoEncontrado.nombre} ${empleadoEncontrado.apellido}`;
        document.getElementById('infoSueldo').innerText = `${empleadoEncontrado.sueldo}`;
    } else {
        alert('Empleado no existe');
    }
}

function calcularYMostrarRol() {
    const sueldo = recuperarFloatDiv('infoSueldo');
    const descuento = recuperarFloatDiv('txtDescuentos');

    if (!isNaN(descuento) && descuento >= 0 && descuento <= sueldo) {
        const aporteIESS = calcularAporteEmpleado(sueldo);
        const valorPagar = calcularValorPagar(sueldo, aporteIESS, descuento);

        document.getElementById('infoIESS').innerText = `Aporte IESS: ${aporteIESS.toFixed(2)}`;
        document.getElementById('infoPago').innerText = `Total a Pagar: ${valorPagar.toFixed(2)}`;
    } else {
        alert('Ingrese un descuento válido.');
    }
}

function guardarRol() {
    alert('Guardando información del rol...');
}

document.addEventListener('DOMContentLoaded', function() {
    
    const btnBuscarRol = document.getElementById('btnBuscarRol');
    if (btnBuscarRol) {
        btnBuscarRol.addEventListener('click', buscarEmpleadoPorRol);
    } else {
        console.error('El elemento con el ID btnBuscarRol no se encontró.');
    }

});
 