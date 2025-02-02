document.addEventListener('DOMContentLoaded', () => {
    const themeButtons = document.querySelectorAll('[data-bs-theme-value]');
    const html = document.documentElement;

    // Actualizar el tema en función del valor seleccionado
    const setTheme = (theme) => {
        html.setAttribute('data-bs-theme', theme);
        localStorage.setItem('theme', theme);

        themeButtons.forEach(button => {            
            const isActive = button.getAttribute('data-bs-theme-value') === theme;
            button.classList.toggle('active', isActive);
            button.querySelectorAll('svg')[1].classList.toggle('d-none', !isActive);
            button.setAttribute('aria-pressed', isActive);
        });
    };

    // Obtener tema guardado en localStorage o usar 'auto' por defecto
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);

    // Añadir eventos a los botones
    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const theme = button.getAttribute('data-bs-theme-value');
            setTheme(theme);
        });
    });
});

