import { productosServices } from "../productos.service.js";

const crearDivProducto = (imagen, nombre, precio, descripcion) => {
    const div = document.createElement("div");
    div.classList.add("producto__contenido");

    const contenidoDiv =
    `
        <img class="producto__foto" src="assets/Imagenes/${imagen}" alt="foto producto">
        <div class="producto__contenido__detalles">
            <h1 class="producto__contenido__titulo">${nombre}</h1>
            <span class="producto__contenido__precio">$ ${precio}</span>
            <p class="producto__contenido__descripcion">${descripcion}</p>
        </div>
    `
    div.innerHTML = contenidoDiv;
    return div;
}

const contenedorSection = document.querySelector("[data-producto-section]");

const exponerProducto = () =>{
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    console.log(id)

    productosServices.verProducto(id).then((producto)=>{

        const url = new URL(window.location);
        const id = url.searchParams.get("id");//con get buscamos en searchParams y obtenemos el id
    
        const nuevoDiv = crearDivProducto(producto.imagen, producto.nombre, producto.precio, producto.descripcion);
        contenedorSection.appendChild(nuevoDiv);
        
    }).catch((error) => alert("Ocurrio un error"));
    
}

exponerProducto();