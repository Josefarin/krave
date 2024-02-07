let palabraSecreta;
let intentos = 0;
let coincidencias = 0;
let errores = 0;

function esMayuscula(caracter) {
  const codigoAscii = caracter.charCodeAt(0);
  return codigoAscii >= 65 && codigoAscii <= 90;
}

function guardarPalabra() {
  const palabraIngresada = document.getElementById('txtSecreta').value;
  if (palabraIngresada.length === 5 && /^[A-Z]+$/.test(palabraIngresada)) {
    palabraSecreta = palabraIngresada;
  } else {
    alert('Debe ingresar una palabra de cinco letras mayúsculas.');
  }
}

function mostrarLetra(letra, posicion) {
  const componente = document.getElementById(`div${posicion}`);
  componente.textContent = letra;
}

function validar(letra) {
  let letrasEncontradas = 0;
  for (let i = 0; i < palabraSecreta.length; i++) {
    if (palabraSecreta[i] === letra) {
      mostrarLetra(letra, i);
      letrasEncontradas++;
    }
  }
  coincidencias += letrasEncontradas;

  if (coincidencias === 5) {
    alert('¡Has ganado!');
    mostrarImagen('ganador.gif');
  } else if (letrasEncontradas === 0) {
    alert('La letra no es parte de la palabra.');
    errores++;
    mostrarAhorcado();
  }
}

function ingresarLetras() {
  const letraIngresada = document.getElementById('txtLetra').value;

  if (esMayuscula(letraIngresada)) {
    validar(letraIngresada);
  } else {
    alert('Solo aceptamos mayúsculas.');
  }

  intentos++;

  if (intentos === 10 && coincidencias < 5) {
    alert('Game over.');
    mostrarImagen('gameOver.gif');
  }
}

function mostrarAhorcado() {
    if (errores === 1) {
      mostrarImagen('Ahorcado_01.png');
    } else if (errores === 2) {
      mostrarImagen('Ahorcado_02.png');
    } else if (errores === 3) {
        mostrarImagen('Ahorcado_03.png');
      }else if (errores === 4) {
        mostrarImagen('Ahorcado_04.png');
      }else if (errores === 5) {
        mostrarImagen('Ahorcado_05.png');
      }else if (errores === 6) {
        mostrarImagen('Ahorcado_06.png');
      }else if (errores === 7) {
        mostrarImagen('Ahorcado_07.png');
      }else if (errores === 8) {
        mostrarImagen('Ahorcado_08.png');
      }else if (errores === 9) {
        mostrarImagen('Ahorcado_09.png');
      }
  }

    function mostrarImagen(nombreImagen) {
        const imagenAhorcado = document.getElementById('ahorcadoImagen');
        imagenAhorcado.src = nombreImagen;
      }
    