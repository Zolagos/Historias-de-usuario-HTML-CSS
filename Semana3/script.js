// 1. Mostrar un mensaje de bienvenida al cargar la página
// Usamos el evento 'DOMContentLoaded' para asegurar que el HTML cargó primero
document.addEventListener('DOMContentLoaded', () => {
    // Creamos un nuevo elemento <div> para el mensaje
    const banner = document.createElement('div');
    banner.textContent = '👋 ¡Hola! Bienvenido a mi portafolio interactivo.';
    banner.style.backgroundColor = '#f1c40f'; 
    banner.style.color = '#333';
    banner.style.textAlign = 'center';
    banner.style.padding = '10px';
    banner.style.fontWeight = 'bold';
    
    // Insertamos el banner justo al principio del body (antes del header)
    document.body.insertBefore(banner, document.body.firstChild);
});


// 2. Cambiar el texto de un párrafo al hacer clic
const btnCambiar = document.getElementById('btn-cambiar-texto');
const parrafoInt = document.getElementById('parrafo-interactivo');

// Verificamos que los elementos existan en la página actual
if (btnCambiar && parrafoInt) {
    btnCambiar.addEventListener('click', () => {
        // Cambiamos el contenido del texto y su color
        parrafoInt.textContent = '✨ ¡Magia! El texto fue modificado gracias a JavaScript.';
        parrafoInt.style.color = '#27ae60';
        parrafoInt.style.fontWeight = 'bold';
    });
}


// 3. Efecto dinámico: Mostrar/Ocultar un contenido secreto (Toggle)
const btnToggle = document.getElementById('btn-toggle');
const infoOculta = document.getElementById('info-oculta');

if (btnToggle && infoOculta) {
    btnToggle.addEventListener('click', () => {
        // Comprobamos el estado actual del CSS 'display'
        if (infoOculta.style.display === 'none') {
            infoOculta.style.display = 'block'; // Lo mostramos
            btnToggle.textContent = 'Ocultar Secreto'; // Cambiamos el texto del botón
        } else {
            infoOculta.style.display = 'none';  // Lo ocultamos
            btnToggle.textContent = 'Mostrar/Ocultar Secreto';
        }
    });
}