document.addEventListener('DOMContentLoaded', () => {
  console.log('index.js cargado'); // primer chequeo visible en la consola

  const form = document.getElementById('registroForm');
  if (!form) {
    console.error('No se encontró el formulario #registroForm');
    return;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // MUY importante: evita el comportamiento por defecto (recarga)
    // opcional: validar campos aquí antes de redirigir

    // NO pases contraseñas por query string. Solo redirige:
    window.location.href = 'pagina.html'; // cambia por tu URL real
  });
});
