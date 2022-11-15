import { productosServices } from "../productos.service.js";
import { div } from "./index.js";

const botonBusqueda = document.querySelector("[data-barra-busqueda]");
const contenedor = document.querySelector("[data-resultado-busqueda]");


botonBusqueda.addEventListener("click", ()=>{

    const input = document.querySelector(".cabecera__buscador").value;
    const inputMinusculas = input.toLowerCase();
    contenedor.innerHTML = "";

    funcionOcultarVer("[data-productos]", "none");
    funcionOcultarVer(".resultado_busqueda_titulo", "block");
    
    productosServices.productosIndex().then((productos) => {
        productos.forEach(producto => {
            const nombre = producto.nombre.toLowerCase()

            if(!inputMinusculas.trim()){ // aqui detectamos que usen campos vacios o con espacios

                tituloResultadosVacios("Debes escribir alguna palabra para realizar la busqueda");
            
            }else if(nombre.includes(inputMinusculas.trim())){ //con trim() le quitamos los espacios al comienzo, tambien podemos hacer que funcione la busqueda si ponen espacios al comienzo
                tituloResultados(input);
                const nuevoDiv = div(producto.imagen, producto.nombre, producto.precio, producto.id)
                contenedor.appendChild(nuevoDiv)
            }
        });
    })
})

const funcionOcultarVer = (divClass, tipoDisplay) => {
    document.querySelector(divClass).style.display = tipoDisplay;
};

const tituloResultados = (texto) => {
    document.querySelector(".resultado_busqueda_titulo").textContent = `Resultados de busqueda para "${texto}"`
}

const tituloResultadosVacios = (texto) => {
    document.querySelector(".resultado_busqueda_titulo").textContent = texto;
}

// ENCONTRAR ALGO EN EL JSON, AUNQUE SEA SU LETRA

// productosServices.productosIndex().then((productos)=>{
//     productos.forEach(({imagen, nombre, precio, id}) => {
        
//         const nuevoDiv = div(imagen, nombre, precio, id)
//         contenedorWars.appendChild(nuevoDiv)
//     });
// })


// const texto = "animal";

// const valor = "i"

// if(texto.includes(valor)){

//     let encontrado = valor

//     console.log(encontrado)
// }

// productosServices.productosIndex().then((productos)=>{
//     productos.forEach((producto) => {
//         if(producto.nombre.includes("XY")){
//             console.log("precio")
//         }
//     });
// })