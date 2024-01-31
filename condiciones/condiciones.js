function calcularTasaInteres(ingresoAnual) {
    if (ingresoAnual < 300000) {
        return 0.16; 
    } else if (ingresoAnual < 500000) {
        return 0.15; 
    } else if (ingresoAnual < 1000000) {
        return 0.14; 
    } else if (ingresoAnual < 2000000) {
        return 0.13;    } else {
        return 0.12; 
    }
}

function calcularCapacidadPago(edad, ingresos, egresos) {
    let capacidad;
    if (edad > 50) {
        capacidad = 0.3 * (ingresos - egresos);
    } else {
        capacidad = 0.4 * (ingresos - egresos);
    }
    return capacidad;
}


function calcularDescuento(precio, cantidad) {
    if (cantidad < 3) {
        return precio; 
    } else if (cantidad <= 5) {
        return precio * 0.98;
    } else if (cantidad <= 11) {
        return precio * 0.97;
    } else {
        return precio * 0.96;
    }
}
function validarClave(clave) {
    return clave.length >= 8 && clave.length <= 16;
}

function darPermiso(notaMatematicas, notaFisica, notaGeometria) {
    return notaMatematicas > 90 || notaFisica > 90 || notaGeometria > 90;
}


function otorgarPermiso(notaMatematicas, notaFisica, notaGeometria) {
    return notaMatematicas > 90 && notaFisica > 90 && notaGeometria > 80;
}

function dejarSalir(notaMatematicas, notaFisica, notaGeografia) {
    return (notaMatematicas > 90 && notaFisica > 90) || (notaGeografia > 90 && notaFisica > notaMatematicas);
}


function esMayuscula(caracter) {
    const codigoAscii = caracter.charCodeAt(0);
    return codigoAscii >= 65 && codigoAscii <= 90;
}

function esMinuscula(caracter) {
    const codigoAscii = caracter.charCodeAt(0);
    return (codigoAscii >= 97 && codigoAscii <= 122) || (codigoAscii >= 224 && codigoAscii <= 255);
}


function esDigito(caracter) {
    const codigoAscii = caracter.charCodeAt(0);
    return codigoAscii >= 48 && codigoAscii <= 57;
}


function determinarColesterolLDL(nivelColesterol) {
    if (nivelColesterol < 100) {
        return "Óptimo";
    } else if (nivelColesterol < 130) {
        return "Normal";
    } else if (nivelColesterol < 160) {
        return "Ligeramente elevado";
    } else if (nivelColesterol < 190) {
        return "Elevado";
    } else {
        return "Muy elevado";
    }
}

module.exports = {
    calcularTasaInteres,
    calcularCapacidadPago,
    calcularDescuento,
    validarClave,
    darPermiso,
    otorgarPermiso,
    dejarSalir,
    esMayuscula,
    esMinuscula,
    esDigito,
    determinarColesterolLDL,
};

