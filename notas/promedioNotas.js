function calcularPromedioNotas() {
    
    let nota1 = recuperarFlotante("nota1");
    let nota2 = recuperarFlotante("nota2");
    let nota3 = recuperarFlotante("nota3");
    let promedio = calcularPromedio(nota1, nota2, nota3);
    cambiarTexto("resultado", "El promedio es: " + promedio.toFixed(2));
    mostrarImagenResultado(promedio);
}

function mostrarImagenResultado(promedio) {
    let imagenExito = document.getElementById("imagenExito");
    let imagenFracaso = document.getElementById("imagenFracaso");
    let divImagenResultado = document.getElementById("imagenResultado");
    imagenExito.style.display = "none";
    imagenFracaso.style.display = "none";
    if (promedio > 7) {
        imagenExito.style.display = "block";
        divImagenResultado.innerText = "¡Felicidades! Has tenido éxito.";
    } else {
        imagenFracaso.style.display = "block";
        divImagenResultado.innerText = "Lo siento, no has alcanzado el promedio deseado.";
    }
}