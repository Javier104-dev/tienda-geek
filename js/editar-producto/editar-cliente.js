import { productosServices } from "../productos.service.js";

const obtenerInformacion = () =>{
    const url = new URL(window.location);
    const id = url.searchParams.get("id");//con get buscamos en searchParams y obtenemos el id

    if (id === null){
        console.log("crear pagian error")
    }

    const imagen = document.querySelector("[data-imagen]");
    const categoria = document.querySelector("[data-categoria]");
    const nombre = document.querySelector("[data-nombre]");
    const precio = document.querySelector("[data-precio]");
    const descripcion = document.querySelector("[data-descripcion]");

    productosServices.detallesProducto(id).then((perfil) =>{
        categoria.value = perfil.nombre;
        nombre.value = perfil.nombre;
        precio.value = perfil.nombre;
        descripcion.value = perfil.nombre;
    });
};

obtenerInformacion();