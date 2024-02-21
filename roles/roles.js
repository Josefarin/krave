let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1234567890", nombre: "Nuevo", apellido: "Empleado", sueldo: 700.0 } 
];

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

function mostrarTotales() {
    let totalEmpleado = 0;
    let totalEmpleador = 0;
    let totalPagar = 0;

    roles.forEach(rol => {
        totalEmpleado += rol.aporteEmpleado;
        totalEmpleador += rol.aporteEmpleador;
        totalPagar += rol.valorAPagar;
    })
 
   
    
        mostrarTexto('infoTotalPago', ` ${totalPagar.toFixed(2)}`);
        mostrarTexto('infoAporteEmpresa', ` ${totalEmpleador.toFixed(2)}`);
        mostrarTexto('infoAporteEmpleado', ` ${totalEmpleado.toFixed(2)}`);
    }
    

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
        deshabilitarComponente('btnGuardarRol');
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
    
    function buscarEmpleado(cedula) {
        return empleados.find(empleado => empleado.cedula === cedula) || null;
    }
    
    function mostrarTexto(idElemento, texto) {
        const elemento = document.getElementById(idElemento);
        if (elemento) {
            elemento.innerText = texto;
        } else {
            console.error(`El elemento con ID ${idElemento} no se encontró.`);
        }
    }
    
    function ocultarComponente(idComponente) {
        document.getElementById(idComponente).style.display = "none";
    }
    
    function mostrarComponente(idComponente) {
        document.getElementById(idComponente).style.display = "block";
    }
    
    document.addEventListener('DOMContentLoaded', function() {
        const btnBuscarRol = document.getElementById('btnBuscarRol');
        if (btnBuscarRol) {
            btnBuscarRol.addEventListener('click', buscarEmpleadoPorRol);
        } else {
            console.error('El elemento con el ID btnBuscarRol no se encontró.');
        }
    });
    
    function buscarEmpleadoPorRol() {
        const cedulaBusqueda = document.getElementById('txtBusquedaCedulaRol').value;
        const empleadoEncontrado = buscarEmpleado(cedulaBusqueda);
    
        if (empleadoEncontrado) {
            document.getElementById('infoCedula').innerText = `${empleadoEncontrado.cedula}`;
            document.getElementById('infoNombre').innerText = `${empleadoEncontrado.nombre} ${empleadoEncontrado.apellido}`;
            document.getElementById('infoSueldo').innerText = `${empleadoEncontrado.sueldo}`;
            habilitarComponente('btnGuardarRol');
        } else {
            alert('Empleado no existe');
            deshabilitarComponente('btnGuardarRol');
        }
    }
    
    function calcularYMostrarRol() {
        const sueldo = recuperarFloatDiv('infoSueldo');
        const descuento = recuperarFloat('txtDescuentos');
    
        if (!isNaN(descuento) && descuento >= 0 && descuento <= sueldo) {
            const aporteIESS = calcularAporteEmpleado(sueldo);
            const valorPagar = calcularValorPagar(sueldo, aporteIESS, descuento);
    
            document.getElementById('infoIESS').innerText = `Aporte IESS: ${aporteIESS.toFixed(2)}`;
            document.getElementById('infoPago').innerText = ` ${valorPagar.toFixed(2)}`;
            habilitarComponente('btnGuardarRol');
        } else {
            alert('Ingrese un descuento válido.');
        }
    }
  
    function mostrarRoles() {
        const tablaResumen = document.getElementById('tablaResumen');
        if (tablaResumen) {
            let tablaHTML = '<table border="1">' +
                '<tr><th>Cédula</th><th>Nombre</th><th>Valor a Pagar</th><th>Aporte Empleado</th><th>Aporte Empleador</th></tr>' +
                roles.map(rol =>
                    `<tr><td>${rol.cedula}</td><td>${rol.nombre}</td><td>${rol.valorAPagar.toFixed(2)}</td><td>${rol.aporteEmpleado.toFixed(2)}</td><td>${rol.aporteEmpleador.toFixed(2)}</td></tr>`
                ).join('') +
                '</table>';
            tablaHTML += '</table>';
            tablaResumen.innerHTML = tablaHTML;
        }
        mostrarTotales();
    }

    function guardarRol() {
        const cedula = document.getElementById('infoCedula').innerText;
        const nombre = document.getElementById('infoNombre').innerText;
        const sueldo = parseFloat(document.getElementById('infoSueldo').innerText);
        const valorAPagar = parseFloat(document.getElementById('infoPago').innerText);
        const aporteEmpleado = parseFloat(document.getElementById('infoIESS').innerText);
        const totalPagar = isNaN(valorAPagar) ? 0.0 : valorAPagar;
        const aporteEmpleador = isNaN(aporteEmpleado) ? 0.0 : calcularAporteEmpleador(sueldo);
    
        const rol = { cedula, nombre, sueldo, valorAPagar, aporteEmpleado, aporteEmpleador };
    
        agregarRol(rol);
    
        deshabilitarComponente('btnGuardarRol');
        mostrarRoles();
        mostrarTotales();
    }
    
 