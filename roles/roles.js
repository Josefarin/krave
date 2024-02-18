
let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1234567890", nombre: "Nuevo", apellido: "Empleado", sueldo: 700.0 } 
];

module.exports = empleados;


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
 mostrarOpcionEmpleado();
 
 function buscarEmpleado(cedula) {
    const empleadoEncontrado = empleados.find(empleado => empleado.cedula === cedula) || null;

    if (empleadoEncontrado) {
        document.getElementById('infoCedula').innerText = ` ${empleadoEncontrado.cedula}`;
        document.getElementById('infoNombre').innerText = ` ${empleadoEncontrado.nombre}`;
        document.getElementById('infoSueldo').innerText = `${empleadoEncontrado.sueldo}`;
    } else {
        alert('Empleado no existe');
    }

    return empleadoEncontrado;
}
