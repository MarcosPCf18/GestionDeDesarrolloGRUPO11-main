
/* @vitest-environment jsdom */

import { beforeEach, describe, expect, it } from 'vitest';
import { configurarInicioSesion } from '../public/app.js';

describe('Inicio de sesion', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('muestra el mensaje cuando se hace clic en el boton', () => {
    document.body.innerHTML = `
      <button id="login">Iniciar sesión</button>
      <p id="saludo" hidden>¡Bienvenido!</p>
    `;

    configurarInicioSesion();

    document.getElementById('login').click();

    expect(document.getElementById('saludo').hidden).toBe(false);
  });

  it('no falla si faltan los elementos', () => {
    document.body.innerHTML = '';

    expect(() => configurarInicioSesion()).not.toThrow();
  });
});
