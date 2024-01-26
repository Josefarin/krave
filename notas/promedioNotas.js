// promedioNotas.js

// Function to calculate and display the average of three notes
function calcularPromedioNotas() {
    // Retrieve values from textboxes
    let nota1 = recuperarFlotante("nota1");
    let nota2 = recuperarFlotante("nota2");
    let nota3 = recuperarFlotante("nota3");

    // Calculate average using the serviciosPromedioNotas.js function
    let promedio = calcularPromedio(nota1, nota2, nota3);

    // Display the result with two decimal places
    cambiarTexto("resultado", "El promedio es: " + promedio.toFixed(2));
}
