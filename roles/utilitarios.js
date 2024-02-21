let roles = [];
let isNuevo = false;

mostrarImagen=function(idComponente,rutaImagen){
    let componente;
    componente=document.getElementById(idComponente);
    componente.src = rutaImagen;
}
mostrarTexto=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText = mensaje;
}
mostrarTextoEnCaja = function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.value = mensaje;
}

recuperarTexto=function(idComponente){
    let componente= document.getElementById(idComponente);
    let valorIngresado;
    componente=document.getElementById(idComponente);
  
    return componente ? componente.value : '',valorIngresado;

}

recuperarInt = function(idComponente){
   let valorCaja= recuperarTexto(idComponente);
   let valorEntero = parseInt(valorCaja);
   return valorEntero;
}

recuperarFloat = function(idComponente){
    const valorCaja= recuperarTexto(idComponente);
    return parseFloat(valorCaja);
 }

 function ocultarComponente(idComponente) {
    document.getElementById(idComponente).style.display = "none";
}

function mostrarComponente(idComponente) {
    document.getElementById(idComponente).style.display = "block";
}

function deshabilitarComponente(idComponente) {
    const componente = document.getElementById(idComponente);
    if (componente) {
        componente.disabled = true;
    } else {
        console.error(`El elemento con ID ${idComponente} no se encontró.`);
    }
}

