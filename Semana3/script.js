/**
 * Lógica del Sensor de Color RGB
 * Este script mapea las coordenadas del mouse (X, Y) a valores de color (0-255).
 */

const inicializarSensor = () => {
    const cuerpo = document.body;
    const pantallaTexto = document.getElementById('salida-rgb');

    // Escuchador de evento de movimiento
    document.addEventListener('mousemove', (e) => {
        // Captura de datos (Inputs)
        const x = e.clientX;
        const y = e.clientY;
        const ancho = window.innerWidth;
        const alto = window.innerHeight;

        // Procesamiento (Mapeo de señales)
        // Rojo: depende del eje X
        const r = Math.round((x / ancho) * 255);
        // Verde: depende del eje Y
        const g = Math.round((y / alto) * 255);
        // Azul: una combinación para añadir variedad
        const b = Math.round(((x + y) / (ancho + alto)) * 255);

        // Salida (Output)
        const colorStr = `rgb(${r}, ${g}, ${b})`;
        
        cuerpo.style.backgroundColor = colorStr;
        pantallaTexto.textContent = `Lectura: RGB(${r}, ${g}, ${b})`;
    });
};

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', inicializarSensor);