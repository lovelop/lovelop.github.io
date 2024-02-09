function moverBoton() {
    var boton = document.querySelector('.boton');
    
    // Genera posiciones aleatorias dentro de la ventana
    var nuevaPosX = Math.floor(Math.random() * window.innerWidth);
    var nuevaPosY = Math.floor(Math.random() * window.innerHeight);

    // Aplica la nueva posición al botón
    boton.style.left = nuevaPosX + 'px';
    boton.style.top = nuevaPosY + 'px';
}
function redirigir() {
    // Cambiar la ubicación del navegador al otro HTML
    window.location.href = 'j.html';
  }