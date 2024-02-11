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
