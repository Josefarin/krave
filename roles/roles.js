let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0}
]

function mostrarOpcionEmpleado() {
    ocultarComponente('divRol');
    ocultarComponente('divResumen');
    mostrarComponente('divEmpleado');
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