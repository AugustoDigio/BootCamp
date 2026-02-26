document.addEventListener('DOMContentLoaded', () => {
    console.log("¡Página lista!");
    
    // Ejercicio 1.2
    const inputEj1_2 = document.getElementById('input-ej1-2'); 
    inputEj1_2.addEventListener('input', (event) => {
        console.log(event.target.value);
    });
    
    // ========================================
    // EJERCICIO 2.1
    // ========================================
    const btnHabilitar = document.getElementById('btn-habilitar');
    const inputsDeshabilitables = document.querySelectorAll('.input-deshabilitable');
    
    btnHabilitar.addEventListener('click', () => {
        inputsDeshabilitables.forEach((input) => {
            input.disabled = false;
        });
    }); // ← CIERRA el addEventListener del botón
    
    // ========================================
    // EJERCICIO 2.2
    // ========================================
    // ✅ AHORA SÍ está en el lugar correcto
    const textareaEj2_2 = document.getElementById('textarea-ej2-2');
    textareaEj2_2.value = 'Contenido predefinido';
    
    //EJERCICIO 3.1
    const origenEj3_1 = document.getElementById('origen-ej3-1');
    const resultadoEj3_1 = document.getElementById('resultado-ej3-1'); 
    const btnCopiar = document.getElementById('btn-copiar');

    btnCopiar.addEventListener('click', () => {
        resultadoEj3_1.innerHTML = origenEj3_1.value;
    });


    //EJERCICIO 3.2
    const origenEj3_2 = document.getElementById('origen-ej3-2');
    const resultadoEj3_2 = document.getElementById('resultado-ej3-2'); 
    const btnAgregar = document.getElementById('btn-agregar');

    btnAgregar.addEventListener('click', () => {
        resultadoEj3_2.innerHTML += '<br>' + origenEj3_2.value;
    });

    const origenEj3_3 = document.getElementById('origen-ej3-3');
    const resultadoEj3_3 = document.getElementById('resultado-ej3-3'); 
    const btnAgregarEj3_3 = document.getElementById('btn-agregar-3');

    btnAgregarEj3_3.addEventListener('click', () => {
        for (let i = 0; i < 3; i++) {
            resultadoEj3_3.innerHTML += '<br>' + origenEj3_3.value;
        }
    });

    //Ejercicio 3.4
    const origenEj3_4 = document.getElementById('origen-ej3-4');
    const resultadoEj3_4 = document.getElementById('resultado-ej3-4'); 
    const btnAgregarEj3_4 = document.getElementById('btn-agregar-n');

    btnAgregarEj3_4.addEventListener('click', () => {
        const veces = parseInt(prompt('¿Cuántas veces desea agregar el texto?'), 10);
        for (let i = 0; i < veces; i++) {
            resultadoEj3_4.innerHTML += '<br>' + origenEj3_4.value;
        }
    });

    //EJERCICIO 4
    const origenEj4 = document.getElementById('origen-ej4');
    const resultadoEj4 = document.getElementById('resultado-ej4'); 
    const btnCopiarEj4 = document.getElementById('btn-copiar-ej4');
    const btnVaciarEj4 = document.getElementById('btn-vaciar');
    const btnMayusculasEj4 = document.getElementById('btn-mayusculas');
    const btnMinusculasEj4 = document.getElementById('btn-minusculas');

    btnCopiarEj4.addEventListener('click', () => {
        resultadoEj4.innerHTML = origenEj4.value;
    });

    btnVaciarEj4.addEventListener('click', () => {
        resultadoEj4.innerHTML = "";
    });

    btnMayusculasEj4.addEventListener('click', () => {
        resultadoEj4.innerHTML = resultadoEj4.innerHTML.toUpperCase();
    });

    btnMinusculasEj4.addEventListener('click', () => {
        resultadoEj4.innerHTML = resultadoEj4.innerHTML.toLowerCase();
    }); 


}); 
