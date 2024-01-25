salud=function(){
    let nombre=recuperarTexto("txnom");
    let apellido=recuperarTexto("txape");
}
recuperarTexto=function(idComponente){
let comp; let valor;
comp=document.getElementById(idComponente);
valorIgresado=comp.value;
return valorIgresado;
}