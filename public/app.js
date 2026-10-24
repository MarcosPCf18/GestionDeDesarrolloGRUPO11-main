
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
export function pruebaCobertura() {
  const numero = 10;
  if (numero > 5) {
    return 'mayor';
  }
  return 'menor';
}