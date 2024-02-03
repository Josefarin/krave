function validarEstructura(placa) {
    const longitudCorrecta = validarLongitud(placa);
    const letraMayuscula = validarLetraMayuscula(placa.charAt(0));
    const guionCorrecto = validarGuion(placa.charAt(3));
    const digitosCorrectos = validarDigitos(placa.slice(4));

    const errores = [longitudCorrecta, letraMayuscula, guionCorrecto, digitosCorrectos].filter(error => error !== null);

    return errores.length === 0 ? null : errores;
}

function obtenerProvincia(placa) {
    return placa.charAt(0);
}

function obtenerTipoVehiculo(placa) {
    return placa.charAt(1);
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

function obtenerNombreDiaPicoPlaca(diaPicoPlaca) {
    const nombres = {
        'Lunes': 'Lunes',
        'Martes': 'Martes',
        'Miércoles': 'Miércoles',
        'Jueves': 'Jueves',
        'Viernes': 'Viernes',
        'Libre Circulación': 'Libre Circulación'
    };

    return nombres[diaPicoPlaca] || 'Desconocido';
}

function validarLongitud(placa) {
    return placa.length === 7 ? null : "La placa debe tener 7 caracteres";
}
function validarLetraMayuscula(primerCaracter) {
    return esMayuscula(primerCaracter) ? null : "El primer caracter debe ser una letra mayúscula";
}
function validarGuion(cuartoCaracter) {
    return esGuion(cuartoCaracter) ? null : "El cuarto caracter debe ser un guion (-)";
}
function validarDigitos(ultimosCaracteres) {
    return esDigito(ultimosCaracteres[0]) && esDigito(ultimosCaracteres[1]) && esDigito(ultimosCaracteres[2])
        ? null
        : "Los últimos 3 caracteres deben ser dígitos";
}

function obtenerNombreTipoVehiculo(codigoTipoVehiculo) {
    const nombres = {
        A: 'Comerciales',
        Z: 'Comerciales',
        X: 'Gubernamentales O de Uso Oficial',
        '-': 'Vehículos del Gobierno Provincial',
        M: 'Vehículos Municipales',
        'default': 'Particulares (Cualquier letra excepto A, Z, X, M)'
    };
    return nombres[codigoTipoVehiculo] || 'PARTICULAR';
}

function mostrarResultados(provincia, tipoVehiculo, diaPicoPlaca) {
    const nombreProvincia = obtenerNombreProvincia(provincia);
    const nombreTipoVehiculo = obtenerNombreTipoVehiculo(tipoVehiculo);
    const nombreDiaPicoPlaca = obtenerNombreDiaPicoPlaca(diaPicoPlaca);

    const resultadoElement = document.getElementById('resultadoLabel');
    resultadoElement.innerHTML = '';

    const tipoVehiculoElement = document.createElement('div');
    tipoVehiculoElement.textContent = `Tipo de Vehículo: ${nombreTipoVehiculo}`;
    tipoVehiculoElement.classList.add('horizontal-text');
    resultadoElement.appendChild(tipoVehiculoElement);

    const provinciaElement = document.createElement('div');
    provinciaElement.textContent = `Provincia: ${nombreProvincia}`;
    provinciaElement.classList.add('horizontal-text');
    resultadoElement.appendChild(provinciaElement);

    const diaPicoPlacaElement = document.createElement('div');
    diaPicoPlacaElement.textContent = `Día de Pico y Placa: ${nombreDiaPicoPlaca}`;
    diaPicoPlacaElement.classList.add('horizontal-text');
    resultadoElement.appendChild(diaPicoPlacaElement);
}

function limpiar() {
    document.getElementById('placaInput').value = '';
    document.getElementById('resultadoLabel').innerHTML = '';
}

function validarPlaca() {
    const placaIngresada = obtenerPlacaIngresada();
    const erroresEstructura = validarEstructura(placaIngresada);

    if (erroresEstructura === null) {
        const provincia = obtenerProvincia(placaIngresada);
        const tipoVehiculo = obtenerTipoVehiculo(placaIngresada);
        const diaPicoPlaca = obtenerDiaPicoPlaca(placaIngresada);
        mostrarResultados(provincia, tipoVehiculo, diaPicoPlaca);
    } else {
        mostrarErrorEstructura(erroresEstructura);
    }
}

function mostrarErrorEstructura(errores) {
    const errorElement = document.getElementById('errorMensaje');
    errorElement.innerHTML = '';

    if (Array.isArray(errores)) {
        errores.forEach(error => {
            const errorItem = document.createElement('div');
            errorItem.textContent = `Error: ${error}`;
            errorElement.appendChild(errorItem);
            // Mostrar mensajes específicos para cada tipo de error
            if (error === "Estructura incorrecta") {
                mostrarDetalleError("Estructura incorrecta: La placa debe tener el formato ABC-123.");
            } else if (error === "La placa debe tener 7 caracteres") {
                mostrarDetalleError("Longitud incorrecta: La placa debe tener exactamente 7 caracteres.");
            } else if (error === "El primer caracter debe ser una letra mayúscula") {
                mostrarDetalleError("Error en el primer caracter: Debe ser una letra mayúscula.");
            } else if (error === "El cuarto caracter debe ser un guion") {
                mostrarDetalleError("Error en el cuarto caracter: Debe ser un guion (-).");
            } else if (error === "Los últimos 3 caracteres deben ser dígitos") {
                mostrarDetalleError("Error en los últimos 3 caracteres: Deben ser dígitos.");
            }
        });
    } else {
        const errorItem = document.createElement('div');
        errorItem.textContent = `Error: ${errores}`;
        errorElement.appendChild(errorItem);
        if (errores.includes("La placa debe tener 7 caracteres")) {
            mostrarDetalleError(validarLongitud);
        }
        if (errores.includes("El primer caracter debe ser una letra mayúscula")) {
            mostrarDetalleError(validarLetraMayuscula);
        }
        if (errores.includes("El cuarto caracter debe ser un guion")) {
            mostrarDetalleError(validarGuion);
        }
        if (errores.includes("Los últimos 3 caracteres deben ser dígitos")) {
            mostrarDetalleError(validarDigitos);
        }
    }
}

function mostrarDetalleError(mensaje) {
    const errorItem = document.createElement('div');
    errorItem.textContent = mensaje;
    document.getElementById('errorMensaje').appendChild(errorItem);
}

function obtenerPlacaIngresada() {
    return document.getElementById('placaInput').value;
}


function obtenerPlacaIngresada() {
    const placaInput = document.getElementById('placaInput');
    console.log('Valor del input:', placaInput);
    return placaInput.value;
}
