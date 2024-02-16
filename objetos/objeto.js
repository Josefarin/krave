function probarArt() {
    let per = {
        Nombre: "Pedro",
        apellido: "Mora",
        edad: 24,
        estaVivo: true
    }

    console.log(per.Nombre);
    console.log(per.edad);

    if (per.estaVivo == false) {
        console.log("No está vivo");
    } else {
        console.log("Está vivo");
    }
}

   
function crearProducto() {
    
    let producto1 = {
        nombre: "Producto A",
        precio: 10.99,
        stock: 50
    };

    let producto2 = {
        nombre: "Producto B",
        precio: 19.99,
        stock: 30
    };

    console.log("Nombre del Producto 1:", producto1.nombre);

    console.log("Precio del Producto 2:", producto2.precio);

    if (producto1.stock > producto2.stock) {
        console.log("Producto 1 tiene mayor stock.");
    } else if (producto1.stock < producto2.stock) {
        console.log("Producto 2 tiene mayor stock.");
    } else {
        console.log("Ambos productos tienen el mismo stock.");
    }
}
function modificarArt(){
    let cuenta= {
        Numero:'4855552',
        saldo:'0.0',
 }
cuenta.saldo=100;
cuenta.saldo+=10;
    console.log(cuenta.saldo);
}
function creaClient(){
    let clie= {
        cedula:"1552478",
        nombre:"juan",
 }
let clie1={};
clie1.nombre="roman";
clie1.apellido="jerardo";
clie1.cedula="5226";
}
function prbarIncr(){
    let cta={Numero:"256798",saldo:244.2}
    incresaldo(cta,100);
    console.log(cta.saldo);
}
function proMay(){
    let per1={nombre:"manu",edad:45};
    let per2={nombre:"lau",edad:41};
    let mayor;
    mayor=deterMayu(per1,per2);
    if(mayor!=null){console.log("el mayor es "+mayor.nombre)}
}

function incresaldo(cuenta,monto){
cuenta.saldo+=monto;
}

function deterMayu(persoina1,persona2){
if(persoina1.edad>persona2.edad){return persoina1;}else if(persona2.edad>persoina1.edad){
return persona2;}else{return null}
}