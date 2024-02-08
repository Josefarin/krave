function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
}

function generarAleatorios() {
    let aleatorios = [];
    let cantidad = recuperarInt("txtCantidad");
    if (cantidad >= 5 && cantidad <= 20) {
        for (let i = 0; i < cantidad; i++) {
            let numeroAleatorio = generarNumeroAleatorio();
            aleatorios.push(numeroAleatorio);
        }
        mostrarResultados(aleatorios);
    } else {
        alert("Por favor, ingrese un número entre 5 y 20.");
    }
}

function mostrarResultados(arregloNumeros) {
    let resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = "";
    let tabla = document.createElement("table");
    let encabezado = tabla.createTHead();
    let filaEncabezado = encabezado.insertRow();
    for (let i = 0; i < arregloNumeros.length; i++) {
        let celda = filaEncabezado.insertCell();
        celda.appendChild(crearElemento("th", "Número " + (i + 1)));
    }
   let cuerpoTabla = tabla.createTBody();
    let filaDatos = cuerpoTabla.insertRow();

    for (let i = 0; i < arregloNumeros.length; i++) {
        let celda = filaDatos.insertCell();
        celda.appendChild(crearElemento("td", arregloNumeros[i]));
    }
   resultadosDiv.appendChild(tabla);
}

function crearElemento(tag, texto) {
    let elemento = document.createElement(tag);
    elemento.innerText = texto;
    return elemento;
}
