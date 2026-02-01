

// 1. Capturamos el div principal
const divPrincipal = document.getElementById('principal');

// 2. Creamos la barra de navegación
let navegacion = document.createElement("nav");

// 3. Le agregamos algunos estilos a la barra de navegación
navegacion.style.backgroundColor = "#2C0C64";
navegacion.style.width = "100%";
navegacion.style.height = "60px";
navegacion.style.display = "flex";
navegacion.style.alignItems = "center";
navegacion.style.paddingLeft = "20px";

// 4. Agregamos la barra de navegación al div principal
divPrincipal.appendChild(navegacion)

// 5. Agregamos un evento a la navegación
/* navegacion.addEventListener("click", () => {
    alert("Haz hecho click en la barra de navegación");
}); */

// 6. Creamos la lista de de navegación
let listaNavegacion = document.createElement("ul");

// 7. Creamos las 3 items list para la navegación
let listHome = document.createElement("li");
listHome.innerText = "Home";
listHome.style.display = "inline";
listHome.style.color = "white";
listHome.style.cursor = "pointer";
listHome.addEventListener("click", () => {
    window.location.href = "../index.html";
});

/* // 8. Creamos el ancla para el item Home
let anclaHome = document.createElement("a");
anclaHome.href = "../index.html"; */

// Agregamos el ancla al item de lista
/* listHome.appendChild(anclaHome); */

// 9. Agregamos el pimer item a la lista de navegación
listaNavegacion.appendChild(listHome);



let listProductos = document.createElement("li");
listProductos.innerText = "Productos";
listProductos.style.display = "inline";
listProductos.style.color = "white";
listProductos.style.marginLeft = "20px";
listProductos.style.cursor = "pointer";
listProductos.addEventListener("click", () => {
    window.location.href = "./productos.html";
});

listaNavegacion.appendChild(listProductos);

let listFormulario = document.createElement("li");
listFormulario.innerText = "Formulario";
listFormulario.style.display = "inline";
listFormulario.style.color = "white";
listFormulario.style.marginLeft = "20px";
listFormulario.style.cursor = "pointer";
listFormulario.addEventListener("click", () => {
    window.location.href = "./formulario.html";
});

listaNavegacion.appendChild(listFormulario);

//10. Subimos el ul a la barra de navegación
navegacion.appendChild(listaNavegacion);

// 11. Capturamos todos los htmls con la clase titulo
// es una colección de nodos (array) llamado HTMLCollection
let titulo = document.getElementsByClassName("titulo");

// 12. Imprimimos en consola la colección de nodos
console.log(titulo);

// 13. Modificamos los estilos del primer elemento de la colección
titulo[0].style.color = "#2C0C64";
titulo[0].style.fontFamily = "Arial, sans-serif";
titulo[0].style.fontSize = "36px";
titulo[0].style.textAlign = "center";
titulo[0].style.marginTop = "20px";

// 13. Damos estilos a la tabla de productos o al elemento [1]
titulo[1].style.width = "80%";
titulo[1].style.margin = "20px auto";
titulo[1].style.borderCollapse = "collapse";
titulo[1].style.fontFamily = "Arial, sans-serif";


// 14. Tomamos el array de productos del localStorage
let dataProductos = localStorage.getItem("productos");

console.log(dataProductos); // sin parsear los datos

let parrafo = document.getElementById("sin-parsear");

parrafo.innerText = dataProductos;

// 15. Parseamos los datos para convertirlos en un array de objetos literales
dataProductos = JSON.parse(dataProductos);

console.log(dataProductos); // ya parseado

// 16. Capturar el parrafo paseado
let parrafoParseado = document.getElementById("parseado");

parrafoParseado.innerText = dataProductos; 

// 17. Capturamos la tabla  (tbody)
let cuerpoTabla = document.getElementById("tabla-productos");

// 18. Capturamos el boton y le damos funcionalidad
let botonCargar = document.getElementById("cargarProductos");

// le agregamos estilos al boton
botonCargar.style.textAlign = "center";


botonCargar.addEventListener("click", (e) => {

    e.preventDefault();

    // limpiamos el contenido previo del cuerpo de la tabla
    cuerpoTabla.innerHTML = "";

    for (let i = 0; i < dataProductos.length; i++) {
        console.log(dataProductos[i]);

        // 19. Creamos una fila por cada producto
        let fila = document.createElement("tr");

        //20. Creamos las celdas por cada producto
        let celdaNombre = document.createElement("td");
        celdaNombre.innerText = dataProductos[i].nombre;
        celdaNombre.style.border = "1px solid #ddd";
        celdaNombre.style.padding = "8px";

        // 21. Agregamos la celda a la fila
        fila.appendChild(celdaNombre);

        // 22. Agregamos la fila al cuerpo de la tabla
        cuerpoTabla.appendChild(fila);

        let celdaPrecio = document.createElement("td");
        celdaPrecio.innerText = `$ ${dataProductos[i].precio.toFixed(2)}`;
        celdaPrecio.style.border = "1px solid #ddd";
        celdaPrecio.style.padding = "8px";

        fila.appendChild(celdaPrecio);

        cuerpoTabla.appendChild(fila);

        let celdaStock = document.createElement("td");
        celdaStock.innerText = dataProductos[i].stock;
        celdaStock.style.border = "1px solid #ddd";
        celdaStock.style.padding = "8px";

        fila.appendChild(celdaStock);

        cuerpoTabla.appendChild(fila);
        
    }

});










// A modo de Repaso: dataProductos[i].nombre
// array de productos
let frutas = ["manzana", "banana", "pera", "naranja"];

console.log(frutas[0]);


// objeto literal
let auto = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2020
};

console.log(auto.marca);
