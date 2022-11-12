import { productosServices } from "../productos.service.js";

const div = (imagen, nombre, precio, id) =>{

    const crearDiv = document.createElement("div");
    crearDiv.classList.add("categorias__produto");

    const contenidoDiv = 
    `
    <img class="foto__producto" src="assets/Imagenes/${imagen}" alt="taza star-war">
    <span class="categorias_producto__nombre">${nombre}</span>
    <span class="categorias_producto__precio">$ ${precio}</span>
    <span><a class="categorias_producto__ver" href="ver-producto.html?id=${id}">Ver Producto</a></span>
    `
    crearDiv.innerHTML = contenidoDiv;
    return crearDiv;
}

const contenedorIndex = document.querySelector("[data-productos-index]");

productosServices.productosIndex().then((productos)=>{
    productos.forEach(({imagen, nombre, precio, id}) => {
        const nuevoDiv = div(imagen, nombre, precio, id)
        contenedorIndex.appendChild(nuevoDiv)
    });
})