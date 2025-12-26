
const titleContent = document.title;


console.log(titleContent);


document.addEventListener('DOMContentLoaded', function () {

    const listas = document.querySelectorAll('dl');


    const nombresCompletos = [];


    const TodosLosNombres = [];


    listas.forEach((lista, indice) => {

        const definiciones = lista.querySelectorAll('dd');


        const primerNombre = definiciones[0].textContent.trim();
        const segundoNombre = definiciones[1].textContent.trim();
        const primerApellido = definiciones[2].textContent.trim();
        const segundoApellido = definiciones[3].textContent.trim();

        let primerNombreTrim = primerNombre !== '' ? primerNombre + " " : "";
        let segundoNombreTrim = segundoNombre !== '' ? segundoNombre + " " : "";
        let primerApellidoTrim = primerApellido !== '' ? primerApellido + " " : "";
        let segundoApellidoTrim = segundoApellido !== '' ? segundoApellido : "";

        const nombreCompleto = (primerNombreTrim + segundoNombreTrim + primerApellidoTrim + segundoApellidoTrim).trim();


        console.log(nombreCompleto)
        // integrantes.push({
        //     indice: indice,
        //     lista: lista,
        //     definiciones: definiciones,
        //     nombres: [primerNombre, segundoNombre].filter(n => n !== ''),
        //     apellidos: [primerApellido, segundoApellido].filter(a => a !== '')
        // });
        TodosLosNombres.push(primerNombreTrim);
        TodosLosNombres.push(segundoNombreTrim);
    });


    console.log(
        '-----\n' +
        nombresCompletos.join('\n') +
        '\n-----'
    );


    compararNombres(TodosLosNombres);


    const desea_comparar_apellidos = confirm('¿Desea comparar los apellidos?');
    if (desea_comparar_apellidos) {
        compararApellidos(TodosLosNombres);
    }
});


function compararNombres() {

    // const todosLosNombres = [];
    //TodosLosNombres.forEach(integrante => {
        //integrante.nombres.forEach(nombre => {
            //todosLosNombres.push({
               // nombre: nombre.toLowerCase(),
                //nombreOriginal: nombre,
                //indice: integrante.indice,
               // tipo: 'nombre'
            //});
       // });
    //});


    const coincidenciasEncontradas = [];






    
    // todosLosNombres.forEach((item, i) => {
    //     for (let j = i + 1; j < todosLosNombres.length; j++) {
    //         if (item.nombre === todosLosNombres[j].nombre) {
    //             coincidenciasEncontradas.push([item, todosLosNombres[j]]);
    //         }
    //     }
    // });

    if (coincidenciasEncontradas.length > 0) {
        console.log('✓ Se encontraron coincidencias en los nombres.');


        const color = '#c4203f';


        coincidenciasEncontradas.forEach(coincidencia => {
            coincidencia.forEach(item => {

                const integrante = TodosLosNombres[item.indice];
                const posicionNombre = integrante.nombres.indexOf(item.nombreOriginal);


                const indiceDd = posicionNombre;
                const dd = integrante.definiciones[indiceDd];

                if (dd) {
                    dd.style.color = color;
                    dd.style.fontWeight = 'bold';
                }
            });
        });
    } else {
        console.log('✗ No se encontraron coincidencias en los nombres.');
    }
}

function compararApellidos(integrantes) {

    const todosLosApellidos = [];

    integrantes.forEach(integrante => {
        integrante.apellidos.forEach(apellido => {
            todosLosApellidos.push({
                apellido: apellido.toLowerCase(),
                apellidoOriginal: apellido,
                indice: integrante.indice,
                tipo: 'apellido'
            });
        });
    });


    const coincidenciasEncontradas = [];
    todosLosApellidos.forEach((item, i) => {
        for (let j = i + 1; j < todosLosApellidos.length; j++) {
            if (item.apellido === todosLosApellidos[j].apellido) {
                coincidenciasEncontradas.push([item, todosLosApellidos[j]]);
            }
        }
    });

    if (coincidenciasEncontradas.length > 0) {
        console.log('✓ Se encontraron coincidencias en los apellidos.');


        const color = '#c4203f';


        coincidenciasEncontradas.forEach(coincidencia => {
            coincidencia.forEach(item => {

                const integrante = integrantes[item.indice];
                const posicionApellido = integrante.apellidos.indexOf(item.apellidoOriginal);


                const indiceDd = 2 + posicionApellido;
                const dd = integrante.definiciones[indiceDd];

                if (dd) {
                    dd.style.color = color;
                    dd.style.fontWeight = 'bold';
                }
            });
        });
    } else {
        console.log('✗ No se encontraron coincidencias en los apellidos.');
    }
}
