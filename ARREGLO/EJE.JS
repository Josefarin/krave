let notas = [];

function agregarEle() {
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}
function recorrer() {
    let notR;
    for (let indice = 0; indice < notas.length; indice++) {
        notR = notas[indice];
        console.log(notR);
    }
}
function probarAgre() {
    let notRecu;
    notRecu = recuperarInt("txtnota1");
    agregarNota(notRecu);
}
function agregarNota(nota) {
    notas.push(nota);
}
function calcularPromedio() {
    let sumaNotas = 0;
    for (let indice = 0; indice < notas.length; indice++) {
        sumaNotas += notas[indice];
    }
    let promedio = sumaNotas / notas.length;
    return promedio;
}
function ejecutarPromedio() {
    let promedioCalculado = calcularPromedio();
    mostrarTexto('resultadoPromedio', 'Promedio: ' + promedioCalculado.toFixed(2));
}