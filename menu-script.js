// Script simplificado y robusto para el menú móvil
document.addEventListener('DOMContentLoaded', function() {
    // Obtener los elementos del menú
    var menuButton = document.getElementById('menuToggle');
    var mainMenu = document.getElementById('mainMenu');
    
    if (menuButton && mainMenu) {
        // Evento para mostrar/ocultar el menú móvil cuando se hace clic en el botón
        menuButton.addEventListener('click', function(e) {
            e.preventDefault(); // Prevenir comportamiento predeterminado
            mainMenu.classList.toggle('show');
            
            // Opcional: cambiar el ícono del botón
            this.innerHTML = mainMenu.classList.contains('show') ? '✕' : '☰';
        });
        
        // Evento para cerrar el menú al hacer clic en un enlace
        var links = mainMenu.getElementsByTagName('a');
        
        for (var i = 0; i < links.length; i++) {
            links[i].addEventListener('click', function() {
                // Cerrar el menú
                mainMenu.classList.remove('show');
                
                // Restaurar el ícono del botón
                if (menuButton) {
                    menuButton.innerHTML = '☰';
                }
                
                // Si el enlace es a un ancla en la misma página, manejar el desplazamiento suave
                var href = this.getAttribute('href');
                if (href.charAt(0) === '#') {
                    var targetElement = document.querySelector(href);
                    if (targetElement) {
                        // Opcional: desplazamiento suave a la sección
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        }
        
        // Cerrar el menú al hacer clic fuera de él
        document.addEventListener('click', function(e) {
            if (!menuButton.contains(e.target) && !mainMenu.contains(e.target)) {
                if (mainMenu.classList.contains('show')) {
                    mainMenu.classList.remove('show');
                    menuButton.innerHTML = '☰';
                }
            }
        });
    } else {
        console.error('Menú móvil: No se encontraron los elementos necesarios.');
    }
});
