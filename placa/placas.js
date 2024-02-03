function validarEstructura(placa) {
    const estructuraRegex = /^[A-Z]{3}-\d{3,4}$/;
    return estructuraRegex.test(placa) ? null : "Estructura incorrecta";
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


function mostrarErrorEstructura(error) {
    document.getElementById('resultadoLabel').innerText = `Error: ${error}`;
}

function limpiar() {
    document.getElementById('placaInput').value = '';
    document.getElementById('resultadoLabel').innerHTML = '';
}

function validarPlaca() {
    const placaIngresada = obtenerPlacaIngresada();
    const errorEstructura = validarEstructura(placaIngresada);

    if (errorEstructura === null) {
        const provincia = obtenerProvincia(placaIngresada);
        const tipoVehiculo = obtenerTipoVehiculo(placaIngresada);
        const diaPicoPlaca = obtenerDiaPicoPlaca(placaIngresada);
        mostrarResultados(provincia, tipoVehiculo, diaPicoPlaca);
    } else {
        mostrarErrorEstructura(errorEstructura);
    }
}

function obtenerPlacaIngresada() {
    return document.getElementById('placaInput').value;
}
