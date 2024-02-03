function esDigito(caracter) {
    return caracter && caracter.charCodeAt(0) >= 48 && caracter.charCodeAt(0) <= 57;
}
function validarEstructura(placa) {
    const estructuraRegex = /^[A-Z]{3}-\d{3,4}$/;
    let errores = [];

    if (!estructuraRegex.test(placa)) {
        if (placa.length !== 7) {
            errores.push("La placa debe tener 7 caracteres");
        }

        if (!esMayuscula(placa.charAt(0))) {
            errores.push("El primer caracter debe ser una letra mayúscula");
        }

        if (!esGuion(placa.charAt(3))) {
            errores.push("El cuarto caracter debe ser un guion");
        }

        if (!esDigito(placa.charAt(4)) || !esDigito(placa.charAt(5)) || !esDigito(placa.charAt(6))) {
            errores.push("Los últimos 3 caracteres deben ser dígitos");
        }
    }

    return errores;
}


function obtenerNombreProvincia(codigoProvincia) {
    const nombres = {
        A: 'Azuay',
        B: 'Bolívar',
        U: 'Cañar',
        C: 'Carchi',
        X: 'Cotopaxi',
        H: 'Chimborazo',
        O: 'El Oro',
        E: 'Esmeraldas',
        W: 'Galápagos',
        G: 'Guayas',
        I: 'Imbabura',
        L: 'Loja',
        R: 'Los Ríos',
        M: 'Manabí',
        V: 'Morona Santiago',
        N: 'Napo',
        S: 'Pastaza',
        P: 'Pichincha',
        K: 'Sucumbíos',
        Q: 'Orellana',
        T: 'Tungurahua',
        Z: 'Zamora Chinchipe',
        Y: 'Santa Elena'
    };
    return nombres[codigoProvincia] || 'Desconocido';
}

function obtenerDiaPicoPlaca(placa) {
    const ultimoDigito = parseInt(placa.charAt(placa.length - 1), 10);

    switch (ultimoDigito) {
        case 1:
        case 2:
            return 'Lunes';
        case 3:
        case 4:
            return 'Martes';
        case 5:
        case 6:
            return 'Miércoles';
        case 7:
        case 8:
            return 'Jueves';
        case 9:
        case 0:
            return 'Viernes';
        default:
            return 'Libre Circulación';
    }
}