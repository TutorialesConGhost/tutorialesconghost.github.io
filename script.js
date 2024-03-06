document.addEventListener('DOMContentLoaded', function () {
    emailjs.init("BA2Yxk8p0JQhhfe9-"); // Reemplaza con tu User ID de Email.js

    const emailForm = document.getElementById('email-form');

    emailForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Envia el correo utilizando Email.js
        emailjs.send("service_xi32gtu", "template_y63csoi", {
            from_name: name,
            from_email: email,
            message: message,
        }).then(
            function (response) {
                alert('¡Correo enviado con éxito!');
                // Puedes redirigir o hacer otras acciones después de enviar el correo.
            },
            function (error) {
                alert('Error al enviar el correo. Por favor, inténtalo de nuevo.');
                console.error('Error:', error);
            }
        );

        // Limpiar el formulario después de enviar el correo
        emailForm.reset();
    });
});
