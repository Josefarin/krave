function validarPassword(password) {
    let errores = "";
    if (password.length < 8 || password.length > 16) {
        errores += "La contraseña debe tener entre 8 y 16 caracteres. ";
    }
    if (!/[A-Z]/.test(password)) {
        errores += "La contraseña debe contener al menos una letra mayúscula. ";
    }
    if (!/\d/.test(password)) {
        errores += "La contraseña debe contener al menos un dígito. ";
    }
    if (!/[-*_]/.test(password)) {
        errores += "La contraseña debe contener al menos un carácter especial (-, *, _). ";
    }
    return errores;
}

function ejecutarValidacion() {
    let password = document.getElementById("txtPassword").value;
    let resultadoDiv = document.getElementById("resultado");
    let errores = validarPassword(password);
    if (errores === "") {
        resultadoDiv.innerText = "Contraseña correcta.";
    } else {
        resultadoDiv.innerText = "Errores de validación: " + errores;
    }
}
