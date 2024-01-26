jugar = function () {
    let alea = Math.random();
    let resultadoDado = lanzarDado(); 

    cambiarTexto("lblNumero", resultadoDado);

    if (resultadoDado > 3) {
        console.log("es mayor a 3");
        console.log("ganaste");
    } else {
        console.log("es menor a 3");
        console.log("perdiste");
    }
}
lanzarDado=function(){
    let alea; let numMu; let numE; let vale;
    alea=Math.random();
    numMu=alea*6;
    numE=parseInt(numMu);
    vale=numE+1;
    return vale;
}

