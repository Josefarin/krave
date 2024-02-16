let client = [
    { cedula: "45521233", nombre: "rico", edad: 20 },
    { cedula: "44258233", nombre: "sac", edad: 25 },
    { cedula: "52221233", nombre: "kar", edad: 52 },
];

function guarCam() {
    let valorCedula = recuperarTexto("txtape");
    let valornombre = recuperarTexto("txtnom");
    let valoredad = recuperarTexto("txtneda");
    let datosCliente = {
        cedula: valorCedula,
        nombre: valornombre,
        edad: valoredad,
    };
    ModificaeCliente(datosCliente);
    mostrCl();
}

function crearCli(nuevoCliente) {
    let resul = buscarCli(nuevoCliente.cedula);
    if (resul == null) {
        client.push(nuevoCliente);
    } else {
        alert("Ya existe " + nuevoCliente.cedula);
    }
}

function ModificaeCliente(clienteModificado) {
    let clienteEncontrado = buscarCli(clienteModificado.cedula);
    if (clienteEncontrado != null) {
        clienteEncontrado.nombre = clienteModificado.nombre;
        clienteEncontrado.edad = clienteModificado.edad;
    }
}

function buscar() {
    let valorCedula = recuperarTexto("txtceduladatos");
    let clienteEncontrado = buscarCli(valorCedula);
    if (clienteEncontrado == null) {
        alert("No existe");
    } else {
        mostrarTextoCaja("txtape", clienteEncontrado.cedula);
        mostrarTextoCaja("txtnom", clienteEncontrado.nombre);
        mostrarTextoCaja("txtneda", clienteEncontrado.edad);
    }
}

function creacli() {
    let valorCedula = recuperarTexto("txtape");
    let valornombre = recuperarTexto("txtnom");
    let valoredad = recuperarTexto("txtneda");
    let nuevoCliente = {
        cedula: valorCedula,
        nombre: valornombre,
        edad: valoredad,
    };
    crearCli(nuevoCliente);
}

function buscarCli(cedula) {
    for (let i = 0; i < client.length; i++) {
        if (client[i].cedula == cedula) {
            return client[i];
        }
    }
    return null;
}

function mostrCl() {
    let cmpt = document.getElementById("tablacli");
    let cont =
        "<table><tr>" +
        "<th>Cedula</th>" +
        "<th>Nombre</th>" +
        "<th>Edad</th>" +
        "</tr>";
    for (let i = 0; i < client.length; i++) {
        cont +=
            "<tr><td>" +
            client[i].cedula +
            "</td>" +
            "<td>" +
            client[i].nombre +
            "</td>" +
            "<td>" +
            client[i].edad +
            "</td>" +
            "</tr>";
    }
    cont += "</table>";
    cmpt.innerHTML = cont;
}
