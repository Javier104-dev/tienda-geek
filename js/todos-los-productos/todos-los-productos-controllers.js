import { productosServices } from "../productos.service.js";


const crearDiv = (nombre, precio, imagen, id) =>{
    const div = document.createElement("div"); //<div class="categorias__produto">
    div.classList.add("categorias__produto");
    const contenido =   
    `
        <div class="categorias__contenedor__foto">
            <div class="categoria__iconos__editar">
                <i class="fa-solid fa-trash tacho"></i>
                <i class="fa-sharp fa-solid fa-pen"></i>
            </div>
            <img class="foto__producto" src=${imagen} alt="taza star-war">
        </div>
        <span class="categorias_producto__nombre">${nombre}</span>
        <span class="categorias_producto__precio">$ ${precio}</span>
        <span class="producto__id">ID: ${id}</span>

    `
    div.innerHTML = contenido;
    return div;
};

const divContenedorHTML = document.querySelector("[data-todos]");

productosServices.listaProductos().then((productos)=>{ //la promesa ahora es data osea el JSON
    productos.forEach((producto) => {
        const nuevoDiv = crearDiv(producto.nombre, producto.precio, producto.imagen, producto.id)
        divContenedorHTML.appendChild(nuevoDiv);
    });
}).catch((error) => alert("Ocurrio un error"));