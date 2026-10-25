
export function configurarInicioSesion() {
  const boton = document.getElementById('login');
  const mensaje = document.getElementById('saludo');

  if (boton && mensaje) {
    boton.addEventListener('click', function () {
      mensaje.hidden = false;
    });
  }
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', configurarInicioSesion);
}
export function pruebaCobertura(valor) {
  const variableSinUso = 'code smell';
  let resultado = '';

  if (valor === 1) {
    resultado = 'uno';
  } else if (valor === 2) {
    resultado = 'dos';
  } else if (valor === 3) {
    resultado = 'tres';
  } else if (valor === 4) {
    resultado = 'cuatro';
  } else if (valor === 5) {
    resultado = 'cinco';
  } else if (valor === 6) {
    resultado = 'seis';
  } else if (valor === 7) {
    resultado = 'siete';
  } else if (valor === 8) {
    resultado = 'ocho';
  } else {
    resultado = 'otro';
  }

  return resultado;
}