document.addEventListener('DOMContentLoaded', () => {
    const themeButtons = document.querySelectorAll('[data-bs-theme-value]');
    const bigIcon = document.querySelector('#bigIcon');
    const html = document.documentElement;


    // Función para detectar el tema del sistema
    const getSystemTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    // Listener global para cambios en el tema del sistema
    const systemThemeListener = (e) => {
        const savedTheme = localStorage.getItem('theme') || 'auto';
        if (savedTheme === 'auto') {
            const appliedTheme = e.matches ? 'dark' : 'light';
            html.setAttribute('data-bs-theme', appliedTheme);
        }
    };

    // Registro del listener
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', systemThemeListener);


    // Actualizar el tema en función del valor seleccionado
    const setTheme = (theme) => {

        localStorage.setItem('theme', theme);
        let appliedTheme = theme;

        // Si el usuario selecciona "auto", aplica el tema del sistema
        if (theme === 'auto') {
            appliedTheme = getSystemTheme();
        }

        html.setAttribute('data-bs-theme', appliedTheme);


        themeButtons.forEach(button => {
            const isActive = button.getAttribute('data-bs-theme-value') === theme;
            button.classList.toggle('active', isActive);
            button.querySelectorAll('svg')[1].classList.toggle('d-none', !isActive);
            button.setAttribute('aria-pressed', isActive);

            if (isActive) {
                const activeSvg = document.getElementsByClassName('active')[1].childNodes[1];
                const selectedIconHref = activeSvg.querySelector('use').getAttribute('href');
                bigIcon.querySelector('use').setAttribute('href', selectedIconHref);                
            }
        });
    };

    // Obtener tema guardado en localStorage o usar 'auto' por defecto
    const savedTheme = localStorage.getItem('theme') || 'auto';    
    setTheme(savedTheme);


    // Añadir eventos a los botones
    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const theme = button.getAttribute('data-bs-theme-value');
            setTheme(theme);
        });
    });
});

