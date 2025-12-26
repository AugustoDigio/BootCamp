document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.alta-form');

    const expressions = {
        nombre: /^[a-zA-Z0-9\s]{3,30}$/,
        precio: /^\d+(\.\d{1,2})?$/,    
        stock: /^\d+$/,                 
        marca: /^[a-zA-Z\s]{2,20}$/,     
        url: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/ 
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = document.getElementById('nombre');
        const precio = document.getElementById('precio');
        const stock = document.getElementById('stock');
        const marca = document.getElementById('marca');
        const foto = document.getElementById('foto');
        const edadDesde = document.getElementById('edad-desde');
        const edadDesdeValue = parseInt(edadDesde.value);
        const edadHasta = document.getElementById('edad-hasta');

        let errors = [];

        
        if (!expressions.nombre.test(nombre.value)) {
            errors.push("El nombre debe tener entre 3 y 30 caracteres alfanuméricos.");
            highlightError(nombre);
        }

        
        if (!expressions.precio.test(precio.value) || parseFloat(precio.value) <= 0) {
            errors.push("Ingrese un precio válido mayor a 0.");
            highlightError(precio);
        }

       
        if (!expressions.stock.test(stock.value)) {
            errors.push("El stock debe ser un número entero.");
            highlightError(stock);
        }

        
        if (!expressions.marca.test(marca.value)) {
            errors.push("La marca solo debe contener letras.");
            highlightError(marca);
        }

        
        if (isNaN(edadDesdeValue) || edadDesdeValue < 3) {
    errors.push("🚀 Edad no permitida: El juguete debe ser para mayores de 3 años.");
    highlightError(edadDesde);
}


const edadHastaValue = parseInt(document.getElementById('edad-hasta').value);
if (edadDesdeValue > edadHastaValue) {
    errors.push("Error de trayectoria: La 'Edad desde' no puede ser mayor a la 'Edad hasta'.");
    highlightError(edadDesde);
}
        

        if (!expressions.url.test(foto.value)) {
            errors.push("Ingrese una URL de imagen válida.");
            highlightError(foto);
        }

        
        if (errors.length === 0) {
            alert("🚀 ¡Producto validado y enviado a la base de datos cósmica!");
            form.reset(); 
            removeHighlights();
        } else {
            alert("Atención tripulante:\n\n" + errors.join("\n"));
        }
    });

    
    function highlightError(input) {
        input.style.borderColor = "#ff4d4d";
        input.style.boxShadow = "0 0 10px rgba(255, 77, 77, 0.5)";
    }

    function removeHighlights() {
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.style.borderColor = "#6a5cff";
            input.style.boxShadow = "none";
        });
    }
});