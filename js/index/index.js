import { productosServices } from "../productos.service.js";


export  const div = (imagen, nombre, precio, id) =>{

    const crearDiv = document.createElement("div");
    crearDiv.classList.add("categorias__produto");

    const contenidoDiv = 
    `
    <img class="foto__producto" src="${imagen}" alt="taza star-war">
    <span class="categorias_producto__nombre">${nombre}</span>
    <span class="categorias_producto__precio">$ ${precio}</span>
    <span><a class="categorias_producto__ver" href="ver-producto.html?id=${id}">Ver Producto</a></span>
    `
    crearDiv.innerHTML = contenidoDiv;
    return crearDiv;
};

const contenedorWars = document.querySelector("[data-star-wars]");
const contenedorConsola = document.querySelector("[data-consola]");
const contenedorDiversos = document.querySelector("[data-diversos]");


productosServices.productosIndex().then((productos)=>{
     productos.forEach((producto) => {
         if(producto.categoria === "starwars"){
         const nuevoDiv = div(producto.imagen, producto.nombre, producto.precio, producto.id)
         contenedorWars.appendChild(nuevoDiv)

         }else if(producto.categoria === "consola"){
             const nuevoDiv = div(producto.imagen, producto.nombre, producto.precio, producto.id)
             contenedorConsola.appendChild(nuevoDiv)

        }else if(producto.categoria === "diversos"){
             const nuevoDiv = div(producto.imagen, producto.nombre, producto.precio, producto.id)
             contenedorDiversos.appendChild(nuevoDiv)
        }
    });
});