habilitarComponente = function(idComponente){
    document.getElementById(idComponente).disabled = false;
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

function habilitarComponentes() {
    document.getElementById('txtCedula').disabled = false;
    document.getElementById('txtNombre').disabled = false;
    document.getElementById('txtApellido').disabled = false;
    document.getElementById('txtSueldo').disabled = false;
    document.getElementById('btnGuardar').disabled = false;

}

function deshabilitarComponentes() {
    document.getElementById('txtCedula').disabled = true;
    document.getElementById('txtNombre').disabled = true;
    document.getElementById('txtApellido').disabled = true;
    document.getElementById('txtSueldo').disabled = true;
    
}

function ejecutarNuevo() {
    isNuevo = true;
    habilitarComponentes();
}

function buscarEmpleado(cedula) {
    const empleadoEncontrado = empleados.find(empleado => empleado.cedula === cedula) || null;

    if (empleadoEncontrado) {
        document.getElementById('infoCedula').innerText = `${empleadoEncontrado.cedula}`;
        document.getElementById('infoNombre').innerText = ` ${empleadoEncontrado.nombre}`;
        document.getElementById('infoSueldo').innerText = ` ${empleadoEncontrado.sueldo}`;
  
    } else {
        alert('Empleado no existe');
        
    }

    return empleadoEncontrado;
}function agregarEmpleado(empleado) {
    if (!buscarEmpleado(empleado.cedula)) {
        empleados.push(empleado);
        return true;
    }
    return false;
}

function validarCedula(cedula) {
    const regexCedula = /^\d{10}$/;
    return regexCedula.test(cedula);
}

function validarNombreApellido(nombre) {
    const regexNombreApellido = /^[A-Z]{3,}$/;
    return regexNombreApellido.test(nombre);
}

function validarSueldo(sueldo) {
    const regexSueldo = /^([4-4]\d{2}|500)(\.\d+)?$/;
    return regexSueldo.test(sueldo);
}
function mostrarMensajeError(elemento, mensaje) {
    const mensajeError = document.getElementById(elemento.id + 'Error');
    if (mensajeError) {
        mensajeError.textContent = mensaje;
    }
}

function limpiarMensajesError() {
    const mensajesError = document.querySelectorAll('.error');
    mensajesError.forEach(mensajeError => mensajeError.textContent = '');
}

function guardar() {
    limpiarMensajesError();

    const cedula = document.getElementById('txtCedula').value;
    const nombre = document.getElementById('txtNombre').value;
    const apellido = document.getElementById('txtApellido').value;
    const sueldo = document.getElementById('txtSueldo').value;

    if (!validarCedula(cedula)) {
        mostrarMensajeError(document.getElementById('txtCedula'), 'La cédula debe tener 10 dígitos.');
    }

    if (!validarNombreApellido(nombre)) {
        mostrarMensajeError(document.getElementById('txtNombre'), 'Deve ser solo mayúsculas.');
    }

    if (!validarNombreApellido(apellido)) {
        mostrarMensajeError(document.getElementById('txtApellido'), 'Deve ser solo mayúsculas.');
    }

    if (!validarSueldo(sueldo)) {
        mostrarMensajeError(document.getElementById('txtSueldo'), 'El sueldo debe ser un número flotante entre 400 y 500.');
    }
    if (validarCedula(cedula) && validarNombreApellido(nombre) && validarNombreApellido(apellido) && validarSueldo(sueldo)) {
        if (isNuevo) {
            const nuevoEmpleado = { cedula, nombre, apellido, sueldo: parseFloat(sueldo) };
            const guardado = agregarEmpleado(nuevoEmpleado);
            if (guardado) {
                alert('Empleado guardado correctamente');
                mostrarEmpleados();
                deshabilitarComponentes();
                isNuevo = false;
            } else {
                alert('Ya existe un empleado con la misma cédula');
            }
        } else {
            const empleadoExistente = buscarEmpleado(cedula);
            if (empleadoExistente) {
                empleadoExistente.nombre = nombre;
                empleadoExistente.apellido = apellido;
                empleadoExistente.sueldo = parseFloat(sueldo);
                alert('Empleado modificado exitosamente');
                mostrarEmpleados();
                deshabilitarComponentes();
            } else {
                alert('Error al modificar el empleado');
            }
        }
    } else {
        alert('Por favor, complete todos los campos correctamente.');
    }
}

function ejecutarBusqueda() {
    const cedulaBusqueda = document.getElementById('txtBusquedaCedula').value;
    const empleadoEncontrado = buscarEmpleado(cedulaBusqueda);

    if (empleadoEncontrado) {
        document.getElementById('txtCedula').value = empleadoEncontrado.cedula;
        document.getElementById('txtNombre').value = empleadoEncontrado.nombre;
        document.getElementById('txtApellido').value = empleadoEncontrado.apellido;
        document.getElementById('txtSueldo').value = empleadoEncontrado.sueldo;
        document.getElementById('txtNombre').disabled = false;
        document.getElementById('txtApellido').disabled = false;
        document.getElementById('txtSueldo').disabled = false;
        document.getElementById('txtCedula').disabled = true;
    } else {
        alert('Empleado no existe');
    }
}

function limpiar() {
    document.getElementById('txtCedula').value = '';
    document.getElementById('txtNombre').value = '';
    document.getElementById('txtApellido').value = '';
    document.getElementById('txtSueldo').value = '';
    isNuevo = false;
    deshabilitarComponentes();
}
const descuento = recuperarFloat('txtDescuentos');

function calcularYMostrarRol() {
    const sueldo = recuperarFloatDiv('infoSueldo');
    const descuento = recuperarFloat('txtDescuentos');

    alert(`Sueldo: ${sueldo}, Descuento: ${descuento}`);

    if (!isNaN(descuento) && descuento >= 0 && descuento <= sueldo) {
       } else {
        alert('Ingrese un descuento válido.');
    }
}
function validarDescuento() {
    const descuento = recuperarFloatDiv('txtDescuentos');

    if (!isNaN(descuento) && descuento >= 0) {
        mostrarMensajeError({ id: 'txtDescuentos' }, ''); 
        return true;
    } else {
        mostrarMensajeError({ id: 'txtDescuentos' }, 'Ingrese un descuento válido.');
        return false;
    }
}

function calcularRol() {
    const sueldoStr = recuperarTextoDiv('infoSueldo');
    const descuento = parseFloat(document.getElementById('txtDescuentos').value);

    if (!isNaN(descuento) && descuento >= 0 && descuento <= parseFloat(sueldoStr)) {
        const sueldo = parseFloat(sueldoStr);
        const aporteIESS = calcularAporteEmpleado(sueldo);
        const valorPagar = calcularValorPagar(sueldo, aporteIESS, descuento);
        document.getElementById('infoIESS').innerText = `${aporteIESS.toFixed(2)}`;
        document.getElementById('infoPago').innerText = `${valorPagar.toFixed(2)}`;
    } else {
        alert('Ingrese un descuento válido.');
    }
}

recuperarFloat


function deshabilitarBotonGuardar() {
    document.getElementById('btnGuardarRol').disabled = true;
}

function habilitarBotonGuardar() {
    document.getElementById('btnGuardarRol').disabled = false;
}

function buscarRol(cedula) {
    return roles.find(rol => rol.cedula === cedula) || null;
}

function agregarRol(rol) {
    if (!buscarRol(rol.cedula)) {
        roles.push(rol);
        alert('Rol agregado correctamente.');
        return true;
    } else {
        alert('Ya existe un rol con la misma cédula.');
        return false;
    }
}

function calcularAporteEmpleador(sueldo) {
    const porcentajeAporteEmpleador = 11.15;
    return (porcentajeAporteEmpleador / 100) * sueldo;
}



function mostrarTotalesNominas() {
    const totalNomina = roles.reduce((total, rol) => total + rol.totalPagar, 0);
    mostrarTextoEnCaja('infoTotalNomina', totalNomina.toFixed(2));
}
        
function mostrarTotales() {
    let totalEmpleado = 0;
    let totalEmpleador = 0;
    let totalPagar = 0;

    roles.forEach(rol => {
        totalEmpleado += parseFloat(rol.aporteEmpleado);
        totalEmpleador += parseFloat(rol.aporteEmpleador);
        totalPagar += parseFloat(rol.valorAPagar);
    });

    mostrarTexto('infoTotalPago', ` ${totalPagar.toFixed(2)}`);
    mostrarTexto('infoAporteEmpresa', ` ${totalEmpleador.toFixed(2)}`);
    mostrarTexto('infoAporteEmpleado', `${totalEmpleado.toFixed(2)}`);
}
