// Interactividad moderna
document.addEventListener('DOMContentLoaded', () => {

    // Resaltar menú al navegar
    const enlaces = document.querySelectorAll('.item-menu');
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', () => {
            enlaces.forEach(e => e.style.opacity = '0.8');
            enlace.style.opacity = '1';
        });
    });

    // Efecto visual al enfocar campos del formulario
    const campos = document.querySelectorAll('input, select, textarea');
    campos.forEach(campo => {
        campo.addEventListener('focus', () => {
            campo.style.borderColor = '#6CD1F0';
            campo.style.boxShadow = '0 0 0 3px rgba(108, 209, 240, 0.2)';
        });
        campo.addEventListener('blur', () => {
            campo.style.borderColor = '#ddd';
            campo.style.boxShadow = 'none';
        });
    });

    // Galería: desplazamiento suave con rueda del ratón
    const galeria = document.querySelector('.galeria-desplazable');
    galeria.addEventListener('wheel', (e) => {
        if (e.deltaY !== 0) {
            e.preventDefault();
            galeria.scrollLeft += e.deltaY * 1.5;
        }
    });

    console.log("✅ Diseño actualizado: Formulario compacto, moderno, con imágenes laterales");
});
