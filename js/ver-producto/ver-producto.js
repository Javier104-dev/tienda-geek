import { productosServices } from "../productos.service.js";

const crearDivProducto = (imagen, nombre, precio, descripcion) => {
    const div = document.createElement("div");
    div.classList.add("producto__contenido");

    const contenidoDiv =
    `
        <img class="producto__foto" src="${imagen}" alt="foto producto">
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

const exponerProducto = async () =>{
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if (id === null){
        console.log("crear pagian error")
    };

    try{
        const producto = await productosServices.verProducto(id);
        if(producto.imagen && producto.nombre && producto.precio && producto.descripcion){
            const nuevoDiv = crearDivProducto(producto.imagen, producto.nombre, producto.precio, producto.descripcion);
            contenedorSection.appendChild(nuevoDiv);
        }else{
            throw new Error();
        }

    }catch(error) {alert("Ocurrio un error")};
};

exponerProducto();