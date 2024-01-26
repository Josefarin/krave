jugar = function () {
    let alea = Math.random();
    let resultadoDado = lanzarDado(); 

    cambiarTexto("lblNumero", resultadoDado);

    let mensaje;
    if (resultadoDado > 3) {
        mensaje = "es mayor a 3. Ganaste!";
    } else {
        mensaje = "es menor a 3. Perdiste.";
    }

    cambiarTexto("mensajeResultado", mensaje);
}
lanzarDado=function(){
    let alea; let numMu; let numE; let vale;
    alea=Math.random();
    numMu=alea*6;
    numE=parseInt(numMu);
    vale=numE+1;
    return vale;
}

