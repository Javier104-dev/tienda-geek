import { productosServices } from "../productos.service.js";


const crearDiv = (nombre, precio, imagen, id) =>{
    const div = document.createElement("div"); //<div class="categorias__produto">
    div.classList.add("categorias__produto");
    const contenido =   
    `
        <div class="categorias__contenedor__foto">
            <div class="categoria__iconos__editar">
                <i class="fa-solid fa-trash tacho" data-borrar id="${id}"></i>
                <a href="../editar-producto.html?id=${id}"><i class="fa-sharp fa-solid fa-pen editar" data-editar></i></a>
            </div>
            <img class="foto__producto" src="${imagen}" alt="taza star-war">
        </div>
        <span class="categorias__producto__nombre">${nombre}</span>
        <span class="categorias__producto__precio">$ ${precio}</span>
        <span class="producto__id">ID: ${id}</span>

    `
    div.innerHTML = contenido;
    const botonBorrar = div.querySelector("[data-borrar]");
    botonBorrar.addEventListener("click", ()=>{
        const id = botonBorrar.id;
        productosServices.eliminarProducto(id).then(() => {
            
        }).catch(error => alert("ocurrio error"))
    })
    return div;
};

const divContenedorHTML = document.querySelector("[data-todos]");

productosServices.listaProductos().then((productos)=>{ //la promesa ahora es data osea el JSON
    productos.forEach(({nombre, precio, imagen, id}) => {//(producto) desectruturamos todo y ponemos {nombre, precio, imagen, id} cambiamos abajo producto.nombre, producto.precio, producto.imagen, producto.id
        const nuevoDiv = crearDiv(nombre, precio, imagen, id)
        divContenedorHTML.appendChild(nuevoDiv);
    });
}).catch((error) => alert("Ocurrio un error"));