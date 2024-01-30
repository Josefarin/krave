function calcularPromedioNotas() {
    let nota1 = recuperarFlotante("nota1");
    let nota2 = recuperarFlotante("nota2");
    let nota3 = recuperarFlotante("nota3");
    let promedio = calcularPromedio(nota1, nota2, nota3);
    cambiarTexto("resultado", "El promedio es: " + promedio.toFixed(2));
    mostrarImagenResultado(promedio);
}

function mostrarImagenResultado(promedio) {
    let imagenReprobado = document.getElementById("imagenReprobado");
    let imagenBuenTrabajo = document.getElementById("imagenBuenTrabajo");
    let imagenExcelente = document.getElementById("imagenExcelente");
    let imagenDatoIncorrecto = document.getElementById("imagenDatoIncorrecto");
    let divImagenResultado = document.getElementById("imagenResultado");

    imagenReprobado.style.display = "none";
    imagenBuenTrabajo.style.display = "none";
    imagenExcelente.style.display = "none";
    imagenDatoIncorrecto.style.display = "none";

    if (promedio < 5 && promedio > 0) {
        imagenReprobado.style.display = "block";
        divImagenResultado.innerText = "Reprobado.";
    } else if (5 <= promedio && promedio <= 8) {
        imagenBuenTrabajo.style.display = "block";
        divImagenResultado.innerText = "¡Buen trabajo!";
    } else if (promedio > 8 && promedio <= 10) {
        imagenExcelente.style.display = "block";
        divImagenResultado.innerText = "¡Excelente!";
    } else {
        imagenDatoIncorrecto.style.display = "block";
        divImagenResultado.innerText = "Dato incorrecto. Verifica las notas.";
    }
}