
document.addEventListener('DOMContentLoaded', () => {
    console.log('Contenido del DOM cargado');
    
    
    const textarea = document.getElementById('origen');
    const divDestino = document.getElementById('destino');
    const btnReemplazar = document.getElementById('btn-reemplazar');
    const botonesAgregar = document.getElementsByClassName('btn-agregar');
    const btnVaciar = document.querySelector('.btn-vaciar');
    const btnMayusculas = document.querySelector('.btn-convertir-a-mayusculas');
    const btnMinusculas = document.querySelector('button[type="button"]');
    
    
    textarea.value = '<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>';
    
    
    textarea.addEventListener('input', () => {
        
        const inputs = document.getElementsByTagName('input');
        
        // Habilitamos cada input
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].disabled = false;
        }
        
        
        btnMinusculas.disabled = false;
    });
    
    
    btnReemplazar.addEventListener('click', () => {
        divDestino.innerHTML = textarea.value;
    });
    
    
    botonesAgregar[0].addEventListener('click', () => {
        divDestino.innerHTML += textarea.value;
    });
    
    
    botonesAgregar[1].addEventListener('click', () => {
        for (let i = 0; i < 5; i++) {
            divDestino.innerHTML += textarea.value;
        }
    });
    
    
    botonesAgregar[2].addEventListener('click', () => {
        for (let i = 0; i < 10; i++) {
            divDestino.innerHTML += textarea.value;
        }
    });
    
    
    botonesAgregar[3].addEventListener('click', () => {
        const veces = prompt('¿Cuántas veces quieres agregar el contenido?');
        const numero = parseInt(veces);
        
        if (!isNaN(numero) && numero > 0) {
            for (let i = 0; i < numero; i++) {
                divDestino.innerHTML += textarea.value;
            }
        }
    });
    
    
    btnVaciar.addEventListener('click', () => {
        divDestino.innerHTML = '';
    });
    
    
    btnMayusculas.addEventListener('click', () => {
        divDestino.innerHTML = divDestino.innerHTML.toUpperCase();
    });
    
    
    btnMinusculas.addEventListener('click', () => {
        divDestino.innerHTML = divDestino.innerHTML.toLowerCase();
    });
    
    
    const listaItems = document.getElementsByTagName('li');
    
    for (let i = 0; i < listaItems.length; i++) {
        listaItems[i].innerHTML = '[Ok] ' + listaItems[i].innerHTML;
    }
});