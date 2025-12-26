document.addEventListener('DOMContentLoaded', () => {
    const formContacto = document.getElementById('form-contacto');

    const regex = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, 
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 
        comentarios: /^.{10,300}$/ 
    };

    formContacto.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = document.getElementById('nombre-contacto');
        const email = document.getElementById('email-contacto');
        const comentarios = document.getElementById('comentarios');

        let errores = [];

       
        if (!regex.nombre.test(nombre.value)) {
            errores.push("El nombre debe ser solo letras (mínimo 3 caracteres).");
            marcarError(nombre);
        }

        
        if (!regex.email.test(email.value)) {
            errores.push("Por favor, ingresa un correo electrónico válido.");
            marcarError(email);
        }

       
        if (!regex.comentarios.test(comentarios.value)) {
            errores.push("El comentario debe tener entre 10 y 300 caracteres.");
            marcarError(comentarios);
        }

        if (errores.length === 0) {
            alert("✨ Mensaje enviado con éxito. ¡Nos comunicaremos pronto!");
            formContacto.reset();
            limpiarEstilos();
        } else {
            alert("Error en la transmisión:\n\n" + errores.join("\n"));
        }
    });

    function marcarError(input) {
        input.style.border = "2px solid #ff4d4d";
    }

    function limpiarEstilos() {
        const inputs = formContacto.querySelectorAll('input, textarea, select');
        inputs.forEach(i => i.style.border = "1px solid #6a5cff");
    }
});