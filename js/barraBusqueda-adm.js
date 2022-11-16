import { productosServices } from "./productos.service.js";

const botonBusqueda = document.querySelector("[data-buscador-boton]");
const contenedor = document.querySelector("[data-resultado-busqueda]");

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

botonBusqueda.addEventListener("click",()=>{
    const input = document.querySelector(".cabecera__buscador").value;
    const inputMinusculas = input.toLowerCase();
    contenedor.innerHTML = "";

    funcionOcultarVer(".section__busqueda", "block");
    funcionOcultarVer("[data-productos-adm]", "none");

    productosServices.listaProductos().then((productos)=>{ 
        productos.forEach((producto) => {
            const nombre = producto.nombre.toLowerCase();

            if(!inputMinusculas.trim()){ // aqui detectamos que usen campos vacios o con espacios

                tituloResultadosVacios("Debes escribir alguna palabra para realizar la busqueda");
            
            }else if(nombre.includes(inputMinusculas.trim())){ //con trim() le quitamos los espacios al comienzo, tambien podemos hacer que funcione la busqueda si ponen espacios al comienzo
                tituloResultados(input);
                const nuevoDiv = crearDiv(producto.nombre, producto.precio, producto.imagen, producto.id)
                contenedor.appendChild(nuevoDiv)
            }
        });
    }).catch((error) => alert("Ocurrio un error"));
});

const funcionOcultarVer = (divClass, tipoDisplay) => {
    document.querySelector(divClass).style.display = tipoDisplay;
};

const tituloResultados = (texto) => {
    document.querySelector(".section__busqueda__titulo").textContent = `Resultados de busqueda para "${texto}"`
};

const tituloResultadosVacios = (texto) => {
    document.querySelector(".section__busqueda__titulo").textContent = texto;
};