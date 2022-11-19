import { productosServices } from "./productos.service.js";

const boton = document.querySelector("[data-boton-busqueda]");

boton.addEventListener("click",()=>{
    redireccion()
})

function redireccion(){
    const $input = document.querySelector("[data-input-busqueda]").value;

    // if(!$input){ //asi evitamos que el codigo se ejecute si no tenemos nada en el input
    //     return
    // }else{
    //     window.location.href = `./resultados-busqueda.html?resultado=${$input}`;
    // }
    window.location.href = `./resultados-busqueda.html?resultado=${$input}`;
}

const $urlPagina = window.location.search
const inputParametro = new URLSearchParams($urlPagina);
const prametro = inputParametro.get("resultado")

//inputParametro.set("resultado", "nuevafuente")
//inputParametro.toString() = resultado=nuevafuente, esto nos da eso, podemos usar metodos del URLSearchParams y luego agregarlos manuealmente

const contenedor = document.querySelector("[data-resultado-busqueda]");

const div = (imagen, nombre, precio, id) =>{

    const crearDiv = document.createElement("div");
    crearDiv.classList.add("categorias__produto");

    const contenidoDiv = 
    `
    <img class="foto__producto" src="${imagen}" alt="taza star-war">
    <span class="categorias__producto__nombre">${nombre}</span>
    <span class="categorias__producto__precio">$ ${precio}</span>
    <span><a class="categorias__producto__ver" href="ver-producto.html?id=${id}">Ver Producto</a></span>
    `
    crearDiv.innerHTML = contenidoDiv;
    return crearDiv;
};

function resultados (input){
    const inputMinusculas = input.toLowerCase();
    contenedor.innerHTML = "";

    
    productosServices.listaProductos().then((productos) => {
        productos.forEach(producto => {
            const nombre = producto.nombre.toLowerCase()

            if(!inputMinusculas.trim()){ // aqui detectamos que usen campos vacios o con espacios

                tituloResultados("Debes escribir alguna palabra para realizar la busqueda");
            
            }else if(nombre.includes(inputMinusculas.trim())){ //con trim() le quitamos los espacios al comienzo, tambien podemos hacer que funcione la busqueda si ponen espacios al comienzo
                tituloResultados(`Resultados de busqueda para "${input}"`);
                const nuevoDiv = div(producto.imagen, producto.nombre, producto.precio, producto.id)
                contenedor.appendChild(nuevoDiv)

            }else if(!contenedor.innerHTML){
                tituloResultados(`Sin resultados para "${input}"`)
            }
        });
    }).catch((error) => alert("Ocurrio un error"));
};

resultados (prametro)

const tituloResultados = (texto) => {
    document.querySelector(".section__busqueda__titulo").textContent = texto;
}