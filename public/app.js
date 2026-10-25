
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
