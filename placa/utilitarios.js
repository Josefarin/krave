const utilitarios = {
    recuperarTexto: function (idComponente) {
        let cmpTexto;
        let valor;
        cmpTexto = document.getElementById(idComponente);
        valor = cmpTexto.value;
        return valor;
    },
    recuperarEntero: function (idComponente) {
        let valor;
        let valorEntero;
        valor = this.recuperarTexto(idComponente);
        valorEntero = parseInt(valor);
        return valorEntero;
    },
    recuperarFlotante: function (idComponente) {
        let valor;
        let valorFloat;
        valor = this.recuperarTexto(idComponente);
        valorFloat = parseFloat(valor);
        return valorFloat;
    },
    cambiarTexto: function (idComponente, mensaje) {
        let componente;
        componente = document.getElementById(idComponente);
        componente.innerText = mensaje;
    },
    cambiarImagen: function (idComponente, imagen) {
        let componente;
        componente = document.getElementById(idComponente);
        componente.src = imagen;
    },
};

// Utilizar estas funciones:
// utilitarios.recuperarTexto('miInput');
// utilitarios.cambiarTexto('miDiv', 'Nuevo mensaje');
