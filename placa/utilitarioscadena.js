function esMayuscula(caracter) {
    const codigoAscii = caracter.charCodeAt(0);
    return codigoAscii >= 65 && codigoAscii <= 90;
}

function esDigito(caracter) {
    const codigoAscii = caracter.charCodeAt(0);
    return codigoAscii >= 48 && codigoAscii <= 57;
}

function esGuion(caracter) {
    return caracter === '-';
}
const utilitariosCadena = {
    esMayuscula: function (caracter) {
        const codigoAscii = caracter.charCodeAt(0);
        return codigoAscii >= 65 && codigoAscii <= 90;
    },
    esDigito: function (caracter) {
        const codigoAscii = caracter.charCodeAt(0);
        return codigoAscii >= 48 && codigoAscii <= 57;
    },
    esGuion: function (caracter) {
        return caracter === '-';
    },
};