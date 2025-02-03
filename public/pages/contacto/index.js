$(document).ready(function () {
    $("#contact-form").on("submit", function (event) {
        event.preventDefault();

        let isValid = true;

        // Resetear mensajes de error previos
        $(".is-invalid").removeClass("is-invalid");
        $(".invalid-feedback").remove();

        // Validar Nombre
        let name = $("#name").val().trim();
        if (name === "") {
            showError("#name", "El nombre es obligatorio.");
            isValid = false;
        }

        // Validar Email
        let email = $("#email").val().trim();
        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            showError("#email", "Introduce un email válido.");
            isValid = false;
        }

        // Validar Mensaje
        let message = $("#message").val().trim();
        if (message === "") {
            showError("#message", "El mensaje no puede estar vacío.");
            isValid = false;
        }

        // Si todo es válido
        if (isValid) {
            $("#form-message").html('<div class="success-message alert alert-success">Mensaje enviado correctamente.</div>');

            // Mostrar mensaje y ocultarlo después de 3 segundos
            $(".success-message").hide().fadeIn(500).delay(3000).fadeOut(1000);

            // Reiniciar formulario después de 3 segundos
            setTimeout(function () {
                $("#contact-form")[0].reset();
            }, 3000);
        }
    });

    // Función para mostrar errores
    function showError(input, message) {
        $(input).addClass("is-invalid");
        if ($(input).next(".invalid-feedback").length === 0) {
            $(input).after(`<div class="invalid-feedback">${message}</div>`);
        }
    }
});